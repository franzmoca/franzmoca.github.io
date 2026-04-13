---
title: "Ethereum Data Channel"
date: 2018-08-01
description: "WebRTC-based peer-to-peer communication layer for Ethereum dApps, reducing on-chain message overhead."
tags: ["WebRTC", "Ethereum", "JavaScript", "Node.js", "Web3.js"]
featured: false
links:
  - label: "GitHub"
    url: "https://github.com/franzmoca"
---

A research project exploring WebRTC data channels as a communication layer between Ethereum dApp participants. The idea was to allow dApp users to exchange messages and state updates peer-to-peer — without publishing every message to the blockchain.

This work became the precursor and communication layer for the [Pig state channel game](/projects/pig-blockchain-game), where two players needed a reliable off-chain channel to exchange signed state updates before settling on-chain.

The project included a signaling server for WebRTC handshake and a JavaScript library that dApp developers could integrate to establish direct data channels between wallet holders.
