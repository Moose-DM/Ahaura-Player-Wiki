<%*
const noteTitle = tp.file.title;

// Prompts (Pressing Enter on an empty field defaults to '???')
const imgInput = await tp.system.prompt("Image filename:");
const descInput = await tp.system.prompt("Description:");
const typeInput = await tp.system.prompt("Type (e.g. Guild, Cult, Faction):");
const leaderInput = await tp.system.prompt("Leader:");
const baseInput = await tp.system.prompt("Base of Operations:");
const affiliationInput = await tp.system.prompt("Affiliation / Parent Org:");
const partyStandingInput = await tp.system.prompt("Party Standing:");
const statusInput = await tp.system.prompt("Status:");

// Fallback logic
const img = imgInput ? imgInput.trim() : "";
const desc = descInput ? descInput.trim() : "???";
const type = typeInput ? typeInput.trim() : "???";
const leader = leaderInput ? leaderInput.trim() : "???";
const base = baseInput ? baseInput.trim() : "???";
const affiliation = affiliationInput ? affiliationInput.trim() : "???";
const partyStanding = partyStandingInput ? partyStandingInput.trim() : "???";
const status = statusInput ? statusInput.trim() : "???";

const fmImage = img ? `"[[${img}]]"` : '""';
const infoImage = img ? `![[${img}|300]]` : `![[???|300]]`;
-%>
---
title: <% noteTitle %>
draft: false
tags:
  - Organization
image: <% fmImage %>
description: <% desc %>
---

> [!infobox|right]
> ## <% noteTitle %>
> <% infoImage %>
> **Type:** <% type %>
> **Leader:** <% leader %>
> **Base of Operations:** <% base %>
> **Affiliation:** <% affiliation %>
> **Party Standing:** <% partyStanding %>
> **Status:** <% status %>

# Overview


## Key Members

| Name | Role | Notes |
| --- | --- | --- |
|  |  |  |

## Goals & Operations


## History

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
