// MOBILE MENU

function toggleMenu() {
    const nav = document.getElementById("navMenu");

    nav.classList.toggle("active");
}


// CLOSE MOBILE MENU WHEN LINK IS CLICKED

document.querySelectorAll("#navMenu a").forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .getElementById("navMenu")
            .classList.remove("active");

    });

});


// DARK / LIGHT MODE

function toggleTheme() {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        localStorage.setItem("theme", "light");

    } else {

        localStorage.setItem("theme", "dark");

    }

}


// REMEMBER THEME

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
}


// TYPING EFFECT

const typingText = document.getElementById("typingText");

const words = [
    "Student & Future Developer",
    "Technology Enthusiast",
    "Web Developer",
    "Creative Thinker",
    "Future AI Developer"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;


function typingEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, letterIndex + 1);

        letterIndex++;

        if (letterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typingEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, letterIndex - 1);

        letterIndex--;

        if (letterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(
        typingEffect,
        deleting ? 50 : 90
    );
}


typingEffect();


// PROJECT MESSAGE

function showProjectMessage() {

    alert(
        "This project is part of my technology and development journey."
    );

}


// CONTACT FORM

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert(
        "Thank you! Your message has been received."
    );

    contactForm.reset();

});


// CURRENT YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();


// BACK TO TOP

const topButton =
    document.getElementById("topButton");


window.addEventListener("scroll", function() {

    if (window.scrollY > 400) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});


function scrollToTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}