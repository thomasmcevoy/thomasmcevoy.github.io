import $ from '../node_modules/jquery-compat/dist/jquery.min';
import { initializeAudio } from './player';
import { initializeExpandables } from './expandables';


// Audio feature detect
var format;

     if (Modernizr.audio.mp3) format = 'mp3';
else if (Modernizr.audio.ogg) format = 'ogg';

if (format) {
  initializeAudio( format );
  console.log( 'Initialized ' + format + ' audio.' );
}
else {
  $( 'html' ).addClass( 'no-audio' );
  console.log( 'Audio formats not supported' );
}


// Touch feature detect
if (Modernizr.touchevents || Modernizr.pointerevents) {
  var script = document.createElement( 'script' );
  script.src = './scripts/lib/fastclick.min.js';
  $( 'body' ).append( script );
  console.log( 'Imported fastclick' );
}
else {
  $( 'html' ).addClass( 'no-touch' );
  console.log( 'No touch support detected' );
}


// Expandables
initializeExpandables();
