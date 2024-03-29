class ModalForm {
  constructor(data) {
    this._name = data.name;
  }

  createForm() {
    const modalForm = document.createElement("div");
    modalForm.classList.add("modal-form");
    const modalFormHeader = document.createElement("header");
    modalFormHeader.classList.add("modal-form-header");
    const modalFormTitle = document.createElement("h2");
    modalFormTitle.classList.add("modal-form-title");
    modalFormTitle.textContent = `Contactez-moi ${this._name}`;
    modalFormHeader.appendChild(modalFormTitle);
    const modalCloseButton = document.createElement("img");
    modalCloseButton.classList.add("modal-close-button");
    modalCloseButton.setAttribute("src", "./src/assets/icons/close.svg");
    modalCloseButton.setAttribute("alt", "Fermer la fenêtre modale");
    modalFormHeader.appendChild(modalCloseButton);
    const modalFormElement = document.createElement("form");
    modalFormElement.classList.add("modal-form-element");
    modalFormElement.setAttribute("action", "");
    modalFormElement.setAttribute("method", "post");
    const modalFormFirstName = document.createElement("label");
    modalFormFirstName.classList.add("modal-form-firstname");
    modalFormFirstName.setAttribute("for", "firstname");
    modalFormFirstName.textContent = "Prénom";
    const modalFormFirstNameInput = document.createElement("input");
    modalFormFirstNameInput.classList.add("modal-form-firstname-input");
    modalFormFirstNameInput.setAttribute("type", "text");
    modalFormFirstNameInput.setAttribute("id", "firstname");
    modalFormFirstNameInput.setAttribute("name", "firstname");
    modalFormFirstNameInput.setAttribute("required", "");
    modalFormFirstNameInput.addEventListener("input", (e) => {
      console.log(e.target.value);
    });

    modalFormElement.appendChild(modalFormFirstName);
    modalFormElement.appendChild(modalFormFirstNameInput);
    const modalFormName = document.createElement("label");
    modalFormName.classList.add("modal-form-name");
    modalFormName.setAttribute("for", "name");
    modalFormName.textContent = "Nom";
    const modalFormNameInput = document.createElement("input");
    modalFormNameInput.classList.add("modal-form-name-input");
    modalFormNameInput.setAttribute("type", "text");
    modalFormNameInput.setAttribute("id", "name");
    modalFormNameInput.setAttribute("name", "name");
    modalFormNameInput.setAttribute("required", "");
    modalFormNameInput.addEventListener("input", (e) => {
      console.log(e.target.value);
    });
    modalFormElement.appendChild(modalFormName);
    modalFormElement.appendChild(modalFormNameInput);
    const modalFormEmail = document.createElement("label");
    modalFormEmail.classList.add("modal-form-email");
    modalFormEmail.setAttribute("for", "email");
    modalFormEmail.textContent = "Email";
    const modalFormEmailInput = document.createElement("input");
    modalFormEmailInput.classList.add("modal-form-email-input");
    modalFormEmailInput.setAttribute("type", "email");
    modalFormEmailInput.setAttribute("id", "email");
    modalFormEmailInput.setAttribute("name", "email");
    modalFormEmailInput.setAttribute("required", "");
    modalFormEmailInput.addEventListener("input", (event) => {
      console.log(event.target.value);
    });

    modalFormElement.appendChild(modalFormEmail);
    modalFormElement.appendChild(modalFormEmailInput);
    const modalFormMessage = document.createElement("label");
    modalFormMessage.classList.add("modal-form-message");
    modalFormMessage.setAttribute("for", "message");
    modalFormMessage.textContent = "Votre message";
    const modalFormMessageTextarea = document.createElement("textarea");
    modalFormMessageTextarea.classList.add("modal-form-message-textarea");
    modalFormMessageTextarea.setAttribute("id", "message");
    modalFormMessageTextarea.setAttribute("name", "message");
    modalFormMessageTextarea.setAttribute("required", "");
    modalFormMessageTextarea.addEventListener("input", (event) => {
      console.log(event.target.value);
    });
    modalFormElement.appendChild(modalFormMessage);
    modalFormElement.appendChild(modalFormMessageTextarea);
    const modalFormSubmit = document.createElement("button");
    modalFormSubmit.classList.add("modal-form-submit");
    modalFormSubmit.setAttribute("type", "submit");
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
