document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".team-slider");
  const carousel = document.querySelector(".team-carousel");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const members = document.querySelectorAll(".team-member");
  let currentIndex = 0;
  let slideInterval;

  // Only initialize carousel if there are more than 3 members
  if (members.length > 3) {
    carousel.classList.add("sliding");
    initializeCarousel();
  } else {
    slider.classList.add("static");
    if (prevBtn) prevBtn.style.display = "none";
    if (nextBtn) nextBtn.style.display = "none";
  }

  function initializeCarousel() {
    function updateSlider() {
      slider.style.transform = `translateX(-${
        currentIndex * (100 / members.length)
      }%)`;
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % members.length;
      updateSlider();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + members.length) % members.length;
      updateSlider();
    }

    function startAutoSlide() {
      slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    function stopAutoSlide() {
      clearInterval(slideInterval);
    }

    // Event listeners for buttons
    if (prevBtn && nextBtn) {
      nextBtn.addEventListener("click", () => {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
      });

      prevBtn.addEventListener("click", () => {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
      });
    }

    // Start auto-sliding
    startAutoSlide();

    // Pause auto-sliding when hovering over the carousel
    slider.addEventListener("mouseenter", stopAutoSlide);
    slider.addEventListener("mouseleave", startAutoSlide);

    // Initialize the first position
    updateSlider();
  }
});
