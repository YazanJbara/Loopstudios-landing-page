
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const overlay = document.querySelector('.overlay');
const navItems = document.querySelector('.navigation-items');

menuIcon.addEventListener('click', () => {
  menuIcon.style.display = 'none';
  closeIcon.style.display = 'block';
  overlay.style.display = 'block';
  navItems.style.display = 'block';
});

closeIcon.addEventListener('click', () => {
  closeIcon.style.display = 'none';
  menuIcon.style.display = 'block';
  overlay.style.display = 'none';
  navItems.style.display = 'none';
});

// adding tab index to every img on the page to make it more accessible
const images = document.querySelectorAll('img');
images.forEach((img) => {
  img.setAttribute('tabindex', 0);
});
