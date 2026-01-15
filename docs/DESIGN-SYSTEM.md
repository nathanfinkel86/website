# Design System

Complete design documentation for the music website template.

---

## 🎨 Color System

### CSS Variables
**File:** `assets/styles.css` (lines 1-24)

```css
:root {
  /* Base colors */
  --bg: #0a0f14;                          /* Page background */
  --panel: rgba(255, 255, 255, 0.06);     /* Card backgrounds */
  --panel-2: rgba(255, 255, 255, 0.10);   /* Elevated surfaces */
  
  /* Text colors */
  --text: rgba(255, 255, 255, 0.92);      /* Primary text */
  --muted: rgba(255, 255, 255, 0.70);     /* Secondary text */
  --faint: rgba(255, 255, 255, 0.50);     /* Tertiary text */
  
  /* Accent colors */
  --accent: #9bf6ff;                      /* Primary teal/cyan */
  --accent-2: #bdb2ff;                    /* Secondary purple */
  --ring: rgba(155, 246, 255, 0.28);      /* Focus rings */
  
  /* Borders & shadows */
  --border: rgba(255, 255, 255, 0.10);    /* Default borders */
  --shadow: 0 20px 60px rgba(0, 0, 0, 0.45);
  --radius: 16px;                         /* Default border radius */
}
```

### Tag/Chip Color Variations

4 distinct color schemes for visual variety:

```css
/* Teal/Cyan */
--color-1: rgba(155, 246, 255, 0.18);
--border-1: rgba(155, 246, 255, 0.35);

/* Purple */
--color-2: rgba(189, 178, 255, 0.18);
--border-2: rgba(189, 178, 255, 0.35);

/* Green */
--color-3: rgba(168, 255, 214, 0.18);
--border-3: rgba(168, 255, 214, 0.35);

/* Pink */
--color-4: rgba(255, 183, 255, 0.18);
--border-4: rgba(255, 183, 255, 0.35);
```

### Background Gradients

**Base gradient** (applied to `body`):
```css
background:
  /* Paisley-like overlay - very subtle */
  radial-gradient(...),
  /* Accent color glows */
  radial-gradient(1200px 800px at 18% 12%, rgba(155, 246, 255, 0.12), transparent),
  /* Base gradient */
  linear-gradient(180deg, #0f1419 0%, #0a0f14 100%);
background-attachment: fixed;
```

**Hero page overlay** (`index.html`):
```css
/* Over background image */
background: linear-gradient(180deg, rgba(10, 15, 20, 0.35) 0%, rgba(10, 15, 20, 0.40) 100%);
```

### Card Opacity Pattern

Cards with backdrop blur for readability over backgrounds:
```css
background: rgba(11, 15, 20, 0.75);
backdrop-filter: blur(10px);
```

---

## 📐 Layout System

### Container

```css
.container {
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;
}
```

### Grid Systems

**2-column responsive:**
```css
.grid-2-col {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
}
```

**3-column:**
```css
.grid-3 {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}
```

**Hero grid:**
```css
.hero-grid {
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr 1fr;  /* 50/50 split on desktop */
}

@media (max-width: 900px) {
  grid-template-columns: 1fr;  /* Stack on mobile */
}
```

### Spacing Scale

Consistent spacing throughout:
- `8px` - Tight spacing (gaps, padding)
- `12px` - Small spacing
- `16px` - Base spacing
- `20px` - Medium spacing
- `24px` - Large spacing
- `32px` - Section spacing
- `48px` - Major sections

---

## 🔤 Typography

### Fonts

```css
font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 
             Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
```

System fonts for fast loading and native feel.

### Type Scale

```css
/* Headings */
h1 { 
  font-size: 42-52px;  /* Varies by context */
  line-height: 1.1;
  font-weight: 700;
}

h2 { 
  font-size: 28-32px;
  line-height: 1.2;
  font-weight: 600;
}

h3 { 
  font-size: 18-20px;
  line-height: 1.3;
  font-weight: 600;
}

/* Body */
body {
  font-size: 15px;
  line-height: 1.6;
}

/* Lede/intro text */
.lede {
  font-size: 17px;
  line-height: 1.5;
  color: var(--muted);
}

/* Small text */
.kicker {
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: var(--accent);
}
```

---

## 🧩 Components

### Cards

**Base card:**
```css
.card {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.card.pad {
  padding: 28px;
}
```

**Elevated card** (with more opacity for backgrounds):
```css
background: rgba(11, 15, 20, 0.75);
backdrop-filter: blur(10px);
```

### Buttons

**Base button:**
```css
.btn {
  padding: 12px 20px;
  font-size: 15px;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: var(--panel);
  transition: all 0.2s;
}

.btn:hover {
  border-color: var(--accent);
  box-shadow: 0 0 0 1px var(--accent), var(--shadow);
}

.btn.small {
  padding: 7px 12px;
  font-size: 13px;
  font-weight: 500;
}

.btn.primary {
  border-color: rgba(155, 246, 255, 0.28);
  background: linear-gradient(90deg, rgba(155, 246, 255, 0.20), rgba(189, 178, 255, 0.14));
}
```

### Chips (Tags)

```css
.chip {
  padding: 8px 14px;
  font-size: 14px;
  border-radius: 20px;
  border: 1px solid var(--border-1);  /* Color varies */
  background: var(--color-1);
  text-decoration: none;
  transition: all 0.2s;
}

.chip:hover {
  border-color: var(--accent);
  box-shadow: 0 0 16px rgba(155, 246, 255, 0.3);
}
```

**Color rotation** using `:nth-child()`:
```css
.chip:nth-child(4n+1) { /* color-1 */ }
.chip:nth-child(4n+2) { /* color-2 */ }
.chip:nth-child(4n+3) { /* color-3 */ }
.chip:nth-child(4n+4) { /* color-4 */ }
```

### Navigation

**Header:**
```css
header {
  position: sticky;
  top: 0;
  backdrop-filter: blur(14px);
  background: rgba(11, 15, 20, 0.62);
  border-bottom: 1px solid var(--border);
}
```

**Nav links:**
```css
.nav-links a {
  padding: 8px 12px;
  border-radius: 10px;
  font-size: 14px;
  color: var(--muted);
}

.nav-links a[aria-current="page"] {
  color: var(--text);
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.10);
}
```

### Item Cards (Lists)

```css
.item {
  position: relative;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--panel);
  transition: all 0.2s;
}

.item:hover {
  border-color: var(--accent);
  box-shadow: 0 0 20px rgba(155, 246, 255, 0.15);
}
```

**Stretched link pattern** (entire card clickable):
```css
.stretched-link {
  position: absolute;
  inset: 0;
  z-index: 1;
}
```

---

## 🎭 Special Effects

### Hover States

All interactive elements have glow effects:
```css
:hover {
  box-shadow: 0 0 16px rgba(155, 246, 255, 0.3);
}
```

### Backdrop Blur

Used on cards over backgrounds:
```css
backdrop-filter: blur(10px);
```

### Text Shadows

For floating text over backgrounds:
```css
text-shadow: 0 2px 20px rgba(0,0,0,0.8);
```

### Transitions

Smooth transitions on interactive elements:
```css
transition: all 0.2s ease;
```

---

## 📱 Responsive Design

### Breakpoints

```css
/* Mobile */
@media (max-width: 900px) {
  /* Stack columns, adjust spacing */
}

@media (max-width: 600px) {
  /* Further mobile optimizations */
}
```

### Mobile Navigation

Hamburger menu appears below 900px:
```css
@media (max-width: 900px) {
  .nav-links {
    display: none;  /* Hidden by default */
    position: absolute;
    /* Dropdown menu */
  }
  
  .nav-links.open {
    display: grid;
  }
}
```

---

## 🖼️ Image Patterns

### Background Images

**Hero page background:**
```css
background: url('image.jpg') center 20% / cover no-repeat fixed;
```
- `center 20%` - horizontal center, 20% from top (adjust to frame subject)
- `cover` - fills container
- `no-repeat` - no tiling
- `fixed` - parallax effect

### Featured Images in Cards

```html
<div style="margin: 24px 0;">
  <img 
    src="image.jpg" 
    alt="Descriptive text"
    style="width: 100%; height: auto; border-radius: 12px; 
           border: 1px solid var(--border);"
  />
</div>
```

---

## 🔧 Customization Tips

### Change Primary Accent Color

1. Update `--accent` in CSS variables
2. Update gradient colors in buttons/chips to match
3. Keep color transparency consistent (0.18 for backgrounds, 0.35 for borders)

### Adjust Card Opacity

Change `rgba(11, 15, 20, 0.75)` - increase last number for more opacity, decrease for more transparency

### Modify Spacing

Update the CSS variables or individual spacing values. Keep spacing consistent on a scale (multiples of 4 or 8).

### Typography Changes

Web fonts:
1. Add `@import` or `<link>` in HTML head
2. Update `font-family` in CSS
3. Adjust sizes as needed for new font

---

## ♿ Accessibility

### Color Contrast

All text meets WCAG AA standards:
- Primary text: `rgba(255, 255, 255, 0.92)` on dark background
- Links have visible focus states
- Interactive elements have adequate size

### Semantic HTML

- Proper heading hierarchy (h1 → h2 → h3)
- `<nav>`, `<main>`, `<section>`, `<aside>` landmarks
- Form labels and ARIA attributes

### Keyboard Navigation

- Skip link for keyboard users
- Focus visible on all interactive elements
- Proper tab order

---

## 🎨 Design Philosophy

This design system balances:
- **Modern aesthetics** - Blur effects, gradients, dark mode
- **Performance** - System fonts, optimized CSS, minimal JS
- **Accessibility** - Semantic HTML, ARIA, keyboard nav
- **Flexibility** - CSS variables, modular components
- **Maintainability** - Clear patterns, documented decisions

---

**Remember:** Consistency is key. Use existing patterns and components when adding new content to maintain design coherence.
