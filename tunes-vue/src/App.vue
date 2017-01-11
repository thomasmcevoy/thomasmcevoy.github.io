<template>
  <div id="app">
    <navigation></navigation>
    <all v-show="currentSection === 'all'"></all>
    <setlist v-show="currentSection === 'setlist'"></setlist>
  </div>
</template>




<script>
import All from './components/All.vue'
import Setlist from './components/Setlist.vue'
import Navigation from './components/Navigation.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  components: { All, Setlist, Navigation },
  computed: mapGetters({
    currentSection: 'currentSection'
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
</style>
