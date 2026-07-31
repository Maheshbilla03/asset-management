
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
const newsletterEmail = document.getElementById("newsletterEmail");
const newsletterBtn = document.getElementById("newsletterBtn");
const newsletterError = document.getElementById("newsletterError");

newsletterBtn.addEventListener("click", function () {

    const email = newsletterEmail.value.trim();

    // Clear previous error
    newsletterError.textContent = "";
    newsletterError.style.color = "red";
    newsletterEmail.classList.remove("input-error");

    // Empty validation
    if (email === "") {
        newsletterError.textContent = "Please enter your email.";
        newsletterEmail.classList.add("input-error");
        newsletterEmail.focus();
        return;
    }

    // Email validation
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!emailPattern.test(email)) {
        newsletterError.textContent = "Please enter a valid email address.";
        newsletterEmail.classList.add("input-error");
        newsletterEmail.focus();
        return;
    }

    // Success
    newsletterError.style.color = "green";
    newsletterError.textContent = "✓ Email verified successfully.";

    setTimeout(function () {
        window.location.href = "404.html";
    }, 1000);

});