'use strict';

const showModalButtons = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeModalButton = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const handleModal = () => {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
};

showModalButtons.forEach(button =>
  button.addEventListener('click', handleModal)
);
closeModalButton.addEventListener('click', handleModal);
overlay.addEventListener('click', handleModal);
