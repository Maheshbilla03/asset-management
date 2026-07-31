
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

    let valid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const message = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const messageError = document.getElementById("messageError");
    const successMsg = document.getElementById("successMsg");

    // Clear previous messages
    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    messageError.textContent = "";
    successMsg.textContent = "";

    // Name Validation
    if (name.value.trim() === "") {
        nameError.textContent = "Please enter your name.";
        valid = false;
    }

    // Email Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === "") {
        emailError.textContent = "Please enter your email.";
        valid = false;
    } else if (!emailPattern.test(email.value.trim())) {
        emailError.textContent = "Please enter a valid email.";
        valid = false;
    }

    // Phone Validation
    const phonePattern = /^[6-9]\d{9}$/;

    if (phone.value.trim() === "") {
        phoneError.textContent = "Please enter your phone number.";
        valid = false;
    } else if (!phonePattern.test(phone.value.trim())) {
        phoneError.textContent = "Please enter a valid 10-digit phone number.";
        valid = false;
    }

    // Message Validation
    if (message.value.trim() === "") {
        messageError.textContent = "Please enter your message.";
        valid = false;
    } else if (message.value.trim().length < 10) {
        messageError.textContent = "Message must contain at least 10 characters.";
        valid = false;
    }

    // Success
    if (valid) {

        successMsg.style.color = "green";
        successMsg.textContent = "✓ Message sent successfully!";

        setTimeout(function () {
            window.location.href = "404.html";
        }, 1000);

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