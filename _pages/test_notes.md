---
layout: archive
permalink: /test_notes/
title: Short notes & sundries
author_profile: true
published: true
last_update: 2025-11-13 12:19
date: 2025-11-13 10:55
---
Shorter and sometimes longer notes about various things, newest first. 

For long-form posts, see <a href="https://jmkorhonen.github.io/essays/">Essays</a>; for everything in reverse chronological order, see <a href="https://jmkorhonen.github.io/year-archive/">EVERYTHING</a>.
{% include base_path %}

{% assign notes = site.posts | where_exp: "p", "p.categories contains 'Notes'" %}
{% assign written_year = 'None' %}

{% for post in notes %}
  {% assign year = post.date | date: '%Y' %}
  {% if year != written_year %}
# {{ year }}
    {% assign written_year = year %}
  {% endif %}
  {% include archive-single.html %}
{% endfor %}
