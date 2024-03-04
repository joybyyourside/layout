const sec1 = document.querySelector('.section-1');
const sec2 = document.querySelector('.section-2');
const sec3 = document.querySelector('.section-3');
const section1 = document.querySelector('section1');
const section2 = document.querySelector('section2');
const section3 = document.querySelector('section3');

const title = document.querySelector('.title');
const list = document.querySelector('.list');


sec1.addEventListener('click', () => {
  window.scrollTo({ top:section1.offsetTop, behavior: 'smooth'});
});

sec2.addEventListener('click', () => {
  window.scrollTo({ top:section2.offsetTop, behavior: 'smooth'});
});

sec3.addEventListener('click', () => {
  window.scrollTo({ top:section3.offsetTop, behavior: 'smooth'});
});

title.addEventListener('click', () => {
    // if (list.style.opacity === '0') {
    //   list.style.opacity = '1';
    // } else {
    //   list.style.opacity = '0';
    // }
    list.classList.toggle("on")
  });


