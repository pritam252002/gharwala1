/**
 * GharKa - Shared JavaScript Utilities & Interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initHeaderScroll();
  initFAQAccordion();
  initTrialModal();
  initPincodeChecker();
  setActiveNavLink();
});

/* ---------------- Active Navigation Link Highlighter ---------------- */
function setActiveNavLink() {
  const path = (window.location.pathname || '').replace(/\\/g, '/').toLowerCase();
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  // Determine current page
  let currentPage = 'home';
  if (path.includes('/about/')) currentPage = 'about';
  else if (path.includes('/menu/')) currentPage = 'menu';
  else if (path.includes('/services/')) currentPage = 'services';
  else if (path.includes('/contact/')) currentPage = 'contact';
  else if (path.includes('/privacy-policy/')) currentPage = 'privacy';

  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = (link.getAttribute('href') || '').toLowerCase();

    if (currentPage === 'home' && (href.endsWith('index.html') && !href.includes('/about/') && !href.includes('/menu/') && !href.includes('/services/') && !href.includes('/contact/') && !href.includes('/privacy-policy/')) || href === './' || href === '/') {
      link.classList.add('active');
    } else if (currentPage === 'about' && href.includes('about')) {
      link.classList.add('active');
    } else if (currentPage === 'menu' && href.includes('menu')) {
      link.classList.add('active');
    } else if (currentPage === 'services' && href.includes('services')) {
      link.classList.add('active');
    } else if (currentPage === 'contact' && href.includes('contact')) {
      link.classList.add('active');
    } else if (currentPage === 'privacy' && href.includes('privacy-policy')) {
      link.classList.add('active');
    }
  });
}

/* ---------------- Mobile Navigation Drawer ---------------- */
function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  const backdrop = document.querySelector('.mobile-backdrop');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggle || !drawer || !backdrop) return;

  function openNav() {
    toggle.classList.add('active');
    drawer.classList.add('active');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
    toggle.setAttribute('aria-expanded', 'true');
  }

  function closeNav() {
    toggle.classList.remove('active');
    drawer.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', () => {
    if (drawer.classList.contains('active')) {
      closeNav();
    } else {
      openNav();
    }
  });

  backdrop.addEventListener('click', closeNav);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeNav);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('active')) {
      closeNav();
    }
  });
}

/* ---------------- Header Subtle Shadow on Scroll ---------------- */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.style.boxShadow = '0 4px 20px rgba(36, 26, 19, 0.08)';
    } else {
      header.style.boxShadow = 'none';
    }
  }, { passive: true });
}

/* ---------------- FAQ Accordion ---------------- */
function initFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const button = item.querySelector('.faq-button');
    if (!button) return;

    button.addEventListener('click', () => {
      const isAlreadyActive = item.classList.contains('active');

      // Close all other items for clean accordion behavior
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const btn = otherItem.querySelector('.faq-button');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });

      if (!isAlreadyActive) {
        item.classList.add('active');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ---------------- Order Trial Tiffin Modal ---------------- */
function initTrialModal() {
  const openButtons = document.querySelectorAll('[data-open-trial-modal]');
  const modal = document.getElementById('trialTiffinModal');
  if (!modal) return;

  const closeButton = modal.querySelector('.modal-close-btn');
  const trialForm = document.getElementById('trialOrderForm');

  function openModal(defaultPlan = 'Veg Thali') {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    const planSelect = document.getElementById('modalMealPlan');
    if (planSelect && defaultPlan) {
      planSelect.value = defaultPlan;
    }
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const plan = btn.getAttribute('data-plan') || 'Veg Thali';
      openModal(plan);
    });
  });

  if (closeButton) {
    closeButton.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  if (trialForm) {
    trialForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('modalName')?.value || 'Food Lover';
      const phone = document.getElementById('modalPhone')?.value || '';
      const area = document.getElementById('modalArea')?.value || 'Delhi';
      const plan = document.getElementById('modalMealPlan')?.value || 'Veg Thali';

      // Fire GA4 generate_lead
      trackGA4Lead('Trial Tiffin Modal', 139, { name, plan, area });

      // Construct WhatsApp message
      const text = encodeURIComponent(
        `Namaste GharKa! 🙏\nI would like to order a Trial Tiffin.\n\n` +
        `• Name: ${name}\n` +
        `• Phone: ${phone}\n` +
        `• Delivery Area: ${area}\n` +
        `• Tiffin Preference: ${plan}\n\n` +
        `Please confirm today's delivery slot.`
      );

      closeModal();
      showToast('Opening WhatsApp to confirm your trial order! 🍲');

      setTimeout(() => {
        window.open(`https://wa.me/919811234567?text=${text}`, '_blank');
      }, 700);
    });
  }
}

/* ---------------- Delhi Pincode Checker ---------------- */
function initPincodeChecker() {
  const form = document.getElementById('pincodeCheckForm');
  const input = document.getElementById('pincodeInput');
  const result = document.getElementById('pincodeResult');

  if (!form || !input || !result) return;

  // Valid Delhi NCR delivery pincode prefixes
  const serviceablePrefixes = [
    '110', // Delhi full NCT
    '201301', '201302', '201303', '201304', '201305', '201307', '201309', // Noida Hubs
    '122001', '122002', '122003', '122008', '122018', '122022' // Gurgaon Cyber City / DLF
  ];

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const pin = input.value.trim();

    if (!/^\d{6}$/.test(pin)) {
      result.className = 'pincode-result unavailable';
      result.innerHTML = '⚠️ Please enter a valid 6-digit Indian PIN code.';
      return;
    }

    const isAvailable = serviceablePrefixes.some(prefix => pin.startsWith(prefix));

    if (isAvailable) {
      result.className = 'pincode-result available';
      result.innerHTML = `✅ <strong>Hurrah! We deliver to ${pin}!</strong> Both Lunch (12:00-1:30 PM) and Dinner (7:30-9:00 PM) hot slots are open.`;
    } else {
      result.className = 'pincode-result unavailable';
      result.innerHTML = `📍 We are expanding fast! Pincode <strong>${pin}</strong> is slightly outside our core daily radius, but bulk/PG orders are accepted. <a href="https://wa.me/919811234567?text=Hi%2C%20do%20you%20deliver%20to%20pincode%20${pin}%3F" target="_blank" style="text-decoration: underline; font-weight:700;">Check on WhatsApp</a>.`;
    }
  });
}

/* ---------------- GA4 Event Tracking Helper ---------------- */
function trackGA4Lead(leadSource, leadValue = 0, extraParams = {}) {
  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'generate_lead', {
        event_category: 'Engagement',
        event_label: leadSource,
        value: leadValue,
        currency: 'INR',
        ...extraParams
      });
      console.log('[GA4] Event "generate_lead" fired successfully:', { leadSource, leadValue, extraParams });
    } else {
      console.log('[GA4 Placeholder] Event would fire:', 'generate_lead', { leadSource, leadValue, extraParams });
    }
  } catch (err) {
    console.warn('[GA4] Error firing event:', err);
  }
}

/* ---------------- Toast Notification Utility ---------------- */
function showToast(message, type = 'success') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>✨</span><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// Export to window for access across modules
window.trackGA4Lead = trackGA4Lead;
window.showToast = showToast;
