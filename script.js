// Toggle Navigation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });

    burger.classList.toggle("toggle");
  });
};

navSlide();

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Image Fade-in Effect
const images = document.querySelectorAll(".image-container img");

const options = {
  rootMargin: "0px",
  threshold: 0.2,
};

const fadeIn = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.style.animation = "fadein 1s forwards";
      observer.unobserve(entry.target);
    }
  });
};

const imageObserver = new IntersectionObserver(fadeIn, options);

images.forEach((image) => {
  imageObserver.observe(image);
});

// Lightbox Effect
lightbox.option({
  resizeDuration: 200,
  wrapAround: true,
  fadeDuration: 500,
});

// Image Slider
const slider = tns({
  container: ".gallery",
  items: 1,
  slideBy: "page",
  autoplay: true,
  autoplayTimeout: 3000,
  nav: false,
  controls: false,
  mouseDrag: true,
  swipeAngle: false,
});

// Easily Navigable Gallery
document.addEventListener("keydown", (event) => {
  if (event.keyCode === 37) {
    // Left arrow key
    slider.goTo("prev");
  } else if (event.keyCode === 39) {
    // Right arrow key
    slider.goTo("next");
  }
});


window.addEventListener("scroll", function() {
  const rows = document.querySelectorAll(".row");
  for (let row of rows) {
    const rect = row.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
    if (isVisible) {
      row.classList.add("fade-in");
    }
  }
});

window.addEventListener("scroll", function() {
  const rows = document.querySelectorAll(".row");
  for (let row of rows) {
    const rect = row.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
    if (isVisible) {
      row.classList.add("fade-in");
    }
  }
});

// Intersection Observer API for fade-in effect
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  },
  { threshold: 0.5 }
);

const rows = document.querySelectorAll(".row");
rows.forEach((row) => {
  observer.observe(row);
});


// Toggle Mobile Sidebar
document.querySelector('.menu-icon').addEventListener('click', function() {
  document.querySelector('.menu').classList.toggle('show');
});

