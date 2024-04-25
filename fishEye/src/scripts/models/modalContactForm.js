class ModalForm {
  constructor(data) {
    this._name = data.name;
  }

  createForm() {
    const modalForm = document.createElement("div");
    modalForm.classList.add("modal-form");
    modalForm.setAttribute("role", "dialog");
    modalForm.setAttribute("aria-modal", "true");
    modalForm.setAttribute("aria-hidden", "true");
    modalForm.setAttribute("tabindex", "0");

    const modalFormHeader = document.createElement("header");
    modalFormHeader.classList.add("modal-form-header");

    const modalFormTitle = document.createElement("h2");
    modalFormTitle.classList.add("modal-form-title");
    modalFormTitle.setAttribute("aria-labelledby", "modal-form-title");
    modalFormTitle.id = "modal-form-title";
    modalFormTitle.textContent = `Contactez-moi ${this._name}`;
    modalFormHeader.appendChild(modalFormTitle);

    const modalCloseButton = document.createElement("button");
    modalCloseButton.classList.add("modal-close-button");
    modalCloseButton.setAttribute("type", "button");
    modalCloseButton.setAttribute("aria-label", "Fermer la fenêtre modale");
    modalCloseButton.addEventListener("click", closeModalContact); // Added event listener to handle closing
    modalCloseButton.innerHTML =
      '<img src="./src/assets/icons/close.svg" alt="Fermer la fenêtre modale">'; // Added image inside button
    modalFormHeader.appendChild(modalCloseButton);

    const modalFormElement = document.createElement("form");
    modalFormElement.classList.add("modal-form-element");

    const validationMessage = document.createElement("div");
    validationMessage.classList.add("modal-form-validation-message");
    validationMessage.style.display = "none";
    modalForm.appendChild(validationMessage);

    modalFormElement.addEventListener("submit", (event) => {
      event.preventDefault();

      // Vérifiez la validité de vos champs d'entrée ici
      let allFieldsAreValid = true;
      const inputs = modalFormElement.querySelectorAll("input, textarea");
      inputs.forEach((input) => {
        if (input.value.trim() === "") {
          allFieldsAreValid = false;
          input.classList.add("error-input");
        } else {
          input.classList.remove("error-input");
        }
      });

      const emailInput = modalFormElement.querySelector(
        ".modal-form-email-input"
      );
      if (!validateEmail(emailInput.value)) {
        allFieldsAreValid = false;
        emailInput.classList.add("error-input");
      }

      if (allFieldsAreValid) {
        validationMessage.textContent =
          "Votre message a été envoyé avec succès !";
        validationMessage.style.display = "block";
        modalFormHeader.style.display = "none";
        modalFormElement.style.display = "none";
        modalFormElement.reset();
      }
    });

    const createInputField = (
      labelText,
      inputType,
      inputId,
      inputName,
      required,
      errorText
    ) => {
      const label = document.createElement("label");
      label.classList.add(`modal-form-${inputName}`);
      label.textContent = labelText;
      label.htmlFor = inputId;

      let input;
      if (inputType === "textarea") {
        input = document.createElement("textarea");
        input.rows = 5;
        input.cols = 30;
      } else {
        input = document.createElement("input");
        input.type = inputType;
      }

      input.classList.add(`modal-form-${inputName}-input`);
      input.id = inputId;
      input.name = inputName;
      input.required = required;

      const error = document.createElement("div");
      error.classList.add(`modal-form-${inputName}-error`);
      error.classList.add("error-message");

      input.addEventListener("input", (event) => {
        if (event.target.value.trim() === "") {
          error.textContent = errorText;
          input.classList.add("error-input");
        } else {
          error.textContent = "";
        }
      });

      modalFormElement.appendChild(label);
      modalFormElement.appendChild(input);
      modalFormElement.appendChild(error);
    };

    createInputField(
      "Prénom",
      "text",
      "firstname",
      "firstname",
      true,
      "Le prénom est requis.",
      "Prénom"
    );
    createInputField("Nom", "text", "name", "name", true, "Le nom est requis.");
    createInputField(
      "Email",
      "email",
      "email",
      "email",
      true,
      "L'email est invalide.",
      "Email"
    );
    createInputField(
      "Votre message",
      "textarea",
      "message",
      "message",
      true,
      "Le message est requis.",
      "Message"
    );

    const modalFormSubmit = document.createElement("button");
    modalFormSubmit.classList.add("modal-form-submit");
    modalFormSubmit.setAttribute("type", "submit");
    modalFormSubmit.setAttribute("aria-label", "Envoyer le message");
    modalFormSubmit.type = "submit";
    modalFormSubmit.textContent = "Envoyer";
    modalFormElement.appendChild(modalFormSubmit);

    modalForm.appendChild(modalFormHeader);
    modalForm.appendChild(modalFormElement);

    return modalForm;
  }
}

function contactFormFactory(data) {
  return new ModalForm(data);
}

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
