function setDateDefaults() {
  const pickupInput = document.getElementById('pickup-date');
  const returnInput = document.getElementById('return-date');

  if (!pickupInput || !returnInput) return;

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const dayAfter = new Date(today);
  dayAfter.setDate(today.getDate() + 3);

  const fmt = (d) => d.toISOString().slice(0, 10);

  pickupInput.min = fmt(tomorrow);
  returnInput.min = fmt(dayAfter);
  pickupInput.value = fmt(tomorrow);
  returnInput.value = fmt(dayAfter);
}

function calculateDays(pickup, returnDate) {
  const ms = new Date(returnDate) - new Date(pickup);
  return Math.max(1, Math.ceil(ms / (1000 * 60 * 60 * 24)));
}

function updateBookingSummary() {
  const pickupInput = document.getElementById('pickup-date');
  const returnInput = document.getElementById('return-date');
  const summaryEl = document.getElementById('booking-summary');
  const dailyEl = document.getElementById('summary-daily');
  const daysEl = document.getElementById('summary-days');
  const totalEl = document.getElementById('summary-total');

  if (!pickupInput || !returnInput || !summaryEl) return;

  const car = window._currentCar;
  if (!car) return;

  const pickup = pickupInput.value;
  const returnDate = returnInput.value;

  if (!pickup || !returnDate || new Date(returnDate) <= new Date(pickup)) {
    summaryEl.classList.remove('visible');
    return;
  }

  const days = calculateDays(pickup, returnDate);
  const total = days * car.price;

  if (dailyEl) dailyEl.textContent = `$${car.price}`;
  if (daysEl) daysEl.textContent = `${days} ${days === 1 ? 'day' : 'days'}`;
  if (totalEl) totalEl.textContent = `$${total.toLocaleString()}`;

  summaryEl.classList.add('visible');
}

function showError(fieldId, message) {
  const field = document.getElementById(fieldId);
  const errorEl = document.getElementById(`${fieldId}-error`);

  if (field) field.classList.add('error');
  if (errorEl) errorEl.textContent = message;
}

function clearError(fieldId) {
  const field = document.getElementById(fieldId);
  const errorEl = document.getElementById(`${fieldId}-error`);

  if (field) field.classList.remove('error');
  if (errorEl) errorEl.textContent = '';
}

function validateBookingForm() {
  let valid = true;

  const pickupLoc = document.getElementById('pickup-location');
  const pickupDate = document.getElementById('pickup-date');
  const returnDate = document.getElementById('return-date');
  const driverName = document.getElementById('driver-name');
  const driverEmail = document.getElementById('driver-email');
  const driverPhone = document.getElementById('driver-phone');

  const fields = [
    { el: pickupLoc, id: 'pickup-location' },
    { el: pickupDate, id: 'pickup-date' },
    { el: returnDate, id: 'return-date' },
    { el: driverName, id: 'driver-name' },
    { el: driverEmail, id: 'driver-email' },
    { el: driverPhone, id: 'driver-phone' },
  ];

  fields.forEach(({ id }) => clearError(id));

  if (pickupLoc && !pickupLoc.value) {
    showError('pickup-location', 'Select a pickup location.');
    valid = false;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (pickupDate) {
    if (!pickupDate.value) {
      showError('pickup-date', 'Enter a pickup date.');
      valid = false;
    } else if (new Date(pickupDate.value) <= today) {
      showError('pickup-date', 'Pickup must be a future date.');
      valid = false;
    }
  }

  if (returnDate) {
    if (!returnDate.value) {
      showError('return-date', 'Enter a return date.');
      valid = false;
    } else if (pickupDate && pickupDate.value && new Date(returnDate.value) <= new Date(pickupDate.value)) {
      showError('return-date', 'Return date must be after pickup.');
      valid = false;
    }
  }

  if (driverName) {
    const name = driverName.value.trim();
    if (!name) {
      showError('driver-name', 'Enter your full name.');
      valid = false;
    } else if (name.length < 3) {
      showError('driver-name', 'Name must be at least 3 characters.');
      valid = false;
    }
  }

  if (driverEmail) {
    const email = driverEmail.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      showError('driver-email', 'Enter your email address.');
      valid = false;
    } else if (!emailRegex.test(email)) {
      showError('driver-email', 'Enter a valid email address.');
      valid = false;
    }
  }

  if (driverPhone) {
    const phone = driverPhone.value.trim();
    const phoneRegex = /^[+\d\s\-()]{7,20}$/;
    if (!phone) {
      showError('driver-phone', 'Enter your phone number.');
      valid = false;
    } else if (!phoneRegex.test(phone)) {
      showError('driver-phone', 'Enter a valid phone number.');
      valid = false;
    }
  }

  return valid;
}

function handleBookingSubmit(e) {
  e.preventDefault();

  if (!validateBookingForm()) return;

  const btn = document.getElementById('book-btn');
  if (btn) {
    btn.disabled = true;
    btn.textContent = 'Processing…';
  }

  setTimeout(() => {
    const form = document.getElementById('booking-form');
    const success = document.getElementById('booking-success');

    if (form) form.hidden = true;
    if (success) success.hidden = false;
  }, 1200);
}

function validateContactForm() {
  let valid = true;

  const name = document.getElementById('contact-name');
  const email = document.getElementById('contact-email');
  const subject = document.getElementById('contact-subject');
  const message = document.getElementById('contact-message');

  const fields = ['contact-name', 'contact-email', 'contact-subject', 'contact-message'];
  fields.forEach(clearError);

  if (name && !name.value.trim()) {
    showError('contact-name', 'Enter your name.');
    valid = false;
  }

  if (email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
      showError('contact-email', 'Enter your email address.');
      valid = false;
    } else if (!emailRegex.test(email.value.trim())) {
      showError('contact-email', 'Enter a valid email address.');
      valid = false;
    }
  }

  if (subject && !subject.value) {
    showError('contact-subject', 'Select a subject.');
    valid = false;
  }

  if (message && message.value.trim().length < 10) {
    showError('contact-message', 'Message must be at least 10 characters.');
    valid = false;
  }

  return valid;
}

function handleContactSubmit(e) {
  e.preventDefault();

  if (!validateContactForm()) return;

  const btn = e.target.querySelector('button[type="submit"]');
  if (btn) {
    btn.disabled = true;
    btn.textContent = 'Sending…';
  }

  setTimeout(() => {
    const form = document.getElementById('contact-form');
    const success = document.getElementById('contact-success');

    if (form) form.hidden = true;
    if (success) success.hidden = false;
  }, 1000);
}

function addInlineValidation(formId) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.querySelectorAll('input, select, textarea').forEach((el) => {
    el.addEventListener('blur', () => {
      if (!el.value.trim() && el.required) {
        el.classList.add('error');
      } else {
        el.classList.remove('error');
        const errorEl = document.getElementById(`${el.id}-error`);
        if (errorEl) errorEl.textContent = '';
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setDateDefaults();

  const pickupDate = document.getElementById('pickup-date');
  const returnDate = document.getElementById('return-date');

  if (pickupDate) {
    pickupDate.addEventListener('change', () => {
      if (returnDate && returnDate.value && returnDate.value <= pickupDate.value) {
        const next = new Date(pickupDate.value);
        next.setDate(next.getDate() + 1);
        returnDate.value = next.toISOString().slice(0, 10);
      }
      returnDate.min = pickupDate.value;
      updateBookingSummary();
    });
  }

  if (returnDate) {
    returnDate.addEventListener('change', updateBookingSummary);
  }

  const bookingForm = document.getElementById('booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', handleBookingSubmit);
    addInlineValidation('booking-form');
    setTimeout(updateBookingSummary, 100);
  }

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', handleContactSubmit);
    addInlineValidation('contact-form');
  }
});
