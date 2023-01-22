const body = document.body;
const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

const handleClick = (e) => {
  body.classList.toggle("show");
};

menuBtn.addEventListener("click", handleClick);

const mql = window.matchMedia("(min-width: 560px)");

mql.addListener(removeTransition);

function removeTransition(e) {
  if (e.matches) {
    body.classList.remove("show");
  }
}

body.addEventListener("transitionend", function () {
  if (!body.classList.contains("show")) {
  }
});
