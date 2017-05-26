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
  $siteNav.css('left', '-9999px')
  menuIsOpen = false
}

function openMenu() {
  $siteNav.css('left', '0')
  menuIsOpen = true
}
