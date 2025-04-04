---

layout: portfolio_post  
title: Scalable Hashtag Recommender System  
category: portfolio  
modal-id: 8  
img: scala.png  
alt: CLI options for SHRSS tool  
overview:  
    client: Personal Project  
    applications: Hashtag Recommender System based on k-means Clustering  
    project-date: August 2018 - Ongoing  
    summary: Developed a scalable hashtag recommender system that leverages k-means clustering and deep learning feature extraction. The system is designed to provide relevant hashtag recommendations for images, improving social media engagement.

skills:  
    languages:  
    - Python  
    - Scala  
    concepts:  
    - Machine Learning  
    - AlexNet  
    - K-means Clustering  
    - Instagram Hashtags  
    tools:  
    - Apache Spark  
    - Flintrock  
    - PyTorch  
    - Hadoop  
    stack:  
    - Linux  
    - IntelliJ IDEA  
    - Amazon Web Services (AWS)

---

### Project Description

The **Scalable Hashtag Recommender System** (SHRSS) is a machine learning-based tool designed to suggest relevant hashtags for images, enhancing their visibility and engagement on platforms like Instagram. The system utilizes a combination of deep learning for feature extraction and k-means clustering for organizing hashtags based on visual content.

The tool operates via a command line interface (CLI), where users can input an image file and receive a list of recommended hashtags. This functionality is particularly useful for social media influencers, marketers, and content creators who want to optimize their posts for broader reach and engagement.

The system's core consists of a feature extraction phase using **AlexNet**, a convolutional neural network pre-trained on large-scale image data. The extracted features are then processed through k-means and mini-batch k-means clustering algorithms to group similar images, enabling the generation of relevant hashtag suggestions.

To handle large datasets and ensure scalability, the project leverages **Apache Spark** for the clustering process and **Flintrock** for cluster management. The entire solution is deployed on **Amazon Web Services (AWS)** to take advantage of its scalable infrastructure.

### Contributions

Key contributions to the **Scalable Hashtag Recommender System** include:

- **Developing the CLI Tool:** Implemented a user-friendly command line interface that allows users to input images and retrieve hashtag recommendations efficiently.
- **Feature Extraction with AlexNet:** Integrated deep learning techniques to extract meaningful features from images, enhancing the accuracy of the hashtag suggestions.
- **K-means Clustering Implementation:** Utilized k-means and mini-batch k-means clustering to organize and recommend hashtags based on visual similarities among images.
- **Scalability with Apache Spark:** Leveraged Apache Spark to manage and process large datasets, ensuring the system can handle extensive image collections efficiently.
- **AWS Deployment:** Deployed the system on AWS, ensuring robustness and scalability, with the ability to handle a high volume of requests.

### Challenges Overcame

Several challenges were encountered during the development of SHRSS:

- **Scalability:** Ensuring the system could efficiently handle large datasets and high request volumes by optimizing clustering algorithms and leveraging cloud infrastructure.
- **Feature Extraction Accuracy:** Fine-tuning the AlexNet model to ensure accurate and meaningful feature extraction from diverse image datasets.
- **Clustering Performance:** Optimizing k-means clustering to achieve fast and accurate grouping of similar images, particularly with large-scale data.

### Accomplishments

The **Scalable Hashtag Recommender System** achieved several notable milestones:

- **Effective Hashtag Recommendations:** Successfully developed a system that provides accurate and contextually relevant hashtag suggestions, enhancing user engagement on social media platforms.
- **Scalable and Robust Architecture:** Designed a scalable solution capable of handling large volumes of data and requests, ensuring reliable performance in production environments.
- **Open Source Contribution:** The project is available on [GitHub](https://github.com/Rhuax/Scalable-Hashtag-Recommender-System){:target="_blank"}, allowing others to contribute to and benefit from the system's development.
