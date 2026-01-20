# Website Content Workflow
**Quick Reference Guide**

---

## 📝 Editing Website Copy

### The Easy Way (Recommended)

1. **Open** `COPY-EDIT.md`
2. **Edit** any text you want to change
3. **Save** the file
4. **Tell me**: "sync copy to website" or "update site with new copy"
5. **Review** the changes I make
6. **Commit** to git when you're happy

### Why This Is Better

✅ **One place** to see all your website text  
✅ **Easy to edit** - Just markdown, no HTML  
✅ **Clear structure** - Organized by page and section  
✅ **No HTML errors** - I handle the HTML syntax  
✅ **Fast updates** - Change once, update everywhere  

---

## 🔄 Other Common Tasks

### Update Bio Site-Wide
- Edit bio in `/Copy /blurb/website-bio-arts-music-2026-01-14.md`
- Tell me: "update bio site-wide"

### Add New Event
- Edit `assets/events.json`
- Add new event object with date, venue, tags, etc.

### Change Styling/Colors
- Edit `assets/styles.css`
- CSS variables are at the top (`:root` section)

### Add New Project Section
- Tell me what you want and I'll set it up
- Or edit HTML directly if you're comfortable

---

## 📁 Key Files

| File | Purpose | When to Edit |
|------|---------|--------------|
| `COPY-EDIT.md` | **All website text** | Anytime you want to change wording |
| `/Copy /blurb/website-bio-arts-music-2026-01-14.md` | **Bio source of truth** | When updating your bio narrative |
| `assets/events.json` | **Shows/events data** | When adding/removing events |
| `assets/styles.css` | **Visual styling** | When changing colors, layout, fonts |
| `TODO.md` | **Task tracking** | Track what's done and what's next |

---

## 🎯 Common Workflows

### Scenario 1: "I want to rewrite a section"
```
1. Open COPY-EDIT.md
2. Find the section (e.g., "Ambient / Electronic Performance")
3. Edit the lede or any text
4. Save
5. Tell me: "sync copy to website"
```

### Scenario 2: "I want to add a new show"
```
1. Open assets/events.json
2. Copy an existing event object
3. Change the details (date, venue, etc.)
4. Save
5. Shows page updates automatically
```

### Scenario 3: "I want to change my bio"
```
1. Open /Copy /blurb/website-bio-arts-music-2026-01-14.md
2. Edit the text
3. Save
4. Tell me: "update bio site-wide"
```

### Scenario 4: "I want to change a color"
```
1. Open assets/styles.css
2. Find the color variable (e.g., --color-1 for ambient)
3. Change the rgba() values
4. Save and refresh browser
```

---

## 🚨 Don't Edit These Directly

Unless you know HTML/CSS/JS:
- `*.html` files (use `COPY-EDIT.md` instead)
- `assets/site.js` (ask me for functionality changes)

---

## ✅ After Making Changes

Always:
1. **Review** - Check the site locally
2. **Test** - Click links, try on mobile
3. **Commit** - Save to git with clear message
4. **Push** - Send to GitHub (optional, for deployment)

---

## 💡 Pro Tips

- **Small changes**: Edit `COPY-EDIT.md` directly
- **Big rewrites**: Draft in a separate doc first
- **New sections**: Tell me what you want, I'll build the structure
- **Stuck?**: Ask me! That's what I'm here for

---

**Created**: January 20, 2026  
**Last Updated**: January 20, 2026
