// Typing message
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

// Hug logic
let hugs = 0;
const bubble = document.getElementById("bubble");
const count = document.getElementById("count");
const secret = document.getElementById("secret");

function hugTeddy() {
  hugs++;
  count.innerText = hugs;

  bubble.style.opacity = 1;
  bubble.innerText = "Aww 🥺 I feel your hug ❤️";
  setTimeout(() => bubble.style.opacity = 0, 1500);

  sparkle();

  // 💖 UNLOCK MESSAGE AT 10 HUGS
  if (hugs === 10) {
    secret.classList.add("show");
    bubble.style.opacity = 1;
    bubble.innerText = "You unlocked something special 💕";
    setTimeout(() => bubble.style.opacity = 0, 2000);
  }
}

// Sparkles
function sparkle() {
  const s = document.createElement("div");
  s.className = "sparkle";
  s.innerText = "✨";
  s.style.left = Math.random() * 100 + "vw";
  s.style.bottom = "0px";
  document.body.appendChild(s);
  setTimeout(() => s.remove(), 3000);
}

// Night mode
function toggleMode() {
  document.body.classList.toggle("night");
}
