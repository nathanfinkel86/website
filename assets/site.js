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

  // Sticky project navigation
  const stickyNav = document.getElementById('sticky-nav');
  
  if (stickyNav) {
    console.log('Sticky nav found:', stickyNav);
    
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      
      // Show sticky nav after scrolling past explore indicator (around 500px)
      if (scrollY > 500) {
        stickyNav.classList.add('visible');
        console.log('Sticky nav visible at', scrollY);
      } else {
        stickyNav.classList.remove('visible');
      }
      
      // Highlight active section in sticky nav
      const sections = document.querySelectorAll('section[id]');
      const navLinks = stickyNav.querySelectorAll('.chip');
      
      let currentSection = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 200;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionBottom) {
          currentSection = section.getAttribute('id');
        }
      });
      
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === currentSection) {
          link.classList.add('active');
        }
      });
    }, { passive: true });
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
      } else {
        // Remove fade-in when scrolling back up so it can trigger again
        entry.target.classList.remove('fade-in');
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
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      
      // Show at top, hide when scrolled down past 400px (inverse of back-to-top button)
      if (currentScrollY < 400) {
        exploreIndicator.style.opacity = '1';
        exploreIndicator.style.transform = 'translateY(0)';
      } else {
        exploreIndicator.style.opacity = '0';
        exploreIndicator.style.transform = 'translateY(-10px)';
      }
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
    
    // Color palette for cards based on primary tag
    const cardStyles = {
      'ambient': 'border-color: rgba(100, 240, 255, 0.25); background: linear-gradient(135deg, rgba(100, 240, 255, 0.06), rgba(11, 15, 20, 0.30)); box-shadow: 0 2px 12px rgba(100, 240, 255, 0.08);',
      'facilitation': 'border-color: rgba(180, 150, 255, 0.25); background: linear-gradient(135deg, rgba(180, 150, 255, 0.06), rgba(11, 15, 20, 0.30)); box-shadow: 0 2px 12px rgba(180, 150, 255, 0.08);',
      'technical': 'border-color: rgba(255, 120, 80, 0.25); background: linear-gradient(135deg, rgba(255, 120, 80, 0.06), rgba(11, 15, 20, 0.30)); box-shadow: 0 2px 12px rgba(255, 120, 80, 0.08);',
      'glia': 'border-color: rgba(120, 255, 180, 0.22); background: linear-gradient(135deg, rgba(120, 255, 180, 0.05), rgba(11, 15, 20, 0.30)); box-shadow: 0 2px 12px rgba(120, 255, 180, 0.08);',
      'morocco': 'border-color: rgba(255, 140, 220, 0.25); background: linear-gradient(135deg, rgba(255, 140, 220, 0.06), rgba(11, 15, 20, 0.30)); box-shadow: 0 2px 12px rgba(255, 140, 220, 0.08);',
      'professional': 'border-color: rgba(140, 200, 255, 0.25); background: linear-gradient(135deg, rgba(140, 200, 255, 0.06), rgba(11, 15, 20, 0.30)); box-shadow: 0 2px 12px rgba(140, 200, 255, 0.08);'
    };
    
    // Use primary tag (first tag) for card color
    const primaryTag = event.tags[0] || 'ambient';
    const cardStyle = cardStyles[primaryTag] || cardStyles['ambient'];
    
    const tagsHtml = event.tags.map(tag => 
      `<a class="tag" href="${tagColors[tag] || '#'}">${capitalizeFirst(tag)}</a>`
    ).join('');
    
    const ticketButton = event.ticketUrl && isUpcoming
      ? `<a class="btn small primary" href="${event.ticketUrl}" target="_blank" rel="noreferrer" style="margin-top: 12px; display: inline-flex;">Get Tickets</a>`
      : '';
    
    return `
      <div class="item" style="${cardStyle}">
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

