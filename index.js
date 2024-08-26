// function showSidebar() {
//   const sidebar = document.querySelector(".sidebar");
//   sidebar.style.display = "flex";
// }
document.addEventListener("DOMContentLoaded", function () {
  // Ensure the content is hidden initially
  document.body.classList.add("loading");

  window.addEventListener("load", function () {
    // Add a delay before removing the preloader
    setTimeout(function () {
      // Fade out the preloader
      var preloader = document.getElementById("preloader");
      preloader.classList.add("hidden");

      // Show the content with a fade-in effect
      document.body.classList.remove("loading");
      document.body.classList.add("loaded");
      setTimeout(function () {
        document.getElementById("content").classList.add("show");
      }, 50); // Short delay to ensure smooth transition
    }, 1000); // 3000 milliseconds = 3 seconds delay
  });
});

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  //   console.log("Sidebar Element: ", sidebar); // Debugging line
  sidebar.style.display = "flex"; // Ensure it's set to flex
  sidebar.style.visibility = "visible"; // Optional: Force visibility
  sidebar.style.opacity = "1"; // Optional: Ensure opacity is 100%

  const showBtn = document.querySelector(".menu-btn");
  showBtn.style.visibility = "hidden";
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
  const showBtn = document.querySelector(".menu-btn");
  showBtn.style.visibility = "visible";
}
