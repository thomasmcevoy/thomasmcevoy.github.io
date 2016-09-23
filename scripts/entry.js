import $ from 'jquery';
import { initializeTouchEvents } from './touchEvents';
import { smoothScroll } from './scroll';
import { initializePlayer } from './player';
import { initializeExpandables } from './expandables';
// import { initializeForm } from './form';
import { initializeModal } from './modal';

initializeTouchEvents();
smoothScroll();
initializePlayer();
initializeExpandables();
// initializeForm();
initializeModal();
