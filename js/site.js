(() => {
  const header = document.querySelector('[data-header]');
  const toggle = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-nav]');
  const body = document.body;

  const setHeaderState = () => header?.classList.toggle('is-scrolled', window.scrollY > 12);
  setHeaderState();
  window.addEventListener('scroll', setHeaderState, { passive: true });

  const closeMenu = () => {
    if (!toggle || !nav) return;
    toggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
    body.classList.remove('menu-open');
  };
  toggle?.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('is-open', !open);
    body.classList.toggle('menu-open', !open);
  });
  nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });

  const observer = 'IntersectionObserver' in window ? new IntersectionObserver((entries, instance) => {
    entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); instance.unobserve(entry.target); } });
  }, { threshold: .12 }) : null;
  document.querySelectorAll('.reveal').forEach((element) => observer ? observer.observe(element) : element.classList.add('is-visible'));

  const form = document.querySelector('[data-quote-form]');
  const status = document.querySelector('[data-form-status]');
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    status.textContent = 'Terima kasih. Kebutuhan Anda sudah dicatat untuk ditindaklanjuti.';
    form.reset();
  });

  document.querySelectorAll('[data-year]').forEach((element) => { element.textContent = new Date().getFullYear(); });
})();
