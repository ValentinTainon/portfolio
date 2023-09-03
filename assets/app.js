import './styles/app.css';

/* ANIM NAV */
const nav = document.querySelector('nav');
const navElements = document.querySelectorAll('.nav-element');
let element = 0;
const header = document.querySelector('header');

onload = () => {
    nav.style.cssText = 'left:0; opacity:1;';

    function homepageAnimation() {
        if (element < navElements.length) {
            navElements[element].style.left = 0;
            element++;
        } else if (element === navElements.length) {
            header.style.cssText = 'margin-top:0; opacity:1;';
        }
    }
    setInterval(homepageAnimation, 100);
}

/* AUDIO */
// const audio = document.querySelector('audio');
// const buttons = document.querySelectorAll('.btn');

// buttons.forEach(btn => {
//     btn.onmouseenter = () => { audio.play(); }
//     btn.onclick = () => { audio.play(); }
// })

/* DARK MODE */
const body = document.querySelector('body');
const toggle = document.querySelector('#toggle-theme');

function darkMode() {
    if (body.dataset.theme === 'light') {
        toggle.classList.replace('fa-moon', 'fa-sun');
        body.dataset.theme = 'dark';
    } else {
        toggle.classList.replace('fa-sun', 'fa-moon');
        body.dataset.theme = 'light';
    }
}
toggle.addEventListener('click', darkMode);