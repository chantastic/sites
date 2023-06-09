---
title: "Mac Audio in OBS"
dateCreated: 2022-02-05
---

There's no great way to get system audio into broadcast and recording apps like OBS.

This sucks.

There are a couple paid apps that help.

I've used the (advanced) [Loopback by Rogue Amoeba](https://rogueamoeba.com/loopback/). It's pretty intense and requires System Security Policy level modifications to work on new Macs.

I've also used hardware solutions that include routing — Elgato Wave Link, and mixers like [Sound Devices Mixpre](https://amzn.to/3B1w79x).

I wanted the simplest option I could find. And if you don't need to mix multiple sources together, [SWB Audio App](https://shinywhitebox.com/swb-audio-app) seems to be it.

I hate that a utility like this is a subscription but I guess the $12/yr pricing is appropriate if you make any amount of money on content. Definitely market priced.

## Steps

- [SWB Audio App](https://shinywhitebox.com/swb-audio-app)
  - This requires a paid subscription ($12/yr at time of writing) and account creation
- Once installed, the whole thing is pretty easy
  - Click the toolbar icon for SWB Audio App
  - Turn on Preview
    - This inserts SWB Audio App between system output and the active default output
      - This allows it to be introspected by other apps and devices
    - [Demo video showing how SWB Audio App](https://youtu.be/SH0PAptn5b4)
  - Add SWB Audio Capture as a source in OBS or Discord

## Notes

SWB Audio App is not smart about audio switching in preview mode.

If you're switching between inputs, the easiest thing is to kill the preview before switching (built-in speakers to headphones, etc). But even then it got confused and I had to jump into System Preferences.

## Taking it further

- Using it with QuickTime (OS-standard software)
- Using it with OBS
- Using it with Discord

## Possible content ideas

- Audio routing on the Mac
  - System preferences
  - Audio Midi Setup

Hit me up if you want to learn any more about this stuff