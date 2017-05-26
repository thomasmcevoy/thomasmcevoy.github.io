import $ from 'jquery'

const $hamburger = $('#hamburger')
const $siteNav = $('#site-nav')

let menuIsOpen = false

export default function initHamburger() {
  $hamburger.click(() => {
    if (menuIsOpen) closeMenu()
    else openMenu()
  })
}

function closeMenu() {
  $siteNav.css('z-index', '-1')
  menuIsOpen = false
}

function openMenu() {
  $siteNav.css('z-index', '1')
  menuIsOpen = true
}
