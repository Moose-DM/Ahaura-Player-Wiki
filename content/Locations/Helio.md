---
title: Helio
draft: false
tags:
  - Location
  - Verdance
image: "[[Helio.webp]]"
description: Capital City of Verdance
---

> [!infobox|right]
> ## Helio
> ![[Helio.webp|300]]
> **Region:** Verdance
> **Type:** Capital City
> **Affiliation:** TORCH Knights
> **Party Standing:** Good
> **Government:** King Test
> **Status:** At Peace

# Overview


## Attributes


## Rumors

## Interactions
```dataview
TABLE WITHOUT ID
  file.link AS "Session",
  L.text AS "Reference"
FROM "content/Session Journals"
FLATTEN file.lists AS L
WHERE contains(L.outlinks, this.file.link)
SORT file.name ASC
```
