# Website Redesign — January 21, 2026

## What We Did

### 1. **Content Consolidation**
✅ Integrated all bios from `bio context 2026 v2.md` into single `context.md`  
✅ Saved all previous site content to `CONTENT-ARCHIVE.md`  
✅ Created one source of truth for content, design, and tone of voice

### 2. **Fresh Minimal Design**
✅ Built new `index.html` inspired by portrait photos (warm Moroccan tones)  
✅ Japanese vintage × Moroccan aesthetic:
   - Warm cream background (#FAF7F2)
   - Terracotta accents (#C17A5B)
   - Clean serif typography (Lora + Inter)
   - Minimal layout with breathing room
   - Subtle borders and shadows

### 3. **Cleaned Up Repository**
✅ Removed 10+ extraneous documentation files:
   - COPY-EDIT.md (integrated into context.md)
   - Old context.md (replaced)
   - ACCESSIBILITY-AUDIT.md, ACCESSIBILITY-SUMMARY.md
   - COHERENCY-CHECK.md, CHANGELOG.md, TODO.md, WORKFLOW.md
   - glia-spec.md, projects.html (old design)
   - bio context 2026 v2.md (integrated)
   - docs/Cheat Sheat (outdated)
   - Old README.md (replaced)

✅ Kept only essential files:
   - `index.html` — New minimal home page
   - `shows.html` — Events calendar (from previous design)
   - `context.md` — Single source of truth
   - `CONTENT-ARCHIVE.md` — Previous content backup
   - `assets/` — All images, styles, event data
   - `docs/HOW-TO-UPDATE-EVENTS.md` — Shows page instructions
   - `README.md` — New clean documentation

---

## Current File Structure

```
music-website/
├── index.html              # ✨ New minimal home page
├── shows.html              # Events calendar (kept)
├── context.md              # 📘 Single source of truth
├── CONTENT-ARCHIVE.md      # Archived previous content
├── README.md               # Clean documentation
├── REDESIGN-SUMMARY.md     # This file
├── assets/
│   ├── styles.css          # ✨ New warm aesthetic
│   ├── events.json         # Event data
│   └── images/             # All images (organized)
└── docs/
    └── HOW-TO-UPDATE-EVENTS.md

```

---

## Design Philosophy

### Visual
- **Warm & minimal** — Japanese vintage meets Moroccan warmth
- **Inspiration** — Portrait photos with terracotta/orange geometric patterns
- **Paper textures** — Cream backgrounds, subtle borders
- **Clean typography** — Lora serif for headings, Inter sans for body
- **Breathing room** — Generous spacing, no visual clutter

### Tone of Voice
- **Direct & specific** — "19 years" not "many years"
- **First person** — "I" not "we" or third person
- **Grounded** — Err on side of humility by ~5%
- **No AI-bullshit** — Banned: "mission-critical," "seamless," "bespoke," "fostering," "high-stakes"
- **Human language** — "getting shows on air on time" not "reliable technical delivery"

---

## Next Steps (Optional)

1. **Additional pages** — Create bio.html, contact.html if needed
2. **Individual project pages** — Detailed pages for each project
3. **Polish shows.html** — Update styling to match new aesthetic
4. **Add more images** — Gallery section, performance photos
5. **Test & refine** — Mobile responsive tweaks

---

## How to Update Content

All content lives in **`context.md`** now. To make changes:

1. Open `context.md`
2. Edit the content sections
3. Manually update `index.html` with new copy
4. Test locally with `python3 -m http.server 8888`
5. Push to GitHub

---

## Key Decisions

✅ **Minimal over maximal** — Single page with project cards instead of complex navigation  
✅ **Warm over cool** — Terracotta/ochre instead of teal/cyan  
✅ **Paper over digital** — Cream texture instead of dark/moody  
✅ **Grounded over polished** — Human voice instead of corporate  
✅ **Content as source of truth** — All copy in `context.md` instead of scattered across files

---

**Status:** Fresh start complete. Ready to build from here.  
**Local:** http://localhost:8888  
**GitHub:** https://nathanfinkel86.github.io/website/ (once pushed)
