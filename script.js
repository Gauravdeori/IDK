// TYPING EFFECT
const text = "My booboo 💕\nYou are the sweetest 🧸\nAnd I miss you ❤️";
let i = 0;
const msgBox = document.getElementById("msg");

function typeText() {
  if (i < text.length) {
    msgBox.innerHTML += text[i] === "\n" ? "<br>" : text[i];
    i++;
    setTimeout(typeText, 80);
  }
}

typeText();

// FLOATING HEARTS
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "floating-heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}, 700);
