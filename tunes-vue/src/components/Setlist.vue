<template>
  <div v-if="setlist.length === 0" class="no-setlist">
    <div class="no-setlist--content">
      <div class="empty-set">{ }</div>
      <h1>Empty</h1>
      <h3>Add tunes from All Tunes</h3>
    </div>
  </div>

  <draggable v-else class="setlist">
    <li v-for="tune in setlist">
      <h2>{{ tune.title }}</h2>
      <h3>
        <span>{{ tune.composer }}</span>
        <span>({{ tune.year }})</span>
      </h3>
      <div class="remove" @click="removeFromSetlist(tune)">×</div>
    </li>
  </draggable>
</template>




<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: mapGetters({
      setlist: 'setlist'
    }),
    methods: mapActions([
      'removeFromSetlist'
    ])
  }
</script>




<style>
.no-setlist {
  position: relative;
  height: calc(100vh - 40px);
}

.no-setlist--content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -65%);
  text-align: center;
}

.empty-set {
  font-size: 7em;
}

h1 {
  font-size: 1.75em;
  margin: 1em 0 .375em;
}

li {
  position: relative;
}

.remove {
  position: absolute;
  right: 2.5%;
  top: 50%;
  transform: translateY(-50%);
  width: 13px;
  height: 13px;
  line-height: 1.2;
  text-align: center;
  font-size: .75em;
  background-color: red;
  color: white;
}
.remove:hover {
  cursor: pointer;
}
</style>
