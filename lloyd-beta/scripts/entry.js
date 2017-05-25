import $ from 'jquery'
// import initHamburger from './initHamburger'
import initFullpage from './initFullpage'
import {debounce} from 'lodash'

$(() => {
  if (window.matchMedia("(max-width: 768px)").matches) {
    // initHamburger()
  }
  else {
    initFullpage()
  }

  $(window).on('resize', debounce(function() {
    console.log($.fn.fullpage)
    if (window.matchMedia("(max-width: 768px)").matches) {
      if ($.fn.fullpage) $.fn.fullpage.destroy()
    }
    else {
      initFullpage()
    }
  }, 100));
})
