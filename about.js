
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

    // Remove previous error messages
    document.querySelectorAll(".error-msg").forEach(error => error.remove());

    let isValid = true;

    function showError(input, text) {

        const error = document.createElement("small");
        error.className = "error-msg";
        error.style.color = "red";
        error.style.display = "block";
        error.style.marginTop = "5px";
        error.textContent = text;

        input.parentElement.appendChild(error);
        input.style.border = "2px solid red";

        isValid = false;
    }

    // Reset border
    [name, email, company, message].forEach(input => {
        input.style.border = "";
    });

    // Name
    if (name.value.trim() === "") {
        showError(name, "Please enter your name.");
    }

    // Email
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (email.value.trim() === "") {
        showError(email, "Please enter your email.");
    } else if (!emailPattern.test(email.value.trim())) {
        showError(email, "Please enter a valid email address.");
    }

    // Company
    if (company.value.trim() === "") {
        showError(company, "Please enter your company name.");
    }

    // Message
    if (message.value.trim() === "") {
        showError(message, "Please enter your message.");
    }

    // Redirect only if all fields are valid
    if (isValid) {

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