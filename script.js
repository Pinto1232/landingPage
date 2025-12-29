// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.getElementById("nav-links");

  if (mobileMenu && navLinks) {
    mobileMenu.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      mobileMenu.classList.toggle("active");
    });
  }
});

// Navbar Scroll Effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
});

// Form Submission
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Here you would normally handle the form submission via AJAX
    // For this example, we'll just show an alert
    alert("Thank you for your message! We will get back to you soon.");
    contactForm.reset();
  });
}

// Animation for Statistics (simple counter)
function animateCounter(elementId, target, duration = 2000) {
  const element = document.getElementById(elementId);
  if (!element) return;

  // Extract the number from the string (e.g. "250+" -> 250)
  const targetNum = parseInt(target);

  // Check if there's a '+' sign in the original text
  const hasPlus = target.includes("+");

  const start = 0;
  const increment = Math.ceil(targetNum / (duration / 16));
  let current = start;

  const timer = setInterval(() => {
    current += increment;

    if (current >= targetNum) {
      element.textContent = targetNum + (hasPlus ? "+" : "");
      clearInterval(timer);
    } else {
      element.textContent = current + (hasPlus ? "+" : "");
    }
  }, 16);
}

// Observe when elements come into view
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Start animations when the stats section is visible
        animateCounter("clients-count", "250+");
        animateCounter("projects-count", "1500+");
        animateCounter("experts-count", "120+");

        // Unobserve after starting the animation
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

// Start observing the stats container
const statsContainer = document.querySelector(".stats-container");
if (statsContainer) {
  observer.observe(statsContainer);
}

// Services data
const services = [
  {
    icon: "fa-building",
    title: "Local Business Opportunities",
    description:
      "The effort vastly improved the company's planning and execution functions, they knew that in order to succeed in this era of technology their accounting systems needed.",
    link: "#",
  },
  {
    icon: "fa-sync",
    title: "Turnaround Consulting",
    description:
      "Companies dislike the term 'turnaround consulting' because it represents failure. The truth is that turnaround consulting represents success.",
    link: "#",
  },
  {
    icon: "fa-chart-line",
    title: "Bonds & Commodities",
    description:
      "Bonds and commodities are much more stable than stocks and trades. We allow our clients to invest in the right bonds & commodities.",
    link: "#",
  },
  {
    icon: "fa-clipboard-check",
    title: "Audit & Assurance",
    description:
      "Audit and assurance is all about meticulous data analysis. Everything needs to be checked, double checked, and triple checked.",
    link: "#",
  },
  {
    icon: "fa-chart-bar",
    title: "Trades & Stocks",
    description:
      "This allows us to specialize in all dimensions of trades and stocks, because we have a specialist within the team for every scenario.",
    link: "#",
  },
  {
    icon: "fa-chess",
    title: "Strategic Planning",
    description:
      "We work with our clients and do a deep analysis of their business. We help prepare possible outcomes to different decisions.",
    link: "#",
  },
];

// Pagination settings
const itemsPerPage = 3;
let currentPage = 1;

// Function to create service card HTML
function createServiceCard(service) {
  return `
        <div class="service-card">
            <div class="service-img">
                <i class="fas ${service.icon} fa-2x"></i>
            </div>
            <div class="service-content">
                <h3>${service.title}</h3>
                <p>${service.description}</p>
                <a href="${service.link}" class="read-more">Read More</a>
            </div>
        </div>
    `;
}

// Function to render services for current page
function renderServices() {
  const servicesGrid = document.getElementById("services-grid");
  if (!servicesGrid) return; // Exit if element doesn't exist

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const servicesToShow = services.slice(startIndex, endIndex);

  servicesGrid.innerHTML = servicesToShow.map(createServiceCard).join("");
}

// Function to create pagination buttons
function createPagination() {
  const pagination = document.getElementById("pagination");
  if (!pagination) return; // Exit if element doesn't exist

  const totalPages = Math.ceil(services.length / itemsPerPage);
  let paginationHTML = "";

  // Previous button
  paginationHTML += `
        <button class="pagination-button" id="prev-page" ${
          currentPage === 1 ? "disabled" : ""
        }>
            Previous
        </button>
    `;

  // Page numbers
  for (let i = 1; i <= totalPages; i++) {
    paginationHTML += `
            <button class="pagination-button ${
              i === currentPage ? "active" : ""
            }" data-page="${i}">
                ${i}
            </button>
        `;
  }

  // Next button
  paginationHTML += `
        <button class="pagination-button" id="next-page" ${
          currentPage === totalPages ? "disabled" : ""
        }>
            Next
        </button>
    `;

  pagination.innerHTML = paginationHTML;

  // Add event listeners
  const prevPage = document.getElementById("prev-page");
  const nextPage = document.getElementById("next-page");

  if (prevPage) {
    prevPage.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        renderServices();
        createPagination();
      }
    });
  }

  if (nextPage) {
    nextPage.addEventListener("click", () => {
      if (currentPage < totalPages) {
        currentPage++;
        renderServices();
        createPagination();
      }
    });
  }

  // Add event listeners to page number buttons
  document
    .querySelectorAll(".pagination-button[data-page]")
    .forEach((button) => {
      button.addEventListener("click", () => {
        currentPage = parseInt(button.dataset.page);
        renderServices();
        createPagination();
      });
    });
}

// Note: Translation system is now in translations.js
// This script.js file uses the translations object from translations.js

// Initialize accordions
document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  // Open the first accordion item by default
  if (accordionItems.length > 0) {
    accordionItems[0].classList.add("active");
  }

  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");

    header.addEventListener("click", () => {
      // Toggle active class on the clicked item
      const isActive = item.classList.contains("active");

      // Close all accordion items
      accordionItems.forEach((accItem) => {
        accItem.classList.remove("active");
      });

      // If the clicked item wasn't active before, make it active
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
});

// News Modal Functionality
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("newsModal");
  const closeBtn = document.querySelector(".close");
  const readMoreLinks = document.querySelectorAll(".read-more");

  // News data mapping
  const newsData = {
    0: { titleKey: "news1Title", dateKey: "news1Date", descKey: "news1FullText" },
    1: { titleKey: "news2Title", dateKey: "news2Date", descKey: "news2FullText" },
    2: { titleKey: "news3Title", dateKey: "news3Date", descKey: "news3FullText" },
  };

  // Add click event to each "Read More" link
  readMoreLinks.forEach((link, index) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Get the news card
      const newsCard = link.closest(".news-card");
      if (!newsCard) return;

      // Get title, date, and description from the card
      const titleElement = newsCard.querySelector("h3");
      const dateElement = newsCard.querySelector(".news-date");
      const descElement = newsCard.querySelector(".news-content p");

      const title = titleElement ? titleElement.textContent : "";
      const date = dateElement ? dateElement.textContent : "";
      const description = descElement ? descElement.textContent : "";

      // Get full description from translations
      const fullDescKey = newsData[index]?.descKey;
      let fullDescription = description;

      if (fullDescKey && translations && translations[currentLang]) {
        fullDescription = translations[currentLang][fullDescKey] || description;
      }

      // Populate modal
      document.getElementById("modalTitle").textContent = title;
      document.getElementById("modalDate").textContent = date;
      document.getElementById("modalDescription").textContent = fullDescription;

      // Show modal
      modal.style.display = "block";
    });
  });

  // Close modal when close button is clicked
  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });
  }

  // Close modal when clicking outside of it
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Close modal with Escape key
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal.style.display === "block") {
      modal.style.display = "none";
    }
  });
});
