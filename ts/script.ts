import Splide from "@splidejs/splide";

document.addEventListener("DOMContentLoaded", function () {
  // Check if the carousel elements exist before initializing
  const thumbnailElement = document.getElementById('thumbnail-carousel');
  const mainCarouselElement = document.getElementById('main-carousel');

  if (thumbnailElement && mainCarouselElement) {
    var thumbnails = new Splide('#thumbnail-carousel', {
      width: 'min-content',
      fixedWidth: 80,
      fixedHeight: 80,
      gap: 10,
      rewind: true,
      pagination: false,
      isNavigation: true,
      focus: 'center',
      breakpoints: {
        600: {
          fixedWidth: 60,
          fixedHeight: 60,
          width: 'calc(100vw - 80px)',
          gap: 5,
        },
      },
    });

    var main = new Splide('#main-carousel', {
      type: 'loop',
      width: '100%',
      fixedWidth: '30%',
      focus: 'center',
      isNavigation: true,
      gap: 10,
      perPage: 3,
      rewind: true,
      pagination: false,
      arrows: false,
      breakpoints: {
        600: {
          perPage: 1,
          fixedWidth: '80%',
          gap: '10%'
        },
      },
    });

    main.sync(thumbnails);
    main.mount();
    thumbnails.mount();
  }

  const currentYear = new Date().getFullYear(); // Holt das aktuelle Jahr
  const yearElement = document.getElementById("current-year");

  if (yearElement) {
    yearElement.textContent = currentYear.toString(); // Fügt das Jahr in das Span-Element ein
  }

  const observerOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const fadeUpObserver: IntersectionObserver = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        const target = entry.target as HTMLElement;

        if (entry.isIntersecting) {
          target.classList.add("active");
        } else {
          target.classList.remove("active");
        }
      });
    },
    observerOptions
  );

  // Selektiere alle Elemente mit der Klasse .fade-in-up
  const fadeInElements = document.querySelectorAll<HTMLElement>(".fade-in-up");
  fadeInElements.forEach((el: HTMLElement) => {
    fadeUpObserver.observe(el);
  });

  const modal = document.getElementById("modal") as HTMLElement | null;
  const modalContent = document.getElementById("modal-body") as HTMLElement | null;
  const closeButton = document.querySelector(".close-button") as HTMLElement | null;

  if (modal && modalContent && closeButton) {
    document.querySelectorAll(".modal-link").forEach((link) => {
      link.addEventListener("click", function (this: HTMLElement, event: Event) {
        event.preventDefault();
        const url = this.getAttribute("data-modal");
        if (url) {
          fetch(url)
            .then((response) => response.text())
            .then((data) => {
              modalContent.innerHTML = data;
              modal.style.display = "block";
            })
            .catch((error) => console.error("Error loading modal content:", error));
        }
      });
    });

    closeButton.addEventListener("click", function () {
      modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  }

  const form = document.querySelector("form");
  if (!form) return;

  const submitButton = document.getElementById(
    "submit-button"
  ) as HTMLInputElement;

  form.addEventListener("submit", function (event) {
    // Disable the submit button and change its text
    submitButton.disabled = true;
    submitButton.value = "Wird gesendet...";
  });

  const inputs = form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
    "input, textarea"
  );

  inputs.forEach((input) => {
    input.addEventListener("invalid", function () {
      const errorMessage = input.nextElementSibling as HTMLElement;
      if (!errorMessage || !errorMessage.classList.contains("error-message"))
        return;

      if (input.validity.valueMissing) {
        errorMessage.textContent = "Dieses Feld ist erforderlich.";
      } else if (input.validity.typeMismatch) {
        errorMessage.textContent =
          "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
      } else if (input.validity.patternMismatch) {
        errorMessage.textContent =
          "Bitte halten Sie sich an das geforderte Format.";
      } else {
        errorMessage.textContent = "Ungültige Eingabe.";
      }
    });

    input.addEventListener("input", function () {
      input.setCustomValidity("");
      const errorMessage = input.nextElementSibling as HTMLElement;
      if (errorMessage && errorMessage.classList.contains("error-message")) {
        errorMessage.textContent = "";
      }
    });
  });

  // Custom validation for radio buttons
  const radioGroups = form.querySelectorAll(".radio-group");
  radioGroups.forEach((group) => {
    const radios = group.querySelectorAll(
      "input[type='radio']"
    ) as NodeListOf<HTMLInputElement>;
    const errorMessage = group.querySelector(
      ".radio-error-message"
    ) as HTMLElement;

    if (!errorMessage) return;

    radios.forEach((radio) => {
      radio.addEventListener("invalid", function () {
        if (!Array.from(radios).some((r) => r.checked)) {
          errorMessage.textContent = "Bitte wählen Sie eine Option.";
        }
      });

      radio.addEventListener("change", function () {
        errorMessage.textContent = "";
      });
    });
  });

  const gdprCheckbox = form.querySelector('#gdpr') as HTMLInputElement;
  const gdprErrorMessage = form.querySelector('.gdpr-error-message') as HTMLElement;

  if (gdprCheckbox && gdprErrorMessage) {
    gdprCheckbox.addEventListener('invalid', () => {
      if (!gdprCheckbox.checked) {
        gdprErrorMessage.textContent = 'Bitte akzeptieren Sie die Datenschutzerklärung';
      }
    });

    gdprCheckbox.addEventListener('change', () => {
      gdprCheckbox.setCustomValidity('');
      gdprErrorMessage.textContent = '';
    });
  }
  
  const menuLinks = document.querySelectorAll('#hamburger-menu-container a');
  const hamburgerCheckbox = document.getElementById('hamburger-menu-input') as HTMLInputElement;
  
  if (hamburgerCheckbox) {
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburgerCheckbox.checked = false;
      });
    });
  }
});