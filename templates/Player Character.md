<%*
// These variables will trigger a prompt when you insert the template
let charName = await tp.system.prompt("Character Name:");
let imgPath = await tp.system.prompt("Image File Name (e.g., Salazar.png):");
let charQuote = await tp.system.prompt("Character Concept / Quote:");
let charClass = await tp.system.prompt("Class:");
let charSubclass = await tp.system.prompt("Subclass (leave blank if none):");
let charLevel = await tp.system.prompt("Level:");
let charRace = await tp.system.prompt("Race:");
let charAlignment = await tp.system.prompt("Alignment:");
let charBackground = await tp.system.prompt("Background:");
let charLanguages = await tp.system.prompt("Languages:");

// This automatically renames the note to match the character's name!
await tp.file.rename(charName);
_%>

<img src="<% imgPath %>" align="left" width="300" style="margin-right: 20px; margin-bottom: 15px; border-radius: 5px;" />

> [!quote] <% charName %>
> "<% charQuote %>" 

| Class | Level | Subclass | Race |
| :--- | :---: | :--- | :--- |
| <% charClass %> | <% charLevel %> | <% charSubclass %> | <% charRace %> |

| Alignment | Background | Languages |
| :--- | :--- | :--- |
| <% charAlignment %> | <% charBackground %> | <% charLanguages %> |

<div style="clear: both;"></div>

---
## Stats

<table style="margin: 0 auto; text-align: center; margin-bottom: 15px;">
  <thead>
    <tr>
      <th>HP</th>
      <th>AC</th>
      <th>Speed</th>
      <th>Initiative</th>
      <th>Hit Dice</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>10</td>
      <td>10</td>
      <td>30 ft</td>
      <td>+0</td>
      <td>1d10</td>
    </tr>
  </tbody>
</table>

<table style="margin: 0 auto; text-align: center;">
  <thead>
    <tr>
      <th>Prof Bonus</th>
      <th>Senses</th>
      <th>Pass. Perception</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>+2</td>
      <td>Dark Vision 60 ft </td>
      <td>10</td>
    </tr>
  </tbody>
</table>

---

## Abilities

<table style="margin: 0 auto; text-align: center;">
  <thead>
    <tr>
      <th></th>
      <th>STR</th>
      <th>DEX</th>
      <th>CON</th>
      <th>INT</th>
      <th>WIS</th>
      <th>CHA</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>Score</b></td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
    </tr>
    <tr>
      <td><b>Modifier</b></td>
      <td>+0</td>
      <td>+0</td>
      <td>+0</td>
      <td>+0</td>
      <td>+0</td>
      <td>+0</td>
    </tr>
    <tr>
      <td><b>Save</b></td>
      <td>+0</td>
      <td>+0</td>
      <td>+0</td>
      <td>+0</td>
      <td>+0</td>
      <td>+0</td>
    </tr>
  </tbody>
</table>

---

## Skills
<div style="text-align: center; margin-bottom: 10px;">
  <em>*(<b>Proficiency</b> | <b style="color: #d69e2e;">Expertise</b>)*</em>
</div>
<table style="margin: 0 auto; text-align: center;">
  <thead>
    <tr>
      <th>Bonus</th>
      <th>Skill</th>
      <th>Bonus</th>
      <th>Skill</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>+0</td>
      <td>Acrobatics (DEX)</td>
      <td>+0</td>
      <td>Medicine (WIS)</td>
    </tr>
    <tr>
      <td>+0</td>
      <td>Animal Handling (WIS)</td>
      <td>+0</td>
      <td>Nature (WIS)</td>
    </tr>
    <tr>
      <td>+0</td>
      <td>Arcana (INT)</td>
      <td><b style="color: #d69e2e;">+4</b></td>
      <td><b style="color: #d69e2e;">Perception (WIS)</b></td>
    </tr>
    <tr>
      <td><b>+2</b></td>
      <td><b>Athletics (STR)</b></td>
      <td>+0</td>
      <td>Performance (CHA)</td>
    </tr>
    <tr>
      <td>+0</td>
      <td>Deception (CHA)</td>
      <td>+0</td>
      <td>Persuasion (CHA)</td>
    </tr>
    <tr>
      <td>+0</td>
      <td>History (INT)</td>
      <td>+0</td>
      <td>Religion (INT)</td>
    </tr>
    <tr>
      <td>+0</td>
      <td>Insight (WIS)</td>
      <td>+0</td>
      <td>Sleight of Hand (DEX)</td>
    </tr>
    <tr>
      <td>+0</td>
      <td>Intimidation (CHA)</td>
      <td>+0</td>
      <td>Stealth (DEX)</td>
    </tr>
    <tr>
      <td>+0</td>
      <td>Investigation (INT)</td>
      <td>+0</td>
      <td>Survival (WIS)</td>
    </tr>
  </tbody>
</table>
---

## Backstory

[Insert backstory details here...]

---