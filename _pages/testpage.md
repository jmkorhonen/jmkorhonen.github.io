---
title: Testing Obsidian push
date: 2025-11-12
permalink: /testpage/
layout: single
author_profile: false
toc: true
toc_sticky: false
toc_label: Contents
toc_icon: list
published: true
modified: 2025-11-13 Thu 16:48
---

Let's test how to push things to and fro Obsidian.


Trying to change the sidebar to the left

set author_profile: false

New version of `_custom.scss` with
Two-column layout: content + right rail

Added Right-rail ToC that floats beside content to single.html

Removed once again sidebar.nav: true

Changed single.html

Commented out visual indent

ToC nesting should work now, added to `_custom.scss`

added author_profile: true and toc_sticky: false

added to `_custom.scss`: (now commented out for testing)

```css
/* ToC heading colour override */
.toc .nav__title { color: #222 !important; }
[data-theme="dark"] .toc .nav__title { color: #eee !important; }
```
# Heading 1

## Heading 2

### Heading 3

#### Heading 4

**Bold**
>Blockquote

*Italic*
>Blockquote, line 1
>Blockquote, line 2

`Code`

Codeblocks: Excel
```Excel
=IF(A1)
```

## Testing table of contents

### This should be lvl 3

## This is lvl 2
### And heading 3

