// hide and show header
addEventListener("scroll", onScoll);

function onScoll() {
  const navheader = document.querySelector(".navbar");
  if (window.scrollY == 0) {
    // if (window.scrollY <= 100) {
    // navheader.style.display = 'none'
    navheader.style.visibility = "hidden";
    navheader.style.opacity = "0";
    navheader.classList.remove("visible");
  } else {
    // navheader.style.display = 'flex'
    navheader.style.visibility = "visible";
    navheader.style.opacity = "1";
    navheader.classList.add("visible");
  }
}
// Light and dark mode button
const buttonMode = document.getElementById("mode");
buttonMode.addEventListener("click", function () {
  const lightClasses = document.querySelectorAll(".light");
  const lightBgClasses = document.querySelectorAll(".light-bg");
  const darkBgClasses = document.querySelectorAll(".dark-bg");
  const lightReverseBgClasses = document.querySelectorAll(".light-reverse-bg");
  const darkReverseBgClasses = document.querySelectorAll(".dark-reverse-bg");
  const darkClasses = document.querySelectorAll(".dark");
  const iconMode = document.getElementById("icon-mode");
  if (darkClasses.length == 0) {
    iconMode.classList.remove("fa-moon");
    iconMode.classList.add("fa-sun");
    for (var i = 0; i < lightClasses.length; i++) {
      // Remove the "light" class
      lightClasses[i].classList.remove("light");
      // Add the "dark" class
      lightClasses[i].classList.add("dark");
    }
    for (var i = 0; i < lightBgClasses.length; i++) {
      // Remove the "light" class
      lightBgClasses[i].classList.remove("light-bg");
      // Add the "dark" class
      lightBgClasses[i].classList.add("dark-bg");
    }
    for (var i = 0; i < lightReverseBgClasses.length; i++) {
      // Remove the "light" class
      lightReverseBgClasses[i].classList.remove("light-reverse-bg");
      // Add the "dark" class
      lightReverseBgClasses[i].classList.add("dark-reverse-bg");
    }
  } else {
    iconMode.classList.remove("fa-sun");
    iconMode.classList.add("fa-moon");
    for (var i = 0; i < darkClasses.length; i++) {
      // Remove the "light" class
      darkClasses[i].classList.remove("dark");
      // Add the "dark" class
      darkClasses[i].classList.add("light");
    }
    for (var i = 0; i < darkBgClasses.length; i++) {
      // Remove the "light" class
      darkBgClasses[i].classList.remove("dark-bg");
      // Add the "dark" class
      darkBgClasses[i].classList.add("light-bg");
    }
    for (var i = 0; i < darkReverseBgClasses.length; i++) {
      // Remove the "light" class
      darkReverseBgClasses[i].classList.remove("dark-reverse-bg");
      // Add the "dark" class
      darkReverseBgClasses[i].classList.add("light-reverse-bg");
    }
  }
});

// for animation

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// custoom cursor
const mouse1 = document.querySelector(".mouseef");
const mouse2 = document.querySelector(".outline");
document.body,
  addEventListener("mousemove", (event) => {
    mouse1.style.left = `${event.x}px`;
    mouse1.style.top = `${event.y}px`;
    // mouse2.style.left = `${event.x}px`
    // mouse2.style.top = `${event.y}px`

    mouse2.animate(
      {
        left: `${event.x}px`,
        top: `${event.y}px`,
      },
      {
        duration: 500,
        fill: "forwards",
      }
    );
  });
// CHeck if the section is visible
function isElementVisible(element) {
  const elementTop = element.offsetTop;
  const elementBottom = elementTop + element.offsetHeight;
  const viewportTop = window.pageYOffset;
  const viewportBottom = viewportTop + window.innerHeight - 200;

  return elementBottom > viewportTop && elementTop < viewportBottom;
}

const home = document.getElementById("landing-page");
const about = document.getElementById("about");
const certificates = document.getElementById("certificates");
const experience = document.getElementById("experience");
const contact = document.getElementById("contact");
const nav_home = document.getElementById("nav-1");
const nav_about = document.getElementById("nav-2");
const nav_certificates = document.getElementById("nav-3");
const nav_experience = document.getElementById("nav-4");
const nav_contact = document.getElementById("nav-5");
// adding and removing selected class when its in viewpoint
window.addEventListener("scroll", () => {
  if (isElementVisible(contact)) {
    nav_contact.classList.add("selected");
    nav_home.classList.remove("selected");
    nav_about.classList.remove("selected");
    nav_certificates.classList.remove("selected");
    nav_contact.classList.remove("selected");
  } else if (isElementVisible(certificates)) {
    nav_certificates.classList.add("selected");
    nav_home.classList.remove("selected");
    nav_about.classList.remove("selected");
    nav_experience.classList.remove("selected");
    nav_contact.classList.remove("selected");
  } else if (isElementVisible(experience)) {
    nav_experience.classList.add("selected");
    nav_home.classList.remove("selected");
    nav_about.classList.remove("selected");
    nav_certificates.classList.remove("selected");
    nav_contact.classList.remove("selected");
  } else if (isElementVisible(about)) {
    nav_about.classList.add("selected");
    nav_home.classList.remove("selected");
    nav_experience.classList.remove("selected");
    nav_certificates.classList.remove("selected");
    nav_contact.classList.remove("selected");
  } else if (isElementVisible(home)) {
    nav_home.classList.add("selected");
    nav_about.classList.remove("selected");
    nav_experience.classList.remove("selected");
    nav_certificates.classList.remove("selected");
    nav_contact.classList.remove("selected");
  }
});
