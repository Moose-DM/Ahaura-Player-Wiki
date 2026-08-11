<%*
const noteTitle = tp.file.title;

// Prompts
const imgInput = await tp.system.prompt("Image filename:");
const descInput = await tp.system.prompt("Description:");
const regionInput = await tp.system.prompt("Region:");
const typeInput = await tp.system.prompt("Type:");
const affiliationInput = await tp.system.prompt("Affiliation:");
const partyStandingInput = await tp.system.prompt("Party Standing:");
const governmentInput = await tp.system.prompt("Government:");
const statusInput = await tp.system.prompt("Status:");

// Fallback logic
const img = imgInput ? imgInput.trim() : "";
const desc = descInput ? descInput.trim() : "???";
const region = regionInput ? regionInput.trim() : "???";
const type = typeInput ? typeInput.trim() : "???";
const affiliation = affiliationInput ? affiliationInput.trim() : "???";
const partyStanding = partyStandingInput ? partyStandingInput.trim() : "???";
const government = governmentInput ? governmentInput.trim() : "???";
const status = statusInput ? statusInput.trim() : "???";

const fmImage = img ? `"[[${img}]]"` : '""';
const infoImage = img ? `![[${img}|300]]` : `![[???|300]]`;
-%>
---
title: <% noteTitle %>
draft: false
tags:
  - Location
  - <% region %>
image: <% fmImage %>
description: <% desc %>
---

> [!infobox|right]
> ## <% noteTitle %>
> <% infoImage %>
> **Region:** <% region %>
> **Type:** <% type %>
> **Affiliation:** <% affiliation %>
> **Party Standing:** <% partyStanding %>
> **Government:** <% government %>
> **Status:** <% status %>

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
