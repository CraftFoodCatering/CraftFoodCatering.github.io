import Splide from "@splidejs/splide";

document.addEventListener("DOMContentLoaded", function () {
  // Check if the carousel elements exist before initializing
  const thumbnailElement = document.getElementById('thumbnail-carousel');
  const mainCarouselElement = document.getElementById('main-carousel');

  if (thumbnailElement && mainCarouselElement) {
    // Function to generate gallery items dynamically
    const generateGalleryItems = () => {
      const totalImages = 23; // Total number of images in the gallery
      const mainList = mainCarouselElement.querySelector('.splide__list') as HTMLElement;
      const thumbnailList = thumbnailElement.querySelector('.splide__list') as HTMLElement;
      
      // Clear existing items if any
      mainList.innerHTML = '';
      thumbnailList.innerHTML = '';
      
      // Generate items for both carousels
      for (let i = 1; i <= totalImages; i++) {
        const imagePath = `./assets/images/gallery/gallery-image-${i}.jpg`;
        
        // Create main carousel item
        const mainSlide = document.createElement('li');
        mainSlide.className = 'splide__slide';
        
        const mainImg = document.createElement('img');
        mainImg.src = imagePath;
        mainImg.setAttribute('loading', 'lazy');
        
        mainSlide.appendChild(mainImg);
        mainList.appendChild(mainSlide);
        
        // Create thumbnail carousel item
        const thumbSlide = document.createElement('li');
        thumbSlide.className = 'splide__slide';
        
        const thumbImg = document.createElement('img');
        thumbImg.src = imagePath;
        thumbImg.setAttribute('loading', 'lazy');
        
        thumbSlide.appendChild(thumbImg);
        thumbnailList.appendChild(thumbSlide);
      }
    };
    
    // Generate all gallery items
    generateGalleryItems();

    var thumbnails = new Splide('#thumbnail-carousel', {
      width: '90vw',
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

  const form = document.getElementById("contact-form");
  if (!form) return;

  const submitButton = document.getElementById(
    "submit-button"
  ) as HTMLInputElement;

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Disable the submit button and change its text
    submitButton.disabled = true;
    submitButton.value = "Wird gesendet...";
    
    // Get form data
    const formData = new FormData(form as HTMLFormElement);
    const formObject: Record<string, string> = {};
    
    // Convert FormData to JSON object
    formData.forEach((value, key) => {
      formObject[key] = value.toString();
    });
    
    // Send data with fetch API
    fetch("https://formsubmit.co/ajax/15a3c475a65494654e504ddc9c8f8a8d", {
      method: "POST",
      headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      },
      body: JSON.stringify(formObject)
    })
    .then(response => {
      if (!response.ok) {
      throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      const formContainer = document.querySelector('.form-container');
      if (formContainer) {
        if (data.success === "true" || data.success === true) {
          // Show success message
          formContainer.innerHTML = '<div class="success-message"><h2>Vielen Dank!</h2><p>Ihre Anfrage wurde erfolgreich gesendet. Wir werden uns in Kürze bei Ihnen melden.</p></div>';
        } else {
          // Throw error to handle in catch block
          throw new Error('Form submission failed');
        }
      }
    })
    .catch(error => {
      console.error('Error:', error);
      // Re-enable the submit button in case of error
      submitButton.disabled = false;
      submitButton.value = "Absenden";
      
      // Remove existing error message if any
      const existingError = document.querySelector('.form-error-message');
      if (existingError) {
      existingError.remove();
      }

      // Show new error message
      const errorElement = document.createElement('div');
      const formContainer = document.querySelector('.form-container');

      errorElement.className = 'form-error-message';
      errorElement.textContent = 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.';
      if(formContainer){
      formContainer.appendChild(errorElement);
      }
    });
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