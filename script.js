// ================= INITIALIZE AOS =================
AOS.init({
    duration: 1000,
    offset: 120,
    once: true,
    easing: "ease-in-out"
});

// ================= MOBILE MENU =================
const menuBtn = document.querySelector('#menu-btn');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener("click", () => {
        menuBtn.classList.remove('fa-times');
        navbar.classList.remove('active');
    });
});

// ================= NAVBAR SCROLL EFFECT =================
window.addEventListener("scroll", () => {

    // Close mobile menu on scroll
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active');

    // Add shadow + background effect
    const header = document.querySelector('.header');

    if (window.scrollY > 50) {
        header.style.background = "rgba(255,255,255,0.95)";
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)";
    } else {
        header.style.background = "rgba(255,255,255,0.8)";
        header.style.boxShadow = "none";
    }
});


// ================= ACTIVE NAV LINK =================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});


// ================= TYPED TEXT EFFECT =================
new Typed('#typed', {
    strings: [
        'The Swiss Alps',
        'Maldives Beaches',
        'Dubai Skyline',
        'Bali Paradise',
        'Hidden Mountains'
    ],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
});


// ================= SMOOTH SCROLL =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});