const body = document.body;
const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

const handleClick = (e) => {
  body.classList.toggle("show");
};

menuBtn.addEventListener("click", handleClick);
