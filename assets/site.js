// Basic niceties: mobile menu + active link + current year
(() => {
  const menuBtn = document.querySelector('[data-menu]');
  const nav = document.querySelector('[data-nav]');
  
  // #region agent log - hypothesis verification
  const computedStyle = window.getComputedStyle(menuBtn);
  fetch('http://127.0.0.1:7243/ingest/57e4b33a-454a-4197-9047-3a5a1f7e8f4a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'site.js:6',message:'Menu button computed style on load',data:{display:computedStyle.display,backgroundColor:computedStyle.backgroundColor,borderColor:computedStyle.borderColor,viewport:`${window.innerWidth}x${window.innerHeight}`},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'A,B,C'})}).catch(()=>{});
  // #endregion
  
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
})();

