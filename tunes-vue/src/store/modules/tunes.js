import allTunes from '../../assets/allTunes'

const state = {
  tunes: allTunes,
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
  setlist: state => state.tunes.filter(tune => tune.selected),
  sortBy: state => state.sortBy,
  filterBy: state => state.filterBy
}

const mutations = {
  ['TOGGLE_SELECTED'] (state, { index }) {
    state.tunes[index].selected = !state.tunes[index].selected
  },

  ['REMOVE_TUNE'] (state, { tune }) {
    const index = state.tunes.indexOf(tune)
    state.tunes[index].selected = false;
  },

  ['SET_SORT_BY'] (state, { newSortBy }) {
    state.sortBy = newSortBy
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
