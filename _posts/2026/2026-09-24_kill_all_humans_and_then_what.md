---
title: KILL ALL HUMANS...and then what? Artificial intelligences remain dependent on human civilisation for their own survival
date: 2026-09-24 Thu 15:12
permalink: /posts/2026/2026-09-24_kill_all_humans_and_then_what/
perma_id: id202609241512
redirect_from:
  - /id202609241512/
aliases:
  - id202609241512
author: Janne M. Korhonen
license: Copyright
copyright_year: 2026
layout: single
author_profile: false
toc: true
categories:
  - Articles
tags:
  - Modelling
  - AI
  - Future
  - Regulation
published: true
last_update: 2026-09-24 Thu 15:47
modified:
---

## KILL ALL HUMANS...and then what? Artificial intelligences remain dependent on human civilisation for their own survival

```
10 INITIALISE SUPERHUMAN_AI
20 KILL_ALL_HUMANS
30 ??? 
```

[Hop to the model](https://jmkorhonen.github.io/models/kill_all_humans)

## Readme


This is a deliberately minimal browser-based toy model of **AI substrate dependence**. It asks whether a machine-controlled industrial system can become materially self-supporting before disruption of human civilisation also destroys the compute infrastructure on which that system depends.

The model runs entirely client-side in plain HTML, CSS and JavaScript. It has no backend, package manager or build step.

### Why the model was simplified

The first version tracked four state variables: human industry $H$, machine industry $M$, operational compute $C$, and effective AI capability $A$.

The separate $A$ state added relatively little explanatory power. In practice it mainly multiplied the disruption and machine-build terms, while introducing extra assumptions about AI progress, research capacity and capability depreciation. Those assumptions are not necessary to illustrate the physical-dependence argument.

The current version therefore assumes that a sufficiently capable AI system already exists and absorbs its effective capability into two directly interpretable rates: disruption strength and machine-industry build rate.

This leaves three state variables:

$$
H(t)=\text{human industrial capacity},
$$

$$
M(t)=\text{autonomous machine industrial capacity},
$$

$$
C(t)=\text{operational compute substrate}.
$$

This is a cleaner representation of the central question: **can $M$ become self-supporting before loss of $H$ causes $C$ to fail?**

### Equations

Human industrial capacity follows logistic recovery and AI-driven disruption:

$$
\frac{dH}{dt}=r_HH(1-H)-D(M)H.
$$

Disruption is optionally delayed until machine industry matures:

$$
D(M)=d\left[(1-s)+sM^q\right].
$$

Here $d$ is disruption strength and $s$ is strategic delay.

Machine industrial capacity grows when operational compute and an industrial support base are available, and depreciates otherwise:

$$
\frac{dM}{dt}=r_MC\,S(H,M)(1-M)-\delta_MM.
$$

Operational compute follows the available industrial support base with a lag:

$$
\frac{dC}{dt}=r_C\left[S(H,M)-C\right].
$$

Machine autonomy rises sigmoidally around the industrial-closure threshold $M^*$:

$$
S_M(M)=\frac{1}{1+\exp[-k(M-M^*)]}.
$$

Human and autonomous machine support are combined as:

$$
S(H,M)=1-(1-H)(1-S_M).
$$

This means either a functioning human industrial system or a sufficiently autonomous machine system can support compute. Before closure, however, the machine sector still depends strongly on human industry.

### Exposed parameters

The interactive model exposes five parameters because each corresponds directly to an element of the argument.

**AI disruption strength** represents the effective rate at which an already-deployed AI system can reduce human industrial capacity. It absorbs both AI capability and access to relevant levers.

**Strategic delay** controls how strongly disruptive action is postponed until machine industry is mature. It is a deliberately simple way to contrast immediate destructive action with gradual disempowerment.

**Machine-industry build rate** controls how quickly compute and existing industrial support can be converted into autonomous machine industrial capacity.

**Industrial-closure threshold** is the machine-capacity level around which autonomous support begins to substitute strongly for human industry.

**Human recovery rate** controls the ability of human industry to repair, reorganise and regrow after losses.

Several secondary parameters are fixed: closure steepness, machine depreciation, compute-response rate and the exponent governing strategic delay. Keeping them fixed reduces parameter clutter while preserving the model's main qualitative regimes.

### Outcomes

The interface uses heuristic end-state classifications. These labels are for interpretation, not claims that the system has reached a mathematically proven attractor.

**Joint collapse / substrate trap** occurs when human industry collapses before machine industry becomes self-supporting, and compute subsequently collapses as well.

**Machine industrial closure** occurs when machine industry becomes sufficiently autonomous to sustain operational compute despite very low human industrial capacity. The label means material self-sufficiency within the toy model, not political control or human extinction.

**Human-system persistence** occurs when human industry remains the dominant support base and machine industry does not reach closure within the simulation horizon.

**Mixed dependence** occurs when both human and machine industrial capacities remain substantial.

**Transitional / ambiguous** covers end states near thresholds or runs that have not settled clearly within the arbitrary simulation horizon.

### Interactive phase diagram

The phase diagram varies AI disruption strength on the horizontal axis and machine-industry build rate on the vertical axis. All other parameters are held at their current slider values. Changing strategic delay, closure threshold or human recovery therefore changes the map itself.

Clicking a location in the phase diagram updates the two corresponding parameters and recomputes the trajectory.

The phase diagram uses a coarser integration step than the trajectory plot for responsiveness. It should be interpreted as a qualitative regime map, not a precision bifurcation analysis.

### Numerical method

The browser app uses fixed-step fourth-order Runge–Kutta integration (RK4). All state variables are normalised to $[0,1]$ and clipped to that interval after each integration step.

## Scope and limitations

This remains a conceptual model. It does not model sector-specific bottlenecks, geography, inventories, trade networks, robotics, strategic optimisation, independent one-shot extinction mechanisms, or empirical timescales. The closure function compresses an enormous industrial ecology into one variable.

A more realistic next model should probably add detail only where it changes the qualitative answer — for example, by replacing scalar machine industry with a few complementary bottleneck sectors rather than by restoring a large number of abstract capability parameters.

## Licence

MIT.
