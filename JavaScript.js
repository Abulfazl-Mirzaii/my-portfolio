const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
