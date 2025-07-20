let index = 0;
const slideImage = document.getElementById("slideImage");
const slideText = document.getElementById("slideText");
const buttonContainer = document.getElementById("buttonContainer");
const music = document.getElementById("bgMusic");
let charIndex = 0;
let typingTimer;

const slides = [
  { type: "intro", text: "", img: "amplop.gif" },
  {
    type: "confirm",
    text: "Apakah kamu yakin ingin memutar musik?",
    img: "gif3.gif",
    options: ["Iya", "Iya banget"]
  },
  {
    type: "message",
    text: "🎉  Selamat Ulang Tahun! 🎂✨\nSemoga di usia baru ini kamu makin kuat,\nmakin bijak, dan terus jadi versi terbaik dari dirimu sendiri.\nSemoga semua harapan dan rencana besarmu\nbisa segera tercapai satu per satu.\n\nJangan lupa istirahat juga,\njangan cuma kejar target terus 😁\nTetap semangat dan jangan lupa bahagia ya, Bub! 🎈",
    img: "gif1.gif"
  },
  {
    type: "message",
    text: "🎊 Sekian dulu ucapan dari aku cewek yang ngangenin\nSemoga hari-harimu makin seru,\nhidupmu makin penuh tawa & makna,\ndan langkahmu selalu dipermudah oleh semesta. ✨\nSampai jumpa di momen spesial berikutnya 🎂\n🎈 Have a blast, Sayang! 🎈",
    img: "gif2.gif"
  }
];

function typeSlide() {
  if (charIndex < slides[index].text.length) {
    slideText.innerHTML += slides[index].text.charAt(charIndex);
    charIndex++;
    typingTimer = setTimeout(typeSlide, 50);
  }
}

function showSlide(i) {
  clearTimeout(typingTimer);
  charIndex = 0;
  buttonContainer.innerHTML = "";

  const slide = slides[i];
  slideImage.src = `static/${slide.img}`;

  if (slide.type === "intro") {
    slideText.innerHTML = "";
    slideImage.classList.add("pulse");
    slideImage.onclick = nextSlide;
  } else if (slide.type === "confirm") {
    slideText.innerHTML = slide.text;
    slideImage.classList.remove("pulse");
    slideImage.onclick = null;
    slide.options.forEach(opt => {
      const btn = document.createElement("button");
      btn.textContent = opt;
      btn.onclick = () => {
        music.play();
        nextSlide();
      };
      buttonContainer.appendChild(btn);
    });
  } else {
    slideImage.classList.remove("pulse");
    slideImage.onclick = null;
    slideText.innerHTML = "";
    typeSlide();

    if (i === slides.length - 1) {
      const backBtn = document.createElement("button");
      backBtn.textContent = "Kembali";
      backBtn.onclick = () => {
        index--;
        showSlide(index);
      };
      buttonContainer.appendChild(backBtn);
    } else {
      const backBtn = document.createElement("button");
      backBtn.textContent = "Kembali";
      backBtn.onclick = () => {
        index--;
        showSlide(index);
      };
      const nextBtn = document.createElement("button");
      nextBtn.textContent = "Lanjut";
      nextBtn.onclick = () => {
        index++;
        showSlide(index);
      };
      buttonContainer.appendChild(backBtn);
      buttonContainer.appendChild(nextBtn);
    }
  }
}

function nextSlide() {
  if (index < slides.length - 1) {
    index++;
    showSlide(index);
  } else {
    console.log("End of slides.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(index);
});
