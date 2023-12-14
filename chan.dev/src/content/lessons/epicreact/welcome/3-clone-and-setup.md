---
title: Clone and set up
date: 2023-06-19
---

> setting: green screen

Let's get this first workshop set up together.

- Navigate to the workshop you'd like to take.
- Open the GitHub repository
- Click the dropdown
  - Check the appropriate delivery options (HTTPS, SSH, or GitHub CLI, or open with GitHub Desktop)
  - I'll use HTTPS because you can do this even without a GitHub account.
- (With that url copied), let's create the directory we'd like to keep these workshops in
  - Open a terminal application
  - Navigate to your prefered code directory
    - i'll use code
    - and create a new directory `epicreact` to contain all my epic react projects
    - then `cd` into that new directory
- (with our new directory), clone the project, the url we copied from GitHub
  - `git clone git@github.com:kentcdodds/react-fundamentals.git`
- `cd` into the cloned directory (`react-fundamentals` in this case)
- and run the setup script: `npm run setup --silet`
  - I'm using the `--silent` flag for the purposes of this video to supress anything that isn't important to us
- So, what's happening?
  - First, it checks all of the system dependencies (`node`, `npm`, and `git` — listed in the readme)
  - Second, it istalls all of the workshop dependencies
    - This could take a couple minutes. This is a great time to hydrate, grab a snack, and come back after a couple minutes.
  - Finally, all the tests are run.
    - This is a pretty good sign that you are ready to rock and roll!
- At this point you'll be asked for your email address
  - This will time out. So if you walked away, it may have cancelled automatically
  - It's not required. So you can hit `ctrl-c` to safely cancel the script at this point.
  - And if you decide to join the mailing list afterword, you can copy-paste the command to fill in your email
  - I'll run that now, with my email address `hi@chan.dev`
- With that all working, we can now open the project in an editor.
  - I use VS Code and recommend it for these workshops (and you'll see why in a second)
  - I have a fancy shorte code `code` to open this project.
    - If you don't, you can run `open .` to show this directory in finder, then drag it into your editor of choic.
- If you use VS Code, you'll see this .vscode extensions file. And you should see a UI prompt asking if you want to install them.
  - They aren't required but will be helpful in these courses.
- You'll also see a `vscode` settings file. These are the settings used for all of these videos. So, if you want things to look on your screen like they look on mine, you can copy these into your own VS Code settings.

## Debugging

- Go thru the setup
- If you get an error, hopefully it's instructive enough to help you
- If not, restarting and running thru the process again often helps clear things up
- If none of that works, open an issue on the repo and someone will help you
-
