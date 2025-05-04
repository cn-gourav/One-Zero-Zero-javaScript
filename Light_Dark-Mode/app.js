const bar = document.getElementById("bar");
const list = document.getElementById("list");
const cross = document.getElementById("cross");
const theme = document.getElementById("theme");
const sun = document.getElementById("sun");


bar.addEventListener("click", () => {
  list.classList.toggle("navlist-active");
  cross.classList.toggle("fa-xmark");
});

theme.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  sun.classList.toggle("fa-moon");
    if (sun.classList.contains("fa-moon")) {
        sun.style.color = "#fff";
    } else {  
        sun.style.color = "#8113ff";
    }
});
