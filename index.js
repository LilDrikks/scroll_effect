const target = document.querySelectorAll("[data-anime]");

const animate = ["animateTop", "animateBot"];

const animeScroll = () => {
  const windowTop = window.pageYOffset;

  if (windowTop > 1) {
    target[0].classList.add(animate[0]);
  }
  if (windowTop <= 0) {
    target[0].classList.remove(animate[0]);
  }
  if (windowTop > 1) {
    target[1].classList.add(animate[1]);
  }
  if (windowTop <= 0) {
    target[1].classList.remove(animate[1]);
  }
};

window.addEventListener("scroll", animeScroll);
