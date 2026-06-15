import "./styles/styles.css";
import homePage from "./home.js";
import menuPage from "./menu.js";
import aboutPage from "./about.js";
import contactPage from "./contact.js";

const contentDiv = document.querySelector("#content");

const navItems = document.querySelectorAll(".nav-btn");

const homePageButton = document.querySelector(".home-page");
const menuPageButton = document.querySelector(".menu-page");
const aboutPageButton = document.querySelector(".about-page");
const contactPageButton = document.querySelector(".contact-page");

homePageButton.classList.toggle("active");
homePage();

function navButtonListenerHelper(e) {
  contentDiv.textContent = "";
  const navButtonClass = e.target.classList[1];
  switch (navButtonClass) {
    case "home-page":
      homePage();
      break;
    case "menu-page":
      menuPage();
      break;
    case "about-page":
      aboutPage();
      break;
    case "contact-page":
      contactPage();
      break;
    default:
      homePage();
  }
}

navItems.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    navButtonListenerHelper(e);
    navItems.forEach((nav) => nav.classList.remove("active"));
    e.target.classList.toggle("active");
  });
});
