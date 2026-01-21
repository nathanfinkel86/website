# Changelog

All notable changes to the Nathan Finkel Music Website will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to semantic versioning principles.

---

## [Unreleased]

### Planned
- Add remaining SoundCloud/YouTube embeds for project placeholders
- Populate events.json with upcoming shows
- Add Synths & Stories performance recordings
- Add House Band and workshop video footage
- Cross-browser and cross-device testing
- Accessibility audit (WCAG compliance)
- Performance optimization (lazy loading, minification)

---

## [2026-01-20 - Late Evening] Media Embeds & Bio Polish

### Added
- **GLIA SoundCloud embed** — "Just the Ending" with Mark Claydon & Nathan Finkel
  - Real performance recording from December 2025 UK shows
  - Mint/green player color (#78ffb4) matching GLIA branding
  - Replaces placeholder in GLIA section
- **Lockdown Streams playlist** — COVID-era daily improvised sessions
  - SoundCloud playlist embed: "Lockdown Streams - Selection I"
  - Added to COVID Streams card in Workshops & Facilitation section
  - Purple player color (#b496ff) matching facilitation theme

### Changed
- **Bio page copy refresh** — Updated hero and main bio text
  - More grounded first-person voice throughout
  - Expanded professional background details
  - Enhanced Morocco/Gnaoua narrative
- **Bio page UX** — Removed scroll control buttons (up/down arrows)
  - Cleaner single-page experience
  - Simplified navigation for bio content
- **Contact page spacing** — Adjusted "Get in touch" section margin
  - Negative margin (-40px) to ensure CTA visible on page load
  - Improved call-to-action visibility

### Files Modified
- `index.html` — Added GLIA and Lockdown Streams embeds
- `bio.html` — Copy refresh, removed scroll controls
- `contact.html` — Spacing adjustment
- `CHANGELOG.md` — This entry
- `context.md` — Updated with completed media embeds

---

## [2026-01-20 - Evening] Technical Production & Tuition Update

### Added
- **Technical Production & AV section** — New dedicated section showcasing professional technical services
  - Splinter Faction role (moved from Professional section)
  - Live sound engineering & mixing
  - Streaming & hybrid event services
  - Event technical direction & show calling
- **7th color to design system** — Coral/orange (rgba(255, 120, 80)) for technical section
- **Tuition offering** — Added 1-to-1 guitar, bass, and music production lessons
  - New card in Workshops section
  - Updated section title to "Workshops, facilitation & tuition"
  - Added tuition inquiry guidance to contact page
- **Navigation updates**
  - Added "Technical production & AV" chip to hero navigation
  - Added "Tech/AV" to sticky navigation
- **Contact page enhancement** — New inquiry card for technical production services with coral/orange styling

### Changed
- Reorganized Professional Performance section — Removed Splinter Faction (now in Technical)
- Updated COPY-EDIT.md with all new technical section and tuition content

### Files Modified
- `index.html` — Added technical section, updated facilitation section title and content
- `projects.html` — Added technical section
- `contact.html` — Added technical inquiry card
- `assets/styles.css` — Added 7th color variables, chip/tag/h2 styling for technical section
- `assets/site.js` — Added technical color to cardStyles palette
- `COPY-EDIT.md` — Documented technical section and tuition content
- `TODO.md` — Updated with evening session accomplishments
- `CHANGELOG.md` — This entry

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

**Last Updated**: January 20, 2026 (late evening)
