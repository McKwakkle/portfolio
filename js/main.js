// MObile Nav Toggle

const burger = document.getElementById('nav-burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');

  burger.querySelector('i').className = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars';

  burger.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    burger.querySelector('i').className = 'fa-solid fa-bars';
    burger.setAttribute('aria-expanded', false);
  });
});

// Active link highlighting on scroll
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navAnchors.forEach((a) => a.classList.remove('active'));

        const activeLink = document.querySelector(
          `.nav-links a[href="#${entry.target.id}"]`,
        );
        if (activeLink) activeLink.classList.add('active');
      }
    });
  },
  {
    rootMargin: '-20px 0px -70% 0px',
    threshold: 0,
  },
);

sections.forEach((section) => observer.observe(section));
