let music = document.getElementById("bgMusic");
let playing = false;
let isDark = true;

// Sahifa bosilganda musiqa ishga tushadi
document.body.addEventListener("click", () => {
    if (!playing) {
        music.volume = 0.3;
        music.play();
        playing = true;
    }
}, { once: true });

// Music yoqish / o‘chirish
function toggleMusic() {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

// Tungi / kunduzgi rejim
function toggleTheme() {
    if (isDark) {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        document.querySelector(".theme-btn").textContent = "🌞";
    } else {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        document.querySelector(".theme-btn").textContent = "🌙";
    }
    isDark = !isDark;
}

// Salom
function salom() {
    alert("Salom! Men Temirov Baxtiyor 👋");
}
