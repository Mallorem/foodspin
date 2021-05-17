document.addEventListener("DOMContentLoaded", function () {
    const modalWindow = document.querySelector('.dropdown');
    const modalWindowOpenBtn = document.querySelector('.header__menu-icon');


    modalWindowOpenBtn.onclick = () => {
        modalWindow.classList.toggle('dropdown_state_active');
    }
})