---
title: "Ethereum Developer Program, ConsenSys Academy 2019"
date: 2019-08-20
description: "A short recap of the ConsenSys Academy bootcamp and the mindset shift that came with learning Ethereum properly."
tags: ["ethereum", "blockchain", "learning"]
---

I completed the [ConsenSys Academy](https://consensys.net/academy/) Ethereum Developer Program in 2019, at a point when I wanted to move from “I follow this space” to “I can actually build on it.”

The best part of the bootcamp was that it forced a shift in mental model. Writing smart contracts is not just backend development on a slower machine. The execution model, security assumptions, and cost model are different enough that you have to relearn some instincts.

## What the course covered

- **Solidity fundamentals**: data types, state variables, functions, events, modifiers
- **Security patterns**: reentrancy attacks, integer overflow, access control
- **Testing**: writing unit tests with Truffle and Mocha
- **Frontend integration**: connecting React apps to contracts via Web3.js and MetaMask
- **IPFS**: decentralized storage for dApp data

## Final project

My final project was [dSignThis!](/projects/dsignthis): a petition dApp built around wallet-based identity, on-chain petition logic, and IPFS-backed content. It was a small proof of concept, but it forced me to connect contract design, frontend integration, and storage tradeoffs in one workflow.

## Certificate

[Download certificate](/documents/bc.pdf)

## Takeaways

The security module was probably the most valuable part. Thinking in terms of irreversible state transitions, adversarial users, and contract-level attack surfaces is a different mindset from normal web development. That was the point where Ethereum stopped feeling like just another framework.

If you're interested in getting into Ethereum development, the ConsenSys Academy curriculum is a great starting point.
