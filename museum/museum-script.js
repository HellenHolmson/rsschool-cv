// BURGER
  document.addEventListener('DOMContentLoaded', function () {
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll(".header-li");
    const welcome = document.querySelector(".welcome");

    const closeMenu = () => {
      nav.classList.remove("open");
      welcome.classList.remove("open");
      burger.classList.remove("open");
    };

    burger.addEventListener('click', function (e) {
      e.stopPropagation();
      nav.classList.toggle('open');
      welcome.classList.toggle("open");
      burger.classList.toggle("open");
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        closeMenu();
      });
    });

    document.addEventListener("click", (e) => {
      if (!nav.contains(e.target) && !burger.contains(e.target)) {
        closeMenu();
      }
    });
  });

// WELCOME SLIDER



// BEFORE_AFTER

  const exp = document.getElementById('exp-right');
  const botMask = document.getElementById('bot');
  const bar = document.getElementById('bar');

  let dragging = false;
  let rect = exp.getBoundingClientRect(); 

  function setX(clientX) {
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    botMask.style.width = x + 'px';
    bar.style.left = (x - 1) + 'px';
  }

  bar.addEventListener('mousedown', (e) => {
     dragging = true; e.preventDefault();
     });
  exp.addEventListener('mousedown', (e) => {
     dragging = true; setX(e.clientX);
     });
  window.addEventListener('mousemove', (e) => {
     if (dragging) setX(e.clientX); 
    });
  window.addEventListener('mouseup',   () => {
     dragging = false; 
    });

// GALLERY

document.addEventListener('DOMContentLoaded', () => {
  const imgs = document.querySelectorAll('.gallery-img');
  if (!imgs.length) return;

  const files = [
    'galery1.jpg', 'galery2.jpg', 'galery3.jpg','galery4.jpg','galery5.jpg',
    'galery6.jpg','galery7.jpg','galery8.jpg','galery9.jpg','galery10.jpg',
    'galery11.jpg','galery12.jpg','galery13.jpg','galery14.jpg','galery15.jpg',
  ];

  const shuffled = shuffle(files.slice());

  imgs.forEach((img, i) => {
    const name = shuffled[i];
    img.src = `museum-images/gallery/${name}`;
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const el = entry.target;
      if (entry.isIntersecting) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0) scale(1)';
      } else {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px) scale(0.95)';
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -6%' });

  imgs.forEach((img, i) => {
    img.style.transitionDelay = `${(i % 3) * 60}ms`;
    observer.observe(img);
  });
});

// RANDOM
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
