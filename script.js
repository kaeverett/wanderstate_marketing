/**
 * WANDER STATE - Interactive Elements
 * Handles tab switching, smooth scrolling, and dynamic interactions
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

  // ==========================================
  // DAYPART TAB SWITCHING
  // ==========================================
  const daypartTabs = document.querySelectorAll('.daypart-tab');
  const daypartContents = document.querySelectorAll('.daypart-content');

  if (daypartTabs.length > 0) {
    daypartTabs.forEach(tab => {
      tab.addEventListener('click', function() {
        const daypart = this.getAttribute('data-daypart');

        // Remove active class from all tabs
        daypartTabs.forEach(t => t.classList.remove('active'));

        // Add active class to clicked tab
        this.classList.add('active');

        // Hide all content
        daypartContents.forEach(content => {
          content.classList.remove('active');
        });

        // Show selected content
        const selectedContent = document.getElementById(daypart);
        if (selectedContent) {
          selectedContent.classList.add('active');

          // Add fade-in animation
          selectedContent.style.opacity = '0';
          setTimeout(() => {
            selectedContent.style.transition = 'opacity 0.3s ease-in';
            selectedContent.style.opacity = '1';
          }, 10);
        }
      });
    });
  }

  // ==========================================
  // SMOOTH SCROLLING FOR ANCHOR LINKS
  // ==========================================
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      // Only handle internal anchors, not empty ones
      if (href !== '#' && href.length > 1) {
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          e.preventDefault();

          // Smooth scroll to target
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });

          // Update URL without jumping
          history.pushState(null, null, href);
        }
      }
    });
  });

  // ==========================================
  // MOBILE MENU TOGGLE (if needed later)
  // ==========================================
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      this.setAttribute('aria-expanded',
        this.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
      );
    });
  }

  // ==========================================
  // FART SCROLL - Random fart sounds on scroll
  // ==========================================
  const fartSounds = [
    'sounds/fart1.wav',
    'sounds/fart2.wav',
    'sounds/fart3.wav',
    'sounds/fart4.wav',
    'sounds/fart5.wav',
    'sounds/fart6.wav'
  ];

  let lastFartTime = 0;
  const fartCooldown = 300; // Minimum ms between farts

  // Preload all fart sounds
  const fartAudioElements = fartSounds.map(src => {
    const audio = new Audio(src);
    audio.volume = 0.4; // Adjust volume so it's not too obnoxious
    return audio;
  });

  function playRandomFart() {
    const now = Date.now();
    if (now - lastFartTime < fartCooldown) return;

    // Only fart 20% of the time (1 in 5 scrolls)
    if (Math.random() > 0.2) return;

    const randomIndex = Math.floor(Math.random() * fartAudioElements.length);
    const fartAudio = fartAudioElements[randomIndex].cloneNode();
    fartAudio.volume = 0.3 + (Math.random() * 0.3); // Random volume between 0.3-0.6
    fartAudio.play().catch(err => console.log('Fart failed to play:', err));

    lastFartTime = now;
  }

  let lastScrollY = window.pageYOffset;
  let ticking = false;

  window.addEventListener('scroll', function() {
    lastScrollY = window.pageYOffset;

    if (!ticking) {
      window.requestAnimationFrame(function() {
        // Fart scroll
        playRandomFart();

        // Parallax effect
        const scrolled = lastScrollY;
        const parallaxElements = document.querySelectorAll('.animate-float');

        parallaxElements.forEach((element, index) => {
          const speed = 0.3 + (index * 0.1);
          const yPos = -(scrolled * speed);
          element.style.transform = `translateY(${yPos}px)`;
        });

        ticking = false;
      });

      ticking = true;
    }
  });

  // ==========================================
  // PRODUCT CARD HOVER EFFECTS
  // ==========================================
  const productCards = document.querySelectorAll('.product-card, .card-flavor');

  productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transition = 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    });
  });

  // ==========================================
  // INTERSECTION OBSERVER - Fade In On Scroll
  // ==========================================
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const fadeInObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        fadeInObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all cards and sections
  const observeElements = document.querySelectorAll('.card, .product-card, section > .container > h2');
  observeElements.forEach(el => {
    el.style.opacity = '0';
    fadeInObserver.observe(el);
  });

  // ==========================================
  // FORM VALIDATION (if forms exist)
  // ==========================================
  const preReleaseForm = document.getElementById('preReleaseForm');

  if (preReleaseForm) {
    preReleaseForm.addEventListener('submit', function(e) {
      // Let FormSubmit.co handle the submission naturally
      // Don't prevent default - allow the form to submit
      console.log('Waitlist form submitted');
    });
  }

  // ==========================================
  // DYNAMIC YEAR FOR COPYRIGHT
  // ==========================================
  const currentYear = new Date().getFullYear();
  const copyrightYears = document.querySelectorAll('.footer-bottom p');

  copyrightYears.forEach(p => {
    if (p.textContent.includes('2024')) {
      p.textContent = p.textContent.replace('2024', currentYear);
    }
  });

  // ==========================================
  // LOADING ANIMATION (Optional)
  // ==========================================
  window.addEventListener('load', function() {
    document.body.classList.add('loaded');

    // Remove any loading overlay if it exists
    const loader = document.querySelector('.loader');
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => loader.remove(), 300);
    }
  });

  // ==========================================
  // ADD TO CART INTERACTION (Placeholder)
  // ==========================================
  const addToCartButtons = document.querySelectorAll('a[href="#buy"], .btn[href="#buy"]');

  addToCartButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();

      // Visual feedback
      const originalText = this.textContent;
      this.textContent = 'Added to Cart!';
      this.classList.add('btn-success');

      // Reset after 2 seconds
      setTimeout(() => {
        this.textContent = originalText;
        this.classList.remove('btn-success');
      }, 2000);

      // Here you would integrate with your e-commerce platform
      console.log('Product added to cart');
    });
  });

  // ==========================================
  // ACCESSIBILITY: Keyboard Navigation
  // ==========================================
  document.addEventListener('keydown', function(e) {
    // Tab navigation for daypart selector
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const activeTab = document.querySelector('.daypart-tab.active');

      if (activeTab) {
        const allTabs = Array.from(daypartTabs);
        const currentIndex = allTabs.indexOf(activeTab);
        let newIndex;

        if (e.key === 'ArrowRight') {
          newIndex = (currentIndex + 1) % allTabs.length;
        } else {
          newIndex = (currentIndex - 1 + allTabs.length) % allTabs.length;
        }

        allTabs[newIndex].click();
        allTabs[newIndex].focus();
      }
    }
  });

  // ==========================================
  // LOG CONSOLE MESSAGE
  // ==========================================
  console.log('%c🍄 Wander State', 'font-size: 24px; font-weight: bold; color: #14433D;');
  console.log('%cBuilt with functional mushrooms and good vibes', 'font-size: 14px; color: #5C6B3E;');
  console.log('%c—', 'font-size: 12px;');
  console.log('%cInterested in joining our team? Email: hello@drinkwanderstate.com', 'font-size: 12px; color: #8B7355;');

});

// ==========================================
// CSS ADDITIONS FOR ANIMATIONS
// ==========================================
const style = document.createElement('style');
style.textContent = `
  /* Daypart Content Transitions */
  .daypart-content {
    display: none;
  }

  .daypart-content.active {
    display: block;
  }

  /* Active Tab Styling */
  .daypart-tab.active {
    background-color: var(--color-primary-forest);
    color: var(--color-white);
  }

  /* Loaded State */
  body.loaded {
    opacity: 1;
    transition: opacity 0.3s ease-in;
  }

  /* Success Button State */
  .btn-success {
    background-color: var(--color-success) !important;
    border-color: var(--color-success) !important;
  }

  /* Smooth transitions for observed elements */
  .animate-fade-in {
    animation: fadeIn 0.6s ease-out forwards;
  }

  /* Mobile Responsive Adjustments */
  @media (max-width: 767px) {
    .grid-cols-2,
    .grid-cols-3,
    .grid-cols-4 {
      grid-template-columns: 1fr !important;
    }

    .daypart-content .grid-cols-2 {
      grid-template-columns: 1fr !important;
    }

    .daypart-content .grid-cols-2 > div:first-child {
      order: 2;
    }

    .daypart-content .grid-cols-2 > div:last-child {
      order: 1;
    }
  }
`;
document.head.appendChild(style);
