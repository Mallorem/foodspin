document.addEventListener("DOMContentLoaded", () => {

    const leftSwitchBtn = document.querySelector('.dish-switch__btn_dir_left');
    const rightSwitchBtn = document.querySelector('.dish-switch__btn_dir_right');
    const switcher = document.querySelector('.circle-menu__body');


    const changeActiveDish = (direction) => {
        const oldDish = document.querySelector('.circle-menu__dish_active');
        let activeDish = direction === "left" ? oldDish.previousElementSibling : oldDish.nextElementSibling;

        if (!activeDish) {
            activeDish = document.querySelector(`.circle-menu__dish[data-num="${direction == 'right' ? 0 : 7}"]`)
        }

        oldDish.classList.remove('circle-menu__dish_active');
        activeDish.classList.add('circle-menu__dish_active');
        const activeDishNumber = activeDish.getAttribute('data-num');
        changeBigActiveDish(activeDishNumber);
        changeActiveSlide(activeDishNumber);
        changeColorTheme();
    }

    const changeBigActiveDish = (activeDishNumber) => {
        const oldDish = document.querySelector('.dish-switch__item_active');
        const activeDish = document.querySelector(`.dish-switch__item[data-num="${activeDishNumber}"]`);
        oldDish.classList.remove('dish-switch__item_active');
        activeDish.classList.add('dish-switch__item_active');
    }

    const changeActiveSlide = (activeDishNumber) => {
        const oldSlide = document.querySelector('.card_active');
        const activeSlide = document.querySelector(`.card[data-num="${activeDishNumber}"]`);
        oldSlide.classList.remove('card_active');
        activeSlide.classList.add('card_active');
    }

    const changeColorTheme = () => {
        const mainContainer = document.querySelector('.main');
        mainContainer.classList.toggle('main_bg-green');
    }

    leftSwitchBtn.onclick = () => {
        changeActiveDish('left');
        let rotate = Number(switcher.style.transform.slice(7, -4));
        switcher.style.transform = `rotate(${rotate + 45}deg)`;
    }

    rightSwitchBtn.onclick = () => {
        changeActiveDish('right');
        let rotate = Number(switcher.style.transform.slice(7, -4));
        switcher.style.transform = `rotate(${rotate - 45}deg)`;
    }

    const cardsArea = document.querySelector('.main__cards');
    const orderBtnClass = 'card__btn';
    const basketIcon = document.querySelector('.header__basket');

    cardsArea.onclick = (e) => {
        if (e.target.className == orderBtnClass) {
            basketIcon.classList.add('header__basket_active');
        }
    }
})