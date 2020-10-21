---
layout: layouts/note.njk
---

Atem Mini Pro ISO — real-time impressions

## Products mentioned

### Video Switcher

- [Atem Mini Pro ISO][atem-mpi]

[atem-mpi]: https://amzn.to/2HsQHb9

### Audio Mixer/Preamp/Interface

- [Sound Devices MixPre-6][sound-devices-mp6]

[sound-devices-mp6]: https://amzn.to/2FLYcJR

### Camera

- [Sony a6400][sony-a6400]

[sony-a6400]: https://amzn.to/3jj79YI

### Fast Storage

- [Samsung T5 Portable SSD, 1GB][samsung-t5], 540MB/s
- [SanDisk Extreme Portable External SSD, 1GB][sandisk-epe] 550Mb/s
- [SanDisk Extreme Pro Portable External SSD, 1GB][sandisk-eppe] 1050MB/s

[samsung-t5]: https://amzn.to/3dMhlba
[sandisk-epe]: https://amzn.to/37qhqA7
[sandisk-eppe]: https://amzn.to/3kh3bS0

### Other

- [Elgato CamLink][elgato-cl]
- [Elgato Stream Deck][elgato-sd]

[elgato-cl]: https://amzn.to/35o8h8A
[elgato-sd]: https://amzn.to/3jk9B18

## 9/28

- it's smaller than i thought
- no on/off switch. this is especially irritating for a device with a locking power cable
- no manual. i like that; less trash
- the buttons are ok. they're just gigantic rubber dome buttons
  - if you have an [Elgato Stream Deck][elgato-sd], they're pretty similar
  - you end up depressing them on a side or corner. if you press all the way down in the center you get almost a "double depress" kinda feeling
- had trouble finding the Item Software Control software
  - pointed to blackmagicdesign.com/welcome — not obvious what to do
  - i'm not alone. found this reddit on it. https://www.reddit.com/r/blackmagicdesign/comments/gdcke9/where_is_atem_software_download/
- microphones, picture in picture, and key all have dedicated "on" and "off" buttons. my preference is for a toggle. so this takes getting used to
- picture in picture doesn't stick cameras
  - my preference would be for it to persist the picture-in-picture camera state as move away from and back to that camera
- My Setup (right now)
  - Switching Mode:
    - Cut Bus (default. video changes when you shift)
    - Program Preview (i like this because i can just hit the cut button to toggle between camera and code. could be a pain later)
- Picture in Picture Keyer:
  - Drop with transition: always goes away
  - Stays on with transition: stays across transitions
- Every time you reset this machine, your settings are reset to default.
  - Looks like they can be saved with `File` > `Save Startup State`

## 9/29

- Working with artwork in ATEM is significantly harder than working with it in OBS. i knew this mentally but it really is painful.
- All of my artwork was done in Figma, which doesn't support Targa transparency output
- Blackmagic provides a really neat plugin for directly exporting art to the integrated media pool. However, I haven't used photoshop in a decade. So, it's a lot of learning.
- Speaking of the media pool
  - You can only load one still at a time for hardware switching
  - To take advantage of the 20 image media pool, you need to have the ATEM software open to drag-n-drop OR create macros and run them from something like a Stream Deck

## 9/30

ATEM mini is not great for streaming zoom calls.
This is only one of the things I do but it is a thing I do.

The problem is that there are no split screen views in ATEM.

I attempted to solve this OBS, reading a zoom window, and sending that to the "external display" of the ATEM input.

The frame rate on the screen capture of the OBS windowed preview is terrible.

Don't believe me, try and watch this video for more than a minute: https://youtu.be/bYLkv9nSrhk?t=922

So, that setup does not work.

## 10/1

Atem Software Control

- `Settings > General > Audio > Analog Audio Inputs` provides Mic/Line control. This is important for capturing audio from my [MixPre-6][sound-devices-mp6]
- The Fairlight audio mixer (in ATEM Software Control) has a frame compensator which is great! 1 frame of compensation cleared matched things up with my [Sony a6400][sony-a6400]
  - i agree with the critiques. with a full blown audio editor built into this thing, there should be a headphone out
- `Settings > General > Video > Set video standard to` provides control of webcam output frame rate. Default is `24`. I prefer `30`

## 10/2

I'm looking for a record disk.

Here are drives I found that work and are recommended:

- [Samsung T5 Portable SSD, 1GB][samsung-t5], 540MB/s
- [SanDisk Extreme Portable External SSD, 1GB][sandisk-epe] 550Mb/s
- [SanDisk Extreme Pro Portable External SSD, 1GB][sandisk-eppe] 1050MB/s

Don't get the Samsung T7.

[People have had problems](https://www.youtube.com/watch?v=y2HEzaW7vb4) with the Samsung T7 and the ATEM Mini.
The write speeds are significantly worse than the drives mentioned above.

I suspect that it's because the drive is USB 3.2 — as opposed to USB3.1, Gen 2.

More words on USB3.1:

- USB3.1, Gen 1 is capable of 550Mb/s throughput — which these drives are capable of saturating
- USB3.1, Gen2 is capable of 1050Mb/s throughput — which only the [SanDisk Extreme Pro Portable 1GB][sandisk-eppe] is capable of saturating — when comparability with the ATEM Mini is required
- USB3.2 seem to have compatibility issues with the ATEM Mini (at this point)

Even more words on USB3.1 and ATEM Mini:

- You can get away with a 550MB/s drive for the ATEM Mini
- 70MB/s (Hypedeck —highest video quality) x 4 channels = 280Mb/s. Add another ~100Mb/s for the two audio channels and compressed program recording and you're still well under the 550Mb/s drive speed
- You can edit the DaVinci Resolve file right from the drive
- Check your computer on the editing side
  - My MacBook Pro (late-2017) supports USB3.1, Gen 2 speeds but my iMac (2017) only supports USB3.1, Gen 1 speeds

Because of the slower bus on my iMac, I settled for the [SanDisk Extreme Portable External SSD][sandisk-epe] with 550MB/s thruput.

## 10/7

The single usb out, single HDMI out, no headphone jack setup makes finding a good multi-purpose setup difficult.

These are some areas I've found difficulty:

- Stream directly to service
  - A headphone out would be nice to hear the Fairlight mix, to stream audio
  - If i want to compose a view in OBS and send that to the ATEM MINI, I have to take the USB out for a webcam. which means I can't also record
  - I send output thru the HDMI and send the Program to an [Elgato CamLink][elgato-cl] (or other capture device) but then i'm using additional hardware AND losing my multi-cam monitor
- Zoom. I'm basically in a position where I need to switch from hard drive to usb every time i want to use my setup for a zoom call

Bottom line, I wish this had more outputs.
I'd happily take the hit to size.
The "Pro" versions (with recording) should have these — in priority order:

- Additional USB-c (1 for recording, 1 for webcam out)
- Headphone out (post-mixer, pre-stream monitoring)
- HDMI out. I'd like for the second out to be configurable. This way I could use it to send whatever I need to another capture device (CamLink in the case above)

## 10/14

- By default, [ATEM Mini Pro ISO][atem-mpi] records only the program out, in a compressed format.
- To enable ISO recording, navigate to `Output` — on the Switcher view, and check `ISO record all inputs
  - This records ALL sources — on or off
  - Fortunately, even high quality formats appear to be compressed. So files for the "off" channels are pretty small

Before buying [ATEM Mini Pro ISO][atem-mpi], I knew that all channels would be recorded, with ISO mode enabled.
I figured the [1TB drive][sandisk-epe] would give me about 1hr of record time.
However, seeing that the off channels result in very small files, I could have gotten away with a smaller (500GB) drive.

---

As an Amazon Associate I earn from qualifying Amazon purchases.
