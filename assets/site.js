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

  // Fade-in animations on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  // Observe all sections, cards, and items
  document.querySelectorAll('.section, .card, .item').forEach(el => {
    el.classList.add('fade-in-target');
    observer.observe(el);
  });

  // Subtle parallax on hero image
  const heroImage = document.querySelector('.hero-image img');
  if (heroImage) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      const rate = scrolled * 0.05; // Very subtle - only 5% of scroll
      heroImage.style.transform = `translateY(${rate}px)`;
    }, { passive: true });
  }

  // Hide/show explore indicator based on scroll position
  const exploreIndicator = document.getElementById('explore-indicator');
  if (exploreIndicator) {
    let lastScrollY = window.scrollY;
    let hasScrolledDown = false; // Track if user has scrolled down
    
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      const scrollingUp = currentScrollY < lastScrollY;
      const nearTop = currentScrollY < 200; // Hide when within 200px of top
      
      // Track if user has scrolled down past the threshold
      if (currentScrollY >= 200) {
        hasScrolledDown = true;
      }
      
      // Only hide when scrolling UP, near top, AND user has previously scrolled down
      if (nearTop && scrollingUp && hasScrolledDown) {
        exploreIndicator.style.opacity = '0';
        exploreIndicator.style.transform = 'translateY(-10px)';
      } else if (currentScrollY >= 200 || !hasScrolledDown) {
        exploreIndicator.style.opacity = '1';
        exploreIndicator.style.transform = 'translateY(0)';
      }
      
      lastScrollY = currentScrollY;
    }, { passive: true });
  }

  // ===== SHOWS PAGE: Events loading and filtering =====
  if (document.getElementById('upcoming-events')) {
    loadAndDisplayEvents();
  }

  async function loadAndDisplayEvents() {
    try {
      const response = await fetch('assets/events.json');
      const events = await response.json();
      
      let currentFilter = 'all';
      
      // Render events initially
      renderEvents(events, currentFilter);
      
      // Setup filter chips
      const filterChips = document.querySelectorAll('.filter-chip');
      filterChips.forEach(chip => {
        chip.addEventListener('click', () => {
          // Update active state
          filterChips.forEach(c => c.classList.remove('active'));
          chip.classList.add('active');
          
          // Update filter and re-render
          currentFilter = chip.getAttribute('data-filter');
          renderEvents(events, currentFilter);
        });
      });
    } catch (error) {
      console.error('Error loading events:', error);
      document.getElementById('upcoming-events').innerHTML = 
        '<p class="note">Unable to load events. Please check back later.</p>';
    }
  }

  function renderEvents(events, filter) {
    const upcomingContainer = document.getElementById('upcoming-events');
    const pastContainer = document.getElementById('past-events');
    const noUpcoming = document.getElementById('no-upcoming');
    
    // Filter events
    const filteredEvents = events.filter(event => {
      if (filter === 'all') return true;
      return event.tags.includes(filter);
    });
    
    // Separate upcoming and past
    const upcoming = filteredEvents.filter(e => e.status === 'upcoming');
    const past = filteredEvents.filter(e => e.status === 'past');
    
    // Render upcoming
    if (upcoming.length === 0) {
      upcomingContainer.innerHTML = '';
      noUpcoming.style.display = 'block';
    } else {
      noUpcoming.style.display = 'none';
      upcomingContainer.innerHTML = upcoming.map(event => renderEventCard(event, true)).join('');
    }
    
    // Render past
    pastContainer.innerHTML = past.map(event => renderEventCard(event, false)).join('');
  }

  function renderEventCard(event, isUpcoming) {
    const date = new Date(event.date);
    const formattedDate = date.toLocaleDateString('en-GB', { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
    });
    
    const tagColors = {
      'ambient': 'index.html#ambient',
      'facilitation': 'index.html#facilitation',
      'glia': 'index.html#glia',
      'morocco': 'index.html#morocco'
    };
    
    const tagsHtml = event.tags.map(tag => 
      `<a class="tag" href="${tagColors[tag] || '#'}">${capitalizeFirst(tag)}</a>`
    ).join('');
    
    const ticketButton = event.ticketUrl && isUpcoming
      ? `<a class="btn small primary" href="${event.ticketUrl}" target="_blank" rel="noreferrer" style="margin-top: 12px; display: inline-flex;">Get Tickets</a>`
      : '';
    
    return `
      <div class="item">
        <div class="kicker">${formattedDate}</div>
        <h3>${event.title}</h3>
        <p style="margin-bottom: 4px;"><strong>${event.venue}</strong> — ${event.location}</p>
        <p>${event.description}</p>
        <div class="meta">
          ${tagsHtml}
        </div>
        ${ticketButton}
      </div>
    `;
  }

  function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
})();

