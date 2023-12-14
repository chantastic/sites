---
title: Comprehending YAML
description: 'Explore the intricacies of YAML, its relation to JSON, and how to understand complex data structures and types in YAML, with clear examples and comparisons.'
publishDate: 2021-02-11
tags:
  - yaml
---

YAML is a little clever for my taste but I'm starting to get it.

Before [yesterday's post](../a-non-comprehensive-guide-to-yaml-for-folks-who-like-json-just-fine), I had no idea how it related to JSON. In that post I personalized a few examples from the YAML docs and manually converted them.

And after sleeping on my exercise, I have a better picture of what's going on.

- [YAML infers complex types](#yaml-infers-complex-types)
  - [Understanding inference](#understanding-inference)
- [YAML infers simple types](#yaml-infers-simple-types)
- [Takeaways](#takeaways)
- [YAML shorthand can be confusing](#yaml-shorthand-can-be-confusing)
  - [Takeaways](#takeaways-1)
- [YAML patterns](#yaml-patterns)
  - [Array of arrays : sequence of sequences](#array-of-arrays--sequence-of-sequences)
  - [Array of objects : sequence of mappings](#array-of-objects--sequence-of-mappings)
  - [Object of arrays : mapping of sequences](#object-of-arrays--mapping-of-sequences)
  - [Object of objects : mapping of mappings](#object-of-objects--mapping-of-mappings)
- [All mixed up](#all-mixed-up)
- [Conclusion](#conclusion)
- [Keep in touch](#keep-in-touch)

## YAML infers complex types

As much as possible, YAML infers complex data structures by the data it composes.

```yaml
- Evermore
- Folklore
- Lover
```

This is a sequence and the containing Array structure is implied.
Here's how it looks in JSON:

```json
["Evermore", "Folklore", "Love"]
```

Compare this to a YAML mapping, where the root structure is implied to be an object.

```yaml
Evermore: 2020
Folklore: 2020
Lover: 2019
```

Again, here's what that looks like in JSON.

```json
{
	"Evermore": 2020,
	"Folklore": 2020,
	"Lover": 2019
}
```

So what happens if we try to mix sequences and mappings at the root level?

```yaml
-Evermore
Folklore: 2020
Lover: 2019
```

It breaks:

```sh
YAMLException: end of the stream or a document separator is expected at line 2, column 9: Folklore: 2020
```

This tracks because something can't be both an object AND an array.

### Understanding inference

Indentifying when you're describing an Array (sequence) and when you're describing an Object (mapping) is critically important. And it's not always clear.

Can you guess what the JSON equivalent for this YAML is?

```yaml
- Evermore: 2020
- Folklore: 2020
- Lover: 2019
```

The dashes `-` indicate that the root structure is an array (sequence). But each array item comprises a descrete object (mapping) with a key-value pair. This is inferred from the colon `:` between values in each array item.

So the JSON output for the YAML above is this:

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

An array of objects (or "sequence of mappings").

Now that I understand it, I see the dash (`-`) like list-items in Markdown.

## YAML infers simple types

Let's take an array (sequence) of objects (mappings).

```yaml
- Evermore: 2020
- Folklore: 2020
- Lover: 2019
```

The keys are strings and the values are numbers.

`Evermore` becomes `"Evermore"`.  
`2020` stays `2020`.  
`Taylor Swift` becomes `"Taylor Swift"`.

## Takeaways

After looking at so much JavaScript and JSON, this is a little unsettling but — in simple examples like this — there's a simplicity to the representation.

## YAML shorthand can be confusing

Below we have an array (sequence) of objects (mappings).

```yaml
- name: Taylor Swift
- name: The National
```

JSON looks like this.

```json
[
	{
		"name": "Taylor Swift"
	},
	{
		"name": "The National"
	}
]
```

What does it look like to add more properties to the these objects?

YAML allows us to use JSON object syntax.

```yaml
- {name: Taylor Swift, album_count: 9}
- {name: The National, album_count: 8}
```

But it's not super YAML-y. So there's an alternative that uses newlines.

```yaml
- name: Taylor Swift
  album_count: 9
- name: The National
  album_count: 8
```

This is challenging for me to interpret. Because the dash (`-`) is separating discrete objects (mappings) in the array (sequence). So it _feels_ like the dash (`-`) is a directive for the object (mapping). But it's not, it's communicating that the containing structure is an array.

Pressing into the confusion, consider this array (sequence) containing a string, number, object, and array.

```yaml
- Taylor Swift
- 1989
- album_count: 9
  nationality: American
- - Big Machine
  - Republic
```

This is that same file in JSON.

```json
[
	"Taylor Swift",
	1989,
	{
		"album_count": 9,
		"nationality": "American"
	},
	["Big Machine", "Republic"]
]
```

### Takeaways

The presence of dash (`-`) and colon (`:`) describe the _surrounding_ structure.

In the case of arrays (sequences) of objects (mappings), with multiple key-value pairs, this terseness can be unclear. At least until you've trained ourselves to see the invisble structures that (`-`) and (`:`) represent.

```yaml
- name: Taylor Swift
  album_count: 9
```

For me, learning to interpret the above line as `an object in an array` has made the biggest difference in my ability to quickly parse YAML.

## YAML patterns

Identifying patterns is helpful.

Here are a few complex handoffs that I had trouble with.

### Array of arrays : sequence of sequences

```yaml
- - Evermore
  - Folklore
  - Lover
- - I Am Easy to Find
  - Sleep Well Beast
  - Trouble Will Find Me
```

This YAML file is an array (sequence) containing two arrays (sequences) each with three strings (scalars).

### Array of objects : sequence of mappings

```yaml
- name: Taylor Swift
  album_count: 9
- name: The National
  album_count: 8
```

This YAML file is an array (sequence) referencing two objects (mappings) each with two key-value pairs.

### Object of arrays : mapping of sequences

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

This YAML file is an object (mapping) with two key-value pairs, each key referencing an array (sequence) of strings (scalars).

### Object of objects : mapping of mappings

```yaml
Taylor Swift:
  album_count: 9
  label: Republic
The National:
  album_count: 8
  label: 4AD
```

This YAML file is an object (mapping) with two key-value pairs, each key referencing another object with two key-value pairs with mixed strings and numbers (scalars) as values.

## All mixed up

Parse isolated patterns is a good start but the big game is reading entire YAML files.

Look at this GitHub Actions workflow.

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

Here's what we can evaluate.

- The root structure is an object with three properties
- `name` references a string
- `on` references an object with one property
  - `schedule` references an array with one object containing one property
    - `cron` references a string
- `jobs` referencs an object with one property
  - `build` references an object with three properties
    - `name` references a string
    - `runs-on` references a string
    - `steps` references array with an object containing two properties
      - `name` references a string
      - `run` references a string

## Conclusion

I think I understand YAML enough to move on with my life. I hope you feel the same way.

Learning how to identify the implied structures has made all the difference.

## Keep in touch

<br />

<script async data-uid="25d3dad1c6" src="https://chantastic.ck.page/25d3dad1c6/index.js"></script>
