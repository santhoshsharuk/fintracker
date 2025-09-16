(function () {
  // Theme
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const saved = localStorage.getItem('theme');

  // Restore saved theme
  if (saved === 'light') {
    root.classList.add('light');
    if (toggle) toggle.checked = false; // checkbox off = light
  } else {
    root.classList.remove('light');
    if (toggle) toggle.checked = true; // checkbox on = dark
  }

  // Toggle on change (not click)
  if (toggle) {
    toggle.addEventListener('change', () => {
      if (toggle.checked) {
        root.classList.remove('light');
        localStorage.setItem('theme', 'dark');
      } else {
        root.classList.add('light');
        localStorage.setItem('theme', 'light');
      }
    });
  }

  // Mobile nav
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const open = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
  }

  // Year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Fake newsletter submit (replace with your backend or Formspree)
  const form = document.getElementById('signup-form');
  const email = document.getElementById('email');
  const msg = document.getElementById('signup-msg');
  if (form && email && msg) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const value = email.value.trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        msg.textContent = 'Please enter a valid email.';
        msg.style.color = 'var(--danger)';
        return;
      }
      msg.textContent = 'Thanks! You are on the list.';
      msg.style.color = 'var(--ok)';
      form.reset();
    });
  }
})();
