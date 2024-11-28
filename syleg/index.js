const glasstbg = document.querySelector('.glasstbg');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      glasstbg.style.zIndex = '1';
    } else {
      glasstbg.style.zIndex = '-10';
    }
});