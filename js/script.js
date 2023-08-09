const btnBars = document.querySelector("header nav .bars-icon i");
const navLinks = document.querySelector("header nav ul");
btnBars.addEventListener("click", () => {

  console.log(navLinks.getAttribute("class"));
  if (navLinks.getAttribute("class") === "active") {
    navLinks.className = "";
    navLinks.style = "display: none;";
    btnBars.className = "fa-solid fa-bars";
  }
  else {
    navLinks.className = "active";
    navLinks.style = "display: flex;";
    btnBars.className = "fa-solid fa-xmark";
  }
});