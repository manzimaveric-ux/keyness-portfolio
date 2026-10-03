// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}


// ===============================
// DARK / LIGHT MODE
// ===============================

function toggleTheme() {
    document.body.classList.toggle("light-mode");

    const themeBtn = document.querySelector(".theme-btn");

    if (document.body.classList.contains("light-mode")) {
        if (themeBtn) {
            themeBtn.textContent = "☀️";
        }

        localStorage.setItem("theme", "light");
    } else {
        if (themeBtn) {
            themeBtn.textContent = "🌙";
        }

        localStorage.setItem("theme", "dark");
    }
}


// ===============================
// LOAD SAVED THEME
// ===============================

window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    const themeBtn = document.querySelector(".theme-btn");

    if (savedTheme === "light") {
        document.body.classList.add("light-mode");

        if (themeBtn) {
            themeBtn.textContent = "☀️";
        }
    } else {
        document.body.classList.remove("light-mode");

        if (themeBtn) {
            themeBtn.textContent = "🌙";
        }
    }
});


// ===============================
// TYPING EFFECT
// ===============================

const typingText = document.querySelector(".typing-text");

const words = [
    "Student & Future Developer",
    "Technology Enthusiast",
    "Web Developer",
    "Creative Thinker",
    "Future AI Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typingText) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1) % words.length;
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );
}

typeEffect();


// ===============================
// PROJECT BUTTONS
// ===============================

const projectButtons =
    document.querySelectorAll(".project-btn");

projectButtons.forEach(button => {

    button.addEventListener("click", () => {

        alert("Project coming soon!");

    });

});


// ===============================
// CURRENT YEAR
// ===============================

const yearElement =
    document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


// ===============================
// BACK TO TOP
// ===============================

const topButton =
    document.getElementById("topBtn");

if (topButton) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            topButton.classList.add("show");

        } else {

            topButton.classList.remove("show");

        }

    });


    topButton.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}
