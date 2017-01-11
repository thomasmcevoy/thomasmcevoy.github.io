import allTunes from '../../assets/allTunes'

const state = {
  tunes: allTunes
}

const getters = {
  allTunes: state => state.tunes,
  setlist: state => state.tunes.filter(tune => tune.selected)
}

const mutations = {
  ['TOGGLE_SELECTED'] (state, { index }) {
    state.tunes[index].selected = !state.tunes[index].selected
  },

  ['REMOVE_TUNE'] (state, { tune }) {
    const index = state.tunes.indexOf(tune)
    state.tunes[index].selected = false;
  }
}

export default {
  state,
  getters,
  mutations
}
