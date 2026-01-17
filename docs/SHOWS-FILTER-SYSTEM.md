# Shows Page: Interactive Filter + Dandelion Integration

## Problem
- Dandelion embed is read-only (can't be filtered client-side)
- Chips on shows page are decorative, not functional
- Want filtering by category but keep Dandelion as source of truth

## Solution: Dual System
Combine a **curated upcoming shows section** with **interactive category filtering**, keeping Dandelion as fallback.

## Implementation Plan

### 1. HTML Structure
Add to `shows.html` (before Dandelion embed):
```html
<section class="section">
  <h2>Upcoming Shows</h2>
  
  <!-- Interactive filter chips -->
  <div class="chips" id="filter-chips">
    <button class="chip active" data-filter="all">All shows</button>
    <button class="chip" data-filter="live-electronic">Live electronic</button>
    <button class="chip" data-filter="workshops">Workshops</button>
    <button class="chip" data-filter="festivals">Festival / community</button>
  </div>

  <!-- Curated upcoming shows list -->
  <div class="list" id="upcoming-list">
    <div class="item" data-category="live-electronic">
      <div class="kicker">DATE HERE</div>
      <h3>Event name</h3>
      <p>Description...</p>
      <div class="meta">
        <span class="tag" href="#ambient">Ambient</span>
        <span class="tag" href="#ambient">Live electronic</span>
      </div>
    </div>
    <!-- Add more items as needed -->
  </div>

  <!-- Original Dandelion as source of truth -->
  <p style="margin: 20px 0 10px; color: var(--muted); font-size: 13px;">
    Full calendar managed via Dandelion:
  </p>
  <div class="dandelion-embed" style="max-height: 250px; overflow-y: auto;">
    <iframe src="..."></iframe>
  </div>
</section>
```

### 2. JavaScript (add to site.js)
```javascript
(() => {
  const filterChips = document.getElementById('filter-chips');
  const upcomingList = document.getElementById('upcoming-list');
  
  if (!filterChips || !upcomingList) return;
  
  filterChips.addEventListener('click', (e) => {
    if (!e.target.classList.contains('chip')) return;
    
    // Update active chip
    filterChips.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    e.target.classList.add('active');
    
    // Filter items
    const filter = e.target.dataset.filter;
    upcomingList.querySelectorAll('.item').forEach(item => {
      const category = item.dataset.category;
      if (filter === 'all' || category === filter) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });
})();
```

### 3. CSS Updates (optional, add to styles.css)
```css
/* Make filter chips interactive */
#filter-chips .chip {
  cursor: pointer;
  border: 1px solid rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.05);
}

#filter-chips .chip.active {
  border-color: var(--border-1);
  background: var(--color-1);
  color: var(--text);
}

#filter-chips .chip:hover {
  border-color: rgba(155, 246, 255, 0.4);
  background: rgba(155, 246, 255, 0.12);
}
```

## Benefits
✅ Uses existing color system (ambient/workshop/festival = cyan/purple/green)
✅ Maintains Dandelion as authoritative calendar
✅ No external APIs needed
✅ Mobile-friendly
✅ Simple JavaScript
✅ Users see curated upcoming shows first, full calendar as fallback

## Next Steps
- Populate with actual upcoming shows
- Update colors/styling as desired
- Test on mobile
