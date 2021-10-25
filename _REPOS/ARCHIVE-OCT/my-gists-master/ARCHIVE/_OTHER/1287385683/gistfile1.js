var script1 = document.createElement("script"),
  script2 = document.createElement("script"),
  script3 = document.createElement("script"),
  script4 = document.createElement("script");
script1.async = false;
script1.src = "../js/mustache-min.js";

script2.async = false;
script2.src = "http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js";

script3.async = false;
script3.src = "../js/jquery.lightbox-0.5.min.js";

script4.async = false;
script4.src = "../js/s3slider.js";

document.head.appendChild(script1);
document.head.appendChild(script2);
document.head.appendChild(script3);
document.head.appendChild(script4);
