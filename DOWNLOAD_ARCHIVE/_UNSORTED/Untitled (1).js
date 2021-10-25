// Main Content - Getters

const featuresHeading = document.querySelector(".top-content h4:nth-of-type(1)");
const featuresContent = document.querySelector(".top-content p:nth-of-type(1)");


const aboutHeading = document.querySelector(".top-content h4:nth-of-type(2)");
const aboutContent = document.querySelector(".top-content p:nth-of-type(2)");
const middleImg = document.querySelector("#middle-img");
const servicesHeading = document.querySelector(".bottom-content h4:nth-of-type(3)");
const servicesContent = document.querySelector(".bottom-content p:nth-of-type(3)");
const productHeading = document.querySelector(".bottom-content h4:nth-of-type(4)");
const productContent = document.querySelector(".bottom-content p:nth-of-type(4)");
const visionHeading = document.querySelector(".bottom-content h4:nth-of-type(5)");
const visionContent = document.querySelector(".bottom-content p:nth-of-type(5)");

// Main Content - Loading Text

featuresHeading.textContent = siteContent["main-content"]["features-h4"];
featuresContent.textContent = siteContent["main-content"]["features-content"];

aboutHeading.textContent = siteContent["main-content"]["about-h4"];
aboutContent.textContent = siteContent["main-content"]["about-content"];
middleImg.src = siteContent["main-content"]["middle-img-src"];
servicesHeading.textContent = siteContent["main-content"]["services-h4"];
servicesContent.textContent = siteContent["main-content"]["services-content"];
productHeading.textContent = siteContent["main-content"]["product-h4"]
productContent.textContent = siteContent["main-content"]["product-content"];
visionHeading.textContent = siteContent["main-content"]["vision-h4"];
visionContent.textContent = siteContent["main-content"]["vision-content"];