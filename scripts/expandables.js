export function initExpandables() {
  if (!window.matchMedia) return

  if (window.matchMedia('(min-width: 750px)').matches) {
    document.querySelector('#about')
      .querySelector('.expandable')
      .classList.remove('expandable')
  }

  const expandables = document.querySelectorAll('.expandable')
  expandables.forEach((el, _) => {
    const button = document.createElement('button')
    button.innerHTML = 'SHOW MORE'
    button.addEventListener('click', toggleExpand)
    el.parentNode.appendChild(button)
    el.classList.add('is-collapsed')
  })
}

function toggleExpand(e) {
  const button = e.target
  const el = button.previousElementSibling

  el.classList.toggle('is-expanded')
  el.classList.toggle('is-collapsed')

  if (button.innerHTML === 'SHOW MORE') button.innerHTML = 'SHOW LESS'
  else button.innerHTML = 'SHOW MORE'
}
