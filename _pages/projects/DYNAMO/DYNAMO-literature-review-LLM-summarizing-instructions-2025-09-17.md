---
title: 'DYNAMO Literature Review: Summarizing instructions for LLMs, version 2025-09-17'
date: 2025-09-17
permalink: /projects/DYNAMO/DYNAMO-literature-review-LLM-summarizing-instructions-2025-09-17/
tags:
- LLMs
- AI
- DYNAMO
- projects
- research
- reviews
---
# DYNAMO Literature Review Summarizing Instructions

This document defines the **canonical format and conventions** for summarizing academic and policy research articles relevant to the DYNAMO project. It ensures all summaries are consistent, comparable, and directly usable in analysis.

Version: 2025-09-17. [Up to date DYNAMO index is here](https://jmkorhonen.github.io/projects/DYNAMO/DYNAMO-index/).

---

## Output structure for each article

Each summary must include the following sections, in this order, using **bold headings**:

- **Bibliographic info**  
    Full citation in APA style (authors, year, title, journal, DOI/link).
- **Scope & system studied**  
    Sector, geography, and CE strategy addressed.
- **Model type & structure (ODD 2020 headings)**
    - Purpose and patterns
    - Entities, state variables, and scales
    - Process overview and scheduling
    - Design concepts
    - Initialization
    - Input data & calibration
    - Submodels / decision modules
- **Policy / strategy levers examined**  
    Which interventions or scenarios are tested (e.g. subsidies, taxes, regulations, adoption incentives).
- **Key findings**  
    Main dynamics, trade-offs, or emergent results reported.
- **Relevance for toolkit development**  
    How the methods/results could inform development of CE profitability calculators, market simulators, or policy analysis models.
- **Strengths & limitations**  
    Transparency, reproducibility, transferability to Finnish/EU contexts, integration with IO/LCA/EEIO where relevant.
- **Classification for review**  
    Choose one:
    - **Include in main review** (directly relevant to CE ABM/SD/toolkits)
    - **Background only** (contextual but not methodologically central)
    - **Exclude** (not relevant)

---

## Standardized terminology

- Always use **“decision modules”** for submodels/agent rules.
- Always report **Input data & calibration** together (data sources, parameters, estimation).
- Costs, subsidies, regulations, and incentives are always listed under **Policy / strategy levers**.
- If a model is not ABM/SD but e.g. IO, optimization, hybrid, still fit into the **ODD headings** to allow cross-comparison.
- Summaries must be concise but detailed enough for quick comparison.

---

## Example classification

- **Include in main review** → Articles presenting ABM/SD/IO or hybrid modeling frameworks for CE markets, supply chains, policies, or investments.
- **Background only** → Articles with useful context (e.g. CE strategies, waste statistics) but not methodologically central.
- **Exclude** → Articles without clear relevance to modeling CE systems.

---

## Example summary entry

**Bibliographic info**  
Gan, V.J.L., & Cheng, J.C.P. (2015). _Formulation and analysis of dynamic supply chain of backfill in construction waste management using agent-based modeling_. Advanced Engineering Informatics, 29(4), 878–888. [https://doi.org/10.1016/j.aei.2015.01.004](https://doi.org/10.1016/j.aei.2015.01.004)

**Scope & system studied**

- Sector: Construction waste management (excavated backfill).
- Geography: Hong Kong.
- CE strategy: Reuse of backfill between construction sites to reduce landfill disposal and costs.

**Model type & structure (ODD 2020 headings)**

- **Purpose and patterns**: Identify suitable modeling approaches for dynamic supply chains and evaluate ABM vs centralized optimization for backfill recovery.
- **Entities, state variables, and scales**:
    - Agents: Construction sites (producers, consumers, or both), landfills, commercial suppliers.
    - State variables: Backfill stock, excavation/backfilling schedules, cost parameters, site capacity.
    - Temporal scale: Monthly phases of construction projects.
    - Spatial scale: Regional network of sites in Hong Kong.
- **Process overview and scheduling**: Producers and consumers negotiate backfill exchanges via a contract-net protocol (task announcement, bidding, awarding); decisions update each time step. Centralized optimization model solves same network as a global optimum benchmark.
- **Design concepts**:
    - Emergence: Supply chain material flow patterns.
    - Adaptation: Agents respond to local availability, demand, and costs.
    - Interaction: Negotiation and bidding between agents.
    - Stochasticity: Incorporated via demand variation using stochastic programming.
- **Initialization**: Excavation/backfilling schedules of six construction sites; landfill and one commercial supplier.
- **Input data & calibration**: Empirical data on project schedules, transportation costs, material prices, and landfill disposal charges; parameters sourced from local construction/waste policies.
- **Decision modules**:
    - Producer module: Optimize export rate considering holding and dumping costs.
    - Consumer module: Optimize import rate to minimize holding/procurement costs.
    - Negotiation module: Contract net protocol for producer–consumer agreements.

**Policy / strategy levers examined**
- Waste disposal charges (government landfill levy).
- Coordination mechanisms: centralized optimization vs distributed ABM.

**Key findings**

- Centralized optimization yields slightly lower costs but requires unrealistic full information sharing.
- ABM produces near-optimal solutions while better reflecting decentralized decision-making, limited information exchange, and dynamic adaptability.
- ABM reacts faster to disturbances (new projects, delays) than centralized approaches.
- Trade-off: global optimality vs realism and resilience.

**Relevance for toolkit development**

- Strong demonstration of ABM for decentralized CE supply chains.
- Negotiation algorithms could inform CE market simulators matching supply and demand of secondary materials.
- Highly relevant for designing decision-support tools in CE logistics.

**Strengths & limitations**

- **Strengths**: Realistic modeling of decentralized actors; transparent comparison of centralized vs distributed approaches; case-based calibration.
- **Limitations**: Narrow focus (backfill only); simple case (one landfill, one commercial source); no direct integration with IO/LCA; global optimality not guaranteed.
- Transferability: Concepts transferable to EU/Finland in construction waste and industrial symbiosis contexts.

**Classification for review**  
Include in main review.
