# Nathan Finkel — Music & Arts Website

Minimal, warm website with Japanese vintage × Moroccan aesthetic.

## Structure

```
music-website/
├── index.html              # Home page
├── shows.html              # Events calendar
├── context.md              # Single source of truth for all content
├── CONTENT-ARCHIVE.md      # Previous site content (archived)
├── assets/
│   ├── styles.css          # All styling
│   ├── events.json         # Event data for shows page
│   └── images/             # All images
└── docs/
    └── HOW-TO-UPDATE-EVENTS.md   # How to update shows page
```

## Quick Start

**Run locally:**
```bash
cd music-website
python3 -m http.server 8000
```
Then visit: http://localhost:8000

## Design Philosophy

- **Warm & minimal** — Japanese vintage meets Moroccan warmth
- **Paper textures** — Cream backgrounds, terracotta accents
- **Clean typography** — Lora serif + Inter sans
- **Breathing room** — Generous spacing, no clutter
- **Grounded tone** — Direct, human language (no AI-bullshit)

## Key Files

- **`context.md`** — Single source of truth for all content, design direction, and tone of voice
- **`shows.html`** — Dynamic events calendar (reads from `assets/events.json`)
- **`docs/HOW-TO-UPDATE-EVENTS.md`** — Instructions for updating shows page

## Deployment

Push to `main` branch → GitHub Pages rebuilds automatically

---

**Last updated:** January 21, 2026
