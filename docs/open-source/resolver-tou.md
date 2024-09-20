---
sidebar_position: 1
---

# 1inch Resolver Terms of Use

## Fusion Mode Terms of Use for Resolvers

**Last updated:** 18th of September, 2024  
**Effective from:** 18th of September 2024

---

### Welcome to the 1inch Fusion Mode!

These Terms of Use and any terms and conditions incorporated herein by reference, including all annexes (collectively, the “1inch Fusion Mode Terms”, “Terms”), govern the access and/or use of the 1inch Fusion Mode by the Resolvers as defined below (“you”, “your”).

As the 1inch Fusion Mode operates within 1inch Network Interface, please note that the 1inch Network Interface Terms of Use and 1inch Network Interface Privacy Policy are also applicable to your use of the 1inch Fusion Mode.

Please read these terms carefully. By accessing and/or using the 1inch Fusion Mode, you acknowledge that you have read, understood, and accepted all the terms set out below or incorporated herein by reference. If you do not agree with any provision of these Terms, please do not use the 1inch Fusion Mode.

---

### 1. Definitions

- **“Delegate”** refers to the st1INCH Token Holder that delegates the Unicorn Power to the Resolver.
- **“1inch Escrow Contracts”** refers to the smart contracts deployed by 1inch that facilitate securing assets in escrow containers for origin and destination chains (escrow factory contract, source escrow contract, and destination escrow contract) used for atomic orders settlement.
- **“1inch Limit Order Contract”** refers to the AggregationRouterV6 smart contract or future versions deployed by 1inch and used for limit orders settlement.
- **“1inch Network”** refers to the decentralized protocols and products whose synergy enables operations in the DeFi space by offering access to hundreds of liquidity sources across multiple chains.
- **“1inch Relayer”** refers to the backend service that contains data on the Fusion Orders available for filling by the Resolver.
- **“1inch Quoter”** refers to the backend service that prepares the information to build the Fusion Order’s Dutch auction, visualized as a curve.
- **“st1INCH Token”** refers to the staked governance and utility token of the 1inch Network.
- **“Block Builder”** refers to a miner or validator that collects, verifies, and arranges transactions into a new block to be added to the blockchain.
- **“Fusion Order”** refers to a gasless swap request submitted by the Maker to be filled by the Resolver, technically formed as a limit order through 1inch Limit Order Contract.
- **“Gas Fee”** refers to the total monetary fee to be paid to fill the Fusion Order, calculated as the units of gas used multiplied by the Gas Price.
- **“Gas Price”** refers to the value for each unit of gas, determined by components like the Base Fee and the Priority Fee.
- **“Gas Units”** refers to the amount of computational resources required to fill the Fusion Order by the Resolver.
- **“Maker”** refers to anyone who accesses or uses the 1inch Fusion Mode to initiate the Fusion Order without paying the Gas Fee.
- **“Resolver”, “Taker”** refers to any individual or entity that fills the Fusion Order within the 1inch Fusion Mode.
- **“Permissioned Proxy”** refers to the Whitelisted Resolver that meets eligibility criteria by uniting the Unicorn Power and facilitates the collection of data from other Resolvers.
- **“Whitelisted Resolver”** refers to the Resolver that has been registered and whitelisted to fill the Fusion Order.
- **“Unicorn Power”** refers to the unit determined by the ratio of the st1INCH Token and its lock period, enabling participation in 1inch Network governance.

All the terms used in this Section are intended only for the purposes of this Policy. All remaining terms should be interpreted according to the 1inch Network Interface Terms of Use.

---

### 2. 1inch Fusion Mode

The 1inch Fusion Mode is a gasless swap feature powered by the 1inch Swap Engine and accommodated by a set of open-source smart contracts (the “1inch Fusion Mode”).

The 1inch Fusion Mode may include other products and/or features added for interface development and improvement, which are not intended to affect the main purpose of the 1inch Fusion Mode.

_Please note:_ We only provide you with access to the relevant interface and neither have control over your interactions with the blockchain nor encourage you to perform any. Any interaction performed by you via the 1inch Fusion Mode remains your sole responsibility.

---

### 3. Eligibility

By accessing and/or using the 1inch Fusion Mode, you acknowledge and confirm that you meet all the conditions set forth herein:

- You have the full right, power, and authority to agree to the 1inch Fusion Mode Terms.
- Your participation in the 1inch Fusion Mode is entirely at your own risk.
- You are not located in, under the control of, or a national, citizen, or resident of any Prohibited Localities and/or subject to the Sanctions Lists as defined in the 1inch Network Interface Terms of Use.
- You are not impersonating any other person or otherwise concealing your identity.
- You do not use any software or networking techniques, including VPN, to modify your IP address or otherwise bypass the restrictions.
- You are a sophisticated user and possess the necessary knowledge, skills, and experience to use the 1inch Fusion Mode.
- You comply with all other eligibility requirements set forth in the 1inch Network Interface Terms of Use.
- You will not use the 1inch Fusion Mode if any applicable laws in your country prohibit you from doing so in accordance with these Terms.
- You are compliant with all laws and regulations applicable to you and your use or access to the 1inch Fusion Mode.

_Note:_ Should we determine that you no longer meet any of these eligibility conditions, we reserve the right to suspend or terminate your access and/or use of the 1inch Fusion Mode interface.

---

### 4. Whitelisting

- **Eligibility Threshold:** To become the Whitelisted Resolver, you must qualify for the whitelist, dynamically maintained based on the Unicorn Power delegation threshold. The whitelist is limited to ten (10) resolvers.
- **Dynamic Whitelist:** The dynamic nature of the whitelist means that the Resolver's eligibility may evolve over time due to changes in the Unicorn Power distribution.

_Note:_ Inclusion in the whitelist is not guaranteed solely by meeting the Unicorn Power delegation threshold. Full compliance with these Terms and successful completion of the verification and registration process is required.

---

### 5. Compliance

- **Verification:** To become the Whitelisted Resolver, you must complete the verification procedure accessible at [1inchfoundation.synaps.me](https://1inchfoundation.synaps.me). This involves completing a KYC/KYB questionnaire.

- **Wallet Address Screening:** Publicly available information may be used to monitor potential bad actors and assess the risks associated with illicit or non-compliant activities.

- **Third-party Providers:** Verification procedures and wallet address screening are provided by third-party providers, and we are not responsible for the accuracy of their services.

---

### 6. Registration

To complete the whitelisting process, the Resolver that passed the verification procedure shall undergo registration in the whitelist smart contract deployed by the 1inch Network.

By registering as the Whitelisted Resolver, you acknowledge, warrant, and agree that:

- You are solely responsible for any decision to use the 1inch Fusion Mode, including assessing any and all risks related to any Fusion Order.
- You participate in the Fusion Order’s Dutch auction entirely at your own risk.
- Any fees, costs, or expenses associated with your use of the 1inch Fusion Mode are your responsibility unless otherwise specified.
- You are responsible for ensuring your use of the 1inch Fusion Mode complies with local laws, regulations, and ordinances in your jurisdiction.
- You pledge not to engage in activities that could potentially harm, overload, or compromise the infrastructure or integrity of the 1inch Fusion Mode.
- Any violation of these Terms may result in your removal from the list of the Whitelisted Resolvers without prior notice.

---

### 7. Permissioned Proxy

The 1inch Fusion Mode allows eligible Resolvers to unite their Unicorn Power to meet the eligibility criteria for registering the Whitelisted Resolver that will act as a permissioned proxy.

- **Compliance:** Contributing to filling the Fusion Order by the Permissioned Proxy is subject to compliance with the 1inch Fusion Mode Terms.

_Note:_ Should any Resolver involved fail to comply with these Terms, this failure may result in the Permissioned Proxy’s removal from the whitelist.

---

### 8. Use of the 1inch Fusion Mode

- **Cross-Chain Functionality (1inch Fusion+):** This subsection describes specific terms with respect to the cross-chain functionality that operates on top of 1inch’s existing intent-based protocols.

- **Restriction Measures:** Any action aimed at intentionally altering the transaction order within the block, and/or otherwise abusing the Fusion Orders filling process, constitutes a breach of these Terms.

---

### 9. The Whitelisted Resolver’s Exit

As the Whitelisted Resolver, you have the right to voluntarily exit from the 1inch Fusion Mode at any time for any reason by contacting us.

- **Incentive Programs (Farms):** In the event of the Whitelisted Resolver’s exit or any other case when the Resolver’s whitelist status is terminated, the Resolver’s commitment within the farm remains binding according to the initially defined timing schedule.

- **Notification on Non-Active Status:** Information about the non-active status of the resolver will be prominently displayed on the 1inch Fusion Mode interface.

---

### 10. Exclusive Resolver API

The Resolver may be exclusively selected to fill the Fusion Order at the beginning of the Fusion Order’s Dutch auction as vetted by 1inch from time to time.

- **Service Level Agreement:** The Resolver’s use of the Exclusive Resolver API functionality is subject to the Service Level Agreement detailed in Annex A of these Terms.

---

### 11. Incentive Programs

From time to time we may introduce various incentive programs designed to incentivize active participation by the Resolvers.

_Note:_ We reserve the right to modify, update, or terminate these incentive programs at our sole discretion with prior notice.

---

### 12. Disclaimers

By using the 1inch Fusion Mode, you acknowledge and agree that:

- Your participation in the 1inch Fusion Mode is undertaken at your own risk. We shall not be held liable for any gains, losses, or damages resulting from your participation, transactions, or activities within the 1inch Fusion Mode.
- We bear no responsibility for the delegation and/or uniting of the Unicorn Power as part of the activities related to the Permissioned Proxy.
- Any benefits or incentives associated with the use of the 1inch Fusion Mode are not guaranteed.
- Any information or data provided through the 1inch Fusion Mode does not constitute financial or investment advice.
- We will not be held liable for any third-party websites, products, or services linked to or utilized through the 1inch Fusion Mode.
- We cannot guarantee uninterrupted access to the 1inch Fusion Mode. Occasional downtime or disruptions may occur.
- We shall not be held liable for the actions taken by Resolvers or other participants within the platform.
- The 1inch Fusion Mode’s functionality and features may evolve over time. We reserve the right to modify, suspend, or discontinue any aspect of the 1inch Fusion Mode at our discretion.
- The 1inch Fusion Mode Terms may be updated or modified from time to time. It is your responsibility to regularly review the terms and policies.
- By participating in the 1inch Fusion Mode, you agree to indemnify and hold harmless the 1inch Network, its affiliates, partners, and representatives.

---

### 13. Updates and Notifications

We may periodically update these Terms, including any additional sections or provisions, by posting the revised version with an updated revision date.

_Note:_ The changes will become effective and shall be deemed accepted by you the first time you use or access the 1inch Fusion Mode after the initial posting of the revised Terms.

---

### ANNEX A: Exclusive Resolver API Service Level Agreement

This Service Level Agreement (“SLA”) constitutes an integral part of the 1inch Network Fusion Mode Terms of Use for Resolvers and should be read in conjunction with the Terms.

#### 1. Exclusive Resolver

- **1.1 Definition:** For the purpose of this SLA, “Exclusive Resolver” refers to the Resolver that has provided the Resolver’s API endpoint to be exclusively selected to fill the Fusion Order at the beginning of the Fusion Order’s Dutch auction.
- **1.2 Vetted Criteria:** The Exclusive Resolver shall be considered vetted provided that specific criteria are met, including being on the list of Whitelisted Resolvers.

#### 2. Service Level Commitment

- **2.1 Execution:** The Exclusive Resolver shall execute the Exclusive Order before the end of the exclusivity period subject to the Performance Metrics.

#### 3. Performance Metrics

- **3.1 Response Time:** Upon receiving a quote request, the Exclusive Resolver shall respond within 500 milliseconds (ms).
- **3.2 Fill Rate:** The Exclusive Resolver shall maintain a minimum fill rate of 90% for the Exclusive Orders as calculated on a rolling 7 calendar days period.

#### 4. Performance Monitoring

- **4.1 Continuous Monitoring:** The 1inch technical team will conduct continuous performance monitoring of the Exclusive Resolvers’ adherence to the Performance Metrics.

#### 5. Non-Compliance and Restriction Measures

- **5.1 Restriction Measures:** Any case of non-compliance with the Performance Metrics may be subject to specific restriction measures.

#### 6. SLA Exclusions

- **6.1 Exclusions:** This SLA does not apply to any features and functionality not explicitly included in this SLA.

---
