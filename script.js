const nav = document.querySelector('.nav');
const menu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

window.addEventListener('scroll', () => {
  if (nav) {
    const scrolled = window.scrollY > 40;
    nav.style.background = scrolled
      ? 'rgba(17,17,17,.92)'
      : 'linear-gradient(#111b,transparent)';
    nav.style.backdropFilter = scrolled ? 'blur(4px)' : 'none';
    nav.style.webkitBackdropFilter = scrolled ? 'blur(4px)' : 'none';
  }
});

function closeMobileMenu() {
  if (!menu || !mobileMenu) return;

  mobileMenu.classList.remove('is-open');
  mobileMenu.setAttribute('aria-hidden', 'true');
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-label', 'Open menu');
  menu.textContent = '☰';
  document.body.classList.remove('menu-open');
}

if (menu && mobileMenu) {
  menu.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('is-open');

    mobileMenu.setAttribute('aria-hidden', String(!isOpen));
    menu.setAttribute('aria-expanded', String(isOpen));
    menu.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    menu.textContent = isOpen ? '×' : '☰';
    document.body.classList.toggle('menu-open', isOpen);
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMobileMenu();
  });
}

const heroImage = document.querySelector('.hero-bg img');

if (heroImage) {
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const movement = Math.min(scrollPosition * 0.10, 60);

    heroImage.style.transform =
      `translate3d(0, ${movement}px, 0)`;
  }, { passive: true });
}
