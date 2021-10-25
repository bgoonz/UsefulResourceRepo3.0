// ========== HEADER/NAVIGATION ==========

const header = document.querySelector("header");
const navLogo = header.querySelector("#logo-img");
const navLinks = header.querySelectorAll("nav a");

navLogo.setAttribute("src", siteContent.nav["img-src"]);

navLinks[0].textContent = siteContent.nav["nav-item-1"];
navLinks[1].textContent = siteContent.nav["nav-item-2"];
navLinks[2].textContent = siteContent.nav["nav-item-3"];
navLinks[3].textContent = siteContent.nav["nav-item-4"];
navLinks[4].textContent = siteContent.nav["nav-item-5"];
navLinks[5].textContent = siteContent.nav["nav-item-6"];