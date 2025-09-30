const slider = document.getElementById('slider');
const slides = slider.children;
let index = 0;

document.getElementById('next').addEventListener('click', () => {
  index = (index + 1) % slides.length;
  slider.style.transform = `translateX(-${index * 100}%)`;
});

document.getElementById('prev').addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  slider.style.transform = `translateX(-${index * 100}%)`;
});

// Auto slide
setInterval(() => {
  index = (index + 1) % slides.length;
  slider.style.transform = `translateX(-${index * 100}%)`;
}, 5000);

// hambuerger
  const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');

  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });     