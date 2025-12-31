
  const slider = document.querySelector(".slider");
  const track = document.createElement("div");
  track.classList.add("slider-track");

  const images = document.querySelectorAll(".images");
  images.forEach(img => track.appendChild(img));
  slider.appendChild(track);

  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  let index = 0;
  let interval;

  function slide() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  function nextSlide() {
    index = (index + 1) % images.length;
    slide();
  }

  function prevSlide() {
    index = (index - 1 + images.length) % images.length;
    slide();
  }

  // Auto slide every 3 seconds
  function startAutoSlide() {
    interval = setInterval(nextSlide, 2000);
  }

  function stopAutoSlide() {
    clearInterval(interval);
  }

  nextBtn.addEventListener("click", () => {
    stopAutoSlide();
    nextSlide();
  });

  prevBtn.addEventListener("click", () => {
    stopAutoSlide();
    prevSlide();
  });

  // Stop on touch or click on image
  images.forEach(img => {
    img.addEventListener("click", stopAutoSlide);
    img.addEventListener("touchstart", stopAutoSlide);
  });

  startAutoSlide();
