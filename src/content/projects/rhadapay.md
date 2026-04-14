---
title: "RhadaPay"
date: 2021-08-01
description: "HackFS 2021 proof of concept for event-driven payments on Polygon, using Superfluid streams and off-chain event data."
tags: ["Solidity", "Superfluid", "Polygon", "TypeScript", "IPFS", "HackFS"]
featured: true
links:
  - label: "ETHGlobal showcase"
    url: "https://ethglobal.com/showcase/rhadapay-ms6uq"
  - label: "GitHub repo"
    url: "https://github.com/RhadaPay/RhadaV1"
---

RhadaPay was built during **HackFS 2021** as a proof of concept for what the team called **event-driven payments**: using real-world events to adjust an on-chain payment stream instead of relying on a fixed upfront payment or a simple milestone schedule.

The project ended up winning **Best overall use of Polygon**, **Best use of Superfluid**, and the **Textile Pool Prize**, which is a better summary of why it matters than the original hackathon narrative around streaming salaries.

## What we built

The core idea was a contract-mediated workflow between two parties: one side posts work with staked funds and a set of event conditions, the other side delivers against that agreement, and the system opens or adjusts a payment stream based on the agreed event data.

The implementation combined custom Solidity contracts with [Superfluid](https://www.superfluid.finance/) for continuous payments. Off-chain event information was logged to IPFS with Textile, and the project was wired into a web frontend for setting up jobs, event streams, and payment parameters.

## Why it was interesting

What I still like about RhadaPay is that it treated streaming payments as a protocol building block, not just a flashy wallet demo. The interesting part was the mechanism: how to connect off-chain events, escrow-like contract logic, and real-time settlement into something a dApp could build on top of.

It stayed at hackathon-proof-of-concept level, but it was a good example of taking a protocol like Superfluid and pushing it toward a more product-shaped use case.
