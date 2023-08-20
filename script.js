// Copy menu for mobile
function copyMenu() {
  // Copy inside .dpt-cat to .departments
  const dptCategory = document.querySelector(".dpt-cat");
  const dptPlace = document.querySelector(".departments");
  dptPlace.innerHTML = dptCategory.innerHTML;

  // Copy inside .header-nav .nav-item to nav
  const mainNav = document.querySelector(".header-nav .nav-item");
  const navPlace = document.querySelector(".off-canvas nav");
  navPlace.innerHTML = mainNav.innerHTML;

  // Copy .heade-top .wrapper to .thetop-nav
  const topNav = document.querySelector(".header-top .wrapper");
  const topPlace = document.querySelector(".off-canvas .thetop-nav");
  topPlace.innerHTML = topNav.innerHTML;
}

copyMenu();

// Show mobile menu
const menuButton = document.querySelector(".trigger");
const closeButton = document.querySelector(".t-close");
const addClass = document.querySelector(".site");

menuButton.addEventListener("click", function () {
  addClass.classList.toggle("showmenu");
});

closeButton.addEventListener("click", function () {
  addClass.classList.remove("showmenu");
});

// Show sub menu on mobile
const subMenu = document.querySelectorAll(".has-child .icon-small");
subMenu.forEach((menu) => menu.addEventListener("click", toggle));

function toggle(e) {
  e.preventDefault();
  subMenu.forEach((item) =>
    item != this ? item.closest(".has-child").classList.remove("expand") : null
  );
  if (this.closest(".has-child").classList != "expand");
  this.closest(".has-child").classList.toggle("expand");
}

// Swipper
const swiper = new Swiper(".swiper", {
  loop: true,

  // pagination
  pagination: {
    el: ".swiper-pagination",
  },
});
