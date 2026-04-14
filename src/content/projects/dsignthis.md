---
title: "dSignThis!"
date: 2019-07-01
description: "Privacy-minded petition dApp built as my ConsenSys Academy capstone, with on-chain petition logic and IPFS-backed content."
tags: ["Solidity", "Ethereum", "React", "Truffle", "IPFS"]
featured: true
links:
  - label: "GitHub repo"
    url: "https://github.com/franzmoca/ConsensysBootcamp-FinalProject"
  - label: "Certificate"
    url: "/documents/bc.pdf"
---

dSignThis! was my final project for the [ConsenSys Academy](https://consensys.net/academy/) Ethereum Developer Bootcamp in 2019. The core idea was simple: petitions are a reasonable fit for a trust-minimized application model, because traditional platforms ask users to rely on a third party for identity, storage, and signature counts.

## What I built

The project uses a single `PetitionManager` smart contract to manage registration, petition creation, signing, and closure, with OpenZeppelin patterns such as `Ownable` and `Pausable` layered on top. Users interact through MetaMask rather than a conventional account system, and the frontend is a React app built around the standard Truffle + Ganache workflow.

To avoid putting unnecessary data on-chain, petition assets and related content are referenced through IPFS hashes. The repo also includes an ENS-based client-side identity check, which was an interesting usability experiment even if it stayed outside the contract layer.

## Why it mattered

What makes the project worth keeping in the portfolio is not the petition theme by itself, but the separation of concerns: keep the high-value logic on-chain, move bulky assets off-chain, and still give the user a workflow that feels like a recognizable application rather than a contract demo.

It stayed at proof-of-concept level, but it was a good capstone for pulling together Solidity, wallet integration, testing, and basic product design under the constraints of Ethereum tooling at the time.
