---
title: "Pig — Blockchain State Channel Game"
date: 2019-10-01
description: "Master’s thesis project on using state channels to make two-player blockchain games practical through off-chain coordination."
tags: ["Solidity", "Ethereum", "State Channels", "React", "Web3.js"]
featured: true
links:
  - label: "Thesis"
    url: "/documents/tesi_magistrale.pdf"
---

My master's thesis used the dice game [Pig](https://en.wikipedia.org/wiki/Pig_(dice_game)) as a concrete way to study **state channels** for Ethereum. The real subject was not the game itself, but the coordination protocol behind it: how to let two players exchange signed state updates off-chain and only fall back to the blockchain when necessary.

## How it works

Two players open a channel by locking funds in an on-chain contract. From there, the match progresses through signed off-chain messages that update the shared game state without paying on-chain costs turn by turn. Only settlement, or a dispute, requires direct blockchain interaction.

That makes the project a Layer 2 prototype for a narrow but meaningful class of applications: two-player games where latency and transaction cost would otherwise make the experience unusable.

## Key challenges

- **Dispute resolution**: designing challenge logic for the case where one player stops cooperating or disagrees on the latest state.
- **Randomness**: handling dice rolls in a way that works inside a blockchain-constrained architecture without relying on a trivial trusted source.
- **Protocol design**: keeping the implementation modular enough that the same state-channel structure could support more than one game.

The thesis also compared the state-channel approach against a fully on-chain baseline on Ropsten-era infrastructure, which was the practical validation point: fewer on-chain interactions, lower cost, and a more workable interaction model.

The communication layer behind that flow became the companion project [Ethereum Data Channel](/projects/ethereum-data-channel), which handled peer-to-peer message exchange between participants.
