function displayModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "flex";
  document.body.classList.add("no-scroll");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-hidden", "false");
  modal.setAttribute("role", "dialog");
}

function closeModalContact() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
  document.body.classList.remove("no-scroll");
  modal.setAttribute("aria-hidden", "true");
  modal.setAttribute("aria-modal", "false");
}

function toggleContactForm() {
  const modal = document.getElementById("contact_modal");
  if (modal.style.display === "none") {
    displayModal();
  } else {
    closeModalContact();
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    toggleContactForm();
  }
});

const modal = document.getElementById("contact_modal");
modal.addEventListener("keydown", function (event) {
  const focusableElements = modal.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  if (event.key === "Tab") {
    if (event.shiftKey) {
      if (document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }
    } else {
      if (document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  }
});
