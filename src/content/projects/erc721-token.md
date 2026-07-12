---
title: "ERC721 Authenticity Token"
date: 2019-09-01
description: "MVP for Genuino World: ERC721-based authenticity and lifecycle tracking for phygital football jerseys with RFID-linked identity."
tags: ["Solidity", "ERC721", "React", "React Native", "Ethereum"]
featured: false
links: []
---

This was an MVP for **Genuino World**, built around the idea of treating a physical football jersey as a `phygital` ERC721 asset. Each jersey had a digital identity tied to proprietary hardware and embedded RFID tags, so authenticity and product history could be checked against an on-chain record rather than a conventional certificate.

My work focused on the smart-contract layer and the jersey-management side of the application. The contract did more than mint ownership tokens: it also tracked events associated with the jersey, including location-related data intended to help prove that an item had actually been used in a match context.

Around that, the product stack included a React web dashboard for management flows and a React Native / Expo mobile app for the physical verification experience. The combination pushed the project toward product identity, provenance, and real-world asset tracking rather than collectible NFTs.
