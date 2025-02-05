---
title: A Non-Comprehensive Guide to YAML for Folks Who Like JSON Just Fine
publishDate: 2021-02-10
description: 'Master YAML with this beginner-friendly guide for JSON lovers. Learn key differences, structures, and examples for GitHub Actions, and serverless configurations'
tags:
  - yaml
---

> YAML is a human friendly data serialization standard for all programming languages.
> — https://yaml.org

I don't know precisely which humans YAML is friendly to but I'm not one of them.

And it looks like the people who run in my circles are also excluded.

{% tweet 'https://twitter.com/chantastic/status/1359601176434544640?s=20' %}

## Mapping to JSON

Between Eleventy, GitHub Actions, and a recent foray into serverless, I'm using a more YAML. And I don't understand it.

This is mapping for my JSON-acquainted brain.

## Outline

## Comments

**YAML**

```yaml
# you can put these p much anywhere
```

**JSON**

JSON doesn't support comments.

## Array of strings

> Sequence of Scalars

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

> Mapping Scalars to Scalars

**YAML**

```yaml
- Evermore: 2020
- Folklore: 2020
- Lover: 2019
```

**JSON**

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

> Sequence of Mappings

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

YAML docs show the dash and first property on different lines which is much more legible.

```yaml
- name: Taylor Swift
  album_count: 9
  label: Republic
- name: The National
  album_count: 8
  label: 4AD
```

## Object of keyed arrays of strings

> Mapping Scalars to Sequences

**YAML**

```yaml
Taylor Swift:
  - Evermore
  - Folklore
  - Lover
The National:
  - I Am Easy to Find
  - Sleep Well Beast
  - Trouble Will Find Me
```

**JSON**

```json
{
	"Taylor Swift": ["Evermore", "Folklore", "Lover"],
	"The National": [
		"I Am Easy to Find",
		"Sleep Well Beast",
		"Trouble Will Find Me"
	]
}
```

## Object of keyed objects with mixed values

> Mapping of Mappings

**YAML**

```yaml
Taylor Swift:
  album_count: 9
  label: Republic
The National:
  album_count: 8
  label: 4AD
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

## Array of arrays with mixed values

> Sequence of Sequences

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

## Nodes

**YAML**

```yaml
Folklore:
  # Following node labeled TS and AD
  - &TS Taylor Swift
  - &AD Aaron Dressner
  - Jack Antonoff
Lover:
  - *TS # Subsequent occurrence
I Am Easy to Find:
  - *AD
```

**JSON**

_No JSON equivalent._  
_But this is the output from the above YAML._

```json
{
	"Folklore": [
		"Taylor Swift",
		"Aaron Dressner",
		"Jack Antonoff"
	],
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
    - cron: '0 21 * * MON-FRI'
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

## Takeaways

### Complex types are inferred

The structures of complex types are hidden in YAML.  
They get inferred by the structure of included data.

Keep a look out for `-` and `:` which indicate the containing structure.

### Dash `-`

If you see a dash `-`, it means you're describing a single array item.  
This means you're in an array.

### Colon `:`

If you see a color `:` separating two values, it means your describing a key-value pair.
This means you're in an object.

### In the wild

Since YAML is used often for configuration, it's likely that your root type is `object`.  
At least that's the case for Markdown Frontmatter, GitHub Actions, and CloudFormation templates.

### TODO

Sections I'd like to add:

- [ ] Multi-line strings
  - Block scalar
    - [ ] `>` [folding style](https://yaml.org/spec/1.2-old/spec.html#style/block/folded)
    - [ ] `|` [literal style](https://yaml.org/spec/1.2-old/spec.html#style/block/literal)
  - Block scalar, [block chomping indicators](https://yaml.org/spec/1.2-old/spec.html#chomping//)
    - `-` strip
    - `+` keep

https://stackoverflow.com/a/21699210

## Resources and further reading

- [Official YAML 1.2 Documentation at yaml.org](https://yaml.org/spec/1.2/spec.html#Preview)
- YAML to JSON web converters
  - https://jsonformatter.org/yaml-to-json
  - https://onlineyamltools.com/convert-yaml-to-json
  - https://stackoverflow.com/a/21699210/754775

## Keep in touch

<br />

<script async data-uid="25d3dad1c6" src="https://chantastic.ck.page/25d3dad1c6/index.js"></script>
