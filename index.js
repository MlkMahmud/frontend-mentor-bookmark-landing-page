const toggleNav = document.querySelector('.nav-btn');
const logo = document.querySelector('header a.logo');
const navList = document.querySelector('.nav-list');
const menuIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="15"><path fill="#242A45" fill-rule="evenodd" d="M0 0h18v3H0V0zm0 6h18v3H0V6zm0 6h18v3H0v-3z"/></svg>';
const closeMenuIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15"><path fill="#FFF" fill-rule="evenodd" d="M8 5.379L13.303.075l2.122 2.122L10.12 7.5l5.304 5.303-2.122 2.122L8 9.62l-5.303 5.304-2.122-2.122L5.88 7.5.575 2.197 2.697.075 8 5.38z"/></svg>';

function openNavigation() {
  navList.classList.add('active');
  logo.classList.add('active');
  toggleNav.innerHTML = closeMenuIcon;
  toggleNav.setAttribute('aria-expanded', true);
}

function closeNavigation() {
  navList.classList.remove('active');
  logo.classList.remove('active');
  toggleNav.innerHTML = menuIcon;
  toggleNav.setAttribute('aria-expanded', false);
}

toggleNav.addEventListener('click', function () {
  if (navList.classList.contains('active')) {
    closeNavigation();
  } else {
    openNavigation();
  }
});

window.addEventListener('resize', function () {
  if (this.innerWidth > 780) {
    closeNavigation();
  } else {
    return;
  }
});


