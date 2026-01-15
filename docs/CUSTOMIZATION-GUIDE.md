# Customization Guide

Complete step-by-step guide to customize this template for your own use.

## 🎯 Overview

This guide walks you through replacing all content, images, and configurations to make this site your own. Estimated time: 2-3 hours.

---

## 1. Basic Information

### Update Site Metadata

**File:** All `.html` files

Replace in `<head>` section:
```html
<title>Your Name — Music & Arts</title>
<meta name="description" content="Your bio/tagline here" />
```

### Update Navigation Brand

**Files:** All `.html` files in header

```html
<strong>Your Name</strong>
<span>Your tagline</span>
```

---

## 2. Home Page (`index.html`)

### A. Background Image

**Current:** `Nathan ambient show 1.jpeg`

1. Add your high-res performance/studio photo to root directory
2. Update line ~44:
```html
<main id="content" style="background: url('your-image.jpg') center 20% / cover no-repeat fixed;">
```
3. Adjust vertical position (`20%`) to frame your subject

### B. Floating Heading

**Lines ~46-48**

```html
<h1>Your main tagline here.</h1>
```
Keep it concise (3-6 words works best)

### C. Main Card Content

**Lines ~51-59**

```html
<h2>Your professional description here</h2>
<p class="lede">Your approach/methods/offerings</p>
```

**Chips (lines ~56-60):** Update links and text for your specialties:
```html
<a class="chip" href="projects.html#your-section">Your specialty 1</a>
```

### D. Quick Info Sidebar

**Lines ~63-79**

Update location, availability, and featured project:
```html
<h3>Your City, Country</h3>
<p>Your availability statement</p>

<h3>Your Recent Project</h3>
<p>Brief description linking to projects page</p>
```

### E. What I Do Section

**Lines ~83-103**

Replace the 3 mini cards with your services/skills

### F. Short Bio

**Lines ~107-133**

Replace with your professional narrative (4-5 paragraphs recommended)

---

## 3. About Page (`about.html`)

**If you created this page**, replace with:
- Extended biography
- Background and journey
- Professional highlights
- Personal touches

---

## 4. Music Page (`music.html`)

### A. SoundCloud Embeds

**Lines with `.embed` class**

Replace with your SoundCloud embed codes:
1. Go to your track on SoundCloud
2. Click "Share" → "Embed"
3. Copy the iframe URL
4. Update:
```html
<iframe src="YOUR_SOUNDCLOUD_EMBED_URL"></iframe>
```

### B. Project Chips

Update chips to match your actual projects

### C. Performance Photos

If using images, add them and reference in the page

---

## 5. Projects Page (`projects.html`)

### A. Project Sections

**Current sections:**
- Ambient/Electronic
- Professional Performance
- Workshops & Facilitation
- Glia
- Morocco recording

**To customize:**
1. Keep, remove, or add sections as needed
2. Update section IDs (e.g., `id="ambient"` → `id="your-project"`)
3. Update navigation chips throughout site to match new IDs

### B. Project Images

Add your project images and update references

### C. Create/Update Subpages

**Directory:** `p/`

For each project:
1. Copy an existing subpage as template
2. Rename (e.g., `p/your-project.html`)
3. Update content, images, descriptions
4. Link from main projects page

---

## 6. Shows Page (`shows.html`)

### A. Dandelion Events Integration

**Line ~62**

Replace with your organization slug:
```html
src="https://dandelion.events/o/YOUR-ORG-SLUG/events?minimal=1&no_search=1..."
```

Or remove the Dandelion embed entirely and manage events manually.

### B. Recent Highlights

**Lines ~71+**

Update with your past shows, festivals, residencies:
```html
<div class="kicker">Date • City</div>
<h3>Venue / Event Name</h3>
<p>Brief description or role</p>
<a class="tag" href="projects.html#your-section">Project tag</a>
```

---

## 7. Contact Page (`contact.html`)

### Formspree Integration

**Line ~55**

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Get your form endpoint
4. Update:
```html
<form action="https://formspree.io/f/YOUR-FORM-ID">
```

Or replace with your own contact form solution.

---

## 8. Images

### Required Images

Create or replace:
- **Home background** - High-res performance/studio photo (1920px+ width)
- **Project images** - One per project (1200px+ width recommended)
- **Performance photos** - For shows/highlights sections

### Image Optimization

Before adding:
1. Resize to appropriate dimensions (max 2000px width for backgrounds)
2. Optimize file size (use tools like ImageOptim, TinyPNG)
3. Use `.jpg` for photos, `.png` for graphics with transparency

---

## 9. Colors & Design

### Quick Color Changes

**File:** `assets/styles.css`

**Lines 1-24:** CSS variables

Change accent colors:
```css
--accent: #9bf6ff;     /* Main teal - change to your brand color */
--accent-2: #bdb2ff;   /* Purple accent */
```

See `DESIGN-SYSTEM.md` for complete color customization.

---

## 10. External Links & Social

### Footer

**All pages, footer section**

Add your social links:
```html
<a href="https://instagram.com/yourhandle">Instagram</a>
<a href="https://soundcloud.com/yourhandle">SoundCloud</a>
```

### Contact Information

Update email, phone, booking info on contact page

---

## 11. Content Files (Optional)

If you want to keep context files:

- **`context.md`** - Your project notes
- **`glia-spec.md`** - Project-specific docs

Feel free to delete, replace, or add your own markdown files.

---

## 12. Deployment

### GitHub Pages Setup

1. Create GitHub repo: `your-site`
2. Push code:
```bash
git init
git add -A
git commit -m "Initial commit"
git remote add origin git@github.com:yourusername/your-site.git
git push -u origin main
```
3. Enable GitHub Pages in repo settings → Pages → Source: main branch
4. Access at `https://yourusername.github.io/your-site`

### Custom Domain (Optional)

1. Add `CNAME` file to root with your domain
2. Configure DNS with your registrar
3. Enable HTTPS in GitHub Pages settings

See `HOW-TO-UPDATE.md` for Git workflow details.

---

## 13. Testing Checklist

Before launching:

- [ ] All pages load without errors
- [ ] Navigation works on all pages
- [ ] All internal links work
- [ ] External integrations work (Formspree, Dandelion, SoundCloud)
- [ ] Images load and display correctly
- [ ] Mobile responsive on phone/tablet
- [ ] Contact form submits successfully
- [ ] All personal content replaced
- [ ] No template placeholders remain
- [ ] Browser console has no errors
- [ ] Test on multiple browsers (Chrome, Safari, Firefox)

---

## 🎉 Launch!

Once customized and tested, you're ready to share your site!

**Need help?** Refer to:
- `DESIGN-SYSTEM.md` for design details
- `HOW-TO-UPDATE.md` for ongoing updates
- `CODE-STRUCTURE.md` for technical details

---

**Tip:** Keep this template repository separate so you can create new projects from it in the future!
