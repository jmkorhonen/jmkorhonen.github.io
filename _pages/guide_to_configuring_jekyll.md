---
title: My personal guide to configuring Jekyll
date: 2025-11-14 Fri 11:51
layout: archive
permalink: /guide_to_configuring_jekyll/
author_profile: false
toc: true
published: false
last_update: 2025-11-14 Fri 13:00
modified:
---

## Terminology


## Content resides in collections

**Collections** are the different types of content. For example, the basic [Academic Pages template](https://github.com/academicpages/academicpages.github.io) that I started with had the following collections:

- pages
- portfolio
- posts
- publications
- talks
- teaching

Each collection resides in its own subfolder, prefixed by an underscore (`_`, so for example posts are in the folder `_posts`). 

Functions can address collections on the site by

```
site.collection_name
```

For example, `site.posts` means all posts.

Note that `site.documents` or `site.collections` would cycle through all collections.

Collections are controlled by `_config.yml` at the site root. Each collection builds to its own URLs and can be given its own archive page.
## Adding new collections
This is an example of how I added a new collection, Log.
#### 1. Add collection to `_config.yml`
A new collection has to be defined in `_config.yml` at the site root.

```yaml
collections:
  log:
    output: true # this makes the files render
    permalink: /log/:year/:title/

# the default values for content, 
# unless overridden in YAML front matter
defaults: 
  - scope:
      path: ""
      type: log
    values: # set to taste:
      layout: single
      author_profile: false
      toc: true
      share: false
      sitemap: false # doesn't appear in the sitemap by default
      # search: false
```
Notes: `output: true` makes the files render; `permalink` controls the URL scheme.
- `/log/:title/` gives a title-based permalink
- use `/log/:year/:month/:day/:title/` if you want fully dated URLs

#### 2. Create the folder and an item
Create the folder `_log` and an item `_log/first-entry.md`:

```markdown
---
title: First log entry 
date: 2025-11-14 10:00 
# any front matter you use in posts works here too 
---
Your content here.
```

(Unlike posts, collection filenames don’t need date prefixes; ordering is via `date` in front matter.)

#### 3. Add a collection archive page (Minimal Mistakes)

Create `_pages/log.md` (or `log.md` at root):

```markdown
---
title: Log 
# use some layout you have
layout: archive  
collection: log 
permalink: /log/ 
entries_layout: list 
sort_by: date 
sort_order: reverse 
---
```

Add it to your nav (`_data/navigation.yml`) if you wish.

#### 4. Keep it out of “all blog posts”

If your blog index loops **only** over `site.posts`, you’re done—`_log` won’t show.  
If you see a template iterating `site.documents` or `site.collections`, tighten it to `site.posts` to avoid pulling log entries in.

#### 5. Keep it out of feeds/sitemaps/search (optional)

If you use `jekyll-feed`, restrict it:

```yaml
feed:
	collections:
	- posts
```

For sitemap/search, either set per-item (`sitemap: false`, `search: false`) or keep them in the `defaults` above.

## Example pages

### notes.html

```html
---
layout: archive
permalink: /notes/
title: "Short notes & sundries"
author_profile: true
---
Shorter and sometimes longer notes about various things, newest first. 
<br>
For long-form posts, see <a href="https://jmkorhonen.github.io/essays/">Essays</a>; for everything in reverse chronological order, see <a href="https://jmkorhonen.github.io/year-archive/">EVERYTHING</a>.
{% include base_path %}

{% assign notes = site.posts | where_exp: "p", "p.categories contains 'Notes'" %}
{% assign written_year = 'None' %}

{% for post in notes %}
  {% assign year = post.date | date: '%Y' %}
  {% if year != written_year %}
    <h2 id="{{ year | slugify }}" class="archive__subtitle">{{ year }}</h2>
    {% assign written_year = year %}
  {% endif %}
  {% include archive-single.html %}
{% endfor %}
```