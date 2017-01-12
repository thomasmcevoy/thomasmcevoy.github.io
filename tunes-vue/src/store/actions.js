export const setCurrentSection = ({ commit }, newCurrentSection) => {
  commit('SET_CURRENT_SECTION', {
    newCurrentSection: newCurrentSection
  })
}

export const toggleSelected = ({ commit }, index) => {
  commit('TOGGLE_SELECTED', {
    index: index
  })
}

export const removeTune = ({ commit }, tune) => {
  commit('REMOVE_TUNE', {
    tune: tune
  })
}

export const toggleShowOptionsMenu = ({ commit }) => {
  commit('TOGGLE_SHOW_OPTIONS_MENU')
}
