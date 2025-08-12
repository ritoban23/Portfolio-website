const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

// Active nav link on scroll
const sections = document.querySelectorAll('[data-section]');
const linkMap = new Map();
navLinks.forEach(l => {
    const href = l.getAttribute('href');
    if (href && href.startsWith('#')) {
        linkMap.set(href.slice(1), l);
    }
});

const setActive = (id) => {
    navLinks.forEach(l => l.classList.remove('active'));
    const link = linkMap.get(id);
    if (link) link.classList.add('active');
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setActive(entry.target.id);
        }
    });
}, { rootMargin: '-40% 0px -50% 0px', threshold: 0.01 });

sections.forEach(s => observer.observe(s));

// Reveal animations
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });

revealEls.forEach(el => revealObserver.observe(el));

// Header scrolled state
const header = document.querySelector('.site-header');
const onScroll = () => {
    if (!header) return;
    if (window.scrollY > 8) header.classList.add('site-header--scrolled');
    else header.classList.remove('site-header--scrolled');
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();
