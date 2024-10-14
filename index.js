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

// Navbar Scroll
window.onscroll = function () {
  var navbar = document.getElementById("navbar");
  if (window.scrollY > 100) {
    navbar.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // Change to your desired color
  } else {
    navbar.style.backgroundColor = "rgba(0, 0, 0, 0)"; // Initial transparent color
  }
};

// slider

var appendNumber = 4;
var prependNumber = 1;
var swiper = new Swiper(".swiper", {
  slidesPerView: "auto", // Set slidesPerView to auto
  spaceBetween: 0, // Remove space between slides
  // slidesPerView: 3, // Default for large screens
  centeredSlides: true,
  // spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is <= 1024px
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is <= 768px (smaller screens)
    768: {
      slidesPerView: 1, // Auto, so the CSS-defined width will be used
      centeredSlides: true,
      spaceBetween: 10,
    },
  },
});

document
  .querySelector(".prepend-2-slides")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  });
document
  .querySelector(".prepend-2-slides")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.prependSlide([
      '<div class="swiper-slide" style="width: 100%;">Slide ' +
        --prependNumber +
        "</div>",
      '<div class="swiper-slide" style="width: 100%;">Slide ' +
        --prependNumber +
        "</div>",
    ]);
  });

document
  .querySelector(".prepend-slide")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.prependSlide(
      '<div class="swiper-slide" style="width: 100%;">Slide ' +
        --prependNumber +
        "</div>"
    );
  });

document.querySelector(".append-slide").addEventListener("click", function (e) {
  e.preventDefault();
  swiper.appendSlide(
    '<div class="swiper-slide" style="width: 100%;">Slide ' +
      ++appendNumber +
      "</div>"
  );
});

document
  .querySelector(".append-2-slides")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.appendSlide([
      '<div class="swiper-slide" style="width: 100%;">Slide ' +
        ++appendNumber +
        "</div>",
      '<div class="swiper-slide" style="width: 100%;">Slide ' +
        ++appendNumber +
        "</div>",
    ]);
  });

// Select the video elements
const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");

// Add event listener to play video on click
video1.addEventListener("click", function () {
  console.log("Video 1 clicked"); // Debugging: Check if click event is working
  if (video1.paused) {
    video1.play();
    console.log("Video 1 playing"); // Debugging: Check if play function is triggered
  } else {
    video1.pause();
    console.log("Video 1 paused"); // Debugging: Check if pause function is triggered
  }
});

video2.addEventListener("click", function () {
  console.log("Video 2 clicked"); // Debugging: Check if click event is working
  if (video2.paused) {
    video2.play();
    console.log("Video 2 playing"); // Debugging: Check if play function is triggered
  } else {
    video2.pause();
    console.log("Video 2 paused"); // Debugging: Check if pause function is triggered
  }
});
