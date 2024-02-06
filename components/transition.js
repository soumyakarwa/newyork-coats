// transition.js
console.log("transition.js loaded");
document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".button-container a"); // Adjust the selector to your specific button
  button.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent the default link behavior
    const href = this.getAttribute("href"); // Get the link's href

    document.querySelector(".landing-page").classList.add("fade-out");
    setTimeout(function () {
      window.location.href = href; // Change the location after the animation
    }, 500); // This timeout should match your fade-out animation duration
  });
});

window.addEventListener("load", function () {
  document.querySelector(".application").classList.add("fade-in");
});
