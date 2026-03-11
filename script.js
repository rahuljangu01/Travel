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

    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active');

    const header = document.querySelector('.header');

    if (window.scrollY > 50) {
        header.style.background = "rgba(255,255,255,0.95)";
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)";
    } else {
        header.style.background = "rgba(255,255,255,0.8)";
        header.style.boxShadow = "none";
    }
});


// ================= SERVICE WORKER REGISTER =================
if ('serviceWorker' in navigator) {

window.addEventListener('load', () => {

navigator.serviceWorker.register('./service-worker.js')

.then(reg => {
console.log("Service Worker Registered!", reg);
})

.catch(err => {
console.log("Service Worker Registration Failed!", err);
});

});

}
