---
title: "Example of research dialogue with Claude Opus"
date: 2026-03-06 Fri 17:50
permalink: /notes/digi2n-GABM-Claude_Opus_example_analysis/
perma_id: id202603061750
redirect_from:
  - /id202603061750/
aliases:
  - id202603061750
author: Janne M. Korhonen
license: Copyright
copyright_year: 2026
layout: single
author_profile: false
toc: true
categories:
  - Notes
tags:
  - LLM
  - AI
published: true
last_update: 2026-03-06 Fri 18:06
modified:
---
*This is a part of a longer conversation between me and Claude Opus 4.6 Extended; we're working on a method/conceptual paper draft discussing how to use LLMs to simulate human decision-makers in agent-based models meant to analyse circular economy markets. My inputs are in italics and in* 

>*quotes.*

*We are testing how well LLM agents who are given a "role" to play, based on six clusters of European consumer attitudes identified by Bassi (2023), can play actual humans. A Python script administered these LLM models a choice experiment (30 smartphone choice scenarios grouped into five categories) to test if the utility weights generated from the choice experiment can outperform the "baseline" benchmark generated simply by unprimed Claude making an educated guess of how humans would assign utilities to choices the ABM simulation includes.

*I've uploaded a JSON file containing the results from one model run and asked Claude's opinion of the results.* 

These are striking results, and not in a good way. Let me break down what's happening.

**The LLM performs worse than the rule-based defaults.** Overall MAE is 0.148 versus the baseline's 0.104. The simple heuristics outperform the LLM on the actual task the G-layer needs to do. That's a sobering finding.

**The core problem: a massive quality/warranty bias.** Every single persona gets `w_quality` as the dominant weight — 0.388, 0.500, 0.459, 0.439, 0.528. The LLM is systematically over-weighting warranty in its choices regardless of the persona description. In the benchmarks, quality is never the top weight for any cluster. This is the top-1 rank accuracy: 0/6. The LLM appears to have a strong prior that warranty length matters most in purchase decisions, and this prior overwhelms the persona-specific signals.

**Clusters 1 and 2 are still identical** — 30/30 same choices. The LLM couldn't differentiate the most concerned consumer from the most behaviourally active one. Their descriptions are qualitatively different (Cluster 1 is attitude-driven, Cluster 2 is action-driven), but the LLM treats them identically in choice behaviour. Clusters 5 and 6 are nearly identical too (29/30).

**The refurbished choice rates are compressed.** The range is only 47%–67%, compared to the benchmark trust range of 0.10–0.60. The LLM doesn't differentiate enough on circular trust. Cluster 6 (benchmark trust: 0.10) chooses refurbished 50% of the time — far too high. Cluster 5 (benchmark: 0.15) chooses it 47%. The disengaged personas should be much more reluctant to choose refurbished products.

**The good news: eco-label coefficient direction is correct.** Clusters 1-2 have positive eco-label coefficients (prefer eco), Clusters 4-6 have negative (avoid eco), and Cluster 3 is weakly positive. That's the right gradient and shows the LLM is making _some_ persona-appropriate distinctions.

**Cluster 4 is actually the best result** (MAE=0.089, ρ=0.800). The detached pragmatist's profile — price-sensitive, quality-focused, eco-sceptical, socially influenced — comes through clearly in the choices. The LLM correctly makes this persona avoid eco-labelled products and respond to social proof.

**What this means methodologically:** The direct elicitation approach (asking the LLM for utility weights) might actually outperform the choice experiment approach, because the choice task introduces a new source of bias — the LLM's own implicit assumptions about what matters in purchase decisions (apparently: warranty). The choice experiment is more rigorous in principle, but it requires the LLM to make 30 consistent trade-off decisions, and systematic biases in the LLM's decision-making get amplified through the logit estimation.

This is worth reporting as a negative finding. The choice experiment approach works for some dimensions (eco-label sensitivity, the engaged-vs-disengaged gradient) but fails on cardinal calibration due to the warranty bias. A possible fix would be to vary the scenario design — perhaps warranty dominates because it's the most concrete and easily compared attribute — or to use a larger scenario set that better identifies each parameter independently.

Want me to run it with behavioural descriptions too, or would you rather we step back and think about what this means for the overall validation strategy first?

> *Let's step back and think for a while.*
> 
> *Here's my stream of consciousness: We want to create a tool that helps us analyze circular economy markets. We've assumed that LLMs could help with the thorniest problem of ABMs, the simulation of human decision-making. And in some ways we've already proven they can. But what we haven't yet shown is that LLMs could be tuned to reliably produce responses mimicking those of actual human population distributions. We can reproduce a plausible human decision-maker, but not the real human decisions. Right?*
> 
> *So should we just dive deeper, and try to test if e.g. rich interview data would produce better alignment (as some studies have found out, at least in query response context)? Or should we rethink some of our assumptions?*

You're asking the right question at the right time. Let me think through this honestly.

The distinction you're drawing — _a_ plausible decision-maker versus _the_ real decisions — is the crux of it. And I think the evidence we've accumulated points to a fairly clear conclusion: LLMs are good at the first and unreliable at the second, and no amount of richer input data is likely to close that gap fully. Here's why.

The warranty bias in the choice experiment is revealing not as a specific bug but as an instance of a general problem. The LLM has its own implicit model of what matters in purchase decisions, built from its training data. When you ask it to role-play as a consumer, the persona description _modulates_ that prior — the eco-label gradient shows this — but it doesn't _replace_ it. The LLM's prior that warranty is the most important product attribute overwhelms the persona signal for every single cluster. Richer interview data might shift the balance somewhat, but you'd be fighting the model's priors on every dimension, and you'd never know in advance which priors would dominate.

This connects to a deeper issue. What we're trying to do — get an LLM to reliably reproduce the distributional properties of a specific human population — may be asking it to do something it's architecturally not suited for. LLMs learn to produce _typical_ text, which means they encode _average_ or _stereotypical_ patterns of human behaviour. They're good at recognising that "environmentally concerned European woman" implies certain things and "disengaged rural elderly man" implies others. But the specific quantitative relationships — that even disengaged Europeans rate climate as "fairly serious", that the most concerned segment only "tends to agree" rather than "totally agrees" on chemical concerns — these are distributional facts about a particular population at a particular time. They're not derivable from general knowledge about consumer archetypes.

So I think you're right to question the assumptions. The question is which ones.

The assumption I'd challenge isn't "LLMs can simulate human decision-making" — our survey results show they can, at a qualitative level. The assumption I'd challenge is "the G-layer should produce calibrated parameters that match real population distributions." That's a calibration task, and calibration requires empirical data. No amount of LLM sophistication substitutes for that.

But this doesn't mean the LLM role is worthless. It means it should be reframed. Consider what the LLM actually did well across all our tests. It correctly identified the ordinal structure of consumer heterogeneity — which segments are more green, more price-sensitive, more socially influenced. It produced internally consistent choice patterns — eco-label preference tracks green engagement, refurbished acceptance tracks trust. It distinguished engaged from disengaged segments on every dimension we tested. And it did all of this from textual descriptions alone, without any numerical input.

What it couldn't do was get the scale right. It couldn't tell you that w_green should be 0.45 rather than 0.35 for the highly concerned segment. It couldn't calibrate the refurbished choice rate to match the observed 21% second-hand purchase rate in Eurobarometer data. These are quantitative calibration targets that require empirical anchoring.

This suggests a different architecture for the G-layer than what we originally proposed. Instead of "LLM produces calibrated parameters," the role becomes something like: **LLM generates the qualitative structure of heterogeneity, empirical data calibrates the scale.**

In practice this might look like: the LLM reads a persona description and produces _relative_ parameter profiles — "for this segment, green preference is the dominant weight, price is secondary, social influence is minimal." Then a calibration step anchors these relative profiles to empirical data. The Eurobarometer microdata gives you the anchors: the 21% second-hand purchase rate pins circular trust, the 58% willing-to-pay-more pins the green preference scale, the regression coefficients in Bassi's Table 6 pin the relative action probabilities per cluster. The LLM provides the shape, the data provides the scale.

This is actually a more defensible methodological contribution than the original framing, because it's honest about what LLMs can and cannot do, and it creates a clear division of labour. The LLM handles what's hard for traditional methods — translating qualitative descriptions into structured behavioural profiles with internal consistency across multiple dimensions. The empirical data handles what's hard for LLMs — calibrating those profiles to match observed behaviour in a specific market context.

For the paper, this reframing strengthens rather than weakens the contribution, because it addresses head-on the concern that any reviewer would raise: "how do you know the LLM parameters are right?" The answer becomes: "we don't claim they're right in absolute terms; we claim the LLM correctly structures the heterogeneity, and we show a calibration protocol for anchoring the structure to empirical data." The validation evidence supports this: 96% adjacent match on survey attitudes (correct structure), 50% exact match (wrong scale); correct eco-label gradient across segments (correct structure), wrong warranty dominance (wrong scale).

The practical implication for the prototype is that the G-layer's output should probably be ordinal rankings and relative magnitudes rather than point estimates — or if it produces point estimates, they should be explicitly treated as priors that get updated by an empirical calibration step. The system dynamics layer already has parameters that could serve as calibration targets (observed recycling rates, market shares, price elasticities from real markets). Connecting those to the agent parameters through a calibration loop would make the architecture much more grounded.

What do you think? Does this reframing of the G-layer's role match your intuition about where the value actually lies?