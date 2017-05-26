import $ from 'jquery'

export default function footerFix() {
  const $footer = $('footer')
  const windowHeight = $(window).height()
  const documentHeight = $(document).height()
  const mainHeight = $('main').height()

  console.log(`windowHeight: ${windowHeight}
documentHeight: ${documentHeight}
mainHeight: ${mainHeight}`)

  if (windowHeight >= documentHeight) {
    pin($footer);
  }
}

function pin($footer) {
  $footer.css({
    'position': 'fixed',
    'bottom': '0',
    'right': '0',
    'left': '0'
  })
}
