import $ from 'jquery'

export default function footerFix() {
  const windowHeight = window.innerHeight
  const documentHeight = document.body.clientHeight
  const $footer = $('footer')

  if (windowHeight >= documentHeight) {
    pin($footer)
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
