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