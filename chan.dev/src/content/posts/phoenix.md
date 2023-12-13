---
title: Phoenix
date: 2023-12-11
---

## Prerequisite

[Setup](https://hexdocs.pm/phoenix/installation.html)

```bash
brew install elixir
mix local.hex # installs to ~/.mix
mix archive.install hex phx_new
mix help phx.new
mix phx.new hello_world --database sqlite3
cd hello_world
mix ecto.create
mix phx.server
iex -S mix phx.server # run app inside IEx
```

```bash
# fly deployment
fly launch --now
# failed but created a bunch of files
```

[guide](https://fly.io/docs/elixir/advanced-guides/sqlite3/)
