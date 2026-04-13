---
title: "dSignThis!"
date: 2019-07-01
description: "Decentralized petitions dApp — final project for the ConsenSys Academy Ethereum Developer Bootcamp."
tags: ["Solidity", "Ethereum", "React", "Truffle", "IPFS"]
featured: true
links:
  - label: "GitHub"
    url: "https://github.com/franzmoca"
---

dSignThis! is the final project from the [ConsenSys Academy](https://consensys.net/academy/) Ethereum Developer Bootcamp (2019). It is a decentralized application for creating and signing petitions on the Ethereum blockchain.

## Features

- Anyone can create a petition by providing a title, description, and signature goal
- Users sign petitions with their Ethereum wallet — no email or personal data required
- Petition content is stored on IPFS; only the hash is stored on-chain
- Petition state (open/closed/fulfilled) is managed via a Solidity smart contract

## Tech stack

The backend is a Solidity contract deployed on Ropsten testnet, developed and tested with Truffle. The frontend is a React app using MetaMask for wallet interaction. Petition text is stored on IPFS via the Infura gateway.

This was my final deliverable for the ConsenSys Academy bootcamp and demonstrates a full-stack Ethereum dApp workflow.
