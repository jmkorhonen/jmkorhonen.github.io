---
layout: archive
permalink: /test_notes/
title: TEST Short notes & sundries
author_profile: true
published: true
date: 2025-11-13 Thu 10:55
last_update: 2025-11-13 Thu 02:32
modified: 2025-11-13 Thu 01:58
---
Shorter and sometimes longer notes about various things, newest first. 

For long-form posts, see <a href="https://jmkorhonen.github.io/essays/">Essays</a>; for everything in reverse chronological order, see <a href="https://jmkorhonen.github.io/year-archive/">EVERYTHING</a>.

## Test
{% include base_path %}

{% assign notes = site.posts | where_exp: "p", "p.categories contains 'Notes'" %}
{% assign written_year = 'None' %}

{% for post in notes %}
  {% assign year = post.date | date: '%Y' %}
  {% if year != written_year %}
## {{ year }}
    {% assign written_year = year %}
  {% endif %}
  {% include archive-single.html %}
{% endfor %}
