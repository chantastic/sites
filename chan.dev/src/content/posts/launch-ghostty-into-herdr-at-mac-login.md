---
title: Launch Ghostty into Herdr at Mac Login
publishDate: 2026-08-12
description: "Launch Ghostty directly into Herdr at macOS login using a durable LaunchAgent, GNU Stow, and a repeatable reload command stored in your dotfiles repo."
tags: [tools, mac, cli]
references:
  - https://ghostty.org/
  - https://herdr.dev/
  - https://www.gnu.org/software/stow/
  - https://keith.github.io/xcode-man-pages/launchd.plist.5.html
---

_AI-assisted post: written by Pi from the setup we applied to my dotfiles._

I want my Mac to start where I work.

Right now, that's [Herdr](https://herdr.dev/) running inside [Ghostty](https://ghostty.org/).

Adding Ghostty to Login Items gets me halfway there. Setting Herdr as Ghostty's global `command` goes too far — every new terminal would open Herdr.

A user LaunchAgent hits the seam.
It opens one Ghostty instance into Herdr when I log in.

"When I log in" is the precise version of "when my Mac starts." User LaunchAgents don't run before login. That's exactly what I want for a GUI app.

## Keep the LaunchAgent in dotfiles

My [`dotfiles`](https://github.com/chantastic/dotfiles) repo owns system bootstrap and shell wiring. So the LaunchAgent source lives here:

```text
~/dotfiles/launchd/Library/LaunchAgents/dev.herdr.ghostty.plist
```

That path mirrors where [GNU Stow](https://www.gnu.org/software/stow/) will link it in my home directory.

```xml title="~/dotfiles/launchd/Library/LaunchAgents/dev.herdr.ghostty.plist"
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN"
  "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>dev.herdr.ghostty</string>

  <key>ProgramArguments</key>
  <array>
    <string>/usr/bin/open</string>
    <string>-na</string>
    <string>Ghostty.app</string>
    <string>--args</string>
    <string>-e</string>
    <string>/bin/zsh</string>
    <string>-lc</string>
    <string>exec herdr</string>
  </array>

  <key>LimitLoadToSessionType</key>
  <string>Aqua</string>

  <key>RunAtLoad</key>
  <true/>
</dict>
</plist>
```

The command hiding in that XML is:

```sh
open -na Ghostty.app --args -e /bin/zsh -lc "exec herdr"
```

`open -na` starts a new Ghostty instance. `--args` sends everything after it to Ghostty. Ghostty's `-e` runs a command instead of the default shell.

I run Herdr through a login shell so zsh loads my Homebrew environment. That avoids baking `/opt/homebrew` into the LaunchAgent.

## Link it with Stow

From the dotfiles repo:

```sh
cd ~/dotfiles
stow launchd
```

This creates:

```text
~/Library/LaunchAgents/dev.herdr.ghostty.plist
  -> ~/dotfiles/launchd/Library/LaunchAgents/dev.herdr.ghostty.plist
```

The repo owns the file.
macOS gets it where it expects it.

## Make reloads repeatable

macOS will discover the agent on my next login. But I don't want to log out every time I edit the plist.

I keep the reload incantation in dotfiles too:

```bash title="~/dotfiles/bash/bash/configure-launchd"
#!/bin/bash
set -euo pipefail

label="dev.herdr.ghostty"
plist="${HOME}/Library/LaunchAgents/${label}.plist"
domain="gui/$(/usr/bin/id -u)"

if [[ ! -f "${plist}" ]]; then
  echo "Missing ${plist}. Run 'stow launchd' from ~/dotfiles first." >&2
  exit 1
fi

/usr/bin/plutil -lint "${plist}"
/bin/launchctl bootout "${domain}/${label}" 2>/dev/null || true
/bin/launchctl bootstrap "${domain}" "${plist}"
```

Make it executable and run it:

```sh
chmod +x ~/dotfiles/bash/bash/configure-launchd
configure-launchd
```

It validates the plist, unloads the previous definition, and bootstraps the new one. Because the job uses `RunAtLoad`, Ghostty opens into Herdr immediately.

Inspect the loaded agent with:

```sh
launchctl print "gui/$(id -u)/dev.herdr.ghostty"
```

## The complete system

The durable setup has four parts:

1. Ghostty and Herdr live in my `Brewfile`.
2. The LaunchAgent definition lives in dotfiles.
3. Stow links it into `~/Library/LaunchAgents`.
4. `configure-launchd` applies changes without a logout.

Now the ritual isn't trapped in a settings panel or my memory.

It's source code.
