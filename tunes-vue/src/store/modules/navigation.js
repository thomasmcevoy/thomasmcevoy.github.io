const state = {
  currentSection: 'all',
  showOptionsMenu: false,
  showSortByDropdown: false,
  showFilterByDropdown: false
}

const getters = {
  currentSection: state => state.currentSection,
  showOptionsMenu: state => state.showOptionsMenu,
  showSortByDropdown: state => state.showSortByDropdown,
  showFilterByDropdown: state => state.showFilterByDropdown
}

const mutations = {
  ['SET_CURRENT_SECTION'] (state, { newCurrentSection }) {
    state.currentSection = newCurrentSection
  },

  ['TOGGLE_SHOW_OPTIONS_MENU'] (state) {
    state.showOptionsMenu = !state.showOptionsMenu
    if (state.showOptionsMenu) {
      document.getElementsByTagName('main')[0].style.marginTop = '80px'
    } else {
      document.getElementsByTagName('main')[0].style.marginTop = '40px'
    }
  },

  ['TOGGLE_SHOW_SORT_BY_DROPDOWN'] (state) {
    if (state.showSortByDropdown) state.showSortByDropdown = false
    else {
      state.showSortByDropdown = true
      setTimeout(() => {
        window.addEventListener('click', () => state.showSortByDropdown = false, {once: true})
      }, 1)
    }
  },

  ['TOGGLE_SHOW_FILTER_BY_DROPDOWN'] (state) {
    if (state.showFilterByDropdown) state.showFilterByDropdown = false
    else {
      state.showFilterByDropdown = true
      setTimeout(() => {
        window.addEventListener('click', () => state.showFilterByDropdown = false, {once: true})
      }, 1)
    }
  }
}

export default {
  state,
  getters,
  mutations
}
