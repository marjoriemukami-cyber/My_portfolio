/*===== CREATIVE MENU LOGIC =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            // Toggles the show-menu class and adds a 'rotate' effect to the toggle icon
            nav.classList.toggle('show');
            toggle.classList.toggle('bx-x'); // Assuming you use Boxicons for an 'X' close icon
        });
    }
};
showMenu('nav-toggle', 'nav-menu');

const toggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav-menu');

toggle.addEventListener('click', () => {
    nav.classList.toggle('show');
});

/*===== ACTIVE LINK & AUTO-CLOSE =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    /* Active link logic */
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    /* Close mobile menu on click */
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== CREATIVE ADDITIONS =====*/

/* 1. SCROLL REVEAL ANIMATION */
// This adds a "fade-in" effect as the user scrolls
const sr = {
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
};

// You can use a library like ScrollReveal.js or this simple Intersection Observer
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "all 0.8s ease-out";
    observer.observe(section);
});

/* 2. DYNAMIC HEADER GLASSMORPHISM */
// Adds a blur/shadow effect only after the user starts scrolling
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
});