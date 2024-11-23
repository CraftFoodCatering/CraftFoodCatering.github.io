"use strict";
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modal-body");
    const closeButton = document.querySelector(".close-button");
    if (modal && modalContent && closeButton) {
        document.querySelectorAll(".modal-link").forEach((link) => {
            link.addEventListener("click", function (event) {
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
    if (!form)
        return;
    const submitButton = document.getElementById("submit-button");
    form.addEventListener("submit", function (event) {
        // Disable the submit button and change its text
        submitButton.disabled = true;
        submitButton.value = "Wird gesendet...";
    });
    const inputs = form.querySelectorAll("input, textarea");
    inputs.forEach((input) => {
        input.addEventListener("invalid", function () {
            const errorMessage = input.nextElementSibling;
            if (!errorMessage || !errorMessage.classList.contains("error-message"))
                return;
            if (input.validity.valueMissing) {
                errorMessage.textContent = "Dieses Feld ist erforderlich.";
            }
            else if (input.validity.typeMismatch) {
                errorMessage.textContent =
                    "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
            }
            else if (input.validity.patternMismatch) {
                errorMessage.textContent =
                    "Bitte halten Sie sich an das geforderte Format.";
            }
            else {
                errorMessage.textContent = "Ungültige Eingabe.";
            }
        });
        input.addEventListener("input", function () {
            input.setCustomValidity("");
            const errorMessage = input.nextElementSibling;
            if (!errorMessage.classList.contains("error-message"))
                return;
            if (errorMessage) {
                errorMessage.textContent = "";
            }
        });
    });
    // Custom validation for radio buttons
    const radioGroups = form.querySelectorAll(".radio-group");
    radioGroups.forEach((group) => {
        const radios = group.querySelectorAll("input[type='radio']");
        const errorMessage = group.querySelector(".radio-error-message");
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
});
