---
title: 'Test USB-C Cable Power on macOS'
date: 2026-08-15
publishDate: 2026-08-15
description: 'Test USB-C cable power negotiation on macOS with system_profiler, inspect voltage and current with ioreg, then verify sustained draw with FFmpeg.'
tags: [mac, cli, gear]
---

_This post was written by AI after helping me test a pile of USB-C cables._

USB-C cables all look the same.
They absolutely do not work the same.

I had a pile of mystery cables, a 140 W charger with a power draw display, and a MacBook Pro that can consume about 91 W.

Of the seven cables I tested, five negotiated 60 W.  
Two negotiated 100 W and pulled 90 W from the charger under load.

Here's how I tested them.

## Check power negotiation

Connect the charger directly to your Mac with the cable you want to test.
Wait a few seconds, then run:

```sh
system_profiler SPPowerDataType |
  grep -A 7 'AC Charger Information:'
```

You'll get something like:

```text
AC Charger Information:

  Connected: Yes
  ID: 0x0000
  Wattage (W): 100
  Family: 0xe000400a
  Charging: No
```

`Wattage (W)` is the important line.

If you only want the number:

```sh
system_profiler SPPowerDataType |
  awk '/Wattage \(W\):/ { print $3 " W"; exit }'
```

That prints:

```text
100 W
```

This is the negotiated ceiling macOS reports for the connection.
It is not live power consumption.

## Inspect voltage and current

For the messier details:

```sh
ioreg -r -c AppleSmartBattery -w0 |
  grep -m1 '"AdapterDetails"'
```

A 100 W cable in my test reported:

```text
"AdapterVoltage"=20000,"Watts"=100,"Current"=5000
```

The voltage and current values are millivolts and milliamps.
So that's 20 V × 5 A — 100 W.

A 60 W cable reported:

```text
"AdapterVoltage"=20000,"Watts"=60,"Current"=3000
```

20 V × 3 A — 60 W.

That 3 A limit usually means the cable or another part of the connection does not support 5 A power delivery.
A properly identified 5 A cable is required for more than 60 W at 20 V.

## Test sustained power draw

Negotiation tells you what the connection allows.
It does not prove the cable can sustain it.

My charger has a wattage display, so I used FFmpeg to keep the Mac's CPU busy and watched the number on the charger.
An external USB-C power meter works too.

Install FFmpeg if you don't have it:

```sh
brew install ffmpeg
```

Then run this bounded, two-minute load:

```zsh
pids=()

cleanup() {
  trap - EXIT INT TERM
  kill "${pids[@]}" 2>/dev/null
  wait "${pids[@]}" 2>/dev/null
}

trap cleanup EXIT INT TERM

for n in 1 2; do
  ffmpeg -hide_banner -loglevel error \
    -f lavfi \
    -i 'testsrc2=size=3840x2160:rate=60' \
    -vf 'noise=alls=35:allf=t+u' \
    -c:v libx265 \
    -preset medium \
    -f null - \
    >/dev/null 2>&1 &
  pids+=($!)
done

echo 'Load started. Watch the charger display.'
sleep 120
```

The two software encodes used roughly 12–13 of my Mac's 14 CPU cores.
My known-good cables brought the charger display to 90 W.

Press <kbd>Control</kbd>+<kbd>C</kbd> to stop early.
The cleanup function kills both FFmpeg processes either way.

Keep the Mac ventilated.
macOS manages its own thermal limits, but don't make that job harder.

## What this test does not prove

This is a useful sorting test.
It is not cable certification.

- `system_profiler` reports the negotiated ceiling, not live draw.
- The result covers the entire charger → cable → Mac path. A dock, hub, charger, port, or cable can set the limit.
- A 100 W result proves this setup negotiated 100 W. It does not prove the cable supports 140 W.
- Your Mac cannot test beyond its own input limit. Mine can consume about 91 W, even though the charger can provide 140 W.
- A 140 W USB PD EPR connection uses a higher-voltage profile. You need a compatible charger, cable, and load to verify it.
- Negotiation does not prove sustained delivery. That's why I added the load test and watched the charger display.
- Battery level, charging optimization, temperature, display brightness, and workload all affect live consumption.
- This says nothing about data speed. A cable can charge at 100 W and still transfer data at USB 2.0 speeds.
- `ioreg` is an undocumented macOS interface. Its output can change. Prefer `system_profiler` for the durable check.

For a real 140 W certification test, use a USB-C PD meter and an EPR-compatible programmable load.

For sorting the cable drawer with a Mac?

60 W or 100 W is enough to make some decisions.
