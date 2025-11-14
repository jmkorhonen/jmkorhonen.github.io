---
title: Log
layout: archive
collection: log
permalink: /log/
author_profile: false
toc: true
date: 2025-11-14
last_update: 2025-11-14 Fri 13:40
modified:
published: true
---
My logbook: news, websites, and other things I've found interesting for one reason or another.

{% include base_path %}
{% assign written_year = 'None' %}
{% assign written_month = 'None' %}
{% for post in site.log %}
{% assign year = post.date | date: '%Y' %}
{% assign month = post.date | date: '%m' %}
{% if year != written_year %}
## {{ year }}
{% assign written_year = year %}
{% endif %}
{% if month != written_month %}
### {{ post.date | date: '%B' }}
{% assign written_month = month %}
{% endif %}
{% include archive-single.html %}
{% endfor %}