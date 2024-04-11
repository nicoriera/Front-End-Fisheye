class DropdownFilter {
  constructor(data) {
    this.date = data.date;
    this.title = data.title;
  }

  createDropdownFilter() {
    const dropdownFilter = document.createElement("div");
    dropdownFilter.classList.add("dropdown");
    const button = document.createElement("button");
    button.id = "dropdownButton";
    button.classList.add("dropdown-button");
    button.role = "button";
    button.setAttribute("aria-haspopup", "listbox");
    button.setAttribute("aria-expanded", "false");
    button.onclick = toggleDropdown;
    button.textContent = "Trier par";
    const icon = document.createElement("i");
    icon.id = "dropdownIcon";
    icon.classList.add("dropdown-icon", "fa-solid", "fa-chevron-down");
    button.appendChild(icon);
    dropdownFilter.appendChild(button);
    const menu = document.createElement("ul");
    menu.id = "dropdownMenu";
    menu.classList.add("dropdown-menu");
    menu.role = "listbox";
    menu.setAttribute("aria-labelledby", "dropdownButton");
    menu.setAttribute("aria-activedescendant", "dropdownButton");
    menu.setAttribute("aria-selected", "");
    menu.style.display = "none";
    const dateButton = document.createElement("button");
    dateButton.classList.add("dropdown-menu-item");
    dateButton.role = "option";
    dateButton.setAttribute("aria-selected", "false");
    dateButton.onclick = () => sortAndDisplayMedia("date");
    dateButton.textContent = "Date";
    const titleButton = document.createElement("button");
    titleButton.classList.add("dropdown-menu-item");
    titleButton.role = "option";
    titleButton.setAttribute("aria-selected", "false");
    titleButton.onclick = () => sortAndDisplayMedia("title");
    titleButton.textContent = "Titre";
    menu.appendChild(dateButton);
    menu.appendChild(titleButton);
    dropdownFilter.appendChild(menu);

    return dropdownFilter;
  }
}

function dropdownFilterFactory(data) {
  return new DropdownFilter(data);
}
