
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-section');
        } else {
          entry.target.classList.remove('show-section');
        }
      });
    }, {
      threshold: 0.2
    });
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });


  window.onload = function() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }


  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.classList.add('small');
    } else {
      navbar.classList.remove('small');
    }
  });

  document.addEventListener("DOMContentLoaded", function() {
    const text = "نجد"; // الكلمة اللي تبي تكتبها
    const typewriter = document.getElementById('typewriter');
    let index = 0;
    let isDeleting = false;
  
    function type() {
      if (!isDeleting) {
        typewriter.textContent = text.slice(0, index++);
        if (index > text.length) {
          isDeleting = true;
          setTimeout(type, 1000); // وقت التوقف بعد ما تكتب الكلمة
          return;
        }
      } else {
        typewriter.textContent = text.slice(0, index--);
        if (index < 0) {
          isDeleting = false;
          setTimeout(type, 500);
          return;
        }
      }
      setTimeout(type, 200); // سرعة الكتابة والمسح
    }
  
    type();
  });

  document.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
  
    // كل ما ينزل المستخدم نحرك النصوص حسب النزول
    const topText = document.getElementById('top-text');
    const bottomText = document.getElementById('bottom-text');
  
    topText.style.transform = `translateX(${scrollY * 0.2}px)`; // يمين
    bottomText.style.transform = `translateX(${-scrollY * 0.2}px)`; // يسار
  });


  document.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
  
    // النصوص اللي نكبرها
    const moveRights = document.querySelectorAll('.scroll-move-right');
    moveRights.forEach(el => {
      // نحسب التكبير حسب النزول
      const scaleAmount = 1 + scrollY * 0.0005; // خفيف مرة يكبر بالتدريج
      el.style.transform = `scale(${scaleAmount})`;
    });
  });


  