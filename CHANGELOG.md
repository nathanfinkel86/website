# Changelog

All notable changes to the Nathan Finkel Music Website will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to semantic versioning principles.

---

## [Unreleased]

### Planned
- Add real SoundCloud/YouTube embeds for all project placeholders
- Populate events.json with upcoming shows
- Add GLIA performance media from December 2025 UK tour
- Add Synths & Stories performance recordings
- Add House Band and workshop video footage
- Cross-browser and cross-device testing
- Accessibility audit (WCAG compliance)
- Performance optimization (lazy loading, minification)

---

## [2026-01-20] - Major Bio Update & New Project

### Added
- **Synths & Stories project section** — New collaborative storytelling project
  - Full section with format, repertoire, and approach details
  - Warm amber color scheme (rgba(255, 180, 100)) added to design system
  - SoundCloud and YouTube embed placeholders with custom amber player color
  - Added to both index.html and projects.html
  - Navigation chip added to hero sections
- **TODO.md** — Comprehensive task list with priorities, categories, and tracking
- **CHANGELOG.md** — This file! Chronological update tracking

### Changed
- **Complete bio refresh across all pages** (bio.html, index.html, projects.html, contact.html)
  - Rewrote in first-person voice with grounded, authentic tone
  - Expanded professional experience: 20+ years, stage/venue management
  - Added Splinter Faction role (Senior Technical Producer, 2020-present)
  - Technical skills detailed: Ableton Live, OBS/Streamlabs, VDMX, projection mapping
  - Morocco section expanded with personal heritage story (Moroccan Jewish ancestry)
  - Berklee College of Music summer programme mentioned
  - Two distinct Gnaoua projects detailed
  - Updated meta descriptions site-wide
- **Spelling standardization** — Changed all instances to "Gnaoua" (from Gnawa/Gnoua)
  - Updated in all HTML files and source documentation
  - Consistent throughout website and bio source files
- **Mobile UX improvement** — Contact form now appears above Instagram card on mobile
  - Used CSS `order` property for proper mobile stacking
  - Maintains desktop layout while improving mobile experience

### Removed
- **Commented-out code cleanup** for production readiness
  - Removed entire "Location & Availability" section from bio.html
  - Cleaned up placeholder "Example:" iframe comments from all embed sections
  - Kept structural comments for code navigation

### Fixed
- Mobile contact form ordering (form appeared below Instagram card)
- Inconsistent spelling of Gnaoua throughout site

---

## [2026-01-17] - Initial Structure & Design

### Added
- Core site structure with 5 main pages
  - index.html (home/landing page)
  - bio.html (professional biography)
  - projects.html (project showcase)
  - shows.html (events calendar)
  - contact.html (contact form)
- Project sections:
  - Ambient / Electronic performance
  - Professional performance experience (House Band, festivals)
  - Workshops & Facilitation
  - GLIA neural network instrument collaboration
  - Morocco — Essaouira recording projects
- Design system with cool teal/cyan/purple color palette
  - 5 distinct project colors with CSS variables
  - Responsive grid layouts
  - Mobile navigation with hamburger menu
  - Chip-based navigation system
  - Consistent card styling with backdrop blur
- SoundCloud embeds for ambient performances:
  - London Night Cafe (22/02/25)
  - New Year's Day 2025
- YouTube video embeds for performances
- Contact form integration with Formspree
- Assets:
  - styles.css with comprehensive design system
  - site.js with menu toggle and utility functions
  - Performance photos organized by category
  - Hero background image
- Documentation:
  - README.md with overview and quick start
  - context.md with development notes
  - .gitignore for standard web project

### Infrastructure
- GitHub Pages hosting setup
- Static HTML/CSS/JS architecture (no build step)
- Events system with JSON data file
- Font integration: Poiret One, Iceland, Megrim
- Responsive design with mobile breakpoints
- Accessibility features (skip links, ARIA labels)
- Back-to-top and scroll-down buttons

---

## Version History Notes

### Color System Evolution
- **Initial**: 5 colors (cyan, sky blue, purple, mint, magenta)
- **Current**: 6 colors (added amber for Synths & Stories)

### Content Philosophy
- First-person voice, grounded and authentic
- "Music as infrastructure" for rest and connection
- Accessibility and shared listening as core values
- No "AI tells" — natural, human tone throughout

### Technical Approach
- Static HTML for simplicity and portability
- CSS custom properties for consistent theming
- Mobile-first responsive design
- Progressive enhancement philosophy
- Clean, semantic markup

---

## Future Roadmap

### Short Term (Q1 2026)
- [ ] Add all media embeds (SoundCloud, YouTube)
- [ ] Populate upcoming events
- [ ] Photography additions (House Band, workshops, Morocco)
- [ ] Custom domain setup (natecreates.co.uk)

### Medium Term (Q2 2026)
- [ ] Press kit / Media page
- [ ] Testimonials section
- [ ] Blog/updates section
- [ ] Newsletter signup integration

### Long Term (2026+)
- [ ] Interactive shows filtering
- [ ] Custom audio player
- [ ] Gear/setup page
- [ ] Collaborations showcase
- [ ] Multi-language support (English/French for Morocco content?)

---

## Contributors

- **Nathan Finkel** — Content, direction, feedback
- **AI Assistant (Claude)** — Technical implementation, design system, structure

---

**Last Updated**: January 20, 2026
