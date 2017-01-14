<template>
  <div id="app">
    <header>
      <navigation></navigation>
      <options-menu v-show="showOptionsMenu"></options-menu>
    </header>
    <main>
      <all v-show="currentSection === 'all'"></all>
      <setlist v-show="currentSection === 'setlist'"></setlist>
    </main>
  </div>
</template>




<script>
import All from './components/All.vue'
import Setlist from './components/Setlist.vue'
import Navigation from './components/Navigation.vue'
import OptionsMenu from './components/OptionsMenu.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  components: { All, Setlist, Navigation, OptionsMenu },
  computed: mapGetters({
    currentSection: 'currentSection',
    showOptionsMenu: 'showOptionsMenu'
  })
}
</script>




<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

#app {
  margin: auto;
  max-width: 768px;
  border: solid thin #ddd;
  font-family: Helvetica, Arial, sans-serif;
  color: black;
}

header {
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

main {
  margin-top: 40px;
}
</style>
