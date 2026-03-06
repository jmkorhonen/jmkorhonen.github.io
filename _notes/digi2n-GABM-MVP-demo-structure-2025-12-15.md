---
title: Minimum Viable Product demo of GABM/SD model - 15 Dec 2025 version
date: 2025-12-15 Mon 15:06
permalink: /notes/digi2n-GABM-MVP-demo-structure-2025-12-15/
perma_id: id202512151506
redirect_from:
  - /id202512151506/
aliases:
  - id202512151506
author: Janne M. Korhonen
license: Copyright
copyright_year: 2025
layout: single
author_profile: false
toc: true
categories:
  - Notes
  - Research
tags:
published: false
last_update: 2025-12-15 Mon 15:08
modified:
---
## Recommendation: build an MVP, but freeze the seams first

Given the three-month demo constraint, I’d proceed with an MVP **immediately**, but spend the first few days “designing by cutting joints”: define the handful of interfaces that must not churn (model orchestration, SD service interface, metrics/logging, EEIO export shape), then start writing runnable Mesa code that exercises them end-to-end. That is exactly what your architecture note is optimised for: **separation of concerns + config-driven composition**, with SD/LLM kept as pluggable services rather than baked into agents.

In other words: architecture as _contracts_, not architecture as _cathedrals_.

## MVP architectural structure for Python Mesa (conforming to your GABM/SD+EEIO note)

The MVP should implement the top-level package layout you already sketched: `core/`, a single domain (`domains/electronics/`), `behaviour/`, a minimal `sd/`, a minimal `policy/`, and `io/` for metrics + EEIO coupling, all wired by `config/`.

A concrete “minimum” that still conforms:

**`dynamo_gabm/core/`**  
Your architecture calls for one domain-agnostic Mesa model class that orchestrates steps in the order “read SD → step agents → aggregate → step SD → log/export”. Implement that now as `CEMarketModel` with a simple service registry (`sd_system`, `policy_engine`, `metrics_collector`, and a placeholder `llm_service=None`).  
Also add thin base agents (`ConsumerAgentBase`, `FirmAgentBase`, `PublicActorBase`) that delegate all choice logic to `behaviour/` strategies (composition over inheritance drama).

**`dynamo_gabm/domains/electronics/`**  
Keep it brutally narrow: laptops (or phones) only, and only a few actor types. Your note explicitly suggests `ElectronicsConsumer`, `ElectronicsFirm`, `ElectronicsRepairFirm`, plus `sd_structure.py` and `mapping.py` for EEIO bridging.  
The domain’s “registration function” is the critical seam: `register_domain(model, config)` creates agents and returns the domain’s EEIO mapping and any SD sub-structure hooks.

**`dynamo_gabm/behaviour/`**  
Put _all_ decision logic here, and make agents dumb shells. For the MVP, implement one decision interface such as `evaluate_options(state, agent_attributes, context) -> choice`, and one or two rule sets (e.g., “buy new vs refurbished vs used”, “repair vs replace”). This is straight from your note.

**`dynamo_gabm/sd/`**  
Do not build a full SD model. Build the interface: `SDSystemBase` holds named stocks/flows, ingests aggregated ABM outputs, advances one tick, and returns constraints/prices back to the ABM.  
For electronics, a minimal stock–flow is enough for a demo: “in-use devices”, “devices available for reuse/refurb”, “repair/refurb capacity”, “e-waste”. That matches your domain SD concept.

**`dynamo_gabm/policy/`**  
Implement `policy/engine.py` that reads a policy schedule from config and adjusts taxes/subsidies/service levels/constraints over time, without touching agent code.  
For MVP policies, pick just two levers that produce visible dynamics: e.g. “repair subsidy” and “refurbishment quality guarantee” (or “take-back requirement” affecting collection flow).

**`dynamo_gabm/io/`**  
Implement `metrics.py` and `eeio_coupling.py` early so every run emits clean outputs. Your note is explicit: collect annual aggregates, map via `domains/*/mapping.py`, output time series for external EEIO tooling.  
Even if you don’t run a full EEIO in the demo, producing the correctly shaped outputs is the point.

**`dynamo_gabm/config/` and `experiments/`**  
A single YAML scenario should fully define which domain is active, the consumer cluster mix, policy timelines, and SD parameters. Then `experiments/runner.py` instantiates and runs batches/seeds.

## What to lift from Koide et al. into the MVP (useful, implementable, not a PhD trap)

Koide et al. give you several _MVP-friendly_ mechanisms for consumer-electronics CE that map cleanly onto your architecture.

First, their consumer choice is **bounded rational** with a staged process (awareness set → consideration set → utility choice). You can implement this as a `DecisionRule` pipeline in `behaviour/`, without complicating Mesa agents.

Second, they treat **social influence** in three modes (compliance via communication/ads, conformity via observing others, homophily shaping network ties). For an MVP, you can implement only conformity (simple threshold on neighbours’ adoption) and one “campaign exposure” term in utility; keep homophily as a later refinement.

Third, they model two obsolescence channels: **absolute** (failure) and **relative** (replacement for non-failure reasons) and emphasise heterogeneity by household characteristics. For MVP, you can approximate these with two hazards (or two probabilities) without implementing their full survival/proportional hazard machinery, but keep the _conceptual separation_ because it drives policy sensitivity (repair helps failures; marketing/norms drive replacements).

Fourth, their “circular strategies” vs “diffusion strategies” split is very usable as your **policy engine**: circular strategies change available channels (repair/refurb/reuse/recycle), diffusion strategies change prices, advertising intensity, warranties/service quality. That division will make your demo scenarios legible to non-modellers.

## The MVP scope that won’t implode

If you want something demoable rather than merely “architecturally correct”, the MVP should prove one thing: **policy levers change market shares and material flows through behaviour + constraints** (ABM ↔ SD), and it exports EEIO-ready aggregates. That’s the thesis of the architecture document in miniature.

Everything else—LLM-generated personas, elaborate networks, rich firm strategy, full EEIO feedback—can remain stubs behind interfaces. Future-you can fill them in when present-you has already secured the demo and avoided a beautiful, empty repository.