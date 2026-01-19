// Basic niceties: mobile menu + active link + current year + accordion
(() => {
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

  // accordion functionality
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isExpanded = item.classList.contains('expanded');
      
      // Close all other accordion items on the page
      document.querySelectorAll('.accordion-item').forEach(accordion => {
        accordion.classList.remove('expanded');
      });
      
      // Toggle current item
      if (!isExpanded) {
        item.classList.add('expanded');
      }
    });
  });

  // Back to top button
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });

    // Smooth scroll to top when clicked
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
})();

