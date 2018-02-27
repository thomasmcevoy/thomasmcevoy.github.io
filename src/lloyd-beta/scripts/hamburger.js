import $ from 'jquery'

const $hamburger = $('#hamburger')
const $siteNav = $('#site-nav')

export default function initHamburger() {
  $hamburger.click(() => $siteNav.toggleClass('hidden'))
}
