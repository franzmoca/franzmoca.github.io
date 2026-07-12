---
title: "Ethereum Data Channel"
date: 2018-08-01
description: "WebRTC-based communication layer for wallet-authenticated off-chain coordination between Ethereum dApp participants."
tags: ["WebRTC", "Ethereum", "JavaScript", "Node.js", "Web3.js"]
featured: false
links: []
---

Ethereum Data Channel was a research prototype for a simple but important idea: decentralized applications often need a peer-to-peer communication layer, and not every state update should become an on-chain transaction.

The project used WebRTC `RTCDataChannel` connections plus a signaling layer to let participants exchange state updates directly. In the thesis-era implementation, that channel was tied to wallet-oriented flows such as MetaMask-based signing and structured messages, so it could support blockchain applications rather than just generic chat-style messaging.

Its clearest role was as the communication layer for the [Pig state channel game](/projects/pig-blockchain-game), where two players needed to exchange signed updates off-chain before settlement or dispute resolution. In practice it was an enabling transport layer for state-channel coordination.

The architecture question it addresses is still open: if the blockchain is the settlement layer, what is the right off-chain channel for the live interaction? This project was my answer at the time.
