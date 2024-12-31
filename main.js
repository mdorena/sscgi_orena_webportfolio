// // hide and show header
// addEventListener("scroll", onScoll);

// function onScoll() {
//   const navheader = document.getElementById("navbar");
//   if (window.scrollY == 0) {
//     // if (window.scrollY <= 100) {
//     // navheader.style.display = 'none'
//     navheader.style.display = "none";
//   } else {
//     // navheader.style.display = 'flex'
//     console.log("Scroll");
//     navheader.style.display = "flex";
//     console.log(navheader.style.display);
//   }
// }
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
