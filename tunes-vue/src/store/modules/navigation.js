const state = {
  currentSection: 'all'
}

const getters = {
  currentSection: state => state.currentSection
}

const mutations = {
  ['SET_CURRENT_SECTION'] (state, { newCurrentSection }) {
    state.currentSection = newCurrentSection
  }
}

export default {
  state,
  getters,
  mutations
}
