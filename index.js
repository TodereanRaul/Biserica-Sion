// function showSidebar() {
//   const sidebar = document.querySelector(".sidebar");
//   sidebar.style.display = "flex";
// }

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
