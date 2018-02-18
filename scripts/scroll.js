export const initScroll = () => {
  document.querySelectorAll('.nav-link').forEach((navLink, i) => {
    const scrollTarget = document.querySelector(navLink.getAttribute('href'))
    navLink.addEventListener('click', e => {
      e.preventDefault()
      scrollTarget.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    })
  })
}
