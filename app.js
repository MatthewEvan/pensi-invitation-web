const navbar = document.querySelector("nav");

document.addEventListener("scroll", function () {
    if (window.scrollY > 75) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

const audio = document.getElementById("audio-player");
const playPauseButton = document.getElementById("play-pause-button");

let isPlaying = false;

playPauseButton.addEventListener("click", () => {
    if (isPlaying) {
        audio.pause();
    } else {
        audio.play();
    }
    isPlaying = !isPlaying;
});