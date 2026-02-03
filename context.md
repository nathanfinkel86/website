# Music Website — Context & Source of Truth

**Last Updated**: January 21, 2026

---

## 🎯 Site Purpose

Simple, warm, inviting website for Nathan Finkel's music and creative work. Focus on clarity, accessibility, and a grounded tone that reflects the work itself.

---

## 👤 About Nathan

Brighton-based musician and technologist exploring strange noises, participatory music, and interactive creative systems. Over 25 years in musicianship, performance, facilitation, and technical production.

### Core Identity
- **Music**: Ambient/electronic performance, guitar/bass/drums/synths, improvisation, sound design
- **Facilitation**: Community workshops, inclusive music-making, accessibility-focused
- **Technical**: Streaming production, live sound, event technical direction, audio editing, sound design
- **Creative Tech**: GLIA (neural network instrument), hybrid analogue/digital rigs
- **Cultural**: Moroccan Jewish heritage, learning Gnaoua music in Essaouira

### Current Roles
- **Splinter Faction** — Senior Streaming Producer (2020-present)
- **Limmud UK** — House Band Leader (19 years total, 4 years as leader)
- **Burning Nest** — Board Member & Operations Lead (13+ years)
- **The Borderland** — Jam Camp Lead (8 years, 2 years as Lead)
- **GLIA** — Collaborator (2023-present)

### Recent Work
- **London Decompression 2025** — Created a 3-minute audio sound design piece for a set piece performance at the Burning Man event. Remixed classical music with synthesisers and voice acting (recorded on iPad in Morocco) to provide narrative flow. Combined iPad synths with voice acting recorded in Morocco.

---

## 🗂️ Site Structure

### Pages
| File | Purpose |
|------|---------|
| `index.html` | Home |
| `music.html` | Music project page |
| `workshops.html` | Workshops project page |
| `technical.html` | Technical production page |
| `glia.html` | GLIA neural network page |
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
| `CONTENT-ARCHIVE.md` | Previous site content backup | Use for fleshing out sections.
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
| GLIA | Neural network instrument. Real-time AI rhythm and harmony engines integrated into live performance. |
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

### Test locally
```bash
cd music-website
python3 -m http.server 8888
# Open http://localhost:8888
```

---

*This is the single source of truth for all website content and tone of voice.*
