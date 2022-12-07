const MODAL_ACTIVE_CLASS_NAME = 'modal-active';

const formModal = document.querySelector('#form-modal');
const form = document.querySelector('#form');

const openFormModalBtn = document.querySelector('#open-form-modal-btn');
const launchBtn = document.querySelector('#submit-btn');
const closeBtns = document.querySelectorAll('.close_btn');

openFormModalBtn.addEventListener('click', () => {
  formModal.classList.add(MODAL_ACTIVE_CLASS_NAME);
});

const closeFormModal = () => {
  formModal.classList.remove(MODAL_ACTIVE_CLASS_NAME);
};

closeBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    closeFormModal();
  });
});

function clearFormFields() {
  const modalFiends = formModal.querySelectorAll('input');

  modalFiends.forEach(field => {
    field.value = '';
  });
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(form);

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      closeFormModal();
      clearFormFields();
    })
    .catch(error => console.log('Sending form failed'));
});
