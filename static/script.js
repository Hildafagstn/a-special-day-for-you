const slideText = document.getElementById("slideText");
const buttonContainer = document.getElementById("buttonContainer");
const bgMusic = document.getElementById("bgMusic");

const slides = [
  "Haii, hari ini hari yang spesial buat kamu! 🎉",
  "Selamat ulang tahun! 🥳",
  "Semoga panjang umur, sehat selalu, dan bahagia selalu! 💖",
  "Tetap jadi versi terbaik dari dirimu yaa 🌟",
  "Jangan lupa tersenyum dan bersyukur hari ini 😊"
];

let currentSlide = 0;

function updateSlide() {
  slideText.innerText = slides[currentSlide];
  scrollToText();
}

function nextSlide() {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    updateSlide();
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlide();
  }
}

function scrollToText() {
  slideText.scrollIntoView({ behavior: "smooth", block: "center" });
}

// Play music saat pertama kali klik gambar
document.getElementById("slideImage").addEventListener("click", () => {
  bgMusic.play();
  updateSlide();
});
