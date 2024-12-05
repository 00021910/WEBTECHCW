document.addEventListener('DOMContentLoaded', () => {
  const carouselImages = document.querySelector('.carousel-images');
  const images = document.querySelectorAll('.carousel-images img');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');

  let currentIndex = 0;

  const updateCarousel = () => {
    const imageWidth = images[0].clientWidth;
    carouselImages.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
  };

  //nextimage
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  });

  //previous image
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
  });

  //handler setup
  window.addEventListener('resize', updateCarousel);
});
