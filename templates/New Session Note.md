<%*
// Find all files in the vault matching "Session <number>"
const sessionFiles = app.vault.getMarkdownFiles().filter(file => {
    return /^Session \d+/i.test(file.basename);
});

let nextSessionNum = 1;

if (sessionFiles.length > 0) {
    // Extract numbers from filenames and find the maximum
    const numbers = sessionFiles.map(file => {
        const match = file.basename.match(/^Session (\d+)/i);
        return match ? parseInt(match[1], 10) : 0;
    });
    nextSessionNum = Math.max(...numbers) + 1;
}

// Automatically rename the newly created file to "Session X"
const newTitle = `Session ${nextSessionNum}`;
await tp.file.rename(newTitle);
-%>
---
title: <% newTitle %>
draft: false
tags:
  - notes
---
