---
title: "Human2Simpson"
date: 2018-08-01
description: "CycleGAN-based image-to-image translation project for turning real portraits into Simpsons-style characters without paired training data."
tags: ["Python", "PyTorch", "CycleGAN", "Deep Learning", "GAN"]
featured: true
links: []
---

Human2Simpson was a machine-learning exam project built around [CycleGAN](https://junyanz.github.io/CycleGAN/): learn a mapping between two visual domains without paired examples, then use that to translate real portraits into Simpsons-style faces and back again.

The hard part was not just "cartoonify a face", but the data and training problem. The project depended on building and cleaning a Simpsons-face dataset, then tuning the model enough to make the translation visually plausible despite the mismatch between real portraits and a very stylized animated domain.

## What I learned

Like many GAN projects, the model quality depended as much on dataset work and training stability as on the architecture itself. The Simpson → human direction ended up more coherent than the reverse direction, which matched the intuition that cartoon faces are structurally simpler and easier to map from than to.

## Stack

- PyTorch-based CycleGAN implementation
- Visdom for training inspection and qualitative monitoring
- Google Cloud / Colab-style GPU infrastructure for training runs
- Custom Simpsons-face dataset plus a portrait dataset for the opposite domain
