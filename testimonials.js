/**
 * GharKa - Testimonials Slider Carousel
 */

document.addEventListener('DOMContentLoaded', () => {
  initTestimonialSlider();
});

function initTestimonialSlider() {
  const track = document.querySelector('.testimonial-track');
  const slides = document.querySelectorAll('.testimonial-slide');
  const prevBtn = document.querySelector('.slider-arrow-btn.prev');
  const nextBtn = document.querySelector('.slider-arrow-btn.next');
  const dotsContainer = document.querySelector('.slider-dots');

  if (!track || slides.length === 0) return;

  let currentIndex = 0;
  let autoplayTimer = null;
  const slideCount = slides.length;

  // Build dots
  dotsContainer.innerHTML = '';
  slides.forEach((_, idx) => {
    const dot = document.createElement('button');
    dot.className = `slider-dot ${idx === 0 ? 'active' : ''}`;
    dot.setAttribute('aria-label', `Go to testimonial ${idx + 1}`);
    dot.addEventListener('click', () => {
      goToSlide(idx);
      resetAutoplay();
    });
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.slider-dot');

  function updateSlider() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentIndex);
    });
  }

  function goToSlide(index) {
    currentIndex = (index + slideCount) % slideCount;
    updateSlider();
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetAutoplay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetAutoplay();
    });
  }

  // Autoplay
  function startAutoplay() {
    autoplayTimer = setInterval(nextSlide, 5000);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  track.addEventListener('mouseenter', stopAutoplay);
  track.addEventListener('mouseleave', startAutoplay);

  // Mobile Touch Swipe Handling
  let touchStartX = 0;
  let touchEndX = 0;

  track.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    stopAutoplay();
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
    startAutoplay();
  }, { passive: true });

  function handleSwipe() {
    const threshold = 40;
    if (touchStartX - touchEndX > threshold) {
      // Swiped left
      nextSlide();
    } else if (touchEndX - touchStartX > threshold) {
      // Swiped right
      prevSlide();
    }
  }

  startAutoplay();
}
