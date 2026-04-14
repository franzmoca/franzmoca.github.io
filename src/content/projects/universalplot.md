---
title: "UniversalPlot"
date: 2017-05-01
description: "Accessibility-focused Mathematica package for sonifying function plots and generating textual math descriptions."
tags: ["Wolfram Mathematica", "Sonification", "Accessibility"]
featured: false
links: []
---

UniversalPlot was a university project focused on accessibility in mathematical visualization. Instead of treating a plotted function as something inherently visual, the package tried to expose the same information through sound and structured text.

The implementation is a Wolfram Mathematica package that wraps NASA’s Math Description Engine through J/Link. It supports two main outputs: `Sonify[]`, which turns a function into an audio sweep, and `Describe[]`, which generates textual descriptions in different styles depending on whether the goal is mathematical structure, visual appearance, or educational standards.

The sonification model mapped properties of the plot to properties of sound such as panning, pitch, and dedicated cues for axis intercepts. The point was not novelty for its own sake, but making function plots more accessible to visually impaired students and more generally more compatible with universal-design principles.

It is still one of the more interesting non-blockchain projects here because it sits at the intersection of accessibility, technical computing, and interface design rather than standard CRUD software.
