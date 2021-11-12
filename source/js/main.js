import {iosVhFix} from './utils/ios-vh-fix';

import {initBurgerAction} from './modules/burger-menu';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  iosVhFix();

  // Modules

  initBurgerAction();

  window.addEventListener('load', () => {
  });
});

