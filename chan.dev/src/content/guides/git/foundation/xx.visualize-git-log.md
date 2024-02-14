---
---

```sh
git log # basic git log
```

```sh
git log --graph
```

> --graph
>   Draw a text-based graphical representation of the commit history on the left hand side of the output. This may
>   cause extra lines to be printed in between commits, in order for the graph history to be drawn properly. Cannot
>   be combined with --no-walk.
>
>   This enables parent rewriting, see History Simplification above.
>
>   This implies the --topo-order option by default, but the --date-order option may also be specified.

```sh
git log --abbrev-commit
```

> --abbrev-commit
>   Instead of showing the full 40-byte hexadecimal commit object name, show only a partial prefix. Non default
>   number of digits can be specified with "--abbrev=<n>" (which also modifies diff output, if it is displayed).

>   This should make "--pretty=oneline" a whole lot more readable for people using 80-column terminals.

```sh
git log --pretty=oneline
```

> --pretty[=<format>], --format=<format>
>   Pretty-print the contents of the commit logs in a given format, where <format> can be one of oneline, short,
>   medium, full, fuller, reference, email, raw, format:<string> and tformat:<string>. When <format> is none of the
>   above, and has %placeholder in it, it acts as if --pretty=tformat:<format> were given.
>
>   See the "PRETTY FORMATS" section for some additional details for each format. When =<format> part is omitted, it
>   defaults to medium.
>
>   Note: you can specify the default pretty format in the repository configuration (see git-config(1)).

*Show `PRETTY FORMATS` section.*