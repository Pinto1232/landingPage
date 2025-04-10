// Mobile Menu Setup
document.addEventListener("DOMContentLoaded", function () {
  // Create a container for the logo and menu toggle on mobile
  if (window.innerWidth <= 768) {
    const navbar = document.querySelector(".navbar");
    const container = navbar.querySelector(".container");
    const logo = container.querySelector(".logo");
    const menuToggle = container.querySelector("#mobile-menu");

    // Create the container for logo and menu toggle
    const logoMenuContainer = document.createElement("div");
    logoMenuContainer.className = "logo-menu-container";

    // Move the logo and menu toggle into this container
    if (logo && menuToggle) {
      // Clone the elements to avoid any reference issues
      const logoClone = logo.cloneNode(true);
      const menuToggleClone = menuToggle.cloneNode(true);

      // Add them to the new container
      logoMenuContainer.appendChild(logoClone);
      logoMenuContainer.appendChild(menuToggleClone);

      // Add the container to the navbar
      navbar.insertBefore(logoMenuContainer, container);

      // Hide the original elements
      logo.style.display = "none";
      menuToggle.style.display = "none";

      // Transfer the click event to the cloned menu toggle
      menuToggleClone.addEventListener("click", () => {
        const navLinks = document.getElementById("nav-links");
        if (navLinks) {
          navLinks.classList.toggle("active");
        }
      });
    }
  }
});

// Mobile Menu Toggle
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.getElementById("nav-links");

if (mobileMenu && navLinks) {
  mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

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

// Language translations
const translations = {
  en: {
    // Navigation
    home: "Home",
    services: "Services",
    about: "About",
    contact: "Contact",
    // Hero Section
    heroTitle: "Innovative Solutions for the Petroleum Industry",
    heroText:
      "Providing cutting-edge technologies and services to optimize operations, increase efficiency, and ensure safety in petroleum extraction and processing.",
    heroButton1: "Our Services",
    heroButton2: "Get in Touch",
    // Services Section
    servicesTitle: "Our Specialized Services",
    servicesSubtitle:
      "We provide comprehensive solutions tailored to the unique challenges of the petroleum industry, delivering excellence at every step of the process.",
    // ... add more translations as needed
  },
  pt: {
    // Navigation
    home: "Início",
    services: "Serviços",
    about: "Sobre",
    contact: "Contato",
    // Hero Section
    heroTitle: "Soluções Inovadoras para a Indústria Petrolífera",
    heroText:
      "Fornecendo tecnologias e serviços de ponta para otimizar operações, aumentar a eficiência e garantir a segurança na extração e processamento de petróleo.",
    heroButton1: "Nossos Serviços",
    heroButton2: "Entre em Contato",
    // Services Section
    servicesTitle: "Nossos Serviços Especializados",
    servicesSubtitle:
      "Fornecemos soluções abrangentes adaptadas aos desafios únicos da indústria petrolífera, oferecendo excelência em cada etapa do processo.",
    // ... add more translations as needed
  },
};

// Function to update text content
function updateContent(lang) {
  const elements = document.querySelectorAll("[data-translate]");
  if (elements.length === 0) return; // Exit if no translatable elements found

  elements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
}

// Function to update language display
function updateLanguageDisplay(selectedLang) {
  const currentLanguageImg = document.querySelector(
    ".current-language .flag-icon"
  );
  const currentLanguageText = document.querySelector(
    ".current-language .language-text"
  );

  if (selectedLang === "en") {
    currentLanguageImg.src = "images/sout-africa.jpg";
    currentLanguageText.textContent = "EN";
  } else if (selectedLang === "pt") {
    currentLanguageImg.src = "images/Flag_of_Angola.svg.png";
    currentLanguageText.textContent = "PT";
  }
}

// Function to handle language switch
function handleLanguageSwitch() {
  // Attach event listeners to all language dropdown links (both in mobile and desktop)
  document.querySelectorAll(".language-dropdown a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const lang = link.getAttribute("data-lang");

      // Update language display
      updateLanguageDisplay(lang);

      // Update content
      updateContent(lang);

      // Store language preference
      localStorage.setItem("preferredLanguage", lang);

      // Close any open mobile menu if on mobile
      const navLinks = document.getElementById("nav-links");
      if (navLinks && window.innerWidth <= 768) {
        navLinks.classList.remove("active");
      }
    });
  });
}

// Initialize language functionality
document.addEventListener("DOMContentLoaded", () => {
  // Check for saved language preference
  const savedLang = localStorage.getItem("preferredLanguage") || "en";

  // Only proceed if we have language elements on the page
  if (document.querySelector(".language-dropdown")) {
    // Update content with the saved language
    updateContent(savedLang);

    // Set initial language display
    updateLanguageDisplay(savedLang);

    // Initialize language switch handlers
    handleLanguageSwitch();
  }

  // Services section initialization
  if (document.getElementById("services-grid")) {
    renderServices();
    createPagination();
  }
});

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
