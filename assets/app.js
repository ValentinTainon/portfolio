import './styles/app.scss';

// ANIM NAV
const nav = document.querySelector("nav");
const navElements = document.querySelectorAll(".nav-element");
const header = document.querySelector("header");
let i = 0;

const homepageAnimation = () => {
    nav?nav.style.opacity = 1:null;
    const interval = setInterval(() => {
        if (i < navElements.length) {
            navElements[i].style.transform = "translateX(0)";
            i++;
        } else if (i === navElements.length) {
            navElements.forEach((e) => e.style.transition = "0s");
            setTimeout(() => { header.style.cssText = "margin-top:0; opacity:1;"; }, 200);
            clearInterval(interval);
        } 
    }, 100);
};

// AUDIO
const sound = (key) => {
    const audio = new Audio();
    audio.src = "/sounds/" + key + ".mp3";
    audio.play();
};

// navElements.forEach(element => {
//     element.addEventListener("click", () => { sound("") });
// });

// MANAGE THEME
const body = document.querySelector("body");
const themeIcon = document.querySelector(".theme-icon");
const darkMode = window.matchMedia("(prefers-color-scheme:dark)");
const themeIconAnimation = "sliding-icon 0.3s ease-in-out 2 alternate";
const themeIconReverseAnimation = "reverse-sliding-icon 0.3s ease-in-out 2 alternate";

const manageTheme = (themeStyle, onload, icon1, anim, icon2, icon3) => {
    body.dataset.theme = themeStyle;
    if (onload) {
        themeIcon?.classList.add(icon1);
    } else {
        themeIcon?themeIcon.style.animation = anim:null;
        setTimeout(() => { themeIcon?.classList.replace(icon2, icon3); }, 300);
    }
};

window.addEventListener("DOMContentLoaded", () => {
    darkMode.matches?manageTheme("dark", true, "fa-sun"):manageTheme("light", true, "fa-moon");
});

window.addEventListener("load", () => { homepageAnimation(); });

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

// CURSOR ANIM
const homepage = document.querySelector(".homepage-container");
const cursorBox = body.appendChild(document.createElement("div"));

if (homepage) {
    const cursorBlur = cursorBox.appendChild(document.createElement("div"));
    cursorBox.classList.add("cursor-box");
    cursorBlur.classList.add("cursor-blur");
    
    window.addEventListener("mousemove", (e) => {
        cursorBox.style.top = e.clientY + "px";
        cursorBox.style.left = e.clientX + "px";
    });
}

// ROW ANIM
const rows = document.querySelectorAll(".row");

rows.forEach(row => {
    row.addEventListener("mouseleave", () => {
        row.classList.contains("reverse-row-anim")||row.classList.add("reverse-row-anim");
    });
});


// NAV BTN
const btn = document.querySelectorAll(".btn");

const colorNavBtn = (e) => {
    btn.forEach(element => { element.style.color = "var(--primary-color)"; });
    e.style.color = "var(--primary-text-color)"; 
};

btn.forEach(e => {
    e.addEventListener("click", () => { colorNavBtn(e); });
});