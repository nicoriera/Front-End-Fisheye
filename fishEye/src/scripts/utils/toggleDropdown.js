function toggleDropdown() {
  var menu = document.getElementById("dropdownMenu");
  var menuIcon = document.getElementById("dropdownIcon");

  if (menu.style.display === "none") {
    menu.style.display = "block";
    menuIcon.classList.remove("fa-chevron-down");
    menuIcon.classList.add("fa-chevron-up");
    menu.setAttribute("aria-expanded", "true"); // Indique que le menu est ouvert
  } else {
    menu.style.display = "none";
    menuIcon.classList.remove("fa-chevron-up");
    menuIcon.classList.add("fa-chevron-down");
    menu.setAttribute("aria-expanded", "false"); // Indique que le menu est fermé
  }
}
