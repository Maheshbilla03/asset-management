// ===============================
// FORM TOGGLE
// ===============================

const loginBox = document.querySelector(".login");
const signupBox = document.querySelector(".signup");

document.getElementById("showSignup").onclick = function (e) {
    e.preventDefault();
    loginBox.classList.remove("active");
    signupBox.classList.add("active");
};

document.getElementById("showLogin").onclick = function (e) {
    e.preventDefault();
    signupBox.classList.remove("active");
    loginBox.classList.add("active");
};


// ===============================
// PASSWORD SHOW / HIDE
// ===============================

const loginPassword = document.getElementById("loginPassword");
const loginEye = document.getElementById("loginEye");

loginEye.onclick = function () {

    if (loginPassword.type === "password") {

        loginPassword.type = "text";
        loginEye.classList.replace("fa-eye", "fa-eye-slash");

    } else {

        loginPassword.type = "password";
        loginEye.classList.replace("fa-eye-slash", "fa-eye");

    }

};


// ===============================
// PASSWORD STRENGTH
// ===============================

const password = document.getElementById("password");
const strengthBar = document.getElementById("strengthBar");

password.addEventListener("keyup", function () {

    let value = password.value;
    let strength = 0;

    if (value.length >= 6) strength += 25;
    if (/[A-Z]/.test(value)) strength += 25;
    if (/[0-9]/.test(value)) strength += 25;
    if (/[@$!%*?&]/.test(value)) strength += 25;

    strengthBar.style.width = strength + "%";

    if (strength <= 25) {

        strengthBar.style.background = "red";

    } else if (strength <= 50) {

        strengthBar.style.background = "orange";

    } else if (strength <= 75) {

        strengthBar.style.background = "#0ea5e9";

    } else {

        strengthBar.style.background = "#22c55e";

    }

});


// ===============================
// SIGNUP
// ===============================

document.getElementById("signupForm").addEventListener("submit", function (e) {

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let pass = document.getElementById("password").value;
    let confirm = document.getElementById("confirmPassword").value;
    let role = document.getElementById("role").value;
    let terms = document.querySelector(".terms input").checked;

    document.getElementById("emailError").innerHTML = "";
    document.getElementById("phoneError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("confirmError").innerHTML = "";
    document.getElementById("roleSignupError").innerHTML = "";
    document.getElementById("termsError").innerHTML = "";

    let valid = true;

    if (!email.includes("@")) {
        document.getElementById("emailError").innerHTML = "Enter valid email";
        valid = false;
    }

    if (phone.length != 10) {
        document.getElementById("phoneError").innerHTML = "Enter 10 digit phone";
        valid = false;
    }

    if (pass.length < 6) {
        document.getElementById("passwordError").innerHTML = "Minimum 6 characters";
        valid = false;
    }

    if (pass !== confirm) {
        document.getElementById("confirmError").innerHTML = "Passwords do not match";
        valid = false;
    }

    if (role === "") {
        document.getElementById("roleSignupError").innerHTML = "Select role";
        valid = false;
    }

    if (!terms) {
        document.getElementById("termsError").innerHTML = "Accept Terms";
        valid = false;
    }

    if (!valid) return;

    // Save User
    let user = {
        name: name,
        email: email,
        phone: phone,
        password: pass,
        role: role
    };

    localStorage.setItem("user", JSON.stringify(user));

    // alert("Account Created Successfully!");

    // Open Login Form
    signupBox.classList.remove("active");
    loginBox.classList.add("active");

    // Optional: Clear Signup Form
    this.reset();
    strengthBar.style.width = "0%";
});
//Login


const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const role = document.getElementById("loginRole").value;
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    const roleError = document.getElementById("roleError");
    const emailError = document.getElementById("loginEmailError");
    const passwordError = document.getElementById("loginPasswordError");

    roleError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    let isValid = true;

    // Role Validation
    if (role === "") {
        roleError.textContent = "Please select a role.";
        isValid = false;
    }

    // Email Validation
   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (email === "") {
    emailError.textContent = "Email is required.";
    isValid = false;
} else if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid email.";
    isValid = false;
} else {
    emailError.textContent = "";
}

    // Password Validation
    if (password.length < 4) {
        passwordError.textContent = "Password must be at least 4 characters.";
        isValid = false;
    }

    if (isValid) {

        // Name from email
        let name = email.split("@")[0];

        // Capitalize
        name = name.charAt(0).toUpperCase() + name.slice(1);

        // Save data
        localStorage.setItem("userName", name);
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userRole", role);

        // Redirect
       if (role === "Admin") {
    window.location.href = "Admin.html";
} else if (role === "Viewer") {
    window.location.href = "dashboard.html";
}
    }
});