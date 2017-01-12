<template>
  <nav>
    <a
      v-bind:class="{ active: currentSection == 'all' }"
      @click="setCurrentSection('all')">
      ALL
    </a>
    <a
      v-bind:class="{ active: currentSection == 'setlist' }"
      @click="setCurrentSection('setlist')">
      SETLIST
    </a>
    <a
      v-bind:class="{ active: currentSection == 'random' }"
      @click="setCurrentSection('random')">
      RANDOM
    </a>
    <a @click="toggleShowOptionsMenu()">OPTIONS</a>
  </nav>
</template>




<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters({
    currentSection: 'currentSection'
  }),
  methods: mapActions([
    'setCurrentSection',
    'toggleShowOptionsMenu'
  ])
}
</script>




<style>
nav {
  display: flex;
  height: 40px;
  background-color: #f8f8f8;
  border-bottom: 1px solid #d6d6d6;
}

a {
  flex: auto;
  height: 100%;
  line-height: 40px;
  text-align: center;
  color: #777;
  font-size: .75em;
}
a:last-child {
  border-left: 1px solid #d6d6d6;
}
a:hover {
  cursor: pointer;
}

.active {
  color: #4285f4;
  border-bottom: 2px solid #4285f4;
}
</style>
