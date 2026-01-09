// fb-plugin.js

// Function to dynamically update Facebook Page Plugin based on container width
function updateFBPlugin() {
  const container = document.getElementById("fb-container");
  if (!container) return; // Safety check

  const iframe = document.getElementById("fb-iframe");
  if (!iframe) return;

  let containerWidth = container.offsetWidth;

  // Facebook Page Plugin limits: min 280px, max 500px
  if (containerWidth < 280) containerWidth = 280;
  if (containerWidth > 500) containerWidth = 500;

  // Your actual Facebook page URL (replace with yours)
  const pageUrl = "https://www.facebook.com/buffaloprotidin";

  const newSrc =
    "https://www.facebook.com/plugins/page.php?" +
    "href=" + encodeURIComponent(pageUrl) +
    "&tabs=timeline" +
    "&width=" + containerWidth +
    "&height=550" +
    "&small_header=false" +
    "&adapt_container_width=true" +
    "&hide_cover=false" +
    "&show_facepile=true" +
    "&appId=";

  iframe.src = newSrc;
  iframe.width = containerWidth + "px";
}

// Run when page loads
document.addEventListener("DOMContentLoaded", function () {
  updateFBPlugin();
});

// Update on window resize (with debounce for performance)
let fbResizeTimeout;
window.addEventListener("resize", function () {
  clearTimeout(fbResizeTimeout);
  fbResizeTimeout = setTimeout(updateFBPlugin, 200);
});