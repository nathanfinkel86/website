# Music Website — Context & Source of Truth

**Last Updated**: January 21, 2026  
**Status**: Live — Central layout with ornamental circles

---

## 🎯 Site Purpose

Simple, warm, inviting website for Nathan Finkel's music and creative work. Focus on clarity, accessibility, and a grounded tone that reflects the work itself.

---

## 👤 About Nathan

Brighton-based musician and technologist exploring strange noises, participatory music, and interactive creative systems. Over 25 years in musicianship, performance, facilitation, and technical production.

### Core Identity
- **Music**: Ambient/electronic performance, guitar/bass/drums/synths, improvisation
- **Facilitation**: Community workshops, inclusive music-making, accessibility-focused
- **Technical**: Streaming production, live sound, event technical direction
- **Creative Tech**: GLIA (neural network instrument), hybrid analogue/digital rigs
- **Cultural**: Moroccan Jewish heritage, learning Gnaoua music in Essaouira

### Current Roles
- **Splinter Faction** — Senior Streaming Producer (2020-present)
- **Limmud UK** — House Band Leader (19 years total, 4 years as leader)
- **Burning Nest** — Board Member & Operations Lead (13+ years)
- **The Borderland** — Jam Camp Lead (8 years, 2 years as Lead)
- **GLIA** — Collaborator (2023-present)

---

## 🎨 Design Aesthetic

**Current Design**: Central card layout with ornamental project circles

### Visual Direction
- Warm cream background (#FAF7F2)
- Name centered, projects as circles arranged around it
- Cormorant Garamond + Crimson Text typography
- Minimal layout with breathing room
- Ornamental double-border circles with color accents
- No dark mode, no tech startup vibes

### Color Palette
```css
--bg: #FAF7F2;          /* Cream background */
--text: #3A3530;        /* Dark warm grey */
--muted: #6B635A;       /* Muted text */
--border: #E5DED4;      /* Subtle borders */
--terracotta: #C17A5B;  /* Primary accent */
--gold: #C9A855;        /* Secondary accent */
--sage: #7A9F8E;        /* Workshops */
--dusty-rose: #B89999;  /* Glia */
--ocean: #5B8A9A;       /* Technical */
```

---

## 🗂️ Site Structure

### Pages
| File | Purpose |
|------|---------|
| `index.html` | Home — central name card with project circles |
| `music.html` | Music project page |
| `workshops.html` | Workshops project page |
| `technical.html` | Technical production page |
| `glia.html` | Glia neural network page |
| `morocco.html` | Morocco/Gnaoua project page |
| `contact.html` | Contact info |
| `shows.html` | Events calendar with filtering |

### Assets
| File | Purpose |
|------|---------|
| `assets/styles.css` | Single stylesheet for all pages |
| `assets/events.json` | Event data for shows page |
| `assets/images/` | All image assets |

### Documentation
| File | Purpose |
|------|---------|
| `context.md` | This file — source of truth |
| `CONTENT-ARCHIVE.md` | Previous site content backup |
| `REDESIGN-SUMMARY.md` | Notes from Jan 21 redesign |
| `docs/HOW-TO-UPDATE-EVENTS.md` | Shows page update instructions |

---

## ✍️ Tone of Voice

### DO:
- Write in first person ("I" not "we" or third person)
- Be direct and specific
- Use casual, grounded language
- Quantify where possible ("19 years," "50+ shows")
- Sound human and authentic
- Err on side of humility by ~5%

### DON'T:
- Use AI-bullshit phrases: "mission-critical," "seamless," "bespoke," "proven track record," "high-stakes," "end-to-end"
- Use "fostering" (banned word)
- Use hedging language ("as needed," "when needed," "led or supported")
- Use em-dashes for clauses (use commas instead)
- Use generic corporate speak

---

## 📄 Core Content

### Hero Text
**Title:** Nathan Finkel  
**Subtitle:** Musician · Technologist · Facilitator  
**Tagline:** Brighton-based explorer of strange noises, participatory music, and interactive creative systems.

### Project Summaries (used on circles/pages)

| Project | One-liner |
|---------|-----------|
| Music | Synthesiser and guitar-based sets built around layered textures, found sound, and melodic improvisation. |
| Workshops | Community-led music initiatives. Sound journeys, gentle improvisation, and 1-to-1 tuition. |
| Technical | Hybrid events, streaming, and live sound. Senior Technical Producer at Splinter Faction since 2020. |
| Glia | Neural network instrument. Real-time AI rhythm and harmony engines integrated into live performance. |
| Morocco | Learning Gnaoua music in Essaouira. Tracing connections between Jewish and Gnaoua traditions. |

---

## 🔗 Links & Social

- **SoundCloud**: https://soundcloud.com/nathan-finkel
- **Instagram**: https://instagram.com/nathan_finkel_music
- **Email**: hello@nathanfinkel.com

---

## 📝 How to Update

### Add/edit events
See `docs/HOW-TO-UPDATE-EVENTS.md` — edit `assets/events.json`

### Edit project pages
Each page (`music.html`, `workshops.html`, etc.) is a simple skeleton. Add content directly to HTML.

### Change styles
All styles in `assets/styles.css`. Key sections:
- Atlas grid layout (homepage circles)
- Simple pages (project/contact pages)
- Shows page (filters, event cards)

### Test locally
```bash
cd music-website
python3 -m http.server 8888
# Open http://localhost:8888
```

---

## ✅ Completed (Jan 21, 2026)

1. ✅ Consolidated all bios into context.md
2. ✅ Built minimal index.html with central card + circles
3. ✅ Created warm CSS palette
4. ✅ Built skeleton project pages (music, workshops, technical, glia, morocco)
5. ✅ Built contact page
6. ✅ Rebuilt shows.html with new styling
7. ✅ Circles link to project pages

---

*This is the single source of truth for all website content, design direction, and tone of voice.*
