const modal = document.createElement('div')
const overlay = document.createElement('div')
const content = document.createElement('div')

modal.setAttribute('id', 'modal')
overlay.setAttribute('id', 'overlay')
content.setAttribute('id', 'content')

export const initModal = () => {
  modal.style.zIndex = -1
  overlay.style.zIndex = -1
  modal.addEventListener('click', () => hideModal())
  overlay.addEventListener('click', () => hideModal())
  modal.appendChild(content)

  const fragment = document.createDocumentFragment()
    .appendChild(overlay)
    .appendChild(modal)
  document.getElementsByTagName('body')[0].appendChild(fragment)
}

const showModal = newContent => {
  content.innerHTML = ''
  content.appendChild(newContent)
  modal.style.zIndex = 2
  overlay.style.zIndex = 1
}

const hideModal = () => {
  modal.style.zIndex = -1
  overlay.style.zIndex = -1
}
