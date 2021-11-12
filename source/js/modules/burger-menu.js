const burgerBtn = document.querySelector('.main-nav__toggle');
const navMenu = document.querySelector('.main-nav__menu');
const breakpointLg = window.matchMedia('(min-width:1024px)');

const openMenu = () => {
  burgerBtn.setAttribute('aria-pressed', 'true');
  navMenu.classList.add('is-active');
  window.disableBodyScroll(navMenu);
};

const closeMenu = () => {
  burgerBtn.setAttribute('aria-pressed', 'false');
  navMenu.classList.remove('is-active');
  window.enableBodyScroll(navMenu);
};

const closeMenuOnResize = () => {
  closeMenu();
};

const documentClickHandler = ({target}) => {
  if (target.closest('.main-nav')) {
    return;
  }

  closeMenu();
};

const documentKeydownHandler = ({key}) => {
  if (key === 'Escape') {
    closeMenu();
  }
};

const initBurgerAction = () => {
  if (burgerBtn) {
    breakpointLg.addListener(closeMenuOnResize);
    burgerBtn.addEventListener('click', () => {
      if (navMenu.classList.contains('is-active')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    document.addEventListener('click', documentClickHandler);
    document.addEventListener('keydown', documentKeydownHandler);
  }
};

export {initBurgerAction, closeMenu};
