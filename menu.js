const menu_container = document.querySelector('.menu_container');
const popup_menu = document.querySelector('.popup_menu');

const showMenu = () => {
    menu_container.classList.toggle('change');
    popup_menu.classList.toggle('nope');
}

menu_container.addEventListener('click', showMenu)