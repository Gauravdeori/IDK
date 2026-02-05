* {
  box-sizing: border-box;
}

body {
  margin: 0;
  height: 100vh;
  background: linear-gradient(#ffe6ee, #ffd1dc);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Comic Sans MS", cursive;
  overflow: hidden;
  transition: 0.4s;
}

body.night {
  background: linear-gradient(#1e1e2f, #2a2a40);
}

.container {
  text-align: center;
  transform: scale(0.9);
  color: #b30059;
}

body.night .container {
  color: #ffd1dc;
}

/* BUTTON */
.mode-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  background: #fff;
  border-radius: 50%;
  padding: 10px;
  font-size: 18px;
}

/* TEDDY */
.teddy {
  animation: bounce 2s infinite;
}

.head {
  width: 120px;
  height: 120px;
  background: #c68642;
  border-radius: 50%;
  margin: auto;
  position: relative;
}

.ear {
  width: 40px;
  height: 40px;
  background: #c68642;
  border-radius: 50%;
  position: absolute;
  top: -10px;
}

.ear.left { left: -15px; }
.ear.right { right: -15px; }

.eye {
  width: 10px;
  height: 10px;
  background: black;
  border-radius: 50%;
  position: absolute;
  top: 45px;
}

.eye.left { left: 35px; }
.eye.right { right: 35px; }

.nose {
  width: 14px;
  height: 10px;
  background: #4a2c2a;
  border-radius: 50%;
  position: absolute;
  top: 65px;
  left: 53px;
}

.body {
  width: 140px;
  height: 150px;
  background: #c68642;
  border-radius: 70px;
  margin: -10px auto 0;
  position: relative;
}

.arm {
  width: 40px;
  height: 90px;
  background: #c68642;
  border-radius: 20px;
  position: absolute;
  top: 20px;
  right: -20px;
  transform-origin: top;
  animation: wave 1.5s infinite;
}

.heart {
  font-size: 28px;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  animation: pulse 1s infinite;
}

/* SPEECH BUBBLE */
.bubble {
  margin-top: 10px;
  font-size: 16px;
  opacity: 0;
  transition: 0.3s;
}

/* MESSAGE */
.message {
  margin-top: 20px;
  font-size: 20px;
  line-height: 1.5;
  padding: 0 15px;
  min-height: 90px;
}

.hug-count {
  margin-top: 10px;
  font-size: 16px;
}

/* FLOATING SPARKLES */
.sparkle {
  position: absolute;
  color: pink;
  font-size: 12px;
  animation: sparkle 3s linear forwards;
}

@keyframes bounce {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes wave {
  0%,100% { transform: rotate(10deg); }
  50% { transform: rotate(-20deg); }
}

@keyframes pulse {
  0%,100% { transform: scale(1); }
  50% { transform: scale(1.3); }
}

@keyframes sparkle {
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(-120px); }
}
