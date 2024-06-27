(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();

const mySlider = new Splide('#mySlider',{
  perPage: 3,
  gap: '30px',
  pagination: false,
  arrows: false,
  breakpoints: {
    768: {
      perPage: 2,
      pagination: true,
    },
    455: {
      perPage: 1
    }
  }
})

mySlider.mount()

document.addEventListener("DOMContentLoaded", function (){
  const burgerBtn = document.getElementById("burger");
  const menu = document.getElementById("menu");
  const header = document.querySelector("header");

  burgerBtn.addEventListener("click", function(){
      header.classList.toggle("open");
      menu.classList.toggle("open");
  });
});

var swiper = new Swiper('.swiper', {
slidesPerView: getSlidesPerView(),
direction: getDirection(),
navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
},
on: {
  resize: function () {
    swiper.changeDirection(getDirection());
    swiper.params.slidesPerView = getSlidesPerView();
    swiper.update();
  },
},
});

function getDirection() {
var windowWidth = window.innerWidth;
return windowWidth <= 115 ? 'vertical' : 'horizontal';
}

function getSlidesPerView() {
var windowWidth = window.innerWidth;
if (windowWidth >= 1280) {
  return 3;
} else if (windowWidth >= 768) {
  return 2;
} else {
  return 1;
}
}

VanillaTilt.init(document.querySelectorAll('.yachts-block__card-set'), {
max: 3,
speed: 400,
glare: true,
'max-glare': 0.1,
});