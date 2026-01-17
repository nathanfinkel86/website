# Music Website — Context

**Last Updated**: January 17, 2026 | **Status**: Core structure finalized, design locked in

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
- **Music**: `music-website/music.html` — Listen & watch section (SoundCloud embeds + videos)
- **Projects**: `music-website/projects.html` — Main project map with linkable anchors:
  - `#ambient` — Ambient/electronic performance (with `#rig` subanchor)
  - `#houseband` — Professional performance experience
  - `#facilitation` — Workshops & facilitation
  - `#glia` — Glia collaborative tool
  - `#morocco` — Morocco recording (Essaouira)
- **Shows**: `music-website/shows.html` — Dandelion calendar embed + recent highlights
- **About**: `music-website/about.html` — Bio & context
- **Contact**: `music-website/contact.html` — Mailto link + form placeholder
- **Navigation**: Removed "Shows" from main nav menu (still accessible via "Upcoming shows" CTA button)

## Styling / behavior
- **CSS**: `music-website/assets/styles.css`
  - Cool teal/cyan/purple color palette
  - Minimalist, simplified buttons (transparent with borders, no gradients/shadows)
  - Chip color coding: ambient (cyan), facilitation (purple), glia (mint), morocco (magenta)
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
- Ambient work emphasizes **"rest and presence"** vibes (wellness/sensory focus)
- Glia framed as **"sensory playground"** (playful, collaborative, intuitive)
- Professional performance highlights **15 years + 50+ festival appearances**
- All copy written to avoid "AI tells" — authentic voice maintained

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

## Next edits you'll probably want
- Replace the two SoundCloud embed placeholder URLs in `music.html`
- Replace "Video" placeholder links in `music.html`
- Populate "Upcoming shows" section in `shows.html` (currently placeholder with Dandelion embed)
- Make the contact form actually submit somewhere (e.g. Formspree), if desired
- Update the deploy timestamp in `assets/site.js` when you deploy
- Test across devices (mobile/tablet/desktop) — especially hero background positioning

## See also
- Session todos (in Cursor) — track ongoing improvements and feature requests
- `SHOWS-FILTER-SYSTEM.md` — Interactive filtering for shows/events (future enhancement)

