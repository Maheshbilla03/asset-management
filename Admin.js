
// =========================
// SIDEBAR TOGGLE
// =========================

const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");

menuBtn.addEventListener("click", () => {
    sidebar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
});

// Close sidebar when clicking outside (mobile)
document.addEventListener("click", function (e) {

    if (
        window.innerWidth <= 991 &&
        !sidebar.contains(e.target) &&
        !menuBtn.contains(e.target)
    ) {
        sidebar.classList.remove("active");
    }

});

// =========================
// PAGE SECTIONS (show only one at a time)
// =========================

const menuItems = document.querySelectorAll(".menu li");
const pageSections = document.querySelectorAll(".page-section");

function showSection(id) {

    pageSections.forEach(section => {
        section.classList.toggle("active-section", section.id === id);
    });

}

function setActiveMenuItem(id) {

    menuItems.forEach(li => {

        const link = li.querySelector("a[data-section]");

        li.classList.toggle("active", !!link && link.dataset.section === id);

    });

}

// Show the dashboard by default
showSection("dashboard");

// Sidebar links switch sections
document.querySelectorAll(".menu a[data-section]").forEach(link => {

    link.addEventListener("click", (e) => {

        e.preventDefault();

        const id = link.dataset.section;

        showSection(id);
        setActiveMenuItem(id);

        if (window.innerWidth <= 991) {
            sidebar.classList.remove("active");
        }

    });

});

// Quick-action buttons (Add Asset, Add Employee, Export Report, etc.)
document.querySelectorAll(".scroll-btn").forEach(button => {

    button.addEventListener("click", () => {

        const id = button.dataset.target;

        showSection(id);
        setActiveMenuItem(id);

    });

});





// (Sidebar links and quick-action buttons are handled above by
// showSection()/setActiveMenuItem() — no separate scroll logic needed
// now that only one section is visible at a time.)






// ===============================
// DARK LIGHT MODE
// ===============================


const moon =
document.querySelector(".fa-moon");



if(moon){


moon.addEventListener("click",()=>{


document.body.classList.toggle("light");



if(
document.body.classList.contains("light")
){


moon.classList.replace(
"fa-moon",
"fa-sun"
);


}

else{


moon.classList.replace(
"fa-sun",
"fa-moon"
);


}



});


}






// ===============================
// SEARCH MENU
// ===============================


const searchInput =
document.querySelector(".search-box input");



if(searchInput){


searchInput.addEventListener("keyup",function(){


let value =
this.value.toLowerCase();



menuItems.forEach(item=>{


let text =
item.innerText.toLowerCase();



if(text.includes(value)){


item.style.display="block";


}

else{


item.style.display="none";


}



});


});


}






// ===============================
// PROFILE DROPDOWN
// ===============================


const profile =
document.querySelector(".profile");



if(profile){


profile.addEventListener("click",()=>{


profile.classList.toggle("active");


});


}






// ===============================
// RESPONSIVE SIDEBAR
// ===============================


window.addEventListener("resize",()=>{


if(window.innerWidth > 991){


sidebar.classList.remove("show");


}


});






// ===============================
// PAGE LOADER
// ===============================


window.addEventListener("load",()=>{


document.body.classList.add("loaded");


});






// ===============================
// CARD ANIMATION
// ===============================


const cards =
document.querySelectorAll(
".action-card,.category-card,.department-card,.status-card"
);



const observer =
new IntersectionObserver(entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("visible");


}


});


});



cards.forEach(card=>{


observer.observe(card);


});
// ===============================
// USER DETAILS
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    const name = localStorage.getItem("userName") || "Admin";
    const email = localStorage.getItem("userEmail") || "admin@gmail.com";
    const role = localStorage.getItem("userRole") || "Administrator";

    // Dashboard Hero
    const userEmail = document.getElementById("userEmail");

    if (userEmail) {
        userEmail.textContent = name;
    }

    // Navbar Profile
    const profileName = document.getElementById("profileName");

    if (profileName) {
        profileName.textContent = name;
    }

    const profileRole = document.getElementById("profileRole");

    if (profileRole) {
        profileRole.textContent = role;
    }

    // Optional Welcome Text
    const welcomeText = document.getElementById("welcomeText");

    if (welcomeText) {
        welcomeText.innerHTML =
            `Logged in as <strong>${email}</strong>`;
    }

});