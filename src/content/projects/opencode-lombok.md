---
title: "opencode-lombok"
date: 2026-02-18
description: "OpenCode plugin, published on npm, that detects Lombok in Java projects and wires the javaagent for JDTLS automatically."
tags: ["TypeScript", "Bun", "OpenCode", "Java", "Lombok", "JDTLS"]
featured: true
links:
  - label: "GitHub repo"
    url: "https://github.com/franzmoca/opencode-lombok"
  - label: "npm package"
    url: "https://www.npmjs.com/package/@franzmoca/opencode-lombok"
---

`opencode-lombok` is a small OpenCode plugin I wrote in 2026 to remove one of the annoying edges in Java tooling: Lombok often needs extra setup before JVM-based language servers such as JDTLS behave correctly, and that setup is easy to forget or misconfigure.

## What it does

The plugin recursively scans a project for Lombok usage in `pom.xml`, `build.gradle`, and `build.gradle.kts`, downloads `lombok.jar` when needed, and then configures `JAVA_TOOL_OPTIONS` with the appropriate `-javaagent` flag so the language server picks it up automatically.

It also handles a few practical details cleanly: it skips work when LSP or JDTLS is disabled, respects `OPENCODE_DISABLE_LSP_DOWNLOAD`, appends to existing `JAVA_TOOL_OPTIONS` instead of overwriting them, and avoids duplicate javaagent entries.

## Why it matters

This is obviously a small tool, but I like it because it solves a real developer-experience problem with very little surface area. It is a good example of the kind of tooling I enjoy building lately: narrow in scope, immediately useful, and careful about integrating with the environment instead of assuming a blank slate.
