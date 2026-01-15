# Music Website — Context

## Live site
- **Netlify URL**: `https://stirring-banoffee-724cb3.netlify.app`
- **Goal domain**: `natecreates.co.uk` (currently on Canva; plan is to point DNS to the new static site host)

## What this is
- A **simple static website** (no build step): plain HTML + CSS + a tiny JS file.
- Designed to be **easy to edit** by changing text directly in the `.html` files.
- Most copy can be edited in one place: **`music-website/assets/content.json`** (elements use `data-copy="..."` keys).

## Site structure
- **Home**: `music-website/index.html`
- **Music**: `music-website/music.html`
  - Uses **2 SoundCloud embeds** (Project 1 + Project 2). Replace the placeholder SoundCloud URLs inside each iframe `src`.
- **Projects**: `music-website/projects.html`
  - Sections are linkable anchors:
    - `#ambient`
    - `#rig`
    - `#facilitation`
    - `#glia`
    - `#morocco`
  - Chips/tags across the site link into these anchors.
  - Each section also links to an **unlisted detail subpage**:
    - `music-website/p/ambient.html`
    - `music-website/p/rig.html` (redirects to `p/ambient.html#rig`)
    - `music-website/p/facilitation.html`
    - `music-website/p/glia.html`
    - `music-website/p/morocco.html`
- **Shows**: `music-website/shows.html` (placeholder listings + “recent highlights”)
- **Contact**: `music-website/contact.html` (mailto link + demo form placeholder)

## Styling / behavior
- **CSS**: `music-website/assets/styles.css`
  - Current theme: **gentle amber gradient + subtle paisley-like overlay**
  - Chips/tags are styled as links.
  - SoundCloud embeds use `.embed` styles.
- **JS**: `music-website/assets/site.js`
  - Mobile menu toggle
  - Sets active nav link
  - Inserts current year in footer

## Content source notes
- Home “Short bio” is the **200-word non-wanky bio** drafted in this repo/session.
- Projects page is the “map” that tags/chips jump to.

## Hosting notes (practical)
- Easiest hosting options: **Netlify / Cloudflare Pages / GitHub Pages** (static hosting).
- For `natecreates.co.uk`: you’ll need to update DNS away from Canva to your static host.
  - Netlify will provide either **nameservers** (simplest) or **A/AAAA + CNAME** records.

## Local run (dev)
From `music-website/`:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Next edits you’ll probably want
- Replace the two SoundCloud embed placeholder URLs in `music.html`
- Replace “Video” placeholder links in `music.html`
- Replace “Upcoming” listings in `shows.html`
- Make the contact form actually submit somewhere (Formspree / Netlify Forms), if desired
 - Update the deploy timestamp string in `assets/site.js` when you deploy

