'use strict';

document.addEventListener('DOMContentLoaded', function() {

  //  MOBILE NAVBAR TOGGLE
  
  const navbar = document.querySelector("[data-navbar]");
  const navToggler = document.querySelector("[data-nav-toggler]");

  navToggler.addEventListener("click", function () {
    navbar.classList.toggle("active");
    this.classList.toggle("active");
  });

  
    // SMOOTH SCROLLING
   
  const navLinks = document.querySelectorAll('.navbar a[href^="#"]');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
  
        });

        // Close mobile menu if open
        navbar.classList.remove("active");
        navToggler.classList.remove("active");
      }
    });
  });
});

const headerHeight = document.querySelector('header').offsetHeight;


// Top button
window.addEventListener('scroll', function() {
  const backToTopBtn = document.querySelector('.back-top-btn');
  console.log('Scroll event triggered');
  if (window.pageYOffset > 300) {
    backToTopBtn.style.opacity = '0.5';
  } else {
    backToTopBtn.style.opacity = '0';
  }
});
