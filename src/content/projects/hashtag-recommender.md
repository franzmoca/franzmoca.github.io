---
title: "Scalable Hashtag Recommender"
date: 2018-08-01
description: "Distributed Instagram hashtag recommendation system using k-means clustering and AlexNet features on Apache Spark and AWS."
tags: ["Python", "Apache Spark", "AWS EMR", "AlexNet", "k-means", "Machine Learning"]
featured: true
links:
  - label: "GitHub"
    url: "https://github.com/franzmoca"
---

A scalable hashtag recommendation system for Instagram photos, built on Apache Spark and deployed on AWS EMR.

## Approach

1. **Feature extraction**: Images are processed through AlexNet (a pre-trained CNN) to extract high-level visual feature vectors
2. **Clustering**: k-means clustering groups images by visual similarity in the feature space
3. **Recommendation**: For a new image, the system finds its closest cluster and recommends hashtags based on the most common tags used in that cluster

## Scalability

The pipeline was designed to handle large datasets using Apache Spark for distributed processing. Training and inference were run on an AWS EMR cluster, demonstrating horizontal scalability.

This was a university project for a Distributed Systems / Big Data course.
