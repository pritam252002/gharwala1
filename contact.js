/**
 * GharKa - Contact & Enquiry Form Validation & GA4 Lead Tracker
 */

document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
});

function initContactForm() {
  const form = document.getElementById('gharkaContactForm');
  if (!form) return;

  const nameInput = document.getElementById('contactName');
  const phoneInput = document.getElementById('contactPhone');
  const emailInput = document.getElementById('contactEmail');
  const areaInput = document.getElementById('contactArea');
  const planSelect = document.getElementById('contactPlan');
  const messageInput = document.getElementById('contactMessage');
  const submitBtn = document.getElementById('contactSubmitBtn');
  const successBanner = document.getElementById('contactSuccessBanner');

  // Input sanitization / validation helpers
  function validateName() {
    const val = nameInput.value.trim();
    const errorEl = document.getElementById('nameError');
    if (val.length < 2) {
      nameInput.classList.add('is-invalid');
      errorEl.textContent = 'Please enter your full name (minimum 2 letters).';
      errorEl.classList.add('visible');
      return false;
    }
    nameInput.classList.remove('is-invalid');
    errorEl.classList.remove('visible');
    return true;
  }

  function validatePhone() {
    const val = phoneInput.value.replace(/\D/g, ''); // strip non-digits
    const errorEl = document.getElementById('phoneError');
    // Indian mobile number: 10 digits starting with 6, 7, 8, or 9
    if (!/^[6-9]\d{9}$/.test(val)) {
      phoneInput.classList.add('is-invalid');
      errorEl.textContent = 'Please enter a valid 10-digit Indian mobile number.';
      errorEl.classList.add('visible');
      return false;
    }
    phoneInput.classList.remove('is-invalid');
    errorEl.classList.remove('visible');
    return true;
  }

  function validateEmail() {
    const val = emailInput.value.trim();
    const errorEl = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(val)) {
      emailInput.classList.add('is-invalid');
      errorEl.textContent = 'Please enter a valid email address.';
      errorEl.classList.add('visible');
      return false;
    }
    emailInput.classList.remove('is-invalid');
    errorEl.classList.remove('visible');
    return true;
  }

  function validateArea() {
    const val = areaInput.value.trim();
    const errorEl = document.getElementById('areaError');
    if (val.length < 3) {
      areaInput.classList.add('is-invalid');
      errorEl.textContent = 'Please enter your Delhi/NCR neighborhood or PIN code.';
      errorEl.classList.add('visible');
      return false;
    }
    areaInput.classList.remove('is-invalid');
    errorEl.classList.remove('visible');
    return true;
  }

  // Real-time blur event listeners
  nameInput.addEventListener('blur', validateName);
  phoneInput.addEventListener('blur', validatePhone);
  emailInput.addEventListener('blur', validateEmail);
  areaInput.addEventListener('blur', validateArea);

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isNameValid = validateName();
    const isPhoneValid = validatePhone();
    const isEmailValid = validateEmail();
    const isAreaValid = validateArea();

    if (!isNameValid || !isPhoneValid || !isEmailValid || !isAreaValid) {
      return;
    }

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const email = emailInput.value.trim();
    const area = areaInput.value.trim();
    const plan = planSelect.value;
    const message = messageInput ? messageInput.value.trim() : '';
    const mealSchedule = form.querySelector('input[name="mealSchedule"]:checked')?.value || 'Lunch Only';

    // Button loading state
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="spinner" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="animation: spin 0.8s linear infinite; display: inline-block; vertical-align: middle;">
        <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
        <path d="M12 2a10 10 0 0 1 10 10"></path>
      </svg>
      Submitting enquiry...
    `;

    // Estimate Lead Value
    let estimatedValue = 3199;
    if (plan.includes('Trial')) estimatedValue = 149;
    if (plan.includes('Weekly')) estimatedValue = 799;
    if (plan.includes('Corporate')) estimatedValue = 15000;

    // Trigger GA4 generate_lead event
    if (typeof window.trackGA4Lead === 'function') {
      window.trackGA4Lead('Contact Enquiry Form', estimatedValue, {
        customer_name: name,
        customer_phone: phone,
        customer_area: area,
        meal_plan: plan,
        meal_schedule: mealSchedule
      });
    }

    // Simulate reliable async processing
    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;

      // WhatsApp direct text
      const waText = encodeURIComponent(
        `Namaste GharKa! 🙏\nI just submitted an enquiry on your website:\n\n` +
        `• Name: ${name}\n` +
        `• Phone: ${phone}\n` +
        `• Delivery Area: ${area}\n` +
        `• Plan: ${plan} (${mealSchedule})\n` +
        (message ? `• Note: ${message}\n\n` : `\n`) +
        `Looking forward to hearing from you soon!`
      );

      // Display Success Banner
      successBanner.innerHTML = `
        <div style="font-size: 2.2rem; margin-bottom: 0.5rem;">🎉</div>
        <h4>Shukriya, ${name}! Your enquiry has been received.</h4>
        <p style="margin-bottom: 1.25rem;">Our Delhi kitchen meal coordinator will WhatsApp you at <strong>+91 ${phone}</strong> within 15 minutes to confirm today's delivery slot.</p>
        <a href="https://wa.me/919811234567?text=${waText}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm">
          <span>Chat on WhatsApp Directly</span> →
        </a>
      `;
      successBanner.classList.add('visible');
      successBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

      // Reset form
      form.reset();

      if (typeof window.showToast === 'function') {
        window.showToast('Enquiry submitted! We will reach out shortly.');
      }
    }, 900);
  });
}
