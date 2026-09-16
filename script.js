// Intersection Observer for Smooth Fade-in Animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

// Observe Timeline and Cert Cards
document.querySelectorAll('.timeline-item, .cert-card').forEach((el, i) => {
  el.style.transitionDelay = (i * 0.05) + 's';
  observer.observe(el);
});

// Navigation Highlight on Scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) {
      current = s.id;
    }
  });

  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--accent)' : '';
  });
});