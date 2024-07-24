import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import Swiper from "swiper/bundle";

ReactDOM.render(<App />, document.querySelector("#root"));

/*==================== OPEN AND CLOSE MENU MOBILE ====================*/

const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/

const navLinks = document.querySelectorAll(".nav__link");

function linkAction() {
  if (navMenu) navMenu.classList.remove("show-menu");
}

navLinks.forEach(link => link.addEventListener("click", linkAction));

/*==================== SHOW SCROLL UP BUTTON ====================*/

function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (scrollUp) {
    if (window.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  }
}

window.addEventListener("scroll", scrollUp);

/*==================== MODAL HANDLING ====================*/

document.addEventListener("DOMContentLoaded", () => {
  // Open modals
  document.querySelectorAll("[data-modal-target]").forEach(button => {
    button.addEventListener("click", () => {
      const modalId = button.getAttribute("data-modal-target");
      openModal(modalId);
    });
  });

  // Close modals with close button
  document.querySelectorAll(".modal .close").forEach(button => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal");
      if (modal) closeModal(modal.id);
    });
  });

  // Close modals on outside click
  window.addEventListener("click", (event) => {
    if (event.target.classList.contains("modal")) {
      closeModal(event.target.id);
    }
  });

  // Close modals with escape key
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      document.querySelectorAll(".modal.show").forEach(modal => {
        closeModal(modal.id);
      });
    }
  });
});

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "flex";
    setTimeout(() => {
      modal.classList.add("show");
    }, 10);
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("show");
    setTimeout(() => {
      modal.style.display = "none";
    }, 300); // Delay to match transition duration
  }
}
