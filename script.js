 document.addEventListener("DOMContentLoaded", function () {
        const hamburger = document.querySelector(".hamburger");
        const mobileMenu = document.querySelector(".mobile-menu");
        const closeMenu = document.querySelector(".close-menu");
        const overlay = document.querySelector(".overlay");
        const navLinks = document.querySelectorAll(".mobile-nav-link");

        // Toggle mobile menu
        hamburger.addEventListener("click", function () {
          mobileMenu.classList.add("active");
          overlay.classList.add("active");
          document.body.style.overflow = "hidden";
        });

        // Close mobile menu
        function closeMobileMenu() {
          mobileMenu.classList.remove("active");
          overlay.classList.remove("active");
          document.body.style.overflow = "auto";
        }

        closeMenu.addEventListener("click", closeMobileMenu);
        overlay.addEventListener("click", closeMobileMenu);

        // Close menu when a link is clicked
        navLinks.forEach((link) => {
          link.addEventListener("click", closeMobileMenu);
        });
      });









function updateFBPlugin() {
        var container = document.getElementById("fb-container");
        var iframe = document.getElementById("fb-iframe");

        var containerWidth = container.offsetWidth;

        // Facebook limit: min 280px, max 500px
        if (containerWidth < 280) containerWidth = 280;
        if (containerWidth > 500) containerWidth = 500;

        var newSrc =
          "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbuffaloprotidin&tabs=timeline&width=" +
          containerWidth +
          "&height=550&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true";

        iframe.src = newSrc;
        iframe.width = containerWidth;
      }

      // Initial load
      updateFBPlugin();

      // Resize-এ update
      window.addEventListener("resize", function () {
        clearTimeout(window.fbResizeTimeout);
        window.fbResizeTimeout = setTimeout(updateFBPlugin, 200); // debounce for performance
      });