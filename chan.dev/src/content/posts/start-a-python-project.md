---
title: How to Start a Python Project
description: A step-by-step guide on how to create a Python virtual environment using the venv module
tags: [python]
publishDate: 2024-09-03
---

These steps will help you set up and manage a Python environment on macOS, using Homebrew.

_Watch how I used Cursor to learn about python environments:_

<div data-responsive-youtube-container>

<iframe width="560" height="315" src="https://www.youtube.com/embed/74c2tAKXJ9M?si=b5JgQpl8rcPuef9j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

</div>

## TLDR

```bash
# Install Python3 with Homebrow
brew install python3

# Create a virtual environment
python3 -m venv my-venv

# Activate a virtual environment
source my-venv/bin/activate

# Install packages packages
pip install <package-name>

# Generate a requirements.txt file
pip freeze > requirements.txt

# Deactivate an active virtual environment
deactivate
```

## Install Python3

If not installed, use your system package manager to install Python3.

Instructions here use [Homebrew](https://brew.sh/) for macOS.

```bash
brew install python3
```

## Create a Virtual Environment with `venv`

```bash
python3 -m venv my-venv
```

_Use any directory name you like._

## Activate a Virtual Environment with `source`

```bash
source my-venv/bin/activate
```

## Install Packages with `pip`

```bash
pip install <package-name>
```

Example: `pip install awscli`

## Generate a `requirements.txt` file with `pip freeze`

```bash
pip freeze > requirements.txt
```

The resulting file will look like this:

```python title="requirements.txt"
awscli==1.34.10
botocore==1.35.10
colorama==0.4.6
docutils==0.16
jmespath==1.0.1
pyasn1==0.6.0
python-dateutil==2.9.0.post0
PyYAML==6.0.2
rsa==4.7.2
s3transfer==0.10.2
six==1.16.0
urllib3==2.2.2
```

## Deactivate the Virtual Environment

```bash
deactivate
```

## Some prefer `virtualenv` over `venv`

While Python3 comes with `venv` by default, some use [virtualenv](https://virtualenv.pypa.io/en/latest/) for "additional features" — though I can't speak directly to the differences.

## Additional reading on virtual environments in Homebrew

1. https://nicolaiarocci.com/when-homebrew-breaks-your-python-virtual-environment/
2. https://stackoverflow.com/questions/25701133/how-to-tell-homebrew-to-install-inside-virtualenv
3. https://formulae.brew.sh/formula/virtualenv
4. https://github.com/orgs/Homebrew/discussions/4419
5. https://discuss.python.org/t/on-macos-14-pip-install-throws-error-externally-managed-environment/50352
6. https://gist.github.com/pandafulmanda/730a9355e088a9970b18275cb9eadef3?permalink_comment_id=2809269
7. https://courses.cs.washington.edu/courses/cse446/18wi/sections/section1/virtualenv_handout.pdf
8. https://www.reddit.com/r/learnpython/comments/xf1pv6/brew_python_and_libraries_installation_blues/
