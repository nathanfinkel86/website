// Basic niceties: mobile menu + active link + current year
(() => {
  // Update this string when you deploy, so you can confirm you're viewing the latest version.
  // Suggested format: YYYY-MM-DD HH:MM (timezone)
  const DEPLOY_TIMESTAMP = "2026-01-15 00:00 UTC";

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
  if (d) d.textContent = `Deployed: ${DEPLOY_TIMESTAMP}`;
})();

