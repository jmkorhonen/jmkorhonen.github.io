---
title: Architectural design of a GABM/SD+EEIO model in Python Mesa
date: 2025-12-12 Fri 13:24
permalink: /notes/digi2n-GABM-SD-EEIO-architectural-design-Python-MESA/
perma_id: id202512121324
redirect_from:
  - /id202512121324/
aliases:
  - id202512121324
author: Janne M. Korhonen
license: Copyright
copyright_year: 2025
layout: single
author_profile: false
toc: true
categories:
  - Notes
  - Research
  - Circular Economy
tags:
  - Tools
  - Projects/DYNAMO/Digi2n
  - Python
  - Modelling/ABMs
  - Markets
  - Economy
  - Environment
  - LLMs
  - AI
published: false
last_update: 2025-12-12 Fri 13:38
modified:
---
Version: 2025-12-12

*See also:* 
- [DYNAMO project (2025-2028)](/id202504010900/)
- [Generative Agent Based Modelling + System Dynamics + Environmentally Extended Input Output model framework for Circular Economy Market Analysis](/id202512081318/)
- [Use cases for GABM/SD+EEIO in Circular Economy market analysis](/id202512121308/)
## Architectural design of a GABM/SD+EEIO model in Python Mesa

### Design goals

In Mesa, you want three things at once:

- A **core ABM engine** that stays stable.
- Plug-in **domain modules** (textiles, electronics, plastics, etc.).
- Optional **SD** and **LLM/GABM** layers that you can swap or ignore per project.

So the guiding principle: **separation of concerns** + **config-driven composition**.

Below is a sketch of the package structure and the responsibilities of each layer.

## Top-level package layout

A Python package along these lines:

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

Defines a generic Mesa `Model` subclass, something like `CEMarketModel`, that is:

- **domain-agnostic** (no “textile” hard-coded);
- responsible for scheduling, time keeping, and calling SD & policy layers.

Key design choices:

- Uses a **modular scheduler**: e.g. separate lists for consumers, firms, public actors, infrastructure operators.
- Provides a **service registry** on the model object (or a dependency injection pattern):
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

This way, behavioural logic never hard-codes into agents. Decision modules can be swapped without rewriting classes.

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

Here lives the **pure decision logic**, independent of Mesa:

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

This is where the generative LLM layer can inject richer descriptions or priors, but the **execution** remains numerical and controlled.

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

Defines a **clean, minimal service** with functions such as:

- “generate decision-rule template for cluster X (given textual description + survey stats)”;
- “suggest parameter ranges for WTP or thresholds”;
- “generate scenario narrative bundle for policy world Y”.

These are **offline tools** used at model-setup time and for scenario creation, not random calls during every tick.

For later experiments with episodic in-loop calls (Mode 2), extend the interface with carefully controlled methods like:

- “given this new policy shock, suggest qualitative adjustment to firm risk tolerance, bounded to [a,b]”.

But architecturally, LLM code should be kept quarantined in `llm/` and made to communicate via simple data structures (JSON/YAML configs, parameter dicts), not via hidden side-effects.

### `llm/personae/`

A small library of **persona templates**:

- “eco-conscious low-income urban consumer”,
- “repair-averse trend follower”,
- “conservative SME owner in waste sector”, etc.

Each template can be backed by survey/interview cluster stats + LLM-enriched descriptions, and compiled into decision-rule configs for `behaviour/clusters.py`.

## Policy layer: levers and institutional logic

### `policy/engine.py`

A module that:

- reads scenario policy schedules from config (e.g. years when repair-right kicks in, VAT changes, deposit–refund level changes);
- applies their effects to ABM (taxes, subsidies, regulations) and SD (constraints, capacities).

Keeps **policy logic independent** from agent code:

- Agents react to prices, regulations, and signals;
- The policy engine changes those variables over time;
- Policy packages can be tested without rewriting code by swapping config files.

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

- defines which domains are active;
- picks cluster distributions;
- specifies decision-rule sets (can reference LLM-generated configs);
- defines policy timelines;
- selects SD structures and parameters.

### `experiments/runner.py`

Batch runner that:

- takes scenario configs;
- instantiates `CEMarketModel` with chosen domains, SD, behaviour and policy configurations;
- runs multiple seeds;
- writes out both **ABM+SD outputs** and ready-for-EEIO aggregates.

## Summary in one breath

Architecturally, we want:

- a **single Mesa model class** that orchestrates time, services and domains;
- **agents that are thin shells** around decision-rule objects;
- a **separate SD service** providing stock–flow dynamics and constraints;
- an **LLM layer that only ever talks through configs and parameter sets**, never directly controlling simulation;
- domain modules that plug in agents, SD structures, and EEIO mappings;
- a configuration-driven experiment system so new sectors, policies, and cluster sets are added by adding modules and editing YAML, not by rewriting the core.

## References

