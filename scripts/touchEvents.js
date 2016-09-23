import $ from 'jquery';
import attachFastClick from 'fastclick';

export function initializeTouchEvents() {
  if (Modernizr.touchevents || Modernizr.pointerevents) {
    $(() => attachFastClick(document.body));
  } else {
    $( 'html' ).addClass( 'no-touch' );
  }
}
