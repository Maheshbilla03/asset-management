// ===============================
// DOM LOADED
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    showUser();

    initSidebar();

    initSidebarToggle();

    searchAssets();

    animateCounters();

    animateProgressBars();

    tableHover();

    buttonActions();

    notificationBtn();

    showDateTime();

    setInterval(showDateTime, 1000);

});


const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("closeBtn");
const sidebarOverlay = document.getElementById("sidebarOverlay");


// ===============================
// SIDEBAR OPEN / CLOSE (mobile drawer)
// ===============================

function openSidebar(){

    if (!sidebar) return;

    sidebar.classList.add("active");

    if (sidebarOverlay) sidebarOverlay.classList.add("active");

    if (menuBtn) {

        const icon = menuBtn.querySelector("i");

        if (icon) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        }

    }

}

function closeSidebar(){

    if (!sidebar) return;

    sidebar.classList.remove("active");

    if (sidebarOverlay) sidebarOverlay.classList.remove("active");

    if (menuBtn) {

        const icon = menuBtn.querySelector("i");

        if (icon) {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    }

}

function initSidebarToggle(){

    if (menuBtn) {

        menuBtn.addEventListener("click", () => {

            if (sidebar.classList.contains("active")) {
                closeSidebar();
            } else {
                openSidebar();
            }

        });

    }

    if (closeBtn) {

        closeBtn.addEventListener("click", closeSidebar);

    }

    if (sidebarOverlay) {

        sidebarOverlay.addEventListener("click", closeSidebar);

    }

}


// ===============================
// USER DETAILS
// ===============================

function showUser() {

    const userName = localStorage.getItem("userName") || "Guest";
    const userEmail = localStorage.getItem("userEmail") || "guest@gmail.com";
    const userRole = localStorage.getItem("userRole") || "Viewer";

    // Welcome Back username
    const welcomeUser = document.getElementById("welcomeUser");

    // Welcome heading username
    const userNameElement = document.getElementById("userName");

    // Email & Role
    const email = document.getElementById("email");
    const role = document.getElementById("role");

    if (welcomeUser) {
        welcomeUser.textContent = userName;
    }

    if (userNameElement) {
        userNameElement.textContent = userName;
    }

    if (email) {
        email.textContent = userEmail;
    }

    if (role) {
        role.textContent = userRole;
    }

    document.querySelectorAll(".userEmail").forEach(item => {
        item.textContent = userEmail;
    });

}


// ===============================
// SIDEBAR MENU (section switching)
// ===============================

function initSidebar(){

    const menus = document.querySelectorAll("#sidebarMenu li[data-section]");

    const sections = document.querySelectorAll(".page-section");

    sections.forEach((section, index) => {

        section.classList.toggle("is-visible", index === 0);

    });

    menus.forEach(menu => {

        menu.addEventListener("click", () => {

            menus.forEach(m => m.classList.remove("active"));

            menu.classList.add("active");

            const id = menu.dataset.section;

            sections.forEach(section => {

                section.classList.remove("is-visible");

            });

            const active = document.getElementById(id);

            if (active) {

                active.classList.add("is-visible");

                active.scrollIntoView({

                    behavior: "smooth"

                });

            }

            if (window.innerWidth <= 991) {

                closeSidebar();

            }

        });

    });

}


// ===============================
// SEARCH
// ===============================

function searchAssets(){

    const input = document.querySelector(".search-box input");

    if (!input) return;

    input.addEventListener("keyup", function(){

        const value = this.value.toLowerCase();

        document.querySelectorAll("table tbody tr, table tr").forEach((row, index) => {

            if (index === 0) return;

            row.style.display = row.innerText.toLowerCase().includes(value)
            ? ""
            : "none";

        });

    });

}


// ===============================
// COUNTERS
// ===============================

function animateCounters(){

    document.querySelectorAll(".stat-card h2").forEach(counter => {

        let target = parseInt(counter.innerText.replace(/\D/g, ""));

        if (isNaN(target)) return;

        let value = 0;

        const timer = setInterval(() => {

            value += Math.ceil(target / 100);

            if (value >= target) {

                value = target;

                clearInterval(timer);

            }

            counter.innerText = value.toLocaleString();

        }, 20);

    });

}


// ===============================
// PROGRESS
// ===============================

function animateProgressBars(){

    document.querySelectorAll(".progress-bar span, .bar").forEach(bar => {

        const width = bar.style.width;

        bar.style.width = "0";

        setTimeout(() => {

            bar.style.transition = "1.2s";

            bar.style.width = width;

        }, 300);

    });

}


// ===============================
// NOTIFICATION
// ===============================

function notificationBtn(){

    const btn = document.querySelector(".notification");

    if (btn) {

        btn.onclick = () => {

            alert("You have 3 new notifications.");

        }

    }

}


// ===============================
// QUICK ACTION
// ===============================

function buttonActions(){

    document.querySelectorAll(".action-grid button").forEach(btn => {

        btn.onclick = () => {

            alert(btn.innerText);

        }

    });

}


// ===============================
// TABLE
// ===============================

function tableHover(){

    document.querySelectorAll("table tr").forEach((row, index) => {

        if (index === 0) return;

        row.onmouseenter = () => {

            row.style.background = "#16335f";

        }

        row.onmouseleave = () => {

            row.style.background = "";

        }

    });

}


// ===============================
// CLOCK
// ===============================

function showDateTime(){

    const clock = document.getElementById("clock");

    if (!clock) return;

    clock.innerHTML = new Date().toLocaleString();

}


// ===============================
// WINDOW RESIZE
// ===============================

window.addEventListener("resize", () => {

    if (window.innerWidth > 991) {

        closeSidebar();

    }

});