---
title: "AI Podcast Generator"
date: 2024-02-01
description: "Early-2024 experiment combining article ingestion, LLM summarization, and TTS generation to turn a set of links into a podcast episode."
tags: ["Python", "FastAPI", "OpenAI", "TTS", "LLM", "Petite Vue"]
featured: true
links: []
---

I built this web app in early 2024 to test whether a lightweight pipeline could turn a set of articles into something closer to a podcast episode than a plain summary.

## What it did

The app ingested a list of article URLs, fetched and parsed their content, summarized each article with an LLM, generated a synthetic introduction and ending, then stitched the whole transcript into audio using text-to-speech. The output was both the generated MP3 and the episode logs, including request / response data and cost information.

## Stack

The backend was a small FastAPI service in Python. It used `newspaper3k` and `curl_cffi` for article extraction, OpenAI models for summarization and speech generation, `pysbd` for chunking long input into TTS-safe segments, and `pydub` / `ffmpeg` to merge generated audio parts into one file.

The frontend was intentionally minimal: a static single-page UI with Tailwind and Petite Vue, just enough to define episode metadata, article URLs, language, voice, and then download the final audio.

## What it got right

The prototype was rough, but it captured a pattern that still matters: good LLM applications are often pipelines, not prompts. Most of the real work was in orchestration, input cleanup, chunking, failure handling, and shaping the output into something that felt like an actual artifact rather than a raw model response.
