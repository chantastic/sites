---
title: macOS
date: 2023-09-27
---

This doc is a collection of random macOS stuff.

## Force OS install

I have a weird setup on my personal mac. I use an external drive as the boot drive. The drive was set up without permissions and now I don't know how to add them. This breaks macOS updates.

Hoever, I've learned how to force them:

```zsh
sudo softwareupdate -i -a -R
# -i Install
# -a All appropriate updates
# -R Automatically restart (or shut down) if required to complete installation)
```

For future reference, I think that resolving the drive permissions will make this irrelevant.

Community reference: https://discussions.apple.com/thread/253635826?answerId=256807178022#256807178022
