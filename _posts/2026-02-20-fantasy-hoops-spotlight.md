---
layout: default
title: Project Spotlight - Fantasy Hoops
project: fantasy-hoops
tags: [project, writeup]
---

Fantasy Hoops is a lightweight fantasy league manager for college basketball, implemented entirely with Google Apps Script and a Google Sheet backend.

## Project writeup

This project automates scoring of a custom fantasy hoops league:

- Pulls game data from the NCAA API (`https://ncaa-api.henrygd.me/openapi`).
- Calculates team-level scores using league-specific rules that are encoded directly in Apps Script.
- Updates standings, opponent matchups, rankings, and score summaries in spreadsheet tables.
- Provides a simple HTML teams view for participants to review rosters and league state.

Instead of a traditional server + database stack, the spreadsheet acts as both the data store and control panel. Scheduled Apps Script jobs run update flows (score updates, season sync, ranking refreshes, and resets), making the system easy to operate for a small league with minimal infrastructure.

## Repository structure

- `allGlobals.js`: shared constants and global configuration.
- `seasonSync.js`, `scoreUpdate.js`, `teamRankUpdate.js`, `opponentUpdate.js`: primary update pipelines.
- `tableUtils.js`: utility helpers for reading/writing sheet data safely.
- `updateRunner.js`, `resetStandings.js`, `backupTeams.js`: orchestration and maintenance scripts.
- `teams.html`, `teamsPage.js`: simple UI layer for team/league viewing.
- `appsscript.json`: Apps Script project manifest.

## Runtime model

1. Triggers invoke Apps Script update functions on a schedule.
2. Scripts fetch upstream NCAA data and normalize it to the league format.
3. Sheet tables are recalculated and rewritten in place.
4. League participants view results directly in the shared spreadsheet/web app.

This design keeps deployment simple and cost-effective while still delivering automated league management.