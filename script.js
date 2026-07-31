
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

/* ===============================
   SEARCH EMAIL VALIDATION
================================== */

const searchInput = document.getElementById("heroSearch");
const searchBtn = document.getElementById("searchBtn");
const errorMsg = document.getElementById("errorMsg");

if (searchBtn && searchInput && errorMsg) {

    searchBtn.addEventListener("click", validateEmail);

    searchInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            validateEmail();
        }
    });

    function validateEmail() {

        const email = searchInput.value.trim();

        errorMsg.textContent = "";
        errorMsg.style.color = "red";
        searchInput.classList.remove("input-error");

        if (email === "") {

            errorMsg.textContent = "Please enter your email address.";
            searchInput.classList.add("input-error");
            searchInput.focus();
            return;

        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

        if (!emailPattern.test(email)) {

            errorMsg.textContent = "Please enter a valid email address.";
            searchInput.classList.add("input-error");
            searchInput.focus();
            return;

        }

        errorMsg.style.color = "green";
        errorMsg.textContent = "✓ Valid Email";

        setTimeout(function () {
            window.location.href = "404.html";
        }, 1000);

    }

}

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    let isValid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const company = document.getElementById("company");
    const message = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const companyError = document.getElementById("companyError");
    const messageError = document.getElementById("messageError");

    // Clear previous errors
    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    companyError.textContent = "";
    messageError.textContent = "";

    // Name
    if (name.value.trim() === "") {
        nameError.textContent = "Please enter your name";
        isValid = false;
    }

    // Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === "") {
        emailError.textContent = "Please enter your email";
        isValid = false;
    } else if (!emailPattern.test(email.value.trim())) {
        emailError.textContent = "Please enter a valid email";
        isValid = false;
    }

    // Phone
    const phonePattern = /^[0-9]{10}$/;

    if (phone.value.trim() === "") {
        phoneError.textContent = "Please enter your phone number";
        isValid = false;
    } else if (!phonePattern.test(phone.value.trim())) {
        phoneError.textContent = "Phone number must be 10 digits";
        isValid = false;
    }

    // Company
    if (company.value.trim() === "") {
        companyError.textContent = "Please enter your company name";
        isValid = false;
    }

    // Message
    if (message.value.trim() === "") {
        messageError.textContent = "Please enter your message";
        isValid = false;
    }

    // Redirect only if all validations pass
    if (isValid) {

        // alert("Form submitted successfully!");

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