ScrollReveal().reveal('.animated', { 
  distance: '30px',
  delay: 500,
  duration: 1000, 
  easing: 'ease-in',
  interval: 800
});

ScrollReveal().reveal('.sequence', { 
  distance: '50px', 
  delay: 1000,
  duration: 400, 
  easing: 'ease-in',
  interval: 300
});

var typed = new Typed('#typed', {
  stringsElement: '#typed-strings',
  typeSpeed: 30
});