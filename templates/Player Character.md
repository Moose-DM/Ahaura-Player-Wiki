<%*
// --- BASIC INFORMATION ---
let charName = await tp.system.prompt("Character Name:");
let imgPath = await tp.system.prompt("Image File Name (leave blank if none, e.g., Salazar.png):", "");
let charQuote = await tp.system.prompt("Character Concept / Quote:", "");
let charClass = await tp.system.prompt("Class:");
let charSubclass = await tp.system.prompt("Subclass (leave blank if none):", "");
let charLevel = await tp.system.prompt("Level:", "1");
let charRace = await tp.system.prompt("Race:");
let charAlignment = await tp.system.prompt("Alignment:");
let charBackground = await tp.system.prompt("Background:");
let charLanguages = await tp.system.prompt("Languages:");

// --- COMBAT STATS ---
let charHP = await tp.system.prompt("Max HP:", "10");
let charAC = await tp.system.prompt("Armor Class (AC):", "10");
let charSpeed = await tp.system.prompt("Speed:", "30 ft");
let charHitDice = await tp.system.prompt("Hit Dice:", "1d8");
let charSenses = await tp.system.prompt("Senses (e.g., Darkvision 60 ft):", "Darkvision 60 ft");

// --- ABILITY SCORES ---
let strScore = parseInt(await tp.system.prompt("Strength (STR) Score:", "10")) || 10;
let dexScore = parseInt(await tp.system.prompt("Dexterity (DEX) Score:", "10")) || 10;
let conScore = parseInt(await tp.system.prompt("Constitution (CON) Score:", "10")) || 10;
let intScore = parseInt(await tp.system.prompt("Intelligence (INT) Score:", "10")) || 10;
let wisScore = parseInt(await tp.system.prompt("Wisdom (WIS) Score:", "10")) || 10;
let chaScore = parseInt(await tp.system.prompt("Charisma (CHA) Score:", "10")) || 10;

// Calculations
let levelNum = parseInt(charLevel) || 1;
let profBonus = Math.ceil(levelNum / 4) + 1;
let profBonusStr = `+${profBonus}`;

function calcMod(score) { return Math.floor((score - 10) / 2); }
function fmtMod(val) { return val >= 0 ? `+${val}` : `${val}`; }

let strMod = calcMod(strScore);
let dexMod = calcMod(dexScore);
let conMod = calcMod(conScore);
let intMod = calcMod(intScore);
let wisMod = calcMod(wisScore);
let chaMod = calcMod(chaScore);

// Initiative (Defaults to DEX mod if left empty)
let charInitInput = await tp.system.prompt("Initiative (leave blank to default to DEX mod):", fmtMod(dexMod));
let charInit = charInitInput ? charInitInput : fmtMod(dexMod);

// --- SAVES & SKILLS ---
let saveProfInput = await tp.system.prompt("Saving Throw Proficiencies (comma-separated, e.g., DEX, CON):", "");
let saveProfs = saveProfInput ? saveProfInput.toUpperCase().split(',').map(s => s.trim()) : [];

let strSave = fmtMod(strMod + (saveProfs.includes("STR") ? profBonus : 0));
let dexSave = fmtMod(dexMod + (saveProfs.includes("DEX") ? profBonus : 0));
let conSave = fmtMod(conMod + (saveProfs.includes("CON") ? profBonus : 0));
let intSave = fmtMod(intMod + (saveProfs.includes("INT") ? profBonus : 0));
let wisSave = fmtMod(wisMod + (saveProfs.includes("WIS") ? profBonus : 0));
let chaSave = fmtMod(chaMod + (saveProfs.includes("CHA") ? profBonus : 0));

let skillProfInput = await tp.system.prompt("Proficient Skills (comma-separated, e.g., Athletics, Perception):", "");
let skillExpInput = await tp.system.prompt("Expertise Skills (comma-separated, e.g., Stealth):", "");

let profSkills = skillProfInput ? skillProfInput.toLowerCase().split(',').map(s => s.trim()) : [];
let expSkills = skillExpInput ? skillExpInput.toLowerCase().split(',').map(s => s.trim()) : [];

function processSkill(displayName, statMod) {
    let cleanName = displayName.split('(')[0].trim().toLowerCase();
    let isExp = expSkills.includes(cleanName);
    let isProf = profSkills.includes(cleanName);

    let bonusVal = statMod + (isExp ? profBonus * 2 : (isProf ? profBonus : 0));
    let bonusStr = fmtMod(bonusVal);

    let label = displayName;
    if (isExp) {
        // Gold / Amber for Expertise
        label = `<span style="color: #e67e22; font-weight: bold;">${displayName} ★</span>`;
    } else if (isProf) {
        // Cyan / Blue for Proficiency
        label = `<span style="color: #2980b9; font-weight: bold;">${displayName} ●</span>`;
    }

    return { bonus: bonusStr, label: label };
}

let acrobatics = processSkill("Acrobatics (DEX)", dexMod);
let animalHandling = processSkill("Animal Handling (WIS)", wisMod);
let arcana = processSkill("Arcana (INT)", intMod);
let athletics = processSkill("Athletics (STR)", strMod);
let deception = processSkill("Deception (CHA)", chaMod);
let history = processSkill("History (INT)", intMod);
let insight = processSkill("Insight (WIS)", wisMod);
let intimidation = processSkill("Intimidation (CHA)", chaMod);
let investigation = processSkill("Investigation (INT)", intMod);
let medicine = processSkill("Medicine (WIS)", wisMod);
let nature = processSkill("Nature (INT)", intMod);
let perception = processSkill("Perception (WIS)", wisMod);
let performance = processSkill("Performance (CHA)", chaMod);
let persuasion = processSkill("Persuasion (CHA)", chaMod);
let religion = processSkill("Religion (INT)", intMod);
let sleightOfHand = processSkill("Sleight of Hand (DEX)", dexMod);
let stealth = processSkill("Stealth (DEX)", dexMod);
let survival = processSkill("Survival (WIS)", wisMod);

// Passive Perception
let percBonusVal = wisMod + (expSkills.includes("perception") ? profBonus * 2 : (profSkills.includes("perception") ? profBonus : 0));
let passivePerception = 10 + percBonusVal;

// Auto-rename note
await tp.file.rename(charName);

// --- BUILD MARKDOWN OUTPUT ---
tR += `# ${charName}\n\n`;
if (imgPath) tR += `![[${imgPath}]]\n\n`;
if (charQuote) tR += `> "${charQuote}"\n\n`;

tR += `<table>\n`;
tR += `  <tr><th>Class</th><th>Level</th><th>Subclass</th><th>Race</th></tr>\n`;
tR += `  <tr><td>${charClass}</td><td>${charLevel}</td><td>${charSubclass || '—'}</td><td>${charRace}</td></tr>\n`;
tR += `</table>\n\n`;

tR += `<table>\n`;
tR += `  <tr><th>Alignment</th><th>Background</th><th>Languages</th></tr>\n`;
tR += `  <tr><td>${charAlignment}</td><td>${charBackground}</td><td>${charLanguages}</td></tr>\n`;
tR += `</table>\n\n`;

tR += `### Stats\n\n`;
tR += `<table>\n`;
tR += `  <tr><th>HP</th><th>AC</th><th>Speed</th><th>Initiative</th><th>Hit Dice</th></tr>\n`;
tR += `  <tr><td>${charHP}</td><td>${charAC}</td><td>${charSpeed}</td><td>${charInit}</td><td>${charHitDice}</td></tr>\n`;
tR += `  <tr><th colspan="2">Prof Bonus</th><th colspan="2">Senses</th><th>Pass. Perception</th></tr>\n`;
tR += `  <tr><td colspan="2">${profBonusStr}</td><td colspan="2">${charSenses}</td><td>${passivePerception}</td></tr>\n`;
tR += `</table>\n\n`;

tR += `### Abilities\n\n`;
tR += `<table>\n`;
tR += `  <tr><th></th><th>STR</th><th>DEX</th><th>CON</th><th>INT</th><th>WIS</th><th>CHA</th></tr>\n`;
tR += `  <tr><th>Score</th><td>${strScore}</td><td>${dexScore}</td><td>${conScore}</td><td>${intScore}</td><td>${wisScore}</td><td>${chaScore}</td></tr>\n`;
tR += `  <tr><th>Modifier</th><td>${fmtMod(strMod)}</td><td>${fmtMod(dexMod)}</td><td>${fmtMod(conMod)}</td><td>${fmtMod(intMod)}</td><td>${fmtMod(wisMod)}</td><td>${fmtMod(chaMod)}</td></tr>\n`;
tR += `  <tr><th>Save</th><td>${strSave}</td><td>${dexSave}</td><td>${conSave}</td><td>${intSave}</td><td>${wisSave}</td><td>${chaSave}</td></tr>\n`;
tR += `</table>\n\n`;

tR += `### Skills\n\n`;
tR += `*(<span style="color: #2980b9; font-weight: bold;">● Proficiency</span> | <span style="color: #e67e22; font-weight: bold;">★ Expertise</span>)*\n\n`;
tR += `<table>\n`;
tR += `  <tr><th>Bonus</th><th>Skill</th><th>Bonus</th><th>Skill</th></tr>\n`;
tR += `  <tr><td>${acrobatics.bonus}</td><td>${acrobatics.label}</td><td>${medicine.bonus}</td><td>${medicine.label}</td></tr>\n`;
tR += `  <tr><td>${animalHandling.bonus}</td><td>${animalHandling.label}</td><td>${nature.bonus}</td><td>${nature.label}</td></tr>\n`;
tR += `  <tr><td>${arcana.bonus}</td><td>${arcana.label}</td><td>${perception.bonus}</td><td>${perception.label}</td></tr>\n`;
tR += `  <tr><td>${athletics.bonus}</td><td>${athletics.label}</td><td>${performance.bonus}</td><td>${performance.label}</td></tr>\n`;
tR += `  <tr><td>${deception.bonus}</td><td>${deception.label}</td><td>${persuasion.bonus}</td><td>${persuasion.label}</td></tr>\n`;
tR += `  <tr><td>${history.bonus}</td><td>${history.label}</td><td>${religion.bonus}</td><td>${religion.label}</td></tr>\n`;
tR += `  <tr><td>${insight.bonus}</td><td>${insight.label}</td><td>${sleightOfHand.bonus}</td><td>${sleightOfHand.label}</td></tr>\n`;
tR += `  <tr><td>${intimidation.bonus}</td><td>${intimidation.label}</td><td>${stealth.bonus}</td><td>${stealth.label}</td></tr>\n`;
tR += `  <tr><td>${investigation.bonus}</td><td>${investigation.label}</td><td>${survival.bonus}</td><td>${survival.label}</td></tr>\n`;
tR += `</table>\n\n`;

tR += `---\n\n`;
tR += `### Backstory\n`;
tR += `[Insert backstory details here...]\n`;
_%>