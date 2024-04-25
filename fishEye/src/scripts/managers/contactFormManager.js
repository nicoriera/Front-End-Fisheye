async function getContactForm(photographerId) {
  const contactForm = photographersData.photographers.find(
    (p) => p.id === parseInt(photographerId)
  );
  return contactForm;
}

async function displayDataContactForm(contactForm) {
  const contactFormSection = document.querySelector("#contact_modal");
  if (!contactForm || contactForm.length === 0) {
    console.error("No contact form data found.");
    return;
  }

  const contactFormObj = contactFormFactory(contactForm);
  const userContactForm = contactFormObj.createForm();
  contactFormSection.appendChild(userContactForm);

  const form = document.querySelector(".modal-form-element");
  form.addEventListener("submit", contactFormObj.handleSubmit);
}

async function initContactForm(id) {
  try {
    const contactForm = await getContactForm(id);
    displayDataContactForm(contactForm);
  } catch (error) {
    console.error("Error initializing contact form:", error);
  }
}
