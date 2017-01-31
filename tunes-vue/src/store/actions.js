export const setCurrentSection = ({ commit }, newCurrentSection) => {
  commit('SET_CURRENT_SECTION', {
    newCurrentSection: newCurrentSection
  })
}

export const toggleSelected = ({ commit }, tune) => {
  commit('TOGGLE_SELECTED', {
    tune: tune
  })
}

export const addToSetlist = ({ commit }, tune) => {
  commit('ADD_TO_SETLIST', {
    tune: tune
  })
}

export const removeFromSetlist = ({ commit }, tune) => {
  commit('REMOVE_FROM_SETLIST', {
    tune: tune
  })
}

export const toggleShowOptionsMenu = ({ commit }) => {
  commit('TOGGLE_SHOW_OPTIONS_MENU')
}

export const sortTunesBy = ({ commit }, newSortBy) => {
  commit('SORT_TUNES_BY', {
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
