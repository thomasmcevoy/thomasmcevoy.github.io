const state = {
  currentSection: 'all',
  showOptionsMenu: false
}

const getters = {
  currentSection: state => state.currentSection,
  showOptionsMenu: state => state.showOptionsMenu
}

const mutations = {
  ['SET_CURRENT_SECTION'] (state, { newCurrentSection }) {
    state.currentSection = newCurrentSection
  },

  ['TOGGLE_SHOW_OPTIONS_MENU'] (state) {
    state.showOptionsMenu = !state.showOptionsMenu
  }
}

export default {
  state,
  getters,
  mutations
}
