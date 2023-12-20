"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");






/* VARIABLES */
// Manage theme
var body = document.querySelector("body");
var themeToggles = document.querySelectorAll(".theme-toggle");
var darkMode = window.matchMedia("(prefers-color-scheme:dark)");
// Nav btn color animation
var navBtn = document.querySelectorAll("nav .btn");
var homeBtn = document.querySelector(".home-btn");
var aboutBtn = document.querySelector(".about-btn");
var projectsBtn = document.querySelector(".projects-btn");
var contactBtn = document.querySelector(".contact-btn");
// Cursor animation
var homepage = document.querySelector(".homepage");
var cursorBox = body.appendChild(document.createElement("div"));
if (homepage !== null) {
  var cursorBlur = cursorBox.appendChild(document.createElement("div"));
  cursorBox.classList.add("cursor-box");
  cursorBlur.classList.add("cursor-blur");
}
// Audio btn
var allBtn = document.querySelectorAll(".sound");
// Onscroll fade-in animation
var fadeOutElements = document.querySelectorAll(".fade-out-element");
// Rows projects animation
var rows = document.querySelectorAll(".rows-container .row");
// Rows projects responsive animation
var rowsResponsive = document.querySelectorAll(".rows-container .row-responsive");
// Menu burger btn animation
var nav = document.querySelector("nav");
var menuBurgerBtn = document.querySelector(".menu-burger-btn");
var barsIcon = true;
// Responsive
var mediumScreen = window.matchMedia("(max-width: 1200px)");
var mediumSmallScreen = window.matchMedia("(max-width: 900px)");
var smallScreen = window.matchMedia("(max-width: 600px)");

/* FUNCTIONS */
// Manage theme
var manageTheme = function manageTheme(themeStyle) {
  body.dataset.theme = themeStyle;
  themeToggles.forEach(function (toggle) {
    themeStyle === "dark" ? toggle.classList.add("dark-position") : toggle.classList.remove("dark-position");
  });
};
// Header initialisation
var HeaderInitialisation = function HeaderInitialisation() {
  var loadingPage = document.querySelector(".loading-page");
  var navElements = document.querySelectorAll(".nav-element");
  if (mediumScreen.matches) {
    loadingPage === null || loadingPage === void 0 || loadingPage.classList.add("end-loading-animation-small-media");
    setTimeout(function () {
      body.classList.add("homepage-transition");
    }, 300);
    navElements.forEach(function (element) {
      element.classList.add("sliding-nav-item");
    });
  } else {
    loadingPage === null || loadingPage === void 0 || loadingPage.classList.add("end-loading-animation");
    var i = 0;
    setTimeout(function () {
      body.classList.add("homepage-transition");
      var interval = setInterval(function () {
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
var sound = function sound(key) {
  var audio = new Audio();
  audio.src = "/sounds/" + key + ".mp3";
  audio.play();
};
// Nav btn color animation
var colorNavBtn = function colorNavBtn(entry) {
  if (entry.contains("header-content")) {
    navBtn.forEach(function (btn) {
      btn.classList.remove("btn-target-color");
    });
    homeBtn.classList.add("btn-target-color");
  } else if (entry.contains("about-content")) {
    navBtn.forEach(function (btn) {
      btn.classList.remove("btn-target-color");
    });
    aboutBtn.classList.add("btn-target-color");
  } else if (entry.contains("project")) {
    navBtn.forEach(function (btn) {
      btn.classList.remove("btn-target-color");
    });
    projectsBtn.classList.add("btn-target-color");
  } else if (entry.contains("contact-content")) {
    navBtn.forEach(function (btn) {
      btn.classList.remove("btn-target-color");
    });
    contactBtn.classList.add("btn-target-color");
  }
};
// Onscroll fade-in animation
var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      colorNavBtn(entry.target.classList);
      entry.target.classList.add("fade-in-animation");
    }
  });
}, {
  threshold: 0.5
});
// Menu burger btn animation
var animMenuBurger = function animMenuBurger() {
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
window.addEventListener("DOMContentLoaded", function () {
  darkMode.matches ? manageTheme("dark") : manageTheme("light");
});
// Header initialisation
window.addEventListener("load", function () {
  HeaderInitialisation();
  if (mediumScreen.matches) {
    setTimeout(function () {
      fadeOutElements.forEach(function (element) {
        return observer.observe(element);
      });
    }, 200);
  } else {
    setTimeout(function () {
      fadeOutElements.forEach(function (element) {
        return observer.observe(element);
      });
    }, 1300);
  }
});
// Manage theme (onchange & onclick)
darkMode.addEventListener("change", function (darkMode) {
  if (darkMode.matches && body.dataset.theme !== "dark") {
    manageTheme("dark");
  } else if (!darkMode.matches && body.dataset.theme === "dark") {
    manageTheme("light");
  }
});
themeToggles.forEach(function (toggle) {
  toggle.addEventListener("click", function () {
    body.dataset.theme !== "dark" ? manageTheme("dark") : manageTheme("light");
  });
});
// Cursor animation
window.addEventListener("mousemove", function (e) {
  cursorBox.style.top = e.clientY + "px";
  cursorBox.style.left = e.clientX + "px";
});
// Audio btn
allBtn.forEach(function (btn) {
  if (!mediumScreen.matches && !mediumSmallScreen.matches && !smallScreen.matches) {
    btn.addEventListener("mouseover", function () {
      sound("Hover");
    });
  }
  btn.addEventListener("click", function () {
    sound("Click");
  });
});
// Rows projects animation
rows.forEach(function (row) {
  row.addEventListener("mouseleave", function () {
    row.classList.contains("reverse-row-anim") || row.classList.add("reverse-row-anim");
  });
});
// Rows projects responsive animation
rowsResponsive.forEach(function (row) {
  row.addEventListener("click", function () {
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
  menuBurgerBtn.addEventListener("click", function () {
    animMenuBurger();
  });
  navBtn.forEach(function (link) {
    link.addEventListener("click", function () {
      animMenuBurger();
    });
  });
}

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_obj-5fa493"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xyXG5cclxuLyogVkFSSUFCTEVTICovXHJcbi8vIE1hbmFnZSB0aGVtZVxyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcbmNvbnN0IHRoZW1lVG9nZ2xlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGhlbWUtdG9nZ2xlXCIpO1xyXG5jb25zdCBkYXJrTW9kZSA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOmRhcmspXCIpO1xyXG4vLyBOYXYgYnRuIGNvbG9yIGFuaW1hdGlvblxyXG5jb25zdCBuYXZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibmF2IC5idG5cIik7XHJcbmNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWUtYnRuXCIpO1xyXG5jb25zdCBhYm91dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWJvdXQtYnRuXCIpO1xyXG5jb25zdCBwcm9qZWN0c0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtYnRuXCIpO1xyXG5jb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWN0LWJ0blwiKTtcclxuLy8gQ3Vyc29yIGFuaW1hdGlvblxyXG5jb25zdCBob21lcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZXBhZ2VcIik7XHJcbmNvbnN0IGN1cnNvckJveCA9IGJvZHkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7XHJcbmlmIChob21lcGFnZSAhPT0gbnVsbCkge1xyXG4gICAgY29uc3QgY3Vyc29yQmx1ciA9IGN1cnNvckJveC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcclxuICAgIGN1cnNvckJveC5jbGFzc0xpc3QuYWRkKFwiY3Vyc29yLWJveFwiKTtcclxuICAgIGN1cnNvckJsdXIuY2xhc3NMaXN0LmFkZChcImN1cnNvci1ibHVyXCIpO1xyXG59XHJcbi8vIEF1ZGlvIGJ0blxyXG5jb25zdCBhbGxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNvdW5kXCIpO1xyXG4vLyBPbnNjcm9sbCBmYWRlLWluIGFuaW1hdGlvblxyXG5jb25zdCBmYWRlT3V0RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZhZGUtb3V0LWVsZW1lbnRcIik7XHJcbi8vIFJvd3MgcHJvamVjdHMgYW5pbWF0aW9uXHJcbmNvbnN0IHJvd3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJvd3MtY29udGFpbmVyIC5yb3dcIik7XHJcbi8vIFJvd3MgcHJvamVjdHMgcmVzcG9uc2l2ZSBhbmltYXRpb25cclxuY29uc3Qgcm93c1Jlc3BvbnNpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJvd3MtY29udGFpbmVyIC5yb3ctcmVzcG9uc2l2ZVwiKTtcclxuLy8gTWVudSBidXJnZXIgYnRuIGFuaW1hdGlvblxyXG5jb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpO1xyXG5jb25zdCBtZW51QnVyZ2VyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ1cmdlci1idG5cIik7XHJcbmxldCBiYXJzSWNvbiA9IHRydWU7XHJcbi8vIFJlc3BvbnNpdmVcclxuY29uc3QgbWVkaXVtU2NyZWVuID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiAxMjAwcHgpXCIpO1xyXG5jb25zdCBtZWRpdW1TbWFsbFNjcmVlbiA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogOTAwcHgpXCIpO1xyXG5jb25zdCBzbWFsbFNjcmVlbiA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNjAwcHgpXCIpO1xyXG5cclxuLyogRlVOQ1RJT05TICovXHJcbi8vIE1hbmFnZSB0aGVtZVxyXG5jb25zdCBtYW5hZ2VUaGVtZSA9ICh0aGVtZVN0eWxlKSA9PiB7XHJcbiAgICBib2R5LmRhdGFzZXQudGhlbWUgPSB0aGVtZVN0eWxlO1xyXG4gICAgdGhlbWVUb2dnbGVzLmZvckVhY2godG9nZ2xlID0+IHtcclxuICAgICAgICB0aGVtZVN0eWxlPT09XCJkYXJrXCI/dG9nZ2xlLmNsYXNzTGlzdC5hZGQoXCJkYXJrLXBvc2l0aW9uXCIpOnRvZ2dsZS5jbGFzc0xpc3QucmVtb3ZlKFwiZGFyay1wb3NpdGlvblwiKTtcclxuICAgIH0pO1xyXG59O1xyXG4vLyBIZWFkZXIgaW5pdGlhbGlzYXRpb25cclxuY29uc3QgSGVhZGVySW5pdGlhbGlzYXRpb24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBsb2FkaW5nUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9hZGluZy1wYWdlXCIpO1xyXG4gICAgY29uc3QgbmF2RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1lbGVtZW50XCIpO1xyXG4gICAgaWYgKG1lZGl1bVNjcmVlbi5tYXRjaGVzKSB7XHJcbiAgICAgICAgbG9hZGluZ1BhZ2U/LmNsYXNzTGlzdC5hZGQoXCJlbmQtbG9hZGluZy1hbmltYXRpb24tc21hbGwtbWVkaWFcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IFxyXG4gICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJob21lcGFnZS10cmFuc2l0aW9uXCIpO1xyXG4gICAgICAgIH0sIDMwMCk7XHJcbiAgICAgICAgbmF2RWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHsgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic2xpZGluZy1uYXYtaXRlbVwiKTsgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxvYWRpbmdQYWdlPy5jbGFzc0xpc3QuYWRkKFwiZW5kLWxvYWRpbmctYW5pbWF0aW9uXCIpO1xyXG4gICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgXHJcbiAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZChcImhvbWVwYWdlLXRyYW5zaXRpb25cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPCBuYXZFbGVtZW50cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBuYXZFbGVtZW50c1tpXS5jbGFzc0xpc3QuYWRkKFwic2xpZGluZy1uYXYtaXRlbVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IG5hdkVsZW1lbnRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICB9LCA0MDApO1xyXG4gICAgfVxyXG59O1xyXG4vLyBBdWRpbyBidG5cclxuY29uc3Qgc291bmQgPSAoa2V5KSA9PiB7XHJcbiAgICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbygpO1xyXG4gICAgYXVkaW8uc3JjID0gXCIvc291bmRzL1wiICsga2V5ICsgXCIubXAzXCI7XHJcbiAgICBhdWRpby5wbGF5KCk7XHJcbn07XHJcbi8vIE5hdiBidG4gY29sb3IgYW5pbWF0aW9uXHJcbmNvbnN0IGNvbG9yTmF2QnRuID0gKGVudHJ5KSA9PiB7XHJcbiAgICBpZiAoZW50cnkuY29udGFpbnMoXCJoZWFkZXItY29udGVudFwiKSkge1xyXG4gICAgICAgIG5hdkJ0bi5mb3JFYWNoKGJ0biA9PiB7IGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYnRuLXRhcmdldC1jb2xvclwiKTsgfSk7XHJcbiAgICAgICAgaG9tZUJ0bi5jbGFzc0xpc3QuYWRkKFwiYnRuLXRhcmdldC1jb2xvclwiKTtcclxuICAgIH0gZWxzZSBpZiAoZW50cnkuY29udGFpbnMoXCJhYm91dC1jb250ZW50XCIpKSB7XHJcbiAgICAgICAgbmF2QnRuLmZvckVhY2goYnRuID0+IHsgYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJidG4tdGFyZ2V0LWNvbG9yXCIpOyB9KTtcclxuICAgICAgICBhYm91dEJ0bi5jbGFzc0xpc3QuYWRkKFwiYnRuLXRhcmdldC1jb2xvclwiKTtcclxuICAgIH0gZWxzZSBpZiAoZW50cnkuY29udGFpbnMoXCJwcm9qZWN0XCIpKSB7XHJcbiAgICAgICAgbmF2QnRuLmZvckVhY2goYnRuID0+IHsgYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJidG4tdGFyZ2V0LWNvbG9yXCIpOyB9KTtcclxuICAgICAgICBwcm9qZWN0c0J0bi5jbGFzc0xpc3QuYWRkKFwiYnRuLXRhcmdldC1jb2xvclwiKTtcclxuICAgIH0gZWxzZSBpZiAoZW50cnkuY29udGFpbnMoXCJjb250YWN0LWNvbnRlbnRcIikpIHtcclxuICAgICAgICBuYXZCdG4uZm9yRWFjaChidG4gPT4geyBidG4uY2xhc3NMaXN0LnJlbW92ZShcImJ0bi10YXJnZXQtY29sb3JcIik7IH0pO1xyXG4gICAgICAgIGNvbnRhY3RCdG4uY2xhc3NMaXN0LmFkZChcImJ0bi10YXJnZXQtY29sb3JcIik7XHJcbiAgICB9XHJcbn07XHJcbi8vIE9uc2Nyb2xsIGZhZGUtaW4gYW5pbWF0aW9uXHJcbmNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XHJcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgICAgICAgaWYoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcclxuICAgICAgICAgICAgY29sb3JOYXZCdG4oZW50cnkudGFyZ2V0LmNsYXNzTGlzdCk7XHJcbiAgICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiZmFkZS1pbi1hbmltYXRpb25cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0sIHt0aHJlc2hvbGQ6IDAuNX0pO1xyXG4vLyBNZW51IGJ1cmdlciBidG4gYW5pbWF0aW9uXHJcbmNvbnN0IGFuaW1NZW51QnVyZ2VyID0gKCkgPT4ge1xyXG4gICAgaWYgKGJhcnNJY29uKSB7XHJcbiAgICAgICAgbWVudUJ1cmdlckJ0bi5jbGFzc0xpc3QuYWRkKFwiYXBwZWFyLXhtYXJrXCIpO1xyXG4gICAgICAgIGJhcnNJY29uID0gZmFsc2U7XHJcbiAgICAgICAgbmF2LmNsYXNzTGlzdC5hZGQoXCJhcHBlYXItbmF2XCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBtZW51QnVyZ2VyQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJhcHBlYXIteG1hcmtcIik7XHJcbiAgICAgICAgYmFyc0ljb24gPSB0cnVlO1xyXG4gICAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKFwiYXBwZWFyLW5hdlwiKTtcclxuICAgIH1cclxufTtcclxuXHJcbi8qIEVWRU5UUyAqL1xyXG4vLyBNYW5hZ2UgdGhlbWUgKG9ubG9hZClcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICAgIGRhcmtNb2RlLm1hdGNoZXM/bWFuYWdlVGhlbWUoXCJkYXJrXCIpOm1hbmFnZVRoZW1lKFwibGlnaHRcIik7XHJcbn0pO1xyXG4vLyBIZWFkZXIgaW5pdGlhbGlzYXRpb25cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcclxuICAgIEhlYWRlckluaXRpYWxpc2F0aW9uKCk7XHJcbiAgICBpZiAobWVkaXVtU2NyZWVuLm1hdGNoZXMpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZmFkZU91dEVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpKTtcclxuICAgICAgICB9LCAyMDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZmFkZU91dEVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpKTtcclxuICAgICAgICB9LCAxMzAwKTtcclxuICAgIH1cclxufSk7XHJcbi8vIE1hbmFnZSB0aGVtZSAob25jaGFuZ2UgJiBvbmNsaWNrKVxyXG5kYXJrTW9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChkYXJrTW9kZSkgPT4ge1xyXG4gICAgaWYgKGRhcmtNb2RlLm1hdGNoZXMgJiYgYm9keS5kYXRhc2V0LnRoZW1lICE9PSBcImRhcmtcIikge1xyXG4gICAgICAgIG1hbmFnZVRoZW1lKFwiZGFya1wiKTtcclxuICAgIH0gZWxzZSBpZiAoIWRhcmtNb2RlLm1hdGNoZXMgJiYgYm9keS5kYXRhc2V0LnRoZW1lID09PSBcImRhcmtcIikge1xyXG4gICAgICAgIG1hbmFnZVRoZW1lKFwibGlnaHRcIik7XHJcbiAgICB9XHJcbn0pO1xyXG50aGVtZVRvZ2dsZXMuZm9yRWFjaCh0b2dnbGUgPT4ge1xyXG4gICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgYm9keS5kYXRhc2V0LnRoZW1lIT09XCJkYXJrXCI/bWFuYWdlVGhlbWUoXCJkYXJrXCIpOm1hbmFnZVRoZW1lKFwibGlnaHRcIik7XHJcbiAgICB9KTtcclxufSk7XHJcbi8vIEN1cnNvciBhbmltYXRpb25cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgKGUpID0+IHtcclxuICAgIGN1cnNvckJveC5zdHlsZS50b3AgPSBlLmNsaWVudFkgKyBcInB4XCI7XHJcbiAgICBjdXJzb3JCb3guc3R5bGUubGVmdCA9IGUuY2xpZW50WCArIFwicHhcIjtcclxufSk7XHJcbi8vIEF1ZGlvIGJ0blxyXG5hbGxCdG4uZm9yRWFjaChidG4gPT4ge1xyXG4gICAgaWYgKCFtZWRpdW1TY3JlZW4ubWF0Y2hlcyAmJiAhbWVkaXVtU21hbGxTY3JlZW4ubWF0Y2hlcyAmJiAhc21hbGxTY3JlZW4ubWF0Y2hlcykge1xyXG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHsgc291bmQoXCJIb3ZlclwiKTsgfSk7XHJcbiAgICB9XHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHsgc291bmQoXCJDbGlja1wiKTsgfSk7XHJcbn0pO1xyXG4vLyBSb3dzIHByb2plY3RzIGFuaW1hdGlvblxyXG5yb3dzLmZvckVhY2gocm93ID0+IHtcclxuICAgIHJvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgcm93LmNsYXNzTGlzdC5jb250YWlucyhcInJldmVyc2Utcm93LWFuaW1cIil8fHJvdy5jbGFzc0xpc3QuYWRkKFwicmV2ZXJzZS1yb3ctYW5pbVwiKTtcclxuICAgIH0pO1xyXG59KTtcclxuLy8gUm93cyBwcm9qZWN0cyByZXNwb25zaXZlIGFuaW1hdGlvblxyXG5yb3dzUmVzcG9uc2l2ZS5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICByb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBpZiAoIXJvdy5jbGFzc0xpc3QuY29udGFpbnMoXCJvcGVuLWFuaW1hdGlvblwiKSkge1xyXG4gICAgICAgICAgICByb3cuY2xhc3NMaXN0LnJlbW92ZShcImNsb3NlLWFuaW1hdGlvblwiKTtcclxuICAgICAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoXCJvcGVuLWFuaW1hdGlvblwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByb3cuY2xhc3NMaXN0LmFkZChcImNsb3NlLWFuaW1hdGlvblwiKTtcclxuICAgICAgICAgICAgcm93LmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuLWFuaW1hdGlvblwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcbi8vIE1lbnUgYnVyZ2VyIGFuaW1hdGlvblxyXG5pZiAobWVudUJ1cmdlckJ0biAhPT0gbnVsbCkge1xyXG4gICAgbWVudUJ1cmdlckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4geyBhbmltTWVudUJ1cmdlcigpOyB9KTtcclxuICAgIG5hdkJ0bi5mb3JFYWNoKGxpbmsgPT4geyBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7IGFuaW1NZW51QnVyZ2VyKCk7IH0pOyB9KTtcclxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGhlbWVUb2dnbGVzIiwicXVlcnlTZWxlY3RvckFsbCIsImRhcmtNb2RlIiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm5hdkJ0biIsImhvbWVCdG4iLCJhYm91dEJ0biIsInByb2plY3RzQnRuIiwiY29udGFjdEJ0biIsImhvbWVwYWdlIiwiY3Vyc29yQm94IiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVFbGVtZW50IiwiY3Vyc29yQmx1ciIsImNsYXNzTGlzdCIsImFkZCIsImFsbEJ0biIsImZhZGVPdXRFbGVtZW50cyIsInJvd3MiLCJyb3dzUmVzcG9uc2l2ZSIsIm5hdiIsIm1lbnVCdXJnZXJCdG4iLCJiYXJzSWNvbiIsIm1lZGl1bVNjcmVlbiIsIm1lZGl1bVNtYWxsU2NyZWVuIiwic21hbGxTY3JlZW4iLCJtYW5hZ2VUaGVtZSIsInRoZW1lU3R5bGUiLCJkYXRhc2V0IiwidGhlbWUiLCJmb3JFYWNoIiwidG9nZ2xlIiwicmVtb3ZlIiwiSGVhZGVySW5pdGlhbGlzYXRpb24iLCJsb2FkaW5nUGFnZSIsIm5hdkVsZW1lbnRzIiwibWF0Y2hlcyIsInNldFRpbWVvdXQiLCJlbGVtZW50IiwiaSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJsZW5ndGgiLCJjbGVhckludGVydmFsIiwic291bmQiLCJrZXkiLCJhdWRpbyIsIkF1ZGlvIiwic3JjIiwicGxheSIsImNvbG9yTmF2QnRuIiwiZW50cnkiLCJjb250YWlucyIsImJ0biIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiaXNJbnRlcnNlY3RpbmciLCJ0YXJnZXQiLCJ0aHJlc2hvbGQiLCJhbmltTWVudUJ1cmdlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJvYnNlcnZlIiwiZSIsInN0eWxlIiwidG9wIiwiY2xpZW50WSIsImxlZnQiLCJjbGllbnRYIiwicm93IiwibGluayJdLCJzb3VyY2VSb290IjoiIn0=