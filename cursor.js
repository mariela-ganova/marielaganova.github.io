// Създаваме курсора динамично
const cursor = document.createElement("div");
cursor.classList.add("custom-cursor");

cursor.innerHTML = `<img src="logo.png" alt="">`;
document.body.appendChild(cursor);

// позиция
let mouseX = 0;
let mouseY = 0;
let posX = 0;
let posY = 0;

// следене на мишката
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// плавно движение
function animateCursor() {
  posX += (mouseX - posX) * 0.1;
  posY += (mouseY - posY) * 0.1;

  cursor.style.left = posX + "px";
  cursor.style.top = posY + "px";

  requestAnimationFrame(animateCursor);
}
animateCursor();
