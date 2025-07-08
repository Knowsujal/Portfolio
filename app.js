const dayNight = document.querySelector(".dayNight");
//let banner = document.querySelector(".banner");
const body = document.body;
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const banner = document.querySelector(".banner");

if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("night-mode");
}

dayNight.addEventListener("click", () => {
    document.body.classList.toggle("night-mode");
    banner.classList.toggle("night");
    
    if (body.classList.contains("night-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});

let typingEffect = new Typed("#text", {
    strings:["Coder", "Web Developer", "Java Enthusiast"],
    loop:true,
    typeSpeed:100,
    backSpeed:50,
    backDelay:1000
});

document.querySelectorAll("header ul li a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        let targetId = this.getAttribute("href").substring(1);
        let targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: "smooth"
            });
        }
        menuIcon.classList.remove("bx-x");
        navbar.classList.remove("active");
    });
});

var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000, // Auto-slide every 3 seconds
        disableOnInteraction: false, // Keeps autoplay on interaction
    },
});

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
});

// Close menu on scroll
window.addEventListener("scroll", () => {
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
});