const navBtn = document.querySelector(".nav-btn")
const navMenuOpen = document.querySelector(".nav-menu");

let navOpen = false;
navBtn.addEventListener("click", function () {
    if (navOpen) {
        navBtn.classList.remove("nav-btn--open");
        navMenuOpen.classList.remove("nav-menu-open");
        navOpen = false
    } else {
        navBtn.classList.add("nav-btn--open");
        navMenuOpen.classList.add("nav-menu-open");
        navOpen = true
    }
})