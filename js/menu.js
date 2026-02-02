// Sélectionne le menu hamburger et la liste de navigation
const menuHamburger = document.querySelector('.menu-hamburger');
const navLinks = document.querySelector('nav ul');

// Ouvre/ferme le menu au clic sur le hamburger
menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu');
});

// Ferme le menu quand on clique sur un lien (optionnel mais recommandé)
const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-menu');
    });
});

// Ferme le menu si on clique en dehors (optionnel)
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !menuHamburger.contains(e.target)) {
        navLinks.classList.remove('mobile-menu');
    }
});