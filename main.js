// Example mobile menu toggle (if you have a hamburger menu)
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("open");
});
function acceptPolicy() {
    alert("You have accepted the Privacy Policy.");
    // Here, you could also redirect to another page or close the modal
  }