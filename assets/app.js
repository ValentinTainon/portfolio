import './styles/app.scss';

/* VARIABLES */

// Manage theme
const body = document.querySelector("body");
const themeIcon = document.querySelector(".theme-icon");
const darkMode = window.matchMedia("(prefers-color-scheme:dark)");
const themeIconAnimation = "sliding-icon 0.3s ease-in-out 2 alternate";
const themeIconReverseAnimation = "reverse-sliding-icon 0.3s ease-in-out 2 alternate";
// Header initialisation
const navElements = document.querySelectorAll(".nav-element");
const header = document.querySelector("header");
let i = 0;
// Nav btn animation
const btn = document.querySelectorAll("nav .btn");
const headerSection = document.getElementById("home");
const aboutSection = document.getElementById("about");
const projectSection = document.getElementById("projects");
const contactSection = document.getElementById("contact");
// Cursor animation
const homepage = document.querySelector(".homepage");
const cursorBox = body.appendChild(document.createElement("div"));
if (homepage) {
    const cursorBlur = cursorBox.appendChild(document.createElement("div"));
    cursorBox.classList.add("cursor-box");
    cursorBlur.classList.add("cursor-blur");
}
// Audio btn
const el = document.querySelectorAll(".sound");
// Rows project animation
const rows = document.querySelectorAll(".projects-content .row");
// Menu burger btn animation
const nav = document.querySelector("nav");
const menuBurgerBtn = document.querySelector(".menu-burger-btn");
let barsIcon = true;

/* FUNCTIONS */

// Manage theme
const manageTheme = (themeStyle, onload, icon1, anim, icon2, icon3) => {
    body.dataset.theme = themeStyle;
    if (onload) {
        themeIcon?.classList.add(icon1);
    } else {
        themeIcon?themeIcon.style.animation = anim:null;
        setTimeout(() => { themeIcon?.classList.replace(icon2, icon3); }, 300);
    }
};
// Header initialisation
const HeaderInitialisation = () => {
    const loadingPage = document.querySelector(".loading-page");
    loadingPage.classList.add("end-loading-animation");
    setTimeout(() => { 
        body.classList.add("homepage-transition");
        const interval = setInterval(() => {
            if (i < navElements.length) {
                navElements[i].classList.add("sliding-nav-item");
                i++;
            } else if (i === navElements.length) {
                setTimeout(() => { header.classList.add("header-anim"); }, 250);
                clearInterval(interval);
            } 
        }, 100);
    }, 400);
};
// Nav btn animation
const colorNavBtn = (link) => {
    btn.forEach(links => { links.classList.remove("onclick-btn-anim"); });
    link.classList.add("onclick-btn-anim");
};
// Audio btn
const sound = (key) => {
    const audio = new Audio();
    audio.src = "/sounds/" + key + ".mp3";
    audio.play();
};
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
}

/* EVENTS */

// Manage theme (onload)
window.addEventListener("DOMContentLoaded", () => {
    darkMode.matches?manageTheme("dark", true, "fa-sun"):manageTheme("light", true, "fa-moon");
});
// Header initialisation
window.addEventListener("load", () => {
    HeaderInitialisation();
});
// Manage theme (onchange & onclick)
darkMode.addEventListener("change", (darkMode) => {
    if (darkMode.matches && body.dataset.theme !== "dark") {
        manageTheme("dark", false, null, themeIconAnimation, "fa-moon", "fa-sun");
    } else if (!darkMode.matches && body.dataset.theme === "dark") {
        manageTheme("light", false, null, themeIconReverseAnimation, "fa-sun", "fa-moon");
    }
});
themeIcon?.addEventListener("click", () => {
    if (body.dataset.theme !== "dark") {
        manageTheme("dark", false, null, themeIconAnimation, "fa-moon", "fa-sun");
    } else {
        manageTheme("light", false, null, themeIconReverseAnimation, "fa-sun", "fa-moon");
    }
});
// Nav btn animation
btn.forEach(link => {
    link.addEventListener("click", () => { colorNavBtn(link); });
});
// Cursor animation
window.addEventListener("mousemove", (e) => {
    cursorBox.style.top = e.clientY + "px";
    cursorBox.style.left = e.clientX + "px";
});
// Audio btn
el.forEach(element => {
    element.addEventListener("mouseover", () => { sound("Hover"); });
    element.addEventListener("click", () => { sound("Click"); });
});
// Rows project animation
rows.forEach(row => {
    row.addEventListener("mouseleave", () => {
        row.classList.contains("reverse-row-anim")||row.classList.add("reverse-row-anim");
    });
});
// Menu burger btn animation
menuBurgerBtn.addEventListener("click", () => {
    animMenuBurger();
});