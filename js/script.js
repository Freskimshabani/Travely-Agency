// Shfaqja dhe mbyllja e menyse se navbarit

const navMenu = document.getElementById('navMenu'),
    navToggle = document.getElementById('navToggle'),
    navClose = document.getElementById('navClose');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

// Mbyllja e menyse pas klikimit te nje linku

const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// Mjegullimi i prapavise se header-it
const blurHeader = () => {
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header');
}

window.addEventListener('scroll', blurHeader);

// Funksioni per rikthimin ne fillim te faqes permes buttonit scrollUp
const scrollUp = () => {
    const scrollUp = document.getElementById('scrollUp');
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll-up') : scrollUp.classList.remove('show-scroll-up');
}

window.addEventListener('scroll', scrollUp);

// Funksioni per te treguar linkun aktiv permes scroll-it
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav-menu a[href*=' + sectionId);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link');
        } else {
            sectionClass.classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);

// Funksioni per animacion te bazuar ne scroll
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 3000,
    delay: 400,
})

sr.reveal(`.home-data, .explore-data, .explore-user, .footer-container`);
sr.reveal(`.home-card`, { delay: 600, distance: '100px', interval: 100 });
sr.reveal(`.about-data, .join-data`, { origin: 'right' });
sr.reveal(`.about-image, join-image`, { origin: 'left' });
sr.reveal(`.popular-card`, { interval: 200 });

