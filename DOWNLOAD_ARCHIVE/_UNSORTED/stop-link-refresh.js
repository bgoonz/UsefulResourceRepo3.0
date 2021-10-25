// Create navLinks HTML collection
const navLinks = document.querySelectorAll("nav a");

// Prevent clicking links from 'refreshing' the page
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
  });
});