---
title: "Pig — Blockchain State Channel Game"
date: 2019-10-01
description: "Master's thesis project: implementing the dice game Pig as a trustless state channel game on Ethereum."
tags: ["Solidity", "Ethereum", "State Channels", "React", "Web3.js"]
featured: true
links:
  - label: "Thesis"
    url: "/documents/tesi_magistrale.pdf"
  - label: "GitHub"
    url: "https://github.com/franzmoca"
---

My master's thesis explored **state channels** as a Layer 2 scaling solution for Ethereum. The thesis demonstrates the concept by implementing a trustless, off-chain version of [Pig](https://en.wikipedia.org/wiki/Pig_(dice_game)) — a simple dice game — using counterfactual instantiation.

## How it works

Two players open a state channel by depositing funds into an on-chain contract. They then play the game by exchanging signed state updates off-chain. Only the final state — the game outcome — is submitted to the blockchain to settle the wager.

This approach drastically reduces on-chain transactions: a full game involves only 2 on-chain transactions (open + close) regardless of how many rounds are played.

## Key challenges

- **Dispute resolution**: implementing a fair challenge mechanism for when one player goes offline
- **Randomness**: generating verifiable randomness off-chain without a trusted oracle
- **Frontend integration**: building a React interface that manages off-chain state while keeping the user experience intuitive

The implementation also covered the Ethereum Data Channel project (WebRTC-based communication layer between state channel participants).
