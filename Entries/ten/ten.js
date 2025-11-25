let body = document.body;
let popup = document.getElementById("popup");

function showPopup(message, x, y) {
  popup.textContent = message;

  popup.style.left = x + "px";
  popup.style.top = (y - 50) + "px";

  popup.classList.add("show");

  setTimeout(() => {
    popup.classList.remove("show");
  }, 1500);
}

document.querySelectorAll(".pill").forEach(btn => {
  btn.addEventListener("click", () => {
    
    let color = btn.getAttribute("data-color");
    let text = btn.getAttribute("data-text");

    body.style.background = color;

    let rect = btn.getBoundingClientRect();
    let x = rect.left + rect.width / 2;
    let y = rect.top;

    showPopup(text, x, y);
  });
});

document.querySelector(".home-btn").addEventListener("click", () => {
  window.location.href = "../landing/landing.html";
});