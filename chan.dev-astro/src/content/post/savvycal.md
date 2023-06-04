---
title: "SavvyCal"
tags: ["os"]
---

_Go to [/os](/os)_

I use SavvyCal to let others interrupt my schedule — on my terms.

## Contents

## Chat

I have one link that I use for all of my scheduling: https://savvycal.com/chantastic/chat

[Standard availability](/os#standard-availability) is used by default.
[Extended availability](/os#extended-availability) is shown via [SavvyCal ranked availability](https://docs.savvycal.com/article/20-ranked-availability).

I'm not sure that I loved [ranked availability](#ranked-availability) over having a separate `/asap` calander.

## Ranked availability

1. The `"Having trouble finding times? Show more ➝"` pop-in button is oddly phrased and difficult to describe to people.
2. SavvyCal _assumes_ that if there are no available times in your regular availability that it should show extended availability. I don't appreciate this default.
3. There's no visual indication of times falling in a alternate ranks.
4. I'd like for there to provide a message when someone tries to book a non-ideal time: "You're scheduling a meeting in my extended availability. There is a small likelyhood that this meeting will need to be rescheduled, or take place while away from my desk."

## Standard message

```
I'd love to chat! Send me your fancy calendar link, if you've got one.

Here are some times that I'm available — with more on my SavvyCal:

// include SavvyCal Propsed times text
```

Read: [Propose times](#propose-times)

## Propose times

I can generate text for available times using the `propose times` button, on a calendar.

This is what the output looks like

```
Times shown in (GMT-08:00) Pacific Standard Time

Wednesday, January 4, 2023
9:15 am
1:15 pm

Wednesday, January 11, 2023
11:00 am

Find more times here: https://savvycal.com/chantastic/chat
```

This feature goes to 11 with the [SavvyCal Chrome extension](https://savvycal.com/chrome-extension/). The Chrome extension shows an alternate version of the calendar list with a directly available "propose time" button.

Brilliant.

See [standard message](#standard-message) to keep it friendly.

## Embed

SavvyCal can be embedded.

Install the client.

```js
<script>window.SavvyCal=window.SavvyCal||function(){(SavvyCal.q=SavvyCal.q||[]).push(arguments)};</script>
<script async src="https://embed.savvycal.com/v1/embed.js"></script>
<script>
  SavvyCal('init')
</script>
```

Creating a standard link to my calendar, with the data attribute `data-savvycal-embed`.

<!-- prettier-ignore -->
```html
<a data-savvycal-embed href="https://savvycal.com/chantastic/chat">Schedule time with me</a>
```

I have an 11ty shortcode: `schedule-chat`

```liquid
{% raw %}{% schedule-chat "Optional CTA text" %}{% endraw %}
```

It should produce a link like this:

{% schedule-chat "Schedule a chat with me" %}

Referenc: [This help doc describes additional means of embedding](https://docs.savvycal.com/article/6-embedding-links-on-your-website#via-hyperlink).

## Referral

This referral code awards me nothing. But it awards others a month free: https://savvycal.com/?r=chantastic
