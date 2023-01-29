const allContainers = gsap.utils.toArray(".container-item");
const imageWrap = document.querySelector(".img-wrap");
const imgSpace = document.querySelector(".img-container");

const initContainer = () => {
  allContainers.forEach((link) => {
    link.addEventListener("mouseenter", spaceHover);
    link.addEventListener("mouseleave", spaceHover);
    link.addEventListener("mousemove", moveSpaceImage);
  });
};

const moveSpaceImage = (e) => {
  let xPosition = e.clientX;
  let yPosition = e.clientY;
  const timeLine = gsap.timeline();
  timeLine.to(imageWrap, {
    x: xPosition,
    y: yPosition,
  });
};

const spaceHover = (e) => {
  if (e.type === "mouseenter") {
    const targetImage = e.target.dataset.img;

    const timeLine = gsap.timeline();
    timeLine
      .set(imgSpace, {
        backgroundImage: `url(${targetImage})`,
      })
      .to(imageWrap, {
        duration: 0.5,
        autoAlpha: 1,
      });
  } else if (e.type === "mouseleave") {
    const timeLine = gsap.timeline();
    timeLine.to(imageWrap, {
      duration: 0.5,
      autoAlpha: 0,
    });
  }
};

const init = () => {
  initContainer();
};

window.addEventListener("load", function () {
  init();
});

/* Element Transition */
timeLine = new TimelineMax();

timeLine.from(
  ".logo",
  1,
  {
    opacity: 0,
    y: 60,
    ease: Expo.easeInOut,
  },
  0.2
);

timeLine.staggerFrom(
  ".menu > li",
  1,
  {
    opacity: 0,
    y: 60,
    ease: Power2.easeOut,
  },
  0.2
);

timeLine.staggerFrom(
  "header > div",
  1,
  {
    opacity: 0,
    y: 60,
    ease: Power2.easeOut,
    delay: -1.4,
  },
  0.2
);
