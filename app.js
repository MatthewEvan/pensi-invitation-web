const navbar = document.querySelector("nav");

document.addEventListener("scroll", function () {
    if (window.scrollY > 75) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
if (!isChrome){
    $('#iframeAudio').remove()
}
else {
    $('#playAudio').remove() // just to make sure that it will not have 2x audio in the background 
}