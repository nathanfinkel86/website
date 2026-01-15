# Code Structure & Organization

## Overview
This is a static website built with semantic HTML5, CSS3, and vanilla JavaScript. No build process required - just edit and push.

## File Organization

### HTML Pages (Root Directory)
- **`index.html`** - Home page with hero, bio, and quick info
- **`about.html`** - Full bio, projects, skills, contact CTA
- **`music.html`** - SoundCloud embeds, videos, professional performance experience, Glia
- **`projects.html`** - Overview of all projects with anchor links
- **`shows.html`** - Recent highlights and shows
- **`contact.html`** - Formspree contact form

### Subpages (`p/` directory)
- **`ambient.html`** - Ambient/electronic performance details
- **`professional.html`** - Professional performance experience (Limmud, festivals)
- **`facilitation.html`** - Workshops & facilitation
- **`glia.html`** - Glia project technical details
- **`morocco.html`** - Morocco recording project

### Assets
- **`assets/styles.css`** - All styling (CSS custom properties for theming)
- **`assets/site.js`** - Mobile menu, active nav link, current year
- **`assets/audio/`** - Placeholder for audio files

### Images
Performance photos stored in root directory. File naming conventions:
- `IMG_####.JPG` - Performance shots
- `####-####-####.jpg` - Various performance/festival shots
- `nf guitar .jpeg` - Portrait shots

### Documentation
- **`README.md`** - Project overview and quick reference
- **`HOW-TO-UPDATE.md`** - Detailed update guide with Git commands
- **`CODE-STRUCTURE.md`** - This file
- **`context.md`** - AI context about Nathan's background
- **`glia-spec.md`** - Glia technical specifications

## Navigation Structure

```
Home (index.html)
├── About (about.html)
├── Music (music.html)
│   └── Professional Performance section → projects.html#houseband
├── Projects (projects.html)
│   ├── #ambient → p/ambient.html
│   ├── #houseband → p/professional.html
│   ├── #facilitation → p/facilitation.html
│   ├── #glia → p/glia.html
│   └── #morocco → p/morocco.html
├── Shows (shows.html)
└── Contact (contact.html)
```

## Anchor Links System
All project sections in `projects.html` have IDs:
- `#ambient` - Ambient/electronic performance
- `#houseband` - Professional performance
- `#facilitation` - Workshops & facilitation
- `#glia` - Glia project
- `#morocco` - Morocco recording

These are referenced throughout the site with `href="projects.html#anchor"`

## CSS Organization

### Structure
```css
:root { /* CSS custom properties */ }
body { /* Base styles + background gradients */ }
Typography { h1, h2, h3, p, etc. }
Layout { .container, .section, .hero, .grid-3 }
Components { .card, .btn, .chip, .tag, .item }
Navigation { header, .nav, .nav-links }
Footer { .footer }
Responsive { @media queries }
```

### Key CSS Classes
- **`.container`** - Max-width wrapper (1100px)
- **`.section`** - Standard content section with padding
- **`.hero`** - Large hero section with `.hero-grid`
- **`.card`** - Content card with panel background
- **`.grid-3`** - 3-column responsive grid
- **`.chip`** - Small navigation pill
- **`.tag`** - Tiny metadata tag
- **`.item`** - List item with background
- **`.stretched-link`** - Makes entire parent clickable

### Color System
Teal/cyan/purple palette defined in `:root`:
- `--bg` - Dark blue-grey background
- `--panel` - Semi-transparent white overlay
- `--text` - Primary text color
- `--accent` - Teal cyan accent
- `--accent-2` - Purple accent

### Hover Effects
All interactive elements have enhanced glow effects:
- Items: `box-shadow: 0 0 20px rgba(155, 246, 255, 0.25)`
- Cards: Double shadow with glow
- Chips/Tags: `box-shadow: 0 0 15-18px rgba(155, 246, 255, 0.3-0.35)`
- Buttons: Context-appropriate glow colors

## JavaScript

### `site.js` Functions
1. **Mobile menu toggle** - Opens/closes nav on small screens
2. **Active link highlighting** - Adds `aria-current="page"` to current nav link
3. **Current year** - Dynamically updates copyright year in footer

### No Dependencies
Pure vanilla JavaScript - no jQuery, React, or other frameworks needed.

## Accessibility Features
- **Semantic HTML** - Proper heading hierarchy, nav, main, footer, section tags
- **ARIA labels** - All interactive elements have proper labels
- **Skip link** - "Skip to content" link for keyboard navigation
- **`aria-current`** - Active navigation indication
- **`aria-expanded`** - Mobile menu state
- **Keyboard navigation** - All interactive elements are keyboard accessible
- **Color contrast** - Text meets WCAG AA standards
- **Responsive design** - Works on all screen sizes

## Responsive Breakpoints
- **Desktop:** > 900px (full layout)
- **Mobile:** ≤ 900px (stacked layout, mobile menu)

## Forms
Contact form uses **Formspree** (https://formspree.io/f/mnjjngal)
- No backend needed
- Spam protection included
- Email notifications to nathanfinkel@gmail.com

## Common Update Tasks

### Change Text
Edit HTML files directly - no compilation needed.

### Add Show/Performance
Edit `shows.html` → Add new `.item` with date, title, description, and tags.

### Update Project
Edit `projects.html` and corresponding subpage in `p/` directory.

### Change Colors
Edit `:root` variables in `assets/styles.css`.

### Add Page
1. Create new `.html` file
2. Copy header/footer from existing page
3. Add link to navigation in all pages
4. Update this documentation

## Git Workflow
```bash
# Make changes to HTML/CSS/JS files
git status                          # Check what changed
git add -A                          # Stage all changes
git commit -m "Description"         # Commit with message
git push                            # Push to GitHub
```

GitHub Pages automatically rebuilds within ~2 minutes.

## Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 8+)

## Performance Notes
- No JavaScript frameworks = fast load times
- CSS is ~10KB minified
- Images should be optimized (WebP/JPEG, < 500KB each)
- GitHub Pages has CDN = global fast delivery

## Known Issues / Future Improvements
- [ ] Consider adding image lazy loading for performance
- [ ] Consider WebP format for images
- [ ] Consider adding a photos gallery page
- [ ] Consider adding more SoundCloud embeds to music page

---

*Maintained for human readability and ease of updates*
*Last updated: 2026-01-15*
