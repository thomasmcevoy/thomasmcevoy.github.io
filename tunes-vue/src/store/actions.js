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

export const setSortBy = ({ commit }, newSortBy) => {
  commit('SET_SORT_BY', {
    newSortBy: newSortBy
  })
}

export const setFilterBy = ({ commit }, newFilterBy) => {
  commit('SET_FILTER_BY', {
    newFilterBy: newFilterBy
  })
}

export const toggleShowSortByDropdown = ({ commit }) => {
  commit('TOGGLE_SHOW_SORT_BY_DROPDOWN')
}

export const toggleShowFilterByDropdown = ({ commit }) => {
  commit('TOGGLE_SHOW_FILTER_BY_DROPDOWN')
}
