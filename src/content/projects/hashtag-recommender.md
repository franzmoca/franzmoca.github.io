---
title: "Scalable Hashtag Recommender"
date: 2018-08-01
description: "Distributed image-based hashtag recommendation pipeline using CNN features, clustering, Apache Spark, and AWS EMR."
tags: ["Python", "Apache Spark", "AWS EMR", "AlexNet", "k-means", "Machine Learning"]
featured: true
links:
  - label: "Main repo"
    url: "https://github.com/Rhuax/Scalable-Hashtag-Recommender-System"
  - label: "AI version"
    url: "https://github.com/franzmoca/HashtagRecommenderAIVersion"
  - label: "Fast k-means paper"
    url: "https://www.eecs.tufts.edu/~dsculley/papers/fastkmeans.pdf"
---

A university project on distributed machine learning: given an image, recommend likely hashtags by combining pretrained visual features, clustering, and a Spark-based execution pipeline.

## Approach

1. **Feature extraction**: images are passed through a pretrained CNN to obtain high-level feature vectors rather than relying on hand-written visual descriptors.
2. **Clustering**: those vectors are grouped with k-means and mini-batch k-means so visually similar images land in the same region of the feature space.
3. **Recommendation**: for a new image, the system finds the nearest cluster and suggests hashtags based on the tags most associated with that cluster.

## Scalability

The part I liked most was the systems side. The pipeline was built around Apache Spark and deployed on AWS EMR, with Flintrock-based cluster setup and batch-oriented training / inference scripts. That made it less of a toy notebook and more of a small distributed ML system.

There is also a later experimental branch in the `HashtagRecommenderAIVersion` repo, which captures follow-up work and rougher iterations. I treat that as an extension of the original academic prototype rather than a separate polished product.

This project is best described as a distributed content-based recommendation experiment: computer vision, clustering, and cloud execution brought together to make the pipeline workable at larger scale.
