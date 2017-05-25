import $ from 'jquery'
import fullpage from 'fullpage.js'
import adaptColorTo from './colorAdapter'

export default function initFullpage() {
  $('#fullpage').fullpage({
    onLeave: function(index, nextIndex, direction) {
      adaptColorTo(nextIndex)
    },
    responsiveWidth: 769
  })
  $('#logo-small').click(() => {
    $.fn.fullpage.moveTo(1)
    adaptColorTo(1)
  })
  $('.arrowDown').click(() => $.fn.fullpage.moveSectionDown())
}
