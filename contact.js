
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("show");

    if (nav.classList.contains("show")) {
        menuBtn.innerHTML = "✖";
    } else {
        menuBtn.innerHTML = "☰";
    }
});
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const company = document.getElementById("company");
    const message = document.getElementById("message");

    let valid = true;

    // Validation

    if (name.value.trim() === "") {
        alert("Please enter your name.");
        name.focus();
        valid = false;
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === "") {
        alert("Please enter your email.");
        email.focus();
        valid = false;
        return;
    }

    if (!emailPattern.test(email.value.trim())) {
        alert("Please enter a valid email.");
        email.focus();
        valid = false;
        return;
    }

    if (company.value.trim() === "") {
        alert("Please enter your company name.");
        company.focus();
        valid = false;
        return;
    }

    if (message.value.trim() === "") {
        alert("Please enter your message.");
        message.focus();
        valid = false;
        return;
    }

    if (message.value.trim().length < 10) {
        alert("Message must contain at least 10 characters.");
        message.focus();
        valid = false;
        return;
    }

    // All validations passed
    if (valid) {
        window.location.href = "404.html";
    }

});
// ==========================
// NEWSLETTER VALIDATION
// ==========================

const newsletterEmail = document.getElementById("newsletterEmail");
const newsletterBtn = document.getElementById("newsletterBtn");
const newsletterError = document.getElementById("newsletterError");

newsletterBtn.addEventListener("click", function () {

    const email = newsletterEmail.value.trim();

    newsletterError.textContent = "";

    // Empty
    if (email === "") {
        newsletterError.textContent = "Please enter your email address.";
        newsletterEmail.focus();
        return;
    }

    // Email Format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        newsletterError.textContent = "Please enter a valid email address.";
        newsletterEmail.focus();
        return;
    }

    // Success
    window.location.href = "404.html";

});


