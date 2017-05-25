import $ from 'jquery'
import fullpage from 'fullpage.js'
// import initHamburger from './hamburger'
import adaptColorTo from './colorAdapter'

$(() => {
  // initHamburger()

  $('#fullpage').fullpage({
    loopHorizontal: false,
    onLeave: function(index, nextIndex, direction) {
      adaptColorTo(nextIndex)
    }
  })
  $('#logo-small').click(() => {
    $.fn.fullpage.moveTo(1)
    adaptColorTo(1)
  })
  $('.arrowDown').click(() => $.fn.fullpage.moveSectionDown())
})
