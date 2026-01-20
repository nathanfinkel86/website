# Music Website — Context

**Last Updated**: January 20, 2026 | **Status**: Core structure finalized, bio updated, design locked in

## Live site
- **GitHub Pages URL**: `https://nathanfinkel86.github.io/website/`
- **Goal domain**: `natecreates.co.uk` (currently on Canva; plan is to point DNS to the new static site host)

## What this is
- A **simple static website** (no build step): plain HTML + CSS + a tiny JS file.
- Designed to be **easy to edit** by changing text directly in the `.html` files.
- **Font**: Crimson Text (serif, gothic/esoteric feel)
- **Theme**: Cool teal/cyan/purple accents on dark blue-grey background with subtle paisley overlay

## Site structure
- **Home**: `music-website/index.html` — Landing page with bio & quick links
- **Bio**: `music-website/bio.html` — Professional biography and background
- **Projects**: `music-website/projects.html` — Main project map with linkable anchors:
  - `#ambient` — Ambient/electronic performance (with `#rig` subanchor)
  - `#professional` — Professional performance experience
  - `#facilitation` — Workshops, facilitation & tuition
  - `#technical` — Technical Production & AV services
  - `#glia` — Glia neural network instrument collaboration
  - `#stories` — Synths & Stories (storytelling + ambient soundscapes)
  - `#morocco` — Morocco recording projects (Essaouira/Gnaoua)
- **Shows**: `music-website/shows.html` — Events calendar + past highlights
- **Contact**: `music-website/contact.html` — Contact form (Formspree) + Instagram
- **Navigation**: Simplified navigation with "Bio", "Upcoming shows", and "Book / contact" CTAs

## Styling / behavior
- **CSS**: `music-website/assets/styles.css`
  - Cool teal/cyan/purple/amber color palette with 7 distinct project colors
  - Chip color coding: 
    - Ambient (cyan: rgba(100, 240, 255))
    - Professional (sky blue: rgba(140, 200, 255))
    - Facilitation (purple: rgba(180, 150, 255))
    - Technical Production (coral/orange: rgba(255, 120, 80))
    - GLIA (mint: rgba(120, 255, 180))
    - Synths & Stories (amber: rgba(255, 180, 100))
    - Morocco (magenta: rgba(255, 140, 220))
  - Mobile-responsive grid with form ordering fix
  - Non-clickable chips (`.chip-static`) have no hover effects
  - Accordion styles for future expandable sections
- **JS**: `music-website/assets/site.js`
  - Mobile menu toggle
  - Sets active nav link
  - Inserts current year in footer
  - Accordion toggle functionality (ready to use)
- **Images**: `/assets/images/` organized by type (hero, portraits, performances, misc)
- **Removed**: All nested `/pages/` directory — content consolidated into main project page

## Content & copy
- **January 2026 bio update**: Complete rewrite in first-person, grounded tone
- Ambient work emphasizes **"strange noises"** and "rest and connection" vibes (wellness/sensory focus)
- GLIA positioned as neural-network collaboration since 2024
- Professional experience expanded: **Over 25 years**, stage/venue management
- **Technical Production & AV**: New dedicated section showcasing Splinter Faction role, live sound, streaming, event technical direction
- **Tuition offering**: Added 1-to-1 guitar, bass, and music production lessons to Workshops section
- Morocco section: personal story, Moroccan Jewish ancestry, Gnaoua traditions, two project streams
- New: **Synths & Stories** project (ambient music + Rumi poetry/storytelling)
- All copy maintains authentic voice, avoids "AI tells" and overly formal language
- Consistent use of "Gnaoua" spelling throughout

## Documentation
See `docs/` folder for:
- `DESIGN-SYSTEM.md` — Color, typography, spacing standards
- `CUSTOMIZATION-GUIDE.md` — How to customize for your own use
- `TEMPLATE-README.md` — Using this site as a replicable template
- `SHOWS-FILTER-SYSTEM.md` — Future enhancement: filterable events (on hold)

## Hosting notes (practical)
- Current host: **GitHub Pages**.
- For `natecreates.co.uk`: update DNS away from Canva to point at GitHub Pages (A/AAAA and optionally `www` CNAME).

## Local run (dev)
From `music-website/`:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Recent updates (January 2026)
- ✅ Complete bio refresh site-wide (first-person, grounded tone)
- ✅ Added Synths & Stories project section with amber color scheme
- ✅ Mobile contact form ordering fixed (form now appears above Instagram card)
- ✅ Standardized spelling to "Gnaoua" throughout
- ✅ Cleaned up commented-out code for production
- ✅ Added Splinter Faction Senior Technical Producer role
- ✅ Expanded Morocco section with personal heritage story

## Next edits you'll probably want
- Add real media to placeholder embeds (SoundCloud/YouTube URLs)
- Populate "Upcoming shows" with real events in `events.json`
- Add recordings from Synths & Stories performances
- Add GLIA performance media from December 2025 UK tour
- Test across devices (mobile/tablet/desktop) — especially hero background positioning

## See also
- `TODO.md` — Comprehensive task list with priorities and status tracking
- `CHANGELOG.md` — Chronological record of all major updates
- `docs/` folder — Design system, customization guides, and technical documentation
- `SHOWS-FILTER-SYSTEM.md` — Interactive filtering for shows/events (future enhancement)

