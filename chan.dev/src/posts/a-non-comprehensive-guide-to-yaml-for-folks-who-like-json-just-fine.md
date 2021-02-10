---
title: A Non-Comprehensive Guide to YAML for Folks Who Like JSON Just Fine
date: 2021-02-10
layout: layouts/post.njk
---

> YAML is a human friendly data serialization standard for all programming languages.
> — https://yaml.org

I don't know precisely which humans YAML is friendly to but I'm not one of them.

And it looks like the people who run in my circles are also exempt.

{% tweet 'https://twitter.com/chantastic/status/1359601176434544640?s=20' %}

## Mapping to JSON

Between Eleventy, GitHub Actions, and recent forey into serverless, I'm using a lot more YAML.

This is mapping for my JSON-acquainted brain.

- [Comments](#comments)
- [Array of strings](#array-of-strings)
- [Array of objects — one value](#array-of-objects-—-single-value)
- [Array of objects — many values](#array-of-objects-—-many-values)
- [Object of keyed arrays of strings](#object-of-keyed-arrays-of-strings)
- [Array of array of mixed simple types](#array-of-array-of-mixed-simple-types)
- [Nodes (variables)](#nodes)
- [Sample GitHub Action](#sample-github-action)
- [Resources and further reading](#resources-and-further-reading)

## Comments

**YAML**

```yaml
# you can put these p much anywhere
```

**JSON**

JSON doesn't support comments.

## Array of strings

_YAML: Sequence of Scalars_

**YAML**

```yaml
- Evermore
- Folklore
- Lover
```

**JSON**

```json
["Evermore", "Folklore", "Love"]
```

## Array of objects — single value

_YAML: Mapping Scalars to Scalars_

```yaml
- Evermore: 2020
- Folklore: 2020
- Lover: 2019
```

```json
[
  {
    "Evermore": 2020
  },
  {
    "Folklore": 2020
  },
  {
    "Lover": 2019
  }
]
```

## Array of objects — many values

_YAML: Sequence of Mappings_

**YAML**

```yaml
- name: Taylor Swift
  album_count: 9
  label: Republic
- name: The National
  album_count: 8
  label: 4AD
```

**JSON**

```json
[
  {
    "name": "Taylor Swift",
    "album_count": 9,
    "label": "Republic"
  },
  {
    "name": "The National",
    "album_count": 8,
    "label": "4AD"
  }
]
```

This syntax confused the shit out of me.  
This code is auto-formatted by prettier putting the dash and the first property on the same line.

The docs show the dash and first property on different lines which is much more legible.

```
-
  name: Taylor Swift
  album_count: 9
  label: Republic
-
  name: The National
  album_count: 8
  label: 4AD
```

## Object of keyed arrays of strings

_YAML: Mapping Scalars to Sequences_

```yaml
taylor swift:
  - Evermore
  - Folklore
  - Lover
the national:
  - I Am Easy to Find
  - Sleep Well Beast
  - Trouble Will Find Me
```

```json
{
  "taylor swift": ["Evermore", "Folklore", "Lover"],
  "the national": [
    "I Am Easy to Find",
    "Sleep Well Beast",
    "Trouble Will Find Me"
  ]
}
```

## Array of array of mixed simple types

_YAML: Sequence of Sequences_

**YAML**

```yaml
- [name, album_count, label]
- [Taylor Swift, 9, Republic]
- [The National, 8, 4AD]
```

**JSON**

```json
[
  ["name", "album_count", "label"],
  ["Taylor Swift", 9, "Republic"],
  ["The National", 8, "4AD"]
]
```

##

_YAML: Mapping of Mappings_

**YAML**

```yaml
Taylor Swift: { album_count: 9, label: Republic }
The National: { album_count: 8, label: 4AD }
```

**JSON**

```json
{
  "Taylor Swift": {
    "album_count": 9,
    "label": "Republic"
  },
  "The National": {
    "album_count": 8,
    "label": "4AD"
  }
}
```

## Nodes

**YAML**

```yaml
Folklore:
  # Following node labeled SS
  - &TS Taylor Swift
  - &AD Aaron Dressner
  - Jack Antonoff
Lover:
  - *TS # Subsequent occurrence
I Am Easy to Find:
  - *AD
```

**JSON**

No JSON equivalent.  
But this is the output from the above YAML.

```json
{
  "Folklore": ["Taylor Swift", "Aaron Dressner", "Jack Antonoff"],
  "Lover": ["Taylor Swift"],
  "I Am Easy to Find": ["Aaron Dressner"]
}
```

## Sample GitHub Action

**YAML**

```yaml
name: Netlify Rebuild
on:
  schedule:
    - cron: "0 21 * * MON-FRI"
jobs:
  build:
    name: Netlify Rebuild
    runs-on: ubuntu-latest
    steps:
      - name: Curl request
        run: curl -X POST -d {} https://api.netlify.com/build_hooks/601321b7879709a8b8874175
```

**JSON**

```json
{
  "name": "Netlify Rebuild",
  "on": {
    "schedule": [
      {
        "cron": "0 21 * * MON-FRI"
      }
    ]
  },
  "jobs": {
    "build": {
      "name": "Netlify Rebuild",
      "runs-on": "ubuntu-latest",
      "steps": [
        {
          "name": "Curl request",
          "run": "curl -X POST -d {} https://api.netlify.com/build_hooks/601321b7879709a8b8874175"
        }
      ]
    }
  }
}
```

## Resources and further reading

- [Official YAML 1.2 Documentation at yaml.org](https://yaml.org/spec/1.2/spec.html#Preview)
- YAML to JSON web converters
  - https://jsonformatter.org/yaml-to-json
  - https://onlineyamltools.com/convert-yaml-to-json

## Keep in touch

<br />

<script async data-uid="25d3dad1c6" src="https://chantastic.ck.page/25d3dad1c6/index.js"></script>
