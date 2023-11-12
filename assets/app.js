import './styles/app.scss';

/* VARIABLES */
// Manage theme
const body = document.querySelector("body");
const themeToggles = document.querySelectorAll(".theme-toggle");
const darkMode = window.matchMedia("(prefers-color-scheme:dark)");
// Nav btn color animation
const navBtn = document.querySelectorAll("nav .btn");
const homeBtn = document.querySelector(".home-btn");
const aboutBtn = document.querySelector(".about-btn");
const projectsBtn = document.querySelector(".projects-btn");
const contactBtn = document.querySelector(".contact-btn");
// Cursor animation
const homepage = document.querySelector(".homepage");
const cursorBox = body.appendChild(document.createElement("div"));
if (homepage !== null) {
    const cursorBlur = cursorBox.appendChild(document.createElement("div"));
    cursorBox.classList.add("cursor-box");
    cursorBlur.classList.add("cursor-blur");
}
// Audio btn
const allBtn = document.querySelectorAll(".sound");
// Onscroll fade-in animation
const fadeOutElements = document.querySelectorAll(".fade-out-element");
// Rows projects animation
const rows = document.querySelectorAll(".rows-container .row");
// Rows projects responsive animation
const rowsResponsive = document.querySelectorAll(".rows-container .row-responsive");
// Menu burger btn animation
const nav = document.querySelector("nav");
const menuBurgerBtn = document.querySelector(".menu-burger-btn");
let barsIcon = true;
// Responsive
const mediumScreen = window.matchMedia("(max-width: 1200px)");
const mediumSmallScreen = window.matchMedia("(max-width: 900px)");
const smallScreen = window.matchMedia("(max-width: 600px)");

/* FUNCTIONS */
// Manage theme
const manageTheme = (themeStyle) => {
    body.dataset.theme = themeStyle;
    themeToggles.forEach(toggle => {
        themeStyle==="dark"?toggle.classList.add("dark-position"):toggle.classList.remove("dark-position");
    });
};
// Header initialisation
const HeaderInitialisation = () => {
    const loadingPage = document.querySelector(".loading-page");
    const navElements = document.querySelectorAll(".nav-element");
    if (mediumScreen.matches) {
        loadingPage?.classList.add("end-loading-animation-small-media");
        setTimeout(() => { 
            body.classList.add("homepage-transition");
        }, 300);
        navElements.forEach(element => { element.classList.add("sliding-nav-item"); });
    } else {
        loadingPage?.classList.add("end-loading-animation");
        let i = 0;
        setTimeout(() => { 
            body.classList.add("homepage-transition");
            const interval = setInterval(() => {
                if (i < navElements.length) {
                    navElements[i].classList.add("sliding-nav-item");
                    i++;
                } else if (i === navElements.length) {
                    clearInterval(interval);
                } 
            }, 100);
        }, 400);
    }
};
// Audio btn
const sound = (key) => {
    const audio = new Audio();
    audio.src = "/sounds/" + key + ".mp3";
    audio.play();
};
// Nav btn color animation
const colorNavBtn = (entry) => {
    if (entry.contains("header-content")) {
        navBtn.forEach(btn => { btn.classList.remove("btn-target-color"); });
        homeBtn.classList.add("btn-target-color");
    } else if (entry.contains("about-content")) {
        navBtn.forEach(btn => { btn.classList.remove("btn-target-color"); });
        aboutBtn.classList.add("btn-target-color");
    } else if (entry.contains("project")) {
        navBtn.forEach(btn => { btn.classList.remove("btn-target-color"); });
        projectsBtn.classList.add("btn-target-color");
    } else if (entry.contains("contact-content")) {
        navBtn.forEach(btn => { btn.classList.remove("btn-target-color"); });
        contactBtn.classList.add("btn-target-color");
    }
};
// Onscroll fade-in animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            colorNavBtn(entry.target.classList);
            entry.target.classList.add("fade-in-animation");
        } else {
            entry.target.classList.remove("fade-in-animation");
        }
    });
}, {threshold: 0.5});
// Menu burger btn animation
const animMenuBurger = () => {
    if (barsIcon) {
        menuBurgerBtn.classList.add("appear-xmark");
        barsIcon = false;
        nav.classList.add("appear-nav");
    } else {
        menuBurgerBtn.classList.remove("appear-xmark");
        barsIcon = true;
        nav.classList.remove("appear-nav");
    }
};

/* EVENTS */
// Manage theme (onload)
window.addEventListener("DOMContentLoaded", () => {
    darkMode.matches?manageTheme("dark"):manageTheme("light");
});
// Header initialisation
window.addEventListener("load", () => {
    HeaderInitialisation();
    if (mediumScreen.matches) {
        setTimeout(() => {
            fadeOutElements.forEach(element => observer.observe(element));
        }, 300);
    } else {
        setTimeout(() => {
            fadeOutElements.forEach(element => observer.observe(element));
        }, 1500);
    }
});
// Manage theme (onchange & onclick)
darkMode.addEventListener("change", (darkMode) => {
    if (darkMode.matches && body.dataset.theme !== "dark") {
        manageTheme("dark");
    } else if (!darkMode.matches && body.dataset.theme === "dark") {
        manageTheme("light");
    }
});
themeToggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
        body.dataset.theme!=="dark"?manageTheme("dark"):manageTheme("light");
    });
});
// Cursor animation
window.addEventListener("mousemove", (e) => {
    cursorBox.style.top = e.clientY + "px";
    cursorBox.style.left = e.clientX + "px";
});
// Audio btn
allBtn.forEach(btn => {
    if (!mediumScreen.matches && !mediumSmallScreen.matches && !smallScreen.matches) {
        btn.addEventListener("mouseover", () => { sound("Hover"); });
    }
    btn.addEventListener("click", () => { sound("Click"); });
});
// Rows projects animation
rows.forEach(row => {
    row.addEventListener("mouseleave", () => {
        row.classList.contains("reverse-row-anim")||row.classList.add("reverse-row-anim");
    });
});
// Rows projects responsive animation
rowsResponsive.forEach(row => {
    row.addEventListener("click", () => {
        if (!row.classList.contains("open-animation")) {
            row.classList.remove("close-animation");
            row.classList.add("open-animation");
        } else {
            row.classList.add("close-animation");
            row.classList.remove("open-animation");
        }
    });
});
// Menu burger animation
if (menuBurgerBtn !== null) {
    menuBurgerBtn.addEventListener("click", () => { animMenuBurger(); });
    navBtn.forEach(link => { link.addEventListener("click", () => { animMenuBurger(); }); });
}