document.addEventListener("DOMContentLoaded", function () {
    const dropdownMenu = document.querySelector('.dropdown');
    const dropdownMenuItems = document.querySelectorAll('.dropdown__nav-item');
    const dropdownOpenBtn = document.querySelector('.header__menu-icon');
    const dropdownActiveClass = 'dropdown_state_active';

    const toggleDropdown = (dropdownMenu, activeClass) => {
        dropdownMenu.classList.toggle(activeClass);
    }

    dropdownOpenBtn.onclick = () => {
        toggleDropdown(dropdownMenu, dropdownActiveClass);
    }

    dropdownMenuItems.forEach((dropdownMenuItem) => {
        dropdownMenuItem.addEventListener('click', (e) => {
            toggleDropdown(dropdownMenu, dropdownActiveClass);
        })
    })
})