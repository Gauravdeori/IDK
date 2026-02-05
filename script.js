// TYPING MESSAGE
const text = "My booboo 💕\nYou are the sweetest 🧸\nAnd I miss you ❤️";
let i = 0;
const msg = document.getElementById("msg");

function typeText() {
  if (i < text.length) {
    msg.innerHTML += text[i] === "\n" ? "<br>" : text[i];
    i++;
    setTimeout(typeText, 80);
  }
}
typeText();

// LOAD SAVED HUGS
let hugs = Number(localStorage.getItem("hugs") || 0);

const count = document.getElementById("count");
const bubble = document.getElementById("bubble");
const secret10 = document.getElementById("secret10");
const secret15 = document.getElementById("secret15");
const secret50 = document.getElementById("secret50");
const blushes = document.querySelectorAll(".blush");

count.innerText = hugs;

// DAYS SINCE MET (CHANGE DATE HERE ❤️)
const metDate = new Date("2019-01-01");
const today = new Date();
const days = Math.floor((today - metDate) / (1000 * 60 * 60 * 24));
document.getElementById("days").innerText = days;

// APPLY UNLOCKS ON LOAD
if (hugs >= 10) secret10.classList.add("show");
if (hugs >= 15) {
  secret15.classList.add("show");
  blushes.forEach(b => b.style.opacity = 1);
}
if (hugs >= 50) secret50.classList.add("show");

// HUG ACTION
function hugTeddy() {
  hugs++;
  localStorage.setItem("hugs", hugs);
  count.innerText = hugs;

  bubble.style.opacity = 1;
  bubble.innerText = "I feel your hug 🥺❤️";
  setTimeout(() => bubble.style.opacity = 0, 1500);

  sparkle();

  if (hugs === 10) secret10.classList.add("show");

  if (hugs === 15) {
    secret15.classList.add("show");
    blushes.forEach(b => b.style.opacity = 1);
  }

  if (hugs === 50) secret50.classList.add("show");
}

// SPARKLES
function sparkle() {
  const s = document.createElement("div");
  s.className = "sparkle";
  s.innerText = "✨";
  s.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(s);
  setTimeout(() => s.remove(), 3000);
}

// NIGHT MODE
function toggleMode() {
  document.body.classList.toggle("night");
}
