<style>
  .player {
    text-align: center;
                                font-size: .875em;
    @media (min-width: 880px) { font-size: 1.25em; }
  }
</style>

<template>
  <div class="player" id="player">
    <playlist></playlist>
    <controls></controls>
    <progress></progress>
  </div>
</template>

<script lang="babel">
  import playlist from './playlist';
  import controls from './controls';
  import progress from './progress';

  export default {
    data() {
      return {
        
      }
    },
    components: {
      playlist,
      controls,
      progress
    }
  }
</script>
