---
title: A chantastic guide to advanced command line
---

[1password Shell Plugins to securely authenticate any CLI](https://developer.1password.com/docs/cli/shell-plugins/?utm_medium=organic&utm_source=oph&utm_campaign=macos)

<iframe width="560" height="315" src="https://www.youtube.com/embed/MR1N7p2fKAo?si=L-qo4lfyDYYC1BfD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Easy local dev concepts

- In `.env` use 1Password `Secret Reference`
  - Available via the field dropdown
- This requires use of the `op` cli _AND_ authentication
  - Not a big deal for local dev
- Run your script thru the `op` cli
  - `op run --env-file="./.env" -- pnpm run build`
  - This version specifies the `.env` file location

## More complicated setup for remote work

- Same instructions as above with te `Secret Reference`
- Isolate your keys into a vault specific to project
- Visit [1password.com](https://my.1password.com/developer-tools/directory)
  - Select Infrastructure Secrets Management provider (or Other)
  - Select `Service Account`
    - Provide it a name
    - Grant access to your isolated vault
    - Capture your token
    - `export=OP_SERVICE_ACCOUNT_TOKEN=` and use your Service Account Token

## Misc
- tldr.sh
- rcm (thoughtbot dotfile management)
  - [alternatives](https://www.jakewiesler.com/blog/managing-dotfiles)

