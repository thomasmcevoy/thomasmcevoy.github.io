<template>
  <nav class="options-menu">
    <a
      class="menu-title"
      v-bind:class="{ active: showSortByDropdown }"
      @click="toggleShowSortByDropdown()">
      {{ sortBy }} ▾
    </a>
    <ul
      class="menu-dropdown menu-dropdown--sortBy"
      v-show="showSortByDropdown">
      <li
        v-bind:class="{ selected: sortBy === 'title' }"
        @click="handleSort('title')">
        TITLE
      </li>
      <li
        v-bind:class="{ selected: sortBy === 'composer' }"
        @click="handleSort('composer')">
        COMPOSER
      </li>
      <li
        v-bind:class="{ selected: sortBy === 'year' }"
        @click="handleSort('year')">
        YEAR
      </li>
    </ul>
    <a
      class="menu-title"
      v-bind:class="{ active: showFilterByDropdown }"
      @click="toggleShowFilterByDropdown()">
      {{ filterBy }} ▾
    </a>
    <ul
      class="menu-dropdown menu-dropdown--filterBy"
      v-show="showFilterByDropdown">
      <li
        v-bind:class="{ selected: filterBy === 'all' }"
        @click="handleFilter('all')">
        ALL
      </li>
      <li
        v-bind:class="{ selected: filterBy === 'standards' }"
        @click="handleFilter('standards')">
        STANDARDS
      </li>
      <li
        v-bind:class="{ selected: filterBy === 'blues' }"
        @click="handleFilter('blues')">
        BLUES
      </li>
      <li
        v-bind:class="{ selected: filterBy === 'minor blues' }"
        @click="handleFilter('minor blues')">
        MINOR BLUES
      </li>
      <li
        v-bind:class="{ selected: filterBy === 'rhythm changes' }"
        @click="handleFilter('rhythm')">
        RHYTHM CHANGES
      </li>
      <li
        v-bind:class="{ selected: filterBy === 'waltz' }"
        @click="handleFilter('waltz')">
        WALTZ
      </li>
      <li
        v-bind:class="{ selected: filterBy === 'latin' }"
        @click="handleFilter('latin')">
        LATIN
      </li>
      <li
        v-bind:class="{ selected: filterBy === 'holiday' }"
        @click="handleFilter('holiday')">
        HOLIDAY
      </li>
      <li
        v-bind:class="{ selected: filterBy === 'miles' }"
        @click="handleFilter('miles')">
        MILES DAVIS
      </li>
      <li
        v-bind:class="{ selected: filterBy === 'sinatra' }"
        @click="handleFilter('sinatra')">
        FRANK SINATRA
      </li>
    </ul>
    <a class="search-box">SEARCH</a>
  </nav>
</template>




<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters({
    sortBy: 'sortBy',
    filterBy: 'filterBy',
    showSortByDropdown: 'showSortByDropdown',
    showFilterByDropdown: 'showFilterByDropdown'
  }),
  methods: {
    ...mapActions([
      'setSortBy',
      'setFilterBy',
      'toggleShowSortByDropdown',
      'toggleShowFilterByDropdown'
    ]),
    handleSort: function(prop) {
      this.setSortBy(prop)

    },
    handleFilter: function(prop) {
      this.setFilterBy(prop)
    }
  }
}
</script>




<style>
.options-menu {
  position: relative;
}

.menu-title {
  flex: none;
  padding: 0 5vw;
  text-transform: uppercase;
}
.menu-title.active {
  color: black;
  border-bottom: none;
}

.menu-dropdown {
  z-index: 2;
  position: fixed;
  top: 72px;
  padding: 5px 0;
  background-color: white;
  border: 1px solid #d6d6d6;
  box-shadow: 0 2px 4px #d6d6d6;
  font-size: .75em;
}
.menu-dropdown--sortBy { left: 3vw; }
.menu-dropdown--filterBy { left: 27vw; }
.menu-dropdown li {
  border-bottom: none;
  padding: 6px 44px 6px 16px;
  line-height: 17px;
  color: #777;
}
.menu-dropdown li.selected {
  background-color: white;
  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAVCAYAAACzK0UYAAAAgUlEQVRIDe3BsQpBYRgA0JPcdJPFoCTlLdgkDyCrXRYrxWBwJ3UzyPLtHtTgCeT/F91zNP7WEB0ZTfHAUiZzvLCRyRqBI1oSK7BDYC+DLk4IHFD40RMrtH0MUCFwQSmBBQJnzHBHoEJPQlsEAoEb+hIrcUWgxkgmY9SYyKzUaHzrDfFwEh+CiP1JAAAAAElFTkSuQmCC') right center no-repeat;
}

.search-box {

}
</style>
