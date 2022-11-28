'use strict';
window.addEventListener('DOMContentLoaded', () => {
    const btns = document.querySelectorAll('.btn'),
          modal = document.querySelector('.modal'),
          closeModalBtn = document.querySelector('.modal_close');

    const openModal = () => {
        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                modal.style.display = 'block';
            });
        });
    };
    openModal();
    
    const closeModal = () => {
        closeModalBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        modal.addEventListener('click', (e) => {
            if (e.target == modal) {
                modal.style.display = 'none';
                console.log(e.target);
            }
            
        });
        
        modal.addEventListener('keydown', (e) => {
            if (e.code == 'Escape' && modal.style.display === 'block') {
                console.log(e.code);
                modal.style.display = 'none';
            }
        });
    };
    closeModal();
});