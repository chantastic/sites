---
title: assume intellegence
date: 2024-02-19
tags:
  - found
  - note
---

i'mma leave that one for your team to decide 😅

i generally prefer named exports for modules.
but that is mirrored in how i name my files.

because you have a file named "spinner.js", it follows that `export default` is both reasonable and even enforces an expectation of that module's exports.

that said, it's possible that any module might grow to export it's individual parts for external re-composition.

of course, in that case, it's not unreasonable to assume that such a component should export its' default composition as `default`.

which you've already done.

i'm not dogmatic about anything.

i think trying to "solve it" is predicated on the idea that we must "save future developers", which i disagree with.

it's a reasonable expectation that future developers will need to inspect the module to use it.
we should assume their intelligence and suspect that they will have the faculties to change it if it proves cumbersome for an unforeseen reason.
