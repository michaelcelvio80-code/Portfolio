const toggleBtn = document.getElementById("theme-toggle");
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navbar = document.querySelector(".navbar");
const scrollTopBtn = document.getElementById("scrollTop");
const body = document.body;
const navLinkElements = document.querySelectorAll(".nav-link");

/* ================= Dark / Light Mode Toggle ================= */
toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light");
    const icon = toggleBtn.querySelector("i");
    
    if (body.classList.contains("light")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
});

/* ================= Mobile Menu Toggle ================= */
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

/* ================= Close mobile menu when clicking a link ================= */
navLinkElements.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });
});

/* ================= Navbar scroll effect ================= */
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        navbar.classList.add("scrolled");
        scrollTopBtn.classList.add("show");
    } else {
        navbar.classList.remove("scrolled");
        scrollTopBtn.classList.remove("show");
    }
});

/* ================= Scroll to top functionality ================= */
scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

/* ================= Active nav link on scroll ================= */
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let current = "";
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute("id");
        }
    });
    
    navLinkElements.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

/* ================= Intersection Observer for fade-in animations ================= */
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

/* ================= Observe cards for animation ================= */
document.querySelectorAll(".card").forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "all 0.6s ease";
    observer.observe(card);
});