---
title: "Snafu Collective"
date: 2021-03-01
description: "Low-fee NFT marketplace for an Italian artist collective on xDai / Gnosis, with ERC1155 editions and SNAFU token mechanics."
tags: ["Solidity", "Vue.js", "ERC1155", "xDai / Gnosis", "Ethers.js", "IPFS"]
featured: true
links:
  - label: "GitHub org"
    url: "https://github.com/SNAFU-Collective"
  - label: "Smart contracts"
    url: "https://github.com/SNAFU-Collective/snafu-smartcontracts"
  - label: "Bored David ERC721"
    url: "https://github.com/SNAFU-Collective/bored-david-erc721"
---

I collaborated with an Italian collective of artists experimenting with NFTs and helped build part of the marketplace and smart-contract layer behind the project.

## Context

The idea behind Snafu was a lower-friction marketplace on xDai Chain, now Gnosis Chain, where artists could mint and trade without Ethereum mainnet fees dominating the user experience.

## What I worked on

My contribution was on the product and protocol side: marketplace logic, Solidity contracts, and frontend integration. The stack around the public repos points to a Vue-based frontend with wallet connectivity, Ethers.js, and Web3Modal, plus open-source smart contracts published separately by the collective.

The marketplace used ERC1155 to support both unique works and edition-style drops. A related mechanic mapped NFTs into the `$SNAFU` ERC20 token according to rarity, which added a more experimental DeFi layer to the project rather than treating the assets as static collectibles.

## Broader ecosystem

The project was never a one-off demo. The SNAFU organization also published smart-contract infrastructure around the token itself, swap logic, Snapshot governance support, and vesting. It later connected to related work such as **Bored David**, a separate ERC721 collection deployed across multiple chains.

The whole effort sat at the intersection of art tooling, on-chain product design, and the practical reality of shipping around a fast-moving Web3 stack.
