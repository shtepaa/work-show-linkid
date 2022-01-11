const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
}
// Inside the Media Query.
.hamburger.active .bar:nth-child(2) {
    opacity: 0;
}

.hamburger.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
}

.hamburger.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
}