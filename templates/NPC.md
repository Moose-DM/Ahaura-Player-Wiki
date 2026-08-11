<%*
const noteTitle = tp.file.title;

// Prompts (Pressing Enter on an empty field defaults to '???')
const imgInput = await tp.system.prompt("Image filename:");
const descInput = await tp.system.prompt("Description:");
const ageInput = await tp.system.prompt("Age:");
const raceInput = await tp.system.prompt("Race:");
const genderInput = await tp.system.prompt("Gender:");
const locationInput = await tp.system.prompt("Last Known Location:");
const partystandingInput = await tp.system.prompt("Party Standing:");
const affiliationInput = await tp.system.prompt("Affiliation:");
const statusInput = await tp.system.prompt("Status:");

// Fallback logic
const img = imgInput ? imgInput.trim() : "";
const desc = descInput ? descInput.trim() : "???";
const age = ageInput ? ageInput.trim() : "???";
const race = raceInput ? raceInput.trim() : "???";
const gender = genderInput ? genderInput.trim() : "???";
const location = locationInput ? locationInput.trim() : "???";
const PartyStanding = partystandingInput ? partystandingInput.trim() : "???";
const affiliation = affiliationInput ? affiliationInput.trim() : "???";
const status = statusInput ? statusInput.trim() : "???";

const fmImage = img ? `"[[${img}]]"` : '""';
const infoImage = img ? `![[${img}|300]]` : `![[???|300]]`;
-%>
---
title: <% noteTitle %>
draft: false
tags:
  - NPC
image: <% fmImage %>
description: <% desc %>
---

> [!infobox|right]
> ## <% noteTitle %>
> <% infoImage %>
> **Age:** <% age %>
> **Race:** <% race %>
> **Gender:** <% gender %>
> **Last Known Location:** <% location %>
> **Party Standing:** <% PartyStanding %>
> **Affiliation:** <% affiliation %>
> **Status:** <% status %>

# Overview


## Relationships

| Name | Relationship |
| --- | --- |
|  |  |

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
