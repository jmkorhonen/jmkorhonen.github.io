---
title: Notes Index
date: 2025-11-14
layout: archive
collection: notes
permalink: /notes/
author_profile: false
toc: true
published: true
last_update: 2025-11-14 Fri 14:03
modified:
---
This page serves as an index to my public notes and notebooks.

You may also be interested in 
- my [regular logs](https://jmkorhonen.github.io/log/), or
- longer [essays and other posts](https://jmkorhonen.github.io/essays/)
## Summaries
Short or long summaries of research articles, books, &c. 

{% include base_path %}
{% assign summaries = site.notes | sort: 'date' | reverse | where_exp: "p", "p.tags contains 'Summaries'" %}
{% for post in summaries %}
{% include archive-single.html %}
{% endfor %}
## All notes, by year
Newest first.

{% include base_path %}
{% assign written_year = 'None' %}
{% assign notes = site.notes | sort: 'date' | reverse %}
{% for post in notes %}
  {% assign year = post.date | date: '%Y' %}
  {% if year != written_year %}
### {{ year }}
    {% assign written_year = year %}
  {% endif %}
  {% include archive-single.html %}
{% endfor %}