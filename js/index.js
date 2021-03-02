import LocomotiveScroll from 'locomotive-scroll';
import { Showcase } from "./Showcase";
import { Slides } from "./Slides";
import { Cursor } from "./Cursor";
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';

const container = document.getElementById("app");
const cursor = new Cursor(document.querySelector('.cursor'));
const slidesData = [
  {
    image: image1,
    title: "Showcase",
    meta: "What we do"
  },
  {
    image: image2,
    title: "Clothing",
    meta: ""
  },
  {
    image: image3,
    title: "Sneakers",
    meta: ""
  },
  {
    image: image4,
    title: "Blog",
    meta: "Get to know us"
  }
];

const slides = new Slides(slidesData);
const showcase = new Showcase(slidesData, {
  onActiveIndexChange: activeIndex => {
    slides.onActiveIndexChange(activeIndex);
  },
  onIndexChange: index => {
    slides.onMove(index);
  },
  onZoomOutStart: ({ activeIndex }) => {
    cursor.enter();
    slides.appear();
  },
  onZoomOutFinish: ({ activeIndex }) => {
  },
  onFullscreenStart: ({ activeIndex }) => {
    cursor.leave();
    slides.disperse(activeIndex);
  },
  onFullscreenFinish: ({ activeIndex }) => {
  }
});

showcase.mount(container);
slides.mount(container);
showcase.render();

window.addEventListener("resize", function() {
  showcase.onResize();
});

window.addEventListener("mousemove", function(ev) {
  showcase.onMouseMove(ev);
});


document.addEventListener("mousemove", (ev) => {
  const blob = document.getElementById("blob-hover")
  blob.style.top = ev.clientY - 50 + "px";
  blob.style.left = ev.clientX - 50 + "px";  
});
