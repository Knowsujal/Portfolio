// ==============================
// DOM ELEMENTS
// ==============================
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const banner = document.querySelector(".banner");

// ==============================
// DARK MODE TOGGLE
// ==============================
const dayNight = document.querySelector(".dayNight");
const body = document.body;

if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("night-mode");
} //else {
    //body.classList.remove("night-mode");
//}

dayNight.addEventListener("click", () => {
  document.body.classList.toggle("night-mode");
  body.classList.toggle("night");

  if (body.classList.contains("night-mode")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
});
// ==============================
// TYPED.JS (Hero Typing Animation)
// ==============================
new Typed("#text", {
  strings: [" Full Stack Developer", " Java Programmer", " Web Enthusiast"],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1500,
  loop: true,
});
// ==============================
// SMOOTH SCROLL FOR NAV LINKS
// ==============================
document.querySelectorAll("header ul li a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);

    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth",
      });
    }
    // Close mobile menu after click
    navbar.classList.remove("active");
        menuIcon.classList.remove("bx-x");
        menuIcon.classList.remove("bx-x");
        navbar.classList.remove("active");
    menuIcon.classList.remove("bx-x");
        navbar.classList.remove("active");
  });
});

// ==============================
// NAVBAR TOGGLE (Mobile)
// ==============================
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});

// Close menu on scroll
window.addEventListener("scroll", () => {
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
});

// ==============================
// ACTIVE NAV LINK ON SCROLL
// ==============================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// ==============================
// SCROLL ANIMATIONS (Optional)
// ==============================
AOS.init({
    duration: 800,
    once: true,
  });
// If you want subtle animations when scrolling, use AOS.js or CSS fade-ins.
// Example: include AOS via CDN and then call AOS.init();