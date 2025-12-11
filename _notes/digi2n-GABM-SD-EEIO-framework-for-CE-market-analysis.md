---
title: Generative Agent Based Modelling + System Dynamics + Environmentally Extended Input Output model framework for Circular Economy Market Analysis
date: 2025-12-08 Mon 13:18
permalink: /notes/digi2n-GABM-SD-EEIO-framework-for-CE-market-analysis/
perma_id: id202512081318
redirect_from:
  - /id202512081318/
aliases:
  - id202512081318
author: Janne M. Korhonen
license: Copyright
copyright_year: 2025
layout: single
author_profile: false
toc: true
categories:
  - Notes
tags:
  - ABMs
  - CircularEconomy
  - Markets
  - Analysis
  - Research
  - LLMs
  - AI
  - Tools
published: false
last_update: 2025-12-08 Mon 15:23
modified:
---

*Part of the [DYNAMO project (2025-2028)]().*

Version: 2025-12-08

## Why CE market analysis needs ABM and system dynamics (and why EEIO alone falls short) 
A critical review by [Walzberg et al. (2021)](https://doi.org/10.3389/frsus.2020.620047), outlines why static, top-down industrial-ecology methods don’t capture the forces that actually determine circular economy (CE) market outcomes.

The short version of their argument is below.

1. CE transitions are dynamic, behavioural and path-dependent
2. CE strategies hinge on market potential, not just technical potential
3. CE markets depend on heterogeneous actors
4. CE markets contain feedback loops and rebound effects
5. CE transitions require multi-sector, multi-actor co-evolution
6. Many CE impacts are caused by decisions not visible in EEIO
## CE transitions are dynamic, behavioural and path-dependent

### CE markets evolve over time, not in snapshots

The review stresses repeatedly that the shift from linear to circular systems is a **dynamic socio-technical transition**, driven by changes in:

- consumer adoption
- business models
- regulatory conditions
- material availability over time

Industrial ecology methods—LCA, MFA, EEIO—are fundamentally **static**. Even “dynamic LCA” is still limited to exogenous time profiles, not endogenous behavioural feedbacks (pp. 4–6; 12–14). EEIO is explicitly a **snapshot of an economy**, often with decade-old data (p. 5).

System dynamics (SD) and ABM are the only methods designed to simulate **feedback loops, delays, stock accumulation and behavioural change**—all the mechanisms by which CE markets actually transform (pp. 7–8; 12–14).

### CE strategies hinge on market potential, not just technical potential

On p. 10 and in Figure 3, [Walzberg et al.](https://doi.org/10.3389/frsus.2020.620047) make a crucial distinction:

- **Technical potential** – what could happen if technology were adopted everywhere.
- **Economic potential** – what is economically viable.
- **Market (achievable) potential** – what actually happens when people and firms change behaviour at realistic rates.

Only **SD and ABM** can represent the market potential, because only they model:

- heterogeneous consumers and firms
- adoption behaviour
- social influence and norms
- bounded rationality
- competition/cooperation in networks

Industrial ecology methods **fundamentally cannot** model market potential (Figure 3) because they have no representation of agents making decisions.

For CE markets—repair, reuse, leasing, refurbishing, new service models—market potential is the entire story.

## CE markets depend on heterogeneous actors

### EEIO and LCA assume averaged or representative behaviour

EEIO aggregates all firms in a sector into a single “recipe”. LCA uses representative units and background databases. Both assume **homogeneous production and consumption**, which misses:

- niche second-hand markets
- early adopters
- laggards
- social diffusion effects
- local price differences
- heterogeneous business models

This problem is explicitly highlighted on p. 5: EEIO “represents production averages rather than specific products” and cannot represent new CE niches (e.g. repair, sharing economy).

By contrast, ABM generates CE market behaviour **from the bottom up**, letting market structure and diffusion emerge from heterogeneous decision rules.

### Real CE barriers are social, institutional and behavioural

[Walzberg et al.](https://doi.org/10.3389/frsus.2020.620047) repeatedly emphasise that CE transitions require **social change**, but industrial ecology methods do not model social networks at all (pp. 6–7).

ABM explicitly models:

- trust and cooperation in industrial symbiosis
- consumer psychology (e.g. Theory of Planned Behaviour models)
- effects of awareness campaigns, advertising, norms
- firm–firm negotiation
- network structure and emergent self-organisation

For CE markets—textiles, electronics, reuse, repair, service models—_behavioural dynamics are the main explanatory variable_.

## CE markets contain feedback loops and rebound effects

Feedback loops such as:

- lower material costs → increased consumption
- better recycling → lower waste fees → more waste generated
- improved service convenience → increased use

are central to CE policy analysis.

Static methods cannot capture these loops; SD is literally invented to do so (pp. 7–8).

[Walzberg et al.](https://doi.org/10.3389/frsus.2020.620047) stress the rebound effect in CE repeatedly (pp. 14–15), noting that ignoring feedbacks generates misleading results. ABM and SD allow rebound and unintended effects to emerge endogenously.

## CE transitions require multi-sector, multi-actor co-evolution

Circular markets involve **firms, consumers, waste operators, regulators, logistics providers, repairers**, all linked in a dynamic network.

EEIO sees only sectors. LCA sees only a predefined supply chain. MFA sees only material flows. None contain a model of:

- inter-firm negotiation
- entry/exit of business models
- competition between CE strategies (e.g. refurb vs. rental vs. resale)
- regulatory reactions
- infrastructure constraints and ramp-up times

ABM and SD can model **multi-level interactions** across micro (agents), meso (supply chains), and macro (flows/stocks) scales ([Waltzberg et al. 2021,](https://doi.org/10.3389/frsus.2020.620047) pp. 7–8; 12–14).

## Many CE impacts are caused by decisions not visible in EEIO

The review makes this clear on p. 5–6:

- second-hand markets often do not appear in IO tables
- reuse, repair, sharing are not captured
- informal sectors are invisible
- temporal stock accumulation (materials becoming available for reuse decades later) is missing

When you analyse CE markets like:

- textiles
- electronics repair
- household appliances
- reuse platforms
- refurbished phones
- leasing and product-as-a-service

EEIO frameworks simply do not contain the structural categories needed to represent these markets.

## Why ABM and SD are the natural choices for CE markets

[Walzberg et al.](https://doi.org/10.3389/frsus.2020.620047) provide a succinct justification (summarised from pp. 10–14):

**Agent-based modelling (ABM)** is ideal for CE because it:

- models heterogeneous consumers and firms
- captures non-rational and social decision-making
- includes social networks, trust, norms, diffusion
- naturally models dynamic adoption and market formation
- captures emergent phenomena and tipping points
- simulates business model competition
- includes feedback loops and rebound effects

**System dynamics (SD)** is ideal because it:

- represents stocks, flows, delays and feedbacks
- captures resource accumulation and availability
- models long-term transitions (decades)
- links physical flows with economic and social drivers
- reveals path dependency and lock-in

Both are dynamic, feedback-rich and behaviourally expressive—everything CE markets require.

## Why EEIO, MFA and LCA are not enough for CE markets

In one paragraph:

> Industrial ecology methods are indispensable for quantifying environmental loads, but they are **static, technology-focused and assume fixed behaviour**, which makes them unsuitable for analysing **CE market formation**, **behavioural adoption**, **business-model competition**, or **policy-driven transitions**. EEIO in particular is too aggregated, outdated, and blind to niche markets to represent CE strategies meaningfully. (Derived from [Walzberg et al. 2021](https://doi.org/10.3389/frsus.2020.620047), pp. 5–7; 10–14.)

Or more bluntly: they tell you _what happens if CE were adopted_, not _whether_ or _how_ it will be adopted.

## Takeaway for your literature review

This paper gives you a strong theoretical foundation:

1. **CE is fundamentally a socio-technical transition**, not a static efficiency improvement.
2. **Industrial ecology methods cannot model transitions**, only comparative impacts.
3. **CE markets depend on adoption, behaviour, networks, and feedback loops**.
4. **ABM and SD are built exactly for such systems**, and are the only methods capable of capturing market potential.
5. **Therefore, CE market analysis must include ABM and/or SD** to be meaningful.

This is essentially the methodological justification section for your DYNAMO CE-ABM / CE-SD review.

## Methods justification for studying circular-economy markets

_(Tailored for a Finnish CE context — suitable as a self-standing section in a literature review)_

### Why circular-economy markets cannot be analysed with static industrial-ecology tools

Circular-economy transitions in Finland—textile reuse and repair, refurbished electronics, biogas from waste streams, secondary materials markets, sharing-based mobility—do not behave like traditional supply chains. They form and evolve through **adoption**, **social diffusion**, **price expectations**, **policy sequences**, **firm entry and exit**, and **infrastructure ramp-up**.

Static methods such as LCA, MFA and environmentally extended input–output analysis (EEIO):

- assume **fixed technologies and fixed behaviours**;
- represent entire sectors as **averages**, making it impossible to model emerging CE niches;
- rely on **snapshot data**, often several years out of date;
- cannot represent **feedback loops**, **rebound effects**, or **lock-in dynamics**;
- cannot estimate **market potential**—only technical or economic potential.

As [Walzberg et al. (2021)](https://doi.org/10.3389/frsus.2020.620047) show, these methods systematically fail when a research question concerns **social change, consumer adoption, business-model competition or path dependence**, all of which define CE outcomes.

They tell you _what would happen if CE strategies were already adopted_, not _whether adoption will occur_, _how fast_, or _under what policy or market conditions_.

For Finnish policy questions—repair-right legislation, textile-to-textile recycling scale-up, subscription models for appliances, incentives for industrial symbiosis—this is a decisive limitation.

## Why agent-based modelling and system dynamics are necessary

The CE transition has the characteristics of a complex adaptive system. [Walzberg et al. ](https://doi.org/10.3389/frsus.2020.620047)frame this precisely: only **ABM** and **system dynamics (SD)** can represent the **market potential**, because only they model behavioural, technological and institutional co-evolution over time.

### Agent-based modelling (ABM)

ABM is needed when CE outcomes depend on **heterogeneous decisions**, such as:

- consumers differing in willingness to repair or buy refurbished;
- firms evaluating CE business models under uncertainty;
- adopters influencing each other through norms, trust or reputation;
- competition between CE strategies (repair vs. replace; leasing vs. resale);
- municipal actors, recyclers, and producers negotiating new roles.

ABM is the only method that can let **CE markets emerge from the bottom up**, based on decision rules anchored in empirical data (surveys, experiments, interviews). It is also the only method that can directly model **behavioural interventions**, such as awareness campaigns, deposit–refund schemes, or changes in convenience.

For a Finnish CE transition—particularly textiles, electronics and household waste—these are first-order drivers.

### System dynamics (SD)

SD is required when CE outcomes depend on **stocks, flows, delays and feedbacks**, such as:

- accumulation of reusable textiles in households before they enter reuse streams;
- delays in the emergence of repair capacity or recycling infrastructure;
- rebound effects (e.g. service models increasing total consumption);
- material-flow bottlenecks at regional or national scale;
- long-run loop closure (waste → secondary materials → production).

SD captures the **macro-trajectory**: how policies shape long-term flows of materials, emissions, and capital investment.

For analysis tied to Finland’s climate targets, biodiversity concerns and long-term resource security, this dynamic stock–flow perspective is essential.

## Why ABM + SD combined provide a complete picture

[Walzberg et al.](https://doi.org/10.3389/frsus.2020.620047) explicitly argue that no single method captures CE transitions holistically. ABM and SD represent the two halves of what CE markets require:

- **ABM**: micro-level, heterogeneous actors, social diffusion, competition, market formation.
- **SD**: macro-level material stocks, infrastructure capacity, feedback loops, long-term transitions.

Together they allow you to simulate how **market adoption** interacts with **material flows**, enabling questions such as:

- How quickly can textile-to-textile recycling scale up given consumer sorting behaviour?
- What CE business models become profitable under different tax or regulatory regimes?
- Could repair-right legislation backfire through rebound effects?
- Where are tipping points for CE uptake in electronics or appliances?
- How do infrastructure delays interact with demand growth and policy timing?

These are the questions Finnish CE policy and industry actors actually face—and they are questions static industrial ecology methods cannot meaningfully answer.

## Why EEIO remains necessary but insufficient

EEIO is still indispensable for **economy-wide environmental and economic impacts**, but [Walzberg et al.](https://doi.org/10.3389/frsus.2020.620047) show that EEIO must be coupled to dynamic models if used in CE contexts.

EEIO provides:

- broad economic coverage;
- complete accounting of monetary flows;
- integration with national statistics;
- top-down environmental impacts.

But EEIO structurally **cannot** represent:

- new CE niches (sharing, repair, resale, remanufacturing);
- emerging waste-management technologies;
- adoption dynamics or behavioural change;
- firm-level heterogeneity;
- temporal ramp-up of CE infrastructure;
- feedback loops that generate rebounds or lock-in.

For CE market analysis, EEIO should therefore be used **only as a complement**—to translate ABM/SD outputs into macro-level impacts, not to explain the market dynamics themselves.

## Final justification

To study and analyse circular-economy markets—especially in Finland’s policy context—models must capture:

- heterogeneity in consumer and firm behaviour;
- adoption and diffusion processes;
- social networks, norms and incentives;
- feedback loops, delays, and path dependence;
- dynamic stock–flow behaviour of materials and infrastructure;
- competition between CE strategies and business models.

Only **agent-based modelling** and **system dynamics** possess the required representational capacity. [Walzberg et al.’s ](https://doi.org/10.3389/frsus.2020.620047)review provides a firm methodological grounding for this choice and makes clear why industrial-ecology tools alone are inadequate for CE market questions.

## How EEIO and ABM/SD should be coupled

_(A practical, defensible approach for CE market modelling — aligned with [Walzberg et al. 2021](https://doi.org/10.3389/frsus.2020.620047))_

The short version: **ABM/SD simulate how circular markets form and evolve; EEIO translates those dynamic outcomes into system-wide environmental and economic impacts.**  

Trying to use EEIO _inside_ the decision-making dynamics is almost always a mistake. EEIO is too aggregated, too static and too coarse. It should sit at the _end_ of the causal chain, not the beginning.

Here’s the long version, laid out in a way you can directly use in DYNAMO documentation.

## 1. Conceptual division of labour

### ABM/SD handles

**Behaviour, market formation, technology adoption, policy response, and system dynamics.**  

This includes:
- consumer adoption (repair, reuse, substitution, leasing);
- firm entry/exit and changes in business models;
- infrastructure ramp-up and operational capacity limits;
- stock–flow dynamics of materials (SD);
- social influence, norms and bounded rationality (ABM);
- price, quality and convenience trade-offs;
- policy levers and compliance behaviour.

**Economy-wide upstream and downstream consequences.**  

This includes:
- embodied emissions and resource use;
- indirect impacts across all sectors (raw materials, transport, energy, services);
- employment and value added in all affected sectors;
- trade and leakage effects;
- rebound _elsewhere_ in the economy (if consumption shifts).

[Walzberg et al.](https://doi.org/10.3389/frsus.2020.620047) describe this complementarity explicitly: industrial ecology methods (EEIO/MFA/LCA) assess _sustainability_, while ABM/SD captures _market potential and transitions_—and neither is sufficient alone.

## 2. The coupling workflow (recommended architecture)

![The coupling workflow](/images/GABM-SD-EEIO_framework_2025-12-08_Slide11_The_Coupling_Workflow.PNG)

### Step 1 — ABM/SD simulates the CE transition over time

Each time-step produces an **endogenous market state**, e.g.:
- market shares of CE strategies (reuse, repair, leasing, recycling, remanufacturing);
- changes in product lifetime distribution;
- material flow changes (secondary vs primary materials);
- service-model adoption;
- waste generation and sorting rates;
- investment decisions by firms.

These outputs reflect **actual adoption**, not “technical potentials”.

### Step 2 — Convert ABM/SD outputs into EEIO-compatible final demand vectors

EEIO requires changes in **sectoral final demand** or **technical coefficients**.  

Your mapping layer takes ABM/SD outputs and:
- allocates changes in consumption to relevant EEIO sectors;
- adjusts quantities of primary/secondary materials;
- alters spending patterns (e.g. reduced new purchases, increased repair services);
- updates waste treatment and recycling industry outputs;
- modifies import shares if relevant.

This creates a **delta-FD(t)** or “scenario demand vector” for each year.

### Step 3 — Run the EEIO model for each ABM/SD scenario year

EEIO then computes:
- indirect emissions across the supply chain;
- upstream resource extraction avoided or shifted;
- energy-use changes;
- macroeconomic impacts (output, jobs, imports/exports).

Because the ABM/SD model evolves annually (or quarterly), EEIO can be run sequentially as a **dynamic hybrid model**: each year uses the modified demand structure created by the transition.

### Step 4 — Feed aggregated results back to the SD model (optional)

In many cases, macro feedback matters. For example:

- if EEIO shows reduced electricity demand, SD may adjust grid loads;
- if reduced imports lower prices, ABM demand functions may shift;
- if macroeconomic changes affect incomes, consumer behaviour may change.

This creates a **two-way soft coupling**, but keep it minimal.  

Full bidirectional coupling easily becomes unstable, opaque, and unjustifiable.

## 3. Three levels of coupling (choose one)

### **A. Sequential coupling (recommended default)**

ABM/SD → EEIO  
Impact results do _not_ flow back.

Use this when:

- rebound effects are negligible or out of scope;
- you need clear, auditable policy results;
- the EEIO database is not recent enough for tight coupling.

This works very well for Finnish CE sectors with clear material footprints: textiles, electronics, plastics, construction.

### **B. Soft iterative coupling**

ABM/SD → EEIO → SD/ABM

Introduce selective feedbacks: e.g. changes in energy prices, material prices, employment, or household budgets.  
Used when:

- CE transitions significantly alter upstream sectors (energy, chemicals, metals);
- those upstream changes influence CE adoption behaviour.

### **C. Strong hybrid coupling (rarely justified)**

ABM/SD uses EEIO-derived multipliers continuously inside decision rules.

This is technically possible but methodologically fragile. [Walzberg et al.](https://doi.org/10.3389/frsus.2020.620047) point out that **EEIO’s static, aggregated structure makes strong coupling misleading**, especially in CE niches or early-stage transitions.

Only use strong coupling for stable markets with mature CE sectors, which Finland does not yet have.

## 4. What this looks like in practice for Finnish CE modelling

### Textiles (DYNAMO DIGI2N)

- ABM simulates consumer sorting, repair use, resale behaviour, rental adoption.
- SD simulates flows of fibre, textile stocks, and recycling capacity build-out.
- Outputs convert into EEIO adjustments: reduced virgin textile imports; increased repair-service demand; increased domestic labour inputs.
- EEIO calculates macro impacts on emissions, employment, trade.

### Electronics / appliances

- ABM simulates refurbished device adoption, subscription models, repair preference.
- SD simulates stock of in-use devices, return flows and obsolescence.
- EEIO quantifies upstream metal extraction avoided, and energy use shifts.

### Plastics / packaging

- ABM captures consumer uptake of reuse/refill.
- SD tracks polymers, recycling capacity, leakage.
- EEIO calculates the upstream chemical/resin impacts avoided.

### Construction and demolition

- SD models long-lived material stocks and availability of secondary aggregates.
- ABM (for firms) models adoption of circular procurement or industrial symbiosis.
- EEIO quantifies national-level shifts in raw material extraction, transport, and emissions.

## 5. Why this coupling is theoretically defensible

Walzberg et al. emphasise two essential features:

1. **Industrial ecology (EEIO/LCA/MFA) ≠ transition modelling.**  
    Static, technology-focused, not behavioural; cannot represent adoption or feedbacks.
2. **Complex-systems methods (ABM/SD) ≠ comprehensive environmental accounting.**  
    They simulate behaviour and dynamics but lack full supply-chain coverage.

A hybrid ABM/SD → EEIO architecture resolves both limitations:

- ABM/SD generates **credible transition pathways**;
- EEIO measures **economy-wide consequences**.

This is exactly the combination [Walzberg et al.](https://doi.org/10.3389/frsus.2020.620047) recommend (Fig. 3, Table 1 in the paper).

## 6. A clean way to phrase this in your literature review

You can use this wording almost verbatim:

> “Agent-based and system-dynamics models should be used to simulate the behavioural and technological evolution of circular-economy markets—i.e. the market potential—while environmentally extended input–output analysis should be used downstream to quantify the system-wide economic and environmental impacts of those transition pathways. This sequential coupling preserves the strengths of each method and avoids embedding static EEIO assumptions inside dynamic transition processes.”


## Conceptualising an ABM + SD + LLM (“GABM”) framework for CE markets

Let’s treat this as a three-layer system:

- **ABM**: who does what, when, and with whom in CE markets.
- **SD**: how materials, capital, and infrastructure accumulate and interact over time.
- **LLM / GABM layer**: how we _specify_ and sometimes _update_ behaviour, perceptions and narratives, without pretending the LLM is “the data”.

Below is a conceptual architecture.

![Conceptual model of GABM+SD model](/images/GABM-SD-EEIO_framework_2025-12-08_Slide5_conceptualizing_GABM.PNG)

## 1. Roles of each modelling layer

### Agent-based model (ABM): micro-level CE market formation

ABM represents:

- **Consumers** deciding between new, refurbished, repaired, rented, or shared products.
- **Firms** choosing whether and when to invest in CE business models (repair, leasing, take-back, textile-to-textile recycling, etc.).
- **Public actors** (municipalities, agencies) designing and implementing schemes (sorting rules, deposit–refund, procurement criteria).

The ABM produces, per time-step:

- adoption rates of CE options;
- market shares of business models;
- behavioural indicators (sorting participation, repair frequency, rental churn);
- firms’ entry/exit and investment patterns.

### System dynamics (SD): macro stock–flow and feedback backbone

SD represents:

- **Material stocks** (textiles in use, in wardrobes, in second-hand channels; electronics in households; building stocks).
- **Infrastructure stocks** (recycling plants, repair capacity, logistics).
- **Delays and feedbacks** (technology ramp-up, policy implementation lag, rebound effects).

The SD layer takes micro outcomes from ABM (adoption, waste generation, service use) and:

- updates stocks and flows of materials and capacity;
- computes intermediate indicators (availability of secondary fibres, biogas output, landfill volumes);
- feeds back aggregate constraints to the ABM (e.g. “repair capacity saturated”, “recycling plant at 80 % utilisation”).

### LLM / GABM layer: behavioural, cognitive and narrative engine

Here “Generative ABM” (GABM) means ABM agents whose _decision rules, parameter ranges or responses_ are informed or periodically updated by a generative model, not that the LLM runs wild inside the simulation.

The LLM layer provides:

- **Behavioural rule generation** – turning qualitative descriptions (e.g. survey-based Finnish consumer clusters) into structured heuristics and state-dependent decision rules.
- **Priors for parameters** – ranges for willingness-to-pay, threshold distributions, perceived inconvenience, trust in policies, etc., which can then be calibrated.
- **Scenario narratives** – internally consistent “worlds” (e.g. strong repair culture vs. hyper-consumption) that define coherent sets of parameter changes across agents.
- **Synthetic responses** – for scarce cases, generating candidate response patterns that can be compared with and corrected by real survey data.

Crucially, the LLM layer is an _auxiliary inference engine_, not a replacement for empirical data or for the ABM/SD dynamics.

## 2. Modes of coupling LLMs to ABM+SD

For a policy-oriented CE project like DYNAMO, I’d distinguish three modes, in increasing riskiness.

### Mode 1: Design-time GABM (safe, recommended default)

LLM is used _before_ simulation runs, to help construct and parameterise the ABM/SD.

Examples:

- Take Finnish textile survey clusters. Use the LLM to flesh out each cluster’s attitudes, constraints and likely responses to specific CE policies and business models. Translate these into ABM decision rules (utility functions, thresholds, adoption propensities).
- Use LLM role-play with firm personae (e.g. SME textile recycler, electronics retailer) to elicit likely investment heuristics and risk thresholds, then formalise them in the ABM.
- Use LLM to generate internally coherent policy scenarios (“strong repair-right world”, “high carbon-price world”, “austerity world”) and derive parameter bundles for both ABM and SD.

Workflow:

1. Human defines concept (cluster / firm type / policy world).
2. LLM proposes detailed qualitative behaviour.
3. Researchers codify this into numerical rules and ranges.
4. ABM+SD run without the LLM in the loop.

This keeps the LLM’s influence explicit and auditable.

### Mode 2: Episodic in-loop consultation (experimental, bounded)

Here certain agents, or meta-agents, can query the LLM at _discrete moments_ during simulation, for example:

- When a new, qualitatively different policy is introduced (e.g. unexpected EU eco-design regulation), a government agent asks the LLM module for “likely firm reactions”, which are then converted into updated decision rules.
- When social norms shift (e.g. a scandal or media campaign in the scenario), consumer agents adjust their utility weights based on LLM-derived qualitative descriptions of attitude change.

Safeguards:

- Only a small set of high-level agents can access the LLM.
- Queries and responses are logged and post-processed (no raw free text directly changing behaviour).
- Any numerical parameters are constrained within empirically reasonable ranges.

This is closer to what some papers label “GABM”, but still disciplined.

### Mode 3: Fully generative agent cognition (research toy, not policy engine)

Each agent calls the LLM at decision time (“What do _I_ do now?”) and acts based on the generated response.

This is good for:

- exploring _plausible but not calibrated_ behavioural patterns;
- studying narratives and discourse, rather than robust policy impacts.

It is not suitable for Finnish CE policy analysis, because:

- it is unrepeatable and opaque;
- it confounds model structure with LLM biases;
- it is impossible to calibrate meaningfully to survey data.

For DYNAMO you can mention this mode as a future research avenue but keep it separate from the main, defensible architecture.

## 3. Data and validation flow

Conceptually, the data flows look like this:

1. **Empirical data** (surveys, interviews, market stats, case studies) →
2. **LLM-assisted conceptualisation**
    - cluster narratives;
    - firm heuristics;
    - scenario worlds.
3. **Formalisation into ABM/SD**
    - decision rules, parameters, network structures;
    - stock–flow structures and feedbacks.
4. **ABM+SD simulation** → dynamic CE transition pathways.
5. **EEIO post-processing** (as discussed earlier) → macro impacts.
6. **Validation**
    - compare ABM paths to historic data where available;
    - compare LLM-based priors to real survey responses (MAE, correlation, distributional checks);
    - stress-test key assumptions with sensitivity analysis.

The LLM layer is always book-ended by empirical checks and human interpretation; it never quietly writes the model for you.

## 4. How this helps answer CE market questions

With this ABM+SD+LLM/GABM framework, you can give a clean account of how each type of question is addressed:

- **How do consumer preferences for CE options evolve, and how can they be influenced?**
    - LLM: proposes behavioural rules and scenario-specific shifts for Finnish consumer clusters.
    - ABM: simulates uptake of repair, reuse, subscription, etc., under those rules.
    - SD: tracks resulting material flows and product lifetimes.
- **How do firms decide on CE investments?**
    - LLM: role-play-based heuristics for SMEs, municipalities, retailers.
    - ABM: firm agents compete/cooperate, invest or exit based on those heuristics and SD-level constraints.
    - SD: translates investments into infrastructure capacity and feedbacks.
- **What is the effect of policy packages (taxes, obligations, rights, standards)?**
    - ABM+SD: simulate behavioural change and stock–flow responses.
    - EEIO: give system-wide environmental and economic impacts.
    - LLM: support construction of plausible behavioural response scenarios and edge cases (e.g. unintended resistance, gaming, social backlash).

That gives you a coherent story: LLMs increase the **behavioural richness and scenario coverage** of your ABM+SD models, without being mistaken for ground truth.

## 5. A compact definition you can quote

For the report, you could define the approach roughly like this:

> “In this project we adopt a hybrid _Generative Agent-Based Modelling_ (GABM) framework, where an agent-based and system-dynamics model of circular-economy markets is supported by a large language model (LLM) layer. The LLM is used to generate and structure behavioural rules, parameter priors and scenario narratives for heterogeneous agents, based on empirical Finnish data and stakeholder input. The resulting decision rules are then formalised in the ABM+SD model, which simulates the dynamic evolution of circular-economy markets. Economy-wide environmental and economic impacts are assessed ex post using an environmentally extended input–output model. In this architecture, the LLM functions as an auxiliary inference and scenario tool, not as a replacement for empirical calibration or for the explicit dynamics of the ABM+SD model.”

That’s enough to make the GABM idea sound both modern and methodologically sane, while leaving room to scale up or down how “generative” you dare to be.

## Architectural design in Python Mesa

### Design goals

In Mesa, you want three things at once:

- A **core ABM engine** that stays stable.
- Plug-in **domain modules** (textiles, electronics, plastics, etc.).
- Optional **SD** and **LLM/GABM** layers that you can swap or ignore per project.

So the guiding principle: **separation of concerns** + **config-driven composition**.

I’ll sketch this as a package structure and the responsibilities of each layer.

## Top-level package layout

Imagine a Python package along these lines:

- `dynamo_ce/`
    - `core/` – Mesa abstractions and orchestration
    - `domains/` – textiles, electronics, plastics, etc.
    - `behaviour/` – decision rules, utility functions, learning modules
    - `sd/` – stock–flow and feedback structures
    - `llm/` – interfaces to LLM/GABM functionality
    - `policy/` – policy levers and institutional agents
    - `io/` – EEIO coupling, data export, run logging
    - `config/` – scenario definitions, parameter sets
    - `experiments/` – batch runners, sensitivity analysis

Everything ABM-related lives inside `core` + `domains` + `behaviour`; SD and LLM are separate services plugged into the Mesa model.

## Core: Mesa model + agent infrastructure

### `core/model_base.py`

Define a generic Mesa `Model` subclass, something like `CEMarketModel`, that is:

- **domain-agnostic** (no “textile” hard-coded);
- responsible for scheduling, time keeping, and calling SD & policy layers.

Key design choices:

- Use a **modular scheduler**: e.g. separate lists for consumers, firms, public actors, infrastructure operators.
- Provide a **service registry** on the model object (or a dependency injection pattern):
    - `sd_system` (stock–flow layer)
    - `policy_engine`
    - `llm_service` (optional)
    - `metrics_collector`

The model orchestrates calls in each step roughly like:

1. Read SD-level constraints and prices.
2. Step agents.
3. Aggregate agent outcomes (flows, investments, adoption).
4. Step SD system with those aggregates.
5. Log outputs for EEIO export.

All that as architecture, not code.

### `core/agent_base.py`

Base classes:

- `ConsumerAgentBase`
- `FirmAgentBase`
- `PublicActorBase`

Each base class:

- Knows about the **model services** (e.g. can query SD for prices/constraints).
- Delegates behaviour to pluggable **decision-rule strategies** from `behaviour/` (composition, not inheritance craziness).
- Only exposes high-level actions: “buy product”, “adopt CE option”, “invest”, “change price”, “launch campaign”.

This way, behavioural logic never hard-codes into agents; you can swap decision modules without rewriting classes.

## Domain modules: CE sectors as plug-ins

### `domains/textiles/`

Contains:

- `agents.py` – `TextileConsumer`, `TextileFirm`, maybe `TextileSortingFacility`.
- `sd_structure.py` – textile-specific stocks/flows: in-use clothing, wardrobe stock, second-hand channels, textile waste, recycling capacity.
- `mapping.py` – mapping from simulation variables to EEIO sectors.

Similarly for `domains/electronics`, `domains/plastics`, `domains/construction`, etc.

Each domain module should:

- implement a small **registration function** that tells `CEMarketModel` what agents and stocks to create given a scenario config;
- register its **behavioural rule types** (e.g. “repair-inclined cluster rules”) and which agent classes they apply to.

The core model then instantiates domains based on configuration, not hard-coded imports.

## Behaviour layer: decision rules as swappable components

### `behaviour/decision_rules.py`

Here you keep **pure decision logic**, independent of Mesa:

- Utility calculations (price, quality, convenience, norms).
- Threshold models (e.g. adopt if neighbours > θ).
- Prospect-theory style choices.
- Investment heuristics (payback periods, risk thresholds).

Each rule should follow a simple interface, conceptually something like:

- `evaluate_options(state, agent_attributes, context) → choice`
- or `update_beliefs(experience, global_signals) → new_params`

Agents then hold a reference to one or more decision-rule objects and call them inside their `step()`.

### `behaviour/clusters.py`

Cluster-specific parameter bundles:

- Cluster definitions (from Finnish surveys).
- Default parameter ranges per cluster (WTP slopes, norm sensitivity, etc.).
- Mapping from cluster ID → specific decision-rule configuration.

This is exactly where the LLM/GABM layer can inject richer descriptions or priors, but the **execution** is still numerical and controlled.

## SD layer: stock–flow backbone

### `sd/system_base.py`

A generic interface for SD systems, without committing to any external SD library:

- Holds named **stocks** and **flows**.
- Exposes methods like “apply aggregated ABM outputs” and “advance one time-step”.
- Provides prices, capacities, constraints back to the ABM (e.g. marginal cost curves, utilisation rates).

### `sd/domains/`

Domain-specific SD structures:

- `textiles_sd.py` – wardrobe stock, waste streams, recycling capacity ramp-up, etc.
- `electronics_sd.py` – device stock, obsolescence rates, refurb capacity.

Each can be plugged into `CEMarketModel` via the service registry. The Mesa model does not care how the SD system is implemented internally as long as the interface is consistent.

## LLM / GABM layer: auxiliary inference, not runtime chaos

### `llm/interface.py`

Define a **clean, minimal service** with functions such as:

- “generate decision-rule template for cluster X (given textual description + survey stats)”;
- “suggest parameter ranges for WTP or thresholds”;
- “generate scenario narrative bundle for policy world Y”.

These are **offline tools** used at model-setup time and for scenario creation, not random calls during every tick.

If you later experiment with episodic in-loop calls (Mode 2 from earlier), extend the interface with carefully controlled methods like:

- “given this new policy shock, suggest qualitative adjustment to firm risk tolerance, bounded to [a,b]”.

But architecturally, keep LLM code quarantined in `llm/` and make it communicate via simple data structures (JSON/YAML configs, parameter dicts), not via hidden side-effects.

### `llm/personae/`

A small library of **persona templates**:

- “eco-conscious low-income urban consumer”,
- “repair-averse trend follower”,
- “conservative SME owner in waste sector”, etc.

Each template can be backed by survey cluster stats + LLM-enriched descriptions, and compiled into decision-rule configs for `behaviour/clusters.py`.

## Policy layer: levers and institutional logic

### `policy/engine.py`

A module that:

- reads scenario policy schedules from config (e.g. years when repair-right kicks in, VAT changes, deposit–refund level changes);
- applies their effects to ABM (taxes, subsidies, regulations) and SD (constraints, capacities).

Keep **policy logic independent** from agent code:

- Agents react to prices, regulations, and signals;
- The policy engine changes those variables over time;
- You can test policy packages by swapping config files, not rewriting code.

## EEIO coupling and output

### `io/eeio_coupling.py`

This is the bridge module that:

- collects simulation outputs (annual aggregates of sales, service volumes, material flows);
- maps them to EEIO sector-level final demand changes via `domains/*/mapping.py`;
- outputs clean time series (e.g. CSV/Parquet) for an external EEIO tool.

The Mesa model never needs to know the internals of the EEIO system, only that at the end of runs (or each year) it dumps a well-structured dataset.

### `io/metrics.py`

A flexible metrics system for:

- adoption rates, utilisation of capacities, distributional outcomes;
- per-tick and per-run logging;
- providing inputs for sensitivity analyses.

## Configuration and experiments

### `config/`

Human-readable scenario files (YAML/JSON):

- define which domains are active;
- pick cluster distributions;
- specify decision-rule sets (can reference LLM-generated configs);
- define policy timelines;
- select SD structures and parameters.

### `experiments/runner.py`

Batch runner that:

- takes scenario configs;
- instantiates `CEMarketModel` with chosen domains, SD, behaviour and policy configurations;
- runs multiple seeds;
- writes out both **ABM+SD outputs** and ready-for-EEIO aggregates.

## Summary in one breath

Architecturally, you want:

- a **single Mesa model class** that orchestrates time, services and domains;
- **agents that are thin shells** around decision-rule objects;
- a **separate SD service** providing stock–flow dynamics and constraints;
- an **LLM layer that only ever talks through configs and parameter sets**, never directly controlling simulation;
- domain modules that plug in agents, SD structures, and EEIO mappings;
- a configuration-driven experiment system so new sectors, policies, and cluster sets are added by adding modules and editing YAML, not by rewriting the core.

## References

Walzberg, J., Lonca, G., Hanes, R. J., Eberle, A. L., Carpenter, A., & Heath, G. A. (2021). Do We Need a New Sustainability Assessment Method for the Circular Economy? A Critical Literature Review. _Frontiers in Sustainability_, _1_. [https://doi.org/10.3389/frsus.2020.620047](https://doi.org/10.3389/frsus.2020.620047)