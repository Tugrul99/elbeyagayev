paceOptions = {
  ajax: true,
  document: true,
  eventLag: false
};

Pace.on('done', function () {
  $('.p').delay(150).animate({ top: '30%', opacity: '0' }, 3000, $.bez([0.19, 1, 0.22, 1]));


  $('#preloader').delay(150).animate({ top: '-100%' }, 2000, $.bez([0.19, 1, 0.22, 1]));

  TweenMax.from(".title", 2, {
    delay: 0.5,
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut
  })
});


// NAVBAR

(() => {
  'use strict'

  document.querySelector('#navbarSideCollapse').addEventListener('click', () => {
    document.querySelector('.offcanvas-collapse').classList.toggle('open')
  })
})()

// Animation on sections

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');

    } else {
      entry.target.classList.remove('show');
    }

  });
});

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el) => observer.observe(el));



const secondhiddenElements = document.querySelectorAll('.lhidden');

secondhiddenElements.forEach((el) => observer.observe(el));

