<template>
  <ul>
    <li
      v-for="tune in tunes"
      v-on:click="toggleSelected(tune)"
      v-bind:class="{ selected: tune.selected }">
      <h2>{{ tune.title }}</h2>
      <h3>
        <span>{{ tune.composer }}</span>
        <span>({{ tune.year }})</span>
      </h3>
    </li>
  </ul>
</template>




<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: mapGetters({
      tunes: 'tunes'
    }),
    methods: mapActions([
      'toggleSelected'
    ]),

  }
</script>




<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  display: block;
  margin: 0;
  padding: .5625em .625em .6875em;
  border-bottom: .0625em solid #eee;
}

h2 {
  margin: .15em 0 .1em;
  font-size: 1.125em;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 1.25;
}

h3 {
  margin: 0;
  font-size: .75em;
  font-weight: normal;
}

.selected {
  background-color: #e1eff8;
}
</style>
