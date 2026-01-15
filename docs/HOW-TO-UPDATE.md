# Website Update Guide (ELI5)

## Quick Reference

**Website URL:** https://nathanfinkel86.github.io/website/  
**Repository:** https://github.com/nathanfinkel86/website

---

## How to Update the Website

### 1. Edit Your Files
Open any HTML file in the `music-website` folder and make your changes:
- `index.html` - Home page
- `music.html` - Music/releases page
- `shows.html` - Shows/performances page
- `contact.html` - Contact page
- `projects.html` - Projects overview
- `p/*.html` - Individual project subpages (ambient, facilitation, glia, morocco)

### 2. Commit and Push Changes
Open Terminal, then run this one command:

```bash
cd "/Users/nathanfinkel/Documents/Admin - Cursor/music-website" && git add -A && git commit -m "Your update description here" && git push
```

**Example:**
```bash
cd "/Users/nathanfinkel/Documents/Admin - Cursor/music-website" && git add -A && git commit -m "Update bio text" && git push
```

### 3. Wait for Deploy
GitHub Pages automatically rebuilds your site in 1-2 minutes after you push. Refresh your browser to see changes.

---

## Important Logins & Services

### GitHub
- **Username:** nathanfinkel86
- **Repository:** website
- **What it does:** Hosts your code and website files
- **Auto-deploy:** Enabled via GitHub Pages

### Formspree (Contact Form)
- **Form ID:** In your contact.html (connected to your email)
- **What it does:** Sends you emails when people use the contact form
- **No login needed** - just receives form submissions

---

## File Structure

```
music-website/
├── index.html              # Home page
├── music.html              # Music/releases
├── shows.html              # Shows/performances  
├── contact.html            # Contact form
├── projects.html           # Projects overview
├── p/                      # Project subpages
│   ├── ambient.html
│   ├── facilitation.html
│   ├── glia.html
│   └── morocco.html
├── assets/
│   ├── styles.css          # All styling
│   ├── site.js             # Navigation & interactions
│   └── audio/              # Audio files (if needed)
├── IMG_2912.jpeg           # Glia image
└── _shared.html            # Navigation snippet (reference only)
```

---

## Common Updates

### Change Text
1. Open the relevant HTML file
2. Find the text you want to change
3. Edit it directly in the HTML
4. Commit and push (see command above)

### Add a New Show
1. Open `shows.html`
2. Copy an existing show entry
3. Paste and edit the details
4. Commit and push

### Update Your Bio
1. Open `index.html`
2. Find the bio section (in the `<section id="bio">`)
3. Edit the text
4. Commit and push

### Change Colors/Styling
1. Open `assets/styles.css`
2. Edit the relevant CSS properties
3. Commit and push

---

## Troubleshooting

### Changes don't show up?
- **Wait 2 minutes** - GitHub Pages takes time to rebuild
- **Hard refresh** - Press `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)
- **Check push worked** - Visit https://github.com/nathanfinkel86/website/commits/main to see your latest commit

### Git says "nothing to commit"?
- You didn't change any files, or
- The changes weren't saved before running the command

### Git asks for username/password?
- You might need to set up SSH keys or a personal access token
- GitHub doesn't accept password authentication anymore
- Ask for help setting up authentication if this happens

---

## Useful Commands

### Check if you have uncommitted changes:
```bash
cd "/Users/nathanfinkel/Documents/Admin - Cursor/music-website" && git status
```

### See your recent commits:
```bash
cd "/Users/nathanfinkel/Documents/Admin - Cursor/music-website" && git log --oneline -10
```

### Undo your last commit (before pushing):
```bash
cd "/Users/nathanfinkel/Documents/Admin - Cursor/music-website" && git reset --soft HEAD~1
```

---

## Remember

✅ Always `cd` to the music-website directory first  
✅ GitHub Pages is **free** for public repositories  
✅ Changes are **live** once pushed - no manual deploy needed  
✅ Keep your commit messages descriptive ("Update bio" not "asdf")  
✅ The website updates automatically from the `main` branch

---

## Quick Cheat Sheet

| Task | Command |
|------|---------|
| **Update website** | `cd "/Users/nathanfinkel/Documents/Admin - Cursor/music-website" && git add -A && git commit -m "message" && git push` |
| **Check status** | `cd "/Users/nathanfinkel/Documents/Admin - Cursor/music-website" && git status` |
| **View commits** | `cd "/Users/nathanfinkel/Documents/Admin - Cursor/music-website" && git log --oneline -10` |

---

*Last updated: January 2026*
