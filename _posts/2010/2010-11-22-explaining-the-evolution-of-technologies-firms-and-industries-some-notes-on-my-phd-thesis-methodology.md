---
title: Explaining the evolution of technologies, firms, and industries
date: 2010-11-22 Mon 12:31
permalink: /posts/2010/2010-11-22-explaining-the-evolution-of-technologies-firms-and-industries-some-notes-on-my-phd-thesis-methodology/
perma_id: id202512231314
redirect_from:
  - /id202512231314/
aliases:
  - id202512231314
author: Janne M. Korhonen
license: Copyright
copyright_year: 2010
layout: single
author_profile: false
toc: true
categories:
  - Archives
  - Articles
  - Research
tags:
  - Projects/PhD
  - Innovations
  - Modelling
  - Methodology
  - Complexity
published: true
last_update: 2025-12-23 Tue 13:21
modified:
---
Here’s the presentation I gave at our faculty’s research seminar in late October 2010.

([PDF link](/files/presentations/2010-10-29-Explaining-the-evolution-of-technologies-firms-and-industries.pdf))

I’m interested in using Complexity Theories and Information Theory to analyze the evolution of technology as a result of resource constraints. This presentation looks into my first case study, the evolution of copper smelting technology after the Second World War.

In 1945, as a response to electricity scarcity, Finnish mining company Outokumpu Ltd. was forced to come up with an alternative to electric furnaces for smelting copper. In a remarkably short period of time, they developed a novel copper smelting furnace called _flash furnace._ It used the energy gained from burning sulfur in copper ore to smelt the copper, thus reducing energy demands significantly. The first flash furnace was operational in 1949, and today, flash furnaces account for more than 40 % of all copper produced in the world.

How did Outokumpu, of all the firms in the world, invent this technology? For example, the basic principles had been studied in Canada since before the war, and one of the world’s largest mining companies – Canadian International Nickel Corporation, or INCO, was developing a version of their own. However, their method was introduced only in 1952, and it never became widespread.

To study this and other cases like it, I use concepts borrowed from Information Theory and theoretical biology. By “coding” the design features of technical artefacts to a string of information, I can compare the evolution of technologies easier than if I’d use more descriptive languages.

In addition, problem solving can be seen as a _search process_. The “design space” through which the “designer” (usually plural, but I use the singular form here for convenience) is searching for the best answer is typically huge; in the case of copper smelting furnaces, even at high level (ignoring many subsystems and their idiosyncrasies) there are some four million distinct combinations. The problem is, therefore, how to search through the design space as efficiently as possible?

Further complicating the issue are _interdependencies_ between parts and systems. If changing one part requires alterations to another part, the parts are interdependent. In complex systems, changing just one part is seldom possible. The way in which the system’s parts are interdependent defines the system’s architecture: _a modular system_ is composed of distinct subassemblies that can be relatively easily connected to each other.

The architecture, in turn, defines the _fitness landscape_ of the system. If we arrange all the possible designs so that their distance to each other corresponds to the difference between these designs (i.e. similar designs are grouped close to each other) and assign a value called fitness to each single design (let’s not bother, for now, what this fitness actually means – just assume that we can assign one, at least in theory) we get a “landscape” resembling peaks and valleys.

Systems that are composed of non-interdependent parts – that have little epistasy, in other words – are easy to optimize: the designer can alter all the parts in sequence, finding the best part for each “task” at hand. There is only a single “best” combination of parts. The landscape looks like a single mountain with one and only one peak. These landscapes are called _fully correlated_.

On the other hand, systems whose parts are fully interconnected are _chaotic_. Since altering any one part has an effect to all the other parts, optimizing is basically impossible. Designs are essentially random; as any one alteration to the design might have a huge impact on its fitness, developing a design is pointless. There are reasons why this kinds of systems are rarely seen in real life: they would be too unstable to survive for any length of time, and wouldn’t be attractive for entrepreneurs to develop.

Finally, there are _roughly correlated landscapes_. Their parts have some interconnections, but not too many. Complex systems are harder to optimize than systems with just one global optimum. If changing a part requires alterations to other parts, optimizing one function might mean reducing the fitness of other functions. Such systems typically have multiple _local optima_, and finding the right one takes more effort. Nevertheless, these systems are not random and developing such designs is still possible. Most real-life problems have a roughly correlated design space; the interconnections between parts of the problem make finding a solution difficult, but (usually) not impossible.

These fitness landscapes can be used to good effect to test different search strategies, and hence different product development strategies, in computer simulations. For example, a strategy that picks one concept and keeps on improving it would work well, if the fitness landscape is fully correlated (or close to it). On the other hand, such strategies are likely to fail if the landscape is roughly correlated: it would probably get stuck in a local optima, and, unable to consider another concept as another starting point, would get nowhere despite the effort.

If all goes well, my PhD thesis might point a way towards more effective product development strategies in resource-constrained situations. Stay tuned for further updates.

*Originally published at [jmkorhonen.net.](https://jmkorhonen.net/2010/11/22/explaining-the-evolution-of-technologies-firms-and-industries-some-notes-on-my-phd-thesis-methodology-2/)*