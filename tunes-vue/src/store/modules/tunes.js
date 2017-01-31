import allTunes from '../../assets/allTunes'

const state = {
  tunes: allTunes,
  setlist: [],
  sortBy: 'title',
  filterBy: 'standards'
}

const getters = {
  tunes: state => {
    switch(state.filterBy) {
      case 'all':
        return state.tunes
        break
      case 'standards':
        return state.tunes.filter(tune => !tune.holiday)
        break
      case 'blues':
      case 'rhythm':
        return state.tunes.filter(tune => tune.form === state.filterBy)
        break
      case 'miles':
      case 'sinatra':
        return state.tunes.filter(tune => tune.artist === state.filterBy)
        break
      case 'minor blues':
        return state.tunes.filter(tune => tune.tonality === 'minor' && tune.form === 'blues')
        break
      default:
        return state.tunes.filter(tune => tune[state.filterBy] === true)
        break
    }
  },
  setlist: state => state.setlist,
  sortBy: state => state.sortBy,
  filterBy: state => state.filterBy
}

const mutations = {
  ['TOGGLE_SELECTED'] (state, { tune }) {
    if (state.setlist.indexOf(tune) < 0) {
      // Add to setlist
      const tunesIndex = state.tunes.indexOf(tune)
      state.tunes[tunesIndex].selected = true
      state.setlist.push(tune)
    }
    else {
      // Remove from setlist
      const tunesIndex = state.tunes.indexOf(tune)
      const setlistIndex = state.setlist.indexOf(tune)
      state.tunes[tunesIndex].selected = false
      state.setlist.splice(setlistIndex, 1)
    }
  },

  ['REMOVE_FROM_SETLIST'] (state, { tune }) {
    const tunesIndex = state.tunes.indexOf(tune)
    const setlistIndex = state.setlist.indexOf(tune)
    state.tunes[tunesIndex].selected = false
    state.setlist.splice(setlistIndex, 1)
  },

  ['SORT_TUNES_BY'] (state, { newSortBy }) {
    if (newSortBy !== state.sortBy) {
      state.sortBy = newSortBy
      state.tunes = state.tunes.sort((a, b) => {
        const tuneA = a[state.sortBy]
        const tuneB = b[state.sortBy]
        if (tuneA < tuneB) return -1
        if (tuneA > tuneB) return 1
        return 0
      })
    }
  },

  ['SET_FILTER_BY'] (state, { newFilterBy }) {
    state.filterBy = newFilterBy
  }
}

export default {
  state,
  getters,
  mutations
}
