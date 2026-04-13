---
title: "Human2Simpson"
date: 2018-08-01
description: "Image-to-image translation using CycleGAN to convert real portraits into Simpsons-style characters."
tags: ["Python", "TensorFlow", "CycleGAN", "Deep Learning", "GAN"]
featured: true
links:
  - label: "GitHub"
    url: "https://github.com/franzmoca"
---

Human2Simpson is a machine learning project that applies [CycleGAN](https://junyanz.github.io/CycleGAN/) — an unpaired image-to-image translation model — to convert real portrait photos into Simpsons-style cartoon characters, and vice versa.

Built as part of a university exam in Machine Learning, the project trained a CycleGAN model on a dataset of scraped Simpsons character frames paired with a portrait photo dataset.

## Results

The model learned both the Simpson → human and human → Simpson mappings without paired training data. The Simpson → human direction produced more coherent results due to the higher structural regularity of cartoon faces.

## Tech stack

- TensorFlow + Keras for model implementation
- Google Colab with GPU runtime for training
- Dataset: custom-scraped Simpsons frames + CelebA portrait dataset
