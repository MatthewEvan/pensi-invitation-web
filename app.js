const navbar = document.querySelector("nav");

document.addEventListener("scroll", function () {
    if (window.scrollY > 75) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});