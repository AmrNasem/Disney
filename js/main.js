const navToggler = document.getElementById("nav-toggler");
const navbar = document.querySelector("header nav ul");
navToggler.onclick = (e) => {
  e.stopPropagation();
  navbar.classList.toggle("show-nav");
};
window.addEventListener("click", () => {
  navbar.classList.remove("show-nav");
});
