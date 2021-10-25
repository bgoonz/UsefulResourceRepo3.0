// ========== HEADER/NAVIGATION ==========

const header = document.querySelector("header");
const navLogo = header.querySelector("#logo-img");
const navLinks = header.querySelectorAll("nav a");

navLogo.setAttribute("src", siteContent.nav["img-src"]);

navLinks.forEach(
  (link, index) => (link.textContent = siteContent.nav[`nav-item-${index + 1}`])
);