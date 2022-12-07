(() => {
  const refs = {
    openModalBtn: document.querySelector('.order-btn'),
    openModalButn: document.querySelector('.order-butn'),
    closeModalBtn: document.querySelector('.modal-close'),
    modal: document.querySelector('.backdrop'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalButn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('no-shown');
    refs.body.classList.toggle('no-scroll');
  }
})();
