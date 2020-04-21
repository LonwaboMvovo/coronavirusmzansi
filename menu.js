const menu_container = document.querySelector('.menu_container');
const popup_menu = document.querySelector('.popup_menu');
const full_menu_container = document.querySelector('.full_menu_container');

const showMenu = () => {
    menu_container.classList.toggle('change');
    menu_container.classList.toggle('absolute');
    popup_menu.classList.toggle('nope');
    full_menu_container.classList.toggle('full_menu_container_background');

}

menu_container.addEventListener('click', showMenu)