function navbarDropdownClick() {
  $(".navbar-burger").toggleClass("is-active");
  $(".navbar-menu").toggleClass("is-active");
}

function navbarDropdown() {
  $(".navbar-burger").click(navbarDropdownClick);
}

$(function() {
  navbarDropdown();
});