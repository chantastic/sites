---
title: CSS-ing with Attribute Selectors
date: 2021-04-22
tags:
  - post
---

<mark>_This post will be given as a [lightning talk with lunch.dev](https://events.lunch.dev/lightning/). It's posted here so folks can read along._</mark>

Attribute selectors are my favorite selectors.

Their specificity is as low as a class. But unlike class — which only supports space-delimited strings with escaped special characters — attribute selectors give you complete control of your selection.

They're so powerful, you can even use them to surgically dissect a class selector.

In five minutes, I'll show you five ways to make practical use of attribute selectors.

## First, the syntax

Attribute selectors can target any attribute. `href` from an `<a>` tag, `src` from an `<img>` tag, `aria-` and `data-` attributes, you name it!

As syntax goes, attribute selectors wrap the name of the target attribute in brackets.

```css
[href] { color: red };
```

This line turns anything with an `href` attribute red.

We have to be careful because other elements like `<link>` also have an `href` attribute. Combining attributes selectors with other selectors is a common for scoping intent.

```css
a[href] { color: red };
```

While `<links href>` is `display:none` by default, it's a good practice to be explicit with attribute selectors.

## Style attributes by value

So how do we make attribute selectors useful?

We can use them to identify placeholder links by scoping our `href` selector to anchors with empty or "#" href attributes.

```css
a[href=""],
a[href="#"] { color: red }
```

`=` selects an exact match for the attribute value. As shown above, we need to add a case for every exact match we want.

But there are other matching techniques.

We can match the beginning of a value as well. Let's add another case for insecure `http` links:

```css
a[href=""],
a[href="#"],
a[href^="http:"] { color: red }
```

`^=` matches any value that start with the provided string.

Conversely, there's a `$=` matcher but I don't find it terribly useful. There can be any manner of appendages at the end of a URL.

Fortunately, there is a `*=` matcher to match a character set anywhere in the attribute value.

Let's use it to turn urls with a fragment identifier green:

```diff
a[href=""],
a[href="#"],
a[href^="http:"] { color: red }
+ a[href*="#"] { color: green }
```

Warning! This selector is inclusive of URLS that *only* have a pound value, too! Meaning are placeholder links have also turned green.

Not to fear, we can solve this by ensuring that the most specific rule is declared last:

```diff
+ a[href*="#"] { color: green }
a[href=""],
a[href="#"],
a[href^="http:"] { color: red }
- a[href*="#"] { color: green }
```

## Style by state

Styling by attribute means we can style by state as well. Consider the `disabled` attribute on an input. We can use that to style `input[type="text"][disabled]`.

We can take this approach even further, using `aria` attributes. One aria label used for navs is `aria-current`. Let's use it to style mark and style the current page:

```css
[aria-current="true"],
[aria-current="page"] {
  color: fuchsia;
}
```

## Build your own language with data attributes

Up to this point, we've only used standard element attributes. We can take that further with `data` attributes.

`data` is a an attribute prefix that may be used to safely create and utilize new attributes in your code.

Let's wrap all of our debugging selectors into a new `data` attribute selector: `data-debug-links`.

```diff
+ [data-debug-links] {
  a[href*="#"] { color: green }

  a[href=""],
  a[href="#"],
  a[href^="http:"] { color: red }
+ }
```

Now we can enable or disable this link debugging style by adding the `data-dubug-links` selector to a descendent.

## There's so much more!

Thanks for watching this quick intro to to data attribute selectors. There is so much more I wish I could share, but I can't.

If you'd like to learn how this can be used to build application stylesheets, checkout my post at [chan.dev/avo](https://chan.dev/posts/avo-a-bem-dialect-using-data-attributes/).

And if you'd like to see the CSS framework I'm building with it, checkout [chan.dev/colorway](https://chan.dev/colorway). And if you'd like to help me build it. Checkout my YouTube streaming channel at [chan.dev/youtube](https://chan.dev/youtube)
