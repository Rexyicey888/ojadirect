Project OJADIRECT - Working Brief

## 1. Project Summary

Oja direct is a B2B agricultural marketplace for Nigeria. It connects large-scale farmers directly to buyers such as micro-traders, market associations, supermarkets, and SME food processors.

The platform focuses on:

- Direct farm-to-buyer sourcing
- OPay-powered escrow payments
- Verified third-party logistics
- Harvest reservation before crops mature
- Bulk purchase pooling for small buyers
- Quality assurance through farm audits and pickup checks

Initial focus commodities:

- Plantain
- Yam
- Coarse grains
- Later expansion: cassava, maize, onions, chili peppers

## 2. Core Problem

Nigeria's agricultural supply chain is fragmented, informal, and cash-heavy.

Key problems:

- Farmers depend on middlemen and lose margin
- Buyers face unstable prices and unreliable supply
- Post-harvest losses are high
- Quality disputes are common
- Logistics are risky and poorly coordinated
- Payments lack trust between buyers, farmers, and transporters

Agri-Link solves this by combining marketplace discovery, logistics verification, and escrow settlement.

## 3. Market Opportunity

Agriculture contributes about 21% to 26% of Nigeria's real GDP, and crop production makes up about 88% of agricultural value.

Structured agritech penetration is still below 1.5%, meaning most of the market remains offline and inefficient.

Agri-Link targets this uncaptured market by digitizing:

- Farm-gate sourcing
- Commodity pricing
- Bulk order aggregation
- Logistics dispatch
- Escrow settlement
- Quality verification

## 4. Target Users

### Suppliers

- Large farms
- Farm estates
- Regional aggregation warehouses
- Commodity suppliers

### Buyers

- Micro-traders
- Open-market trader groups
- Supermarkets
- Food processors
- Plantain chip manufacturers
- Restaurants and food SMEs

### Logistics Partners

- Verified 3PL truck owners
- Commercial haulage operators
- Regional delivery partners

## 5. Core Product Modules

### A. Live Stock Hub

Purpose: Immediate purchase of harvested produce.

Key features:

- Shows produce already harvested or ready for dispatch
- Tracks shelf-life using a "viability window"
- Supports urgent buyer needs
- Best for spot-market purchases

Example:

```text
200 bunches of green plantain
Viability window: 8 days before ripening
Available for immediate purchase
```

### B. Harvest Pipeline Engine

Purpose: Forward sourcing of future harvests.

Key features:

- Tracks crops still in the ground
- Shows maturity stage and estimated harvest date
- Allows buyers to reserve future yield
- Uses down-payment commitments

Example filters:

```text
Plantain - 60 days to harvest
Yam - 90 days to harvest
```

Forward-order payment rule:

- Buyer pays 10% commitment deposit for future harvests
- Buyer pays 100% for immediate spot orders
- Funds stay in OPay escrow until delivery is confirmed

### C. Geo-Cluster Bulk Purchase Pools

Purpose: Help small buyers combine orders to meet farm minimum order quantities.

How it works:

- Multiple buyers in the same region join a shared order pool
- The pool grows until it meets the farm's minimum order quantity
- One consolidated shipment is sent to a regional collection hub
- Buyers pick up their portions using collection codes

Important data to show:

- Current pool volume
- Remaining quantity needed
- Number of active buyers
- Closing date
- Estimated logistics fee
- Pickup hub

Target regions:

- Lagos Mainland
- Lagos Island
- Ibadan
- Abuja
- Port Harcourt
- Benin City
- Enugu

### D. OPay Escrow Layer

Purpose: Build trust in transactions.

Escrow rules:

- Buyer deposits funds into escrow
- Farmer cannot access funds before delivery verification
- On successful delivery, payment is split automatically

Split payout:

- Farmer receives commodity value
- 3PL receives haulage fee
- Agri-Link receives service commission

### E. 3PL Logistics Dispatch

Purpose: Manage farm pickup, quality checks, and delivery.

Key features:

- Auto-assign verified transporters
- Provide GPS route to farm gate
- Give driver a commodity-specific quality checklist
- Require photo proof at pickup
- Update order status to "In Transit" after approval

### F. Quality Verification System

Purpose: Prevent quality disputes and fake listings.

Main tools:

- Initial farm onboarding audit
- 60-day farm audit cycle
- Trust score for every farm
- 3PL pickup photo proof
- Automatic penalty for poor quality logs

Farm audit checks:

- Crop health
- Disease signs
- Storage condition
- Loading area cleanliness
- Crop maturity accuracy

Penalty logic:

- Poor 3PL report reduces farm visibility
- Two negative reports can freeze harvest waitlist access
- Failed audit freezes farm account
- Buyer escrow deposits are returned if the farm fails

## 6. Main User Flows

### Buyer Spot Order Flow

1. Buyer opens Live Stock Hub
2. Buyer selects available produce
3. System calculates product cost and logistics fee
4. Buyer pays 100% into OPay escrow
5. 3PL is dispatched to farm
6. 3PL verifies quality and uploads proof
7. Produce is delivered to buyer
8. Buyer confirms delivery
9. OPay releases split payout

### Buyer Forward Harvest Flow

1. Buyer opens Harvest Pipeline
2. Buyer selects future crop listing
3. Buyer reserves volume
4. Buyer pays 10% commitment deposit into escrow
5. At harvest time, system triggers logistics
6. 3PL checks crop quality
7. Buyer receives produce
8. Final payment is settled through escrow

### Bulk Pool Flow

1. Micro-buyer joins a geo-cluster pool
2. Other buyers add volume to the same pool
3. Pool reaches supplier MOQ
4. Payment is secured in escrow
5. Farm dispatches consolidated shipment
6. Produce arrives at regional collection hub
7. Buyers receive pickup code and proof-of-delivery token

### Supplier Flow

1. Supplier completes onboarding and KYC
2. Farm passes physical audit
3. Supplier lists live stock or future harvest
4. Supplier receives orders or reservations
5. 3PL verifies produce at pickup
6. Supplier receives escrow payout after delivery

### 3PL Flow

1. Transporter receives dispatch job
2. Driver navigates to farm
3. Driver performs quality checklist
4. Driver uploads geo-tagged photos
5. Driver transports goods to buyer or hub
6. Driver receives haulage payout after delivery confirmation

## 7. Suggested Data Models

### User

- id
- name
- role: buyer, supplier, transporter, admin
- phone
- email
- location
- KYC status
- OPay wallet reference

### Farm

- id
- supplier id
- farm name
- location
- commodities
- trust score
- audit status
- last audit date
- next audit date

### Listing

- id
- farm id
- commodity
- variety
- quantity
- unit price
- location
- listing type: live stock or harvest pipeline
- viability window
- maturity date
- crop status
- minimum order quantity

### Order

- id
- buyer id
- listing id
- quantity
- product cost
- logistics fee
- escrow amount
- order status
- delivery status

### Bulk Pool

- id
- commodity
- region
- target quantity
- current quantity
- participants
- closing date
- collection hub
- status

### Logistics Job

- id
- order id
- transporter id
- pickup location
- delivery location
- route status
- quality checklist
- photo proof
- delivery proof

### Escrow Transaction

- id
- order id
- buyer id
- supplier id
- transporter id
- escrow amount
- supplier payout
- transporter payout
- platform commission
- status

## 8. Monetization

Oja direct uses an asset-light revenue model.

### Revenue Streams

1. Marketplace commission
   - 3.5% fee charged to supplier after successful escrow release

2. Logistics brokerage spread
   - About 7% to 10% margin on third-party haulage rates

3. Fintech float optimization
   - Escrow funds sit inside OPay rails before settlement

## 9. Rollout Plan

### Phase 1

Focus regions:

- Ondo
- Edo
- Delta
- Benue
- Oyo
- Lagos as main consumption market

Focus commodities:

- Plantain
- Yam

### Phase 2

Expansion regions:

- Anambra
- Imo
- Port Harcourt
- Enugu

Additional commodities:

- Cassava
- Maize
- Onions
- Chili peppers

## 10. Key Risks and Mitigation

### Post-Harvest Loss

Risk:

- Produce can spoil during delay or poor transport.

Mitigation:

- Strict farm-gate checks
- Reject poor produce before loading
- Add goods-in-transit insurance
- Track viability window

### Price Inflation

Risk:

- Farmers may default on forward contracts if market prices rise sharply.

Mitigation:

- Use dynamic pricing corridor
- Allow up to 10% harvest-time adjustment tied to diesel benchmarks

### Logistics and Security Risk

Risk:

- Bad roads, illegal transit fees, insecurity, and delays.

Mitigation:

- Use vetted 3PLs
- Use route tracking
- Avoid known risky routes
- Require permits and transit clearances

### Quality Disputes

Risk:

- Buyers may reject produce due to poor quality.

Mitigation:

- 60-day farm audits
- 3PL photo proof
- Trust score system
- Escrow release only after delivery confirmation

## 11. Compliance Requirements

### NDPA

Agri-Link must protect user data, farm locations, KYC information, and transaction records.

Required:

- Secure storage
- Encryption
- Controlled access
- Privacy policy

### CBN KYC

All suppliers and commercial buyers must pass identity verification.

Required:

- Government ID or BVN
- Verified OPay merchant wallet
- Business information for corporate buyers

### Agricultural Quality and Food Safety

Agri-Link should keep audit and source records to help buyers meet food safety standards.

Required:

- Produce source tracking
- Farm audit records
- Quality proof at pickup
- Delivery confirmation logs

## 12. MVP Build Priorities

### Must Build First

1. Landing page
2. Marketplace listing page
3. Product card and detail page
4. Buyer order flow
5. OPay escrow simulation
6. Supplier listing dashboard
7. 3PL quality checklist screen
8. Order tracking status
9. Harvest Pipeline reservation flow
10. Admin farm audit dashboard

### Should Build Next

1. Geo-cluster bulk purchase pool
2. Collection hub pickup code
3. Farm trust score
4. Transporter dashboard
5. Dynamic logistics fee calculator
6. Dynamic pricing corridor for forward contracts
7. Notification system

### Demo Features to Show

- Buyer browses marketplace
- Buyer filters Live Stock, Reserve Harvest, and Harvest SOS
- Buyer starts order
- Escrow protects payment
- 3PL verifies produce
- Delivery confirmation releases payment
- Supplier gets paid
- Platform earns commission

## 13. Success Metrics

Track these metrics:

- Number of active suppliers
- Number of verified farms
- Number of active buyers
- Order volume
- Gross merchandise value
- Escrow transaction value
- Average delivery time
- Failed delivery rate
- Quality dispute rate
- Post-harvest loss reduction
- Platform commission revenue
- Logistics margin revenue

## 14. One-Line Value Proposition

Oja direct helps Nigerian farmers sell directly to serious buyers through verified logistics, quality control, and OPay escrow-protected payments.
