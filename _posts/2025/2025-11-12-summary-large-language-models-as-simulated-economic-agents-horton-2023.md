---
title: "Summary: Large Language Models as Simulated Economic Agents (Horton 2023)"
date: 2025-11-12
permalink: /posts/2025/2025-11-12-summary-large-language-models-as-simulated-economic-agents-horton-2023/
categories:
- Notes
tags:
- Research
- Summaries
- AI
- LLMs
- Technology
- Modelling, Agent-Based
- Project DYNAMO, Digi2n
- Notes
---
[Horton (2023)](https://doi.org/10.48550/arXiv.2301.07543) proposes simply and modestly using LLMs as computational analogues to *"homo economicus,"* or as *"homo silicus"*, to explore theoretical scenarios and reveal qualitative behavioral patterns that are similar to human experiments. The preprint also contains a cogent response to usual criticisms.

>Horton, J. J. (2023). _Large Language Models as Simulated Economic Agents: What Can We Learn from Homo Silicus?_ (arXiv:2301.07543). arXiv. [https://doi.org/10.48550/arXiv.2301.07543](https://doi.org/10.48550/arXiv.2301.07543)

Horton is careful to stress that LLMs can’t replace empirical work. However, they could **accelerate discovery**: they permit cheap, rapid, ethically uncomplicated pre-tests of hypotheses that guide later real-world studies.  (Similar arguments and demonstrations have been made by e.g. [Aher et al. 2023](https://doi.org/10.48550/arXiv.2208.10264)) Like _homo economicus_, _homo silicus_ is “wrong but useful.” 

Horton envisions a norm of reproducible, open “push-button” LLM experiments that others can rerun and vary.

Perhaps the most interesting part of the paper is Horton's cogent argumentation about why LLMs are potentially useful. 

First, **they are implicit computational models of humans**. Since they are trained to respond realistically to human language, they also encode patterns of human reasoning and social behaviour. 

Second, **they contain latent social knowledge.** Because their training data include countless examples of people reasoning about economic and moral problems, they implicitly embody human heuristics, preferences, and conventions.

Horton anticipates and rebuts several objections:

- **“Garbage in, garbage out.”** Horton concedes that LLMs are trained on messy human text, but argues that social data are always messy, and usefulness matters much more than purity. Following Milton Friedman’s methodological pragmatism, he says what counts is whether the model yields insight or predictive value. Furthermore, LLMs don’t simply average their data: they generate conditional responses based on prompts, so researchers can “steer” them to relevant sub-distributions.
- **“They only simulate statements, not real behaviour.”** Horton counters that much of the training corpus includes people reasoning about genuine choices, not merely declaring them. Moreover, social science often seeks directional effects, not exact behavioural frequencies.
- **“They are just agent-based models.”** A perennial problem with agent-based models (ABMs) is ensuring the models tell something from the world beyond what researchers have (unintentionally or not) programmed the model to do. Horton argues this is an important distinction: in ABMs, researchers code the rules; with LLMs, the “rules” are emergent from training and not under direct control, making them closer to _black-box human proxies_ than scripted agents.
- **“Performativity.”** Ironically, one of the most common arguments against LLMs - that they hallucinate or confabulate responses - *also* means that LLMs are not simply regurgitating something they have already "read" in their training corpus. LLMs might still parrot existing theory because they’ve read it, but Horton notes that they often fail to recall exact results or apply them correctly. Avoiding textbook framings can further reduce this bias.
- **“N = 1 problem.”**  While there’s only one underlying model, different “personas” can be created via prompts or fine-tuning, akin to giving experimental subjects different information cards. Random sampling (e.g. by model temperature) produces stochastic variation.

## Experiments
To illustrate the possibilities, Horton re-runs four classical behavioural economics experiments with ChatGPT's GPT-3.

- **Dictator games (Charness & Rabin 2002):** LLMs reproduce predictable shifts when “endowed” with self-interested, fairness-oriented, or efficiency-oriented motives.
- **Fairness in markets (Kahneman, Knetsch & Thaler 1986):** LLMs judge price gouging similarly to humans, with responses varying by “political” conditioning.
- **Status quo bias (Samuelson & Zeckhauser 1988):** LLMs show preference for the presented status quo option.
- **Minimum-wage hiring (Horton 2023):** Simulated employers reproduce labour-labour substitution effects.

The four re-run experiments collectively demonstrate that GPT-3 behaves in ways that qualitatively resemble human responses from classic behavioural economics studies, especially when given simple “endowments” such as preferences or political leanings. The results suggest LLMs can reproduce known behavioural regularities and be systematically “steered” to explore parameter spaces.

**1. Social preferences (Charness & Rabin 2002)**  
When presented with dictator-game-style allocation choices, GPT-3’s responses varied predictably with its endowed motives:

- When told to care about **fairness**, it chose equitable splits.
- When told to maximise **efficiency**, it chose pay-off-maximising outcomes.
- When told to be **self-interested**, it picked the selfish option.
	- Without instruction, it tended to maximise total pay-offs (“social planner” behaviour).
	- Older GPT-3 variants ignored endowments and acted rigidly, showing that only the most advanced model displayed sensitivity to framing and preferences.

**2. Fairness in markets (Kahneman, Knetsch & Thaler 1986)**  
GPT-3 judged a hardware store’s snow-shovel price increase as humans did: moderate price rises were “acceptable,” large ones “unfair.” Political conditioning mattered: “socialist” personas condemned gouging, “libertarian” personas tolerated moderate increases. Framing (“raises” vs “changes”) had minor effect except for left-wing agents, who reacted more negatively to “raises.” The exercise reproduced the empirical pattern that fairness judgments constrain profit-seeking.

**3. Status-quo bias (Samuelson & Zeckhauser 1988)**  
When allocating a safety budget between cars and highways, GPT-3 showed a clear **status-quo effect**. Whichever option was labelled as the current allocation became the most frequently chosen, even for distributions otherwise disfavoured under neutral framing. The bias held consistently across repetitions, replicating the human tendency to prefer the presented baseline.

**4. Minimum-wage hiring (Horton 2023)**  
In a simulated hiring choice between workers differing in wage and experience, imposing a minimum wage raised the chosen wage and shifted selection toward the more experienced applicant. This mirrored Horton’s real-world field-experiment finding of **labour–labour substitution** rather than job loss.

**Overall pattern**  
Across all cases, GPT-3 reproduced the **qualitative direction** of human behavioural results: fairness concerns, political framing effects, status-quo bias, and substitution under constraint. Quantitatively, it is not identical to human data, but its responses are coherent, interpretable, and responsive to conditioning. Horton concludes that this supports using LLMs as **experimental sandboxes** for generating and refining hypotheses before empirical testing.

## Abstract ([Arxiv](https://arxiv.org/abs/2301.07543))
>Newly-developed large language models (LLM) -- because of how they are trained and designed -- are implicit computational models of humans -- a homo silicus. These models can be used the same way economists use homo economicus: they can be given endowments, information, preferences, and so on and then their behavior can be explored in scenarios via simulation. I demonstrate this approach using OpenAI's GPT3 with experiments derived from Charness and Rabin (2002), Kahneman, Knetsch and Thaler (1986) and Samuelson and Zeckhauser (1988). The findings are qualitatively similar to the original results, but it is also trivially easy to try variations that offer fresh insights. Departing from the traditional laboratory paradigm, I also create a hiring scenario where an employer faces applicants that differ in experience and wage ask and then analyze how a minimum wage affects realized wages and the extent of labor-labor substitution.

## References cited
Aher, G., Arriaga, R. I., & Kalai, A. T. (2023). _Using Large Language Models to Simulate Multiple Humans and Replicate Human Subject Studies_ (No. arXiv:2208.10264). arXiv. [https://doi.org/10.48550/arXiv.2208.10264](https://doi.org/10.48550/arXiv.2208.10264)

Charness, G., & Rabin, M. (2002). Understanding Social Preferences with Simple Tests. _The Quarterly Journal of Economics_, _117_(3), 817–869. [https://doi.org/10.1162/003355302760193904](https://doi.org/10.1162/003355302760193904)

Horton, J. J. (2017). _Price Floors and Employer Preferences: Evidence from a Minimum Wage Experiment_ (SSRN Scholarly Paper No. 3005890). Social Science Research Network. [https://doi.org/10.2139/ssrn.3005890](https://doi.org/10.2139/ssrn.3005890)

Horton, J. J. (2023). _Large Language Models as Simulated Economic Agents: What Can We Learn from Homo Silicus?_ (arXiv:2301.07543). arXiv. [https://doi.org/10.48550/arXiv.2301.07543](https://doi.org/10.48550/arXiv.2301.07543)

Kahneman, D., Knetsch, J. L., & Thaler, R. (1986). Fairness as a Constraint on Profit Seeking: Entitlements in the Market. _The American Economic Review_, _76_(4), 728–741.

Samuelson, W., & Zeckhauser, R. (1988). Status quo bias in decision making. _Journal of Risk and Uncertainty_, _1_(1), 7–59. [https://doi.org/10.1007/BF00055564](https://doi.org/10.1007/BF00055564)

Part of project [DYNAMO (Dynamic Modelling of Circular Economy)](https://jmkorhonen.github.io/projects/DYNAMO/)

See also [Notes - Examples of LLMs as Synthetic Human Responders and Agents](https://jmkorhonen.github.io/posts/2025/2025-10-29-notes-examples-of-llms-as-synthetic-human-responders-and-agents/)
