// Basic niceties: mobile menu + active link + current year
(() => {
  // Update this string when you deploy, so you can confirm you're viewing the latest version.
  // Use an ISO timestamp (UTC recommended). Example: "2026-01-15T01:23:45Z"
  const DEPLOY_TIMESTAMP_ISO = "2026-01-15T00:00:00Z";

  const getByPath = (obj, path) => {
    return path.split('.').reduce((acc, key) => (acc && acc[key] != null ? acc[key] : undefined), obj);
  };

  const applyCopy = (data) => {
    document.querySelectorAll('[data-copy]').forEach((el) => {
      const key = el.getAttribute('data-copy');
      if (!key) return;
      const value = getByPath(data, key);
      if (typeof value === 'string') {
        el.textContent = value;
      } else {
        // Helpful debug if a key doesn't exist in content.json
        // (safe to leave in production; only visible in DevTools)
        // eslint-disable-next-line no-console
        console.warn('[copy] Missing key or non-string value for:', key);
      }
    });
  };

  const menuBtn = document.querySelector('[data-menu]');
  const nav = document.querySelector('[data-nav]');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // mark active link
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('a[data-nav-link]').forEach((a) => {
    const href = (a.getAttribute('href') || '').toLowerCase();
    if (href === path) a.setAttribute('aria-current', 'page');
  });

  // year
  const y = document.querySelector('[data-year]');
  if (y) y.textContent = String(new Date().getFullYear());

  // deploy badge
  const d = document.querySelector('[data-deploy]');
  if (d) {
    const deployDate = new Date(DEPLOY_TIMESTAMP_ISO);
    const fmt = new Intl.DateTimeFormat(undefined, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    });

    const render = () => {
      if (Number.isNaN(deployDate.getTime())) {
        d.textContent = `Deployed: ${DEPLOY_TIMESTAMP_ISO}`;
        return;
      }
      d.textContent = `Deployed: ${fmt.format(deployDate)}`;
    };

    render();
  }

  // copy (single source of truth): assets/content.json
  try {
    const script = document.currentScript || document.querySelector('script[src*="assets/site.js"]');
    const baseUrl = script?.src ? new URL('content.json', script.src).toString() : 'assets/content.json';
    // Bust caches between deploys (GitHub Pages can be sticky).
    const contentUrl = `${baseUrl}?v=${encodeURIComponent(DEPLOY_TIMESTAMP_ISO)}`;
    fetch(contentUrl, { cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : null))
      .then((json) => {
        if (json) {
          applyCopy(json);
        } else {
          // eslint-disable-next-line no-console
          console.warn('[copy] Failed to load content.json (non-OK response)');
        }
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.warn('[copy] Failed to load content.json:', err);
      });
  } catch (_) {
    // no-op: fallback is the hardcoded HTML copy
  }
})();

