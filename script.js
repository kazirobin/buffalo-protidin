document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  const closeMenu = document.querySelector(".close-menu");
  const overlay = document.querySelector(".overlay");
  const navLinks = document.querySelectorAll(".mobile-nav-link");

  hamburger.addEventListener("click", function () {
    mobileMenu.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  function closeMobileMenu() {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "auto";
  }

  closeMenu.addEventListener("click", closeMobileMenu);
  overlay.addEventListener("click", closeMobileMenu);

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });
});