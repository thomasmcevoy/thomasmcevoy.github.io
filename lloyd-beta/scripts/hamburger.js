import $ from 'jquery'

const $hamburger = $('#hamburger')
const $menu = $('#menu')

let menuIsOpen = false

export default function initHamburger() {
  $hamburger.click(() => {
    if (menuIsOpen) closeMenu()
    else openMenu()
  })
}

function closeMenu() {
  $hamburger.css('z-index', '-1')
  menuIsOpen = false
}

function openMenu() {
  $hamburger.css('z-index', '1')
  menuIsOpen = true
}
