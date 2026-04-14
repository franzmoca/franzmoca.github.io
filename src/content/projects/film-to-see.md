---
title: "Film To See"
date: 2016-02-01
description: "Android app for collaborative movie picking, with shared groups, voting, chat, IMDb metadata, and coverflow-based browsing."
tags: ["Android", "Java", "OkHttp", "Material Design"]
featured: false
links:
  - label: "GitHub repo"
    url: "https://github.com/franzmoca/FilmToSee"
---

Film To See started from a simple problem, but the implementation was more ambitious than the usual university toy app: organize users into groups, build a shared list of candidate films, let people vote, and give the group a live space to converge on what to watch.

The Android client was written in Java and used a custom backend API with OkHttp for group membership, chat, and voting flows. The UI combined Material Design patterns with a coverflow-style movie browser, IMDb-linked metadata, autocomplete search, group management screens, and per-film like/dislike interactions inside each group.

What makes it still worth keeping around is that it was already trying to solve a real coordination problem, not just display a list. Shared state, recommendation-like voting, chat, and richer browsing all had to fit inside one mobile experience.
