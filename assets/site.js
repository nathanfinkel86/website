// Site JS: mobile menu + active link + year + JSON-driven copy + "Updated" badge
(() => {
  const deployEl = document.querySelector('[data-deploy]');
  const fmtWithTz = new Intl.DateTimeFormat(undefined, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short',
  });

  const setDeployText = (label, dateOrString) => {
    if (!deployEl) return;
    if (dateOrString instanceof Date && !Number.isNaN(dateOrString.getTime())) {
      deployEl.textContent = `${label}: ${fmtWithTz.format(dateOrString)}`;
    } else {
      deployEl.textContent = `${label}: ${String(dateOrString)}`;
    }
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

  // copy helpers
  const getByPath = (obj, dotPath) =>
    dotPath.split('.').reduce((acc, key) => (acc && acc[key] != null ? acc[key] : undefined), obj);

  const applyCopy = (data) => {
    document.querySelectorAll('[data-copy]').forEach((el) => {
      const key = el.getAttribute('data-copy');
      if (!key) return;
      const value = getByPath(data, key);
      if (typeof value === 'string') {
        el.textContent = value;
      } else {
        // eslint-disable-next-line no-console
        console.warn('[copy] Missing key or non-string value for:', key);
      }
    });
  };

  // Load content.json and use its server Last-Modified as the "Updated" badge.
  try {
    const script = document.currentScript || document.querySelector('script[src*="assets/site.js"]');
    const baseUrl = script?.src ? new URL('content.json', script.src).toString() : 'assets/content.json';
    const contentUrl = `${baseUrl}?v=${Date.now()}`; // strong cache-bust per page load

    fetch(contentUrl, { cache: 'no-store' })
      .then(async (r) => {
        if (!r.ok) return { ok: false, json: null, lastModified: null };
        const lastModifiedRaw = r.headers.get('last-modified');
        const lastModified = lastModifiedRaw ? new Date(lastModifiedRaw) : null;
        const json = await r.json().catch(() => null);
        return { ok: true, json, lastModified };
      })
      .then(({ ok, json, lastModified }) => {
        if (!ok || !json) {
          // eslint-disable-next-line no-console
          console.warn('[copy] Failed to load content.json (non-OK response or invalid JSON)');
          setDeployText('Updated', 'content.json failed to load');
          return;
        }
        if (lastModified) setDeployText('Updated', lastModified);
        applyCopy(json);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.warn('[copy] Failed to load content.json:', err);
        setDeployText('Updated', 'content.json failed to load');
      });
  } catch (_) {
    // no-op: fallback is hardcoded HTML copy
  }
})();

