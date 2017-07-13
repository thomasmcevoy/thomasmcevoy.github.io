<template>
  <div class="player">
    <playlist></playlist>
    <controls></controls>
    <progress></progress>
  </div>
</template>

<script>
  import Playlist from './Playlist.vue'
  import Controls from './Controls.vue'
  import Progress from './Progress.vue'

  export default {
    components: {
      Playlist,
      Controls,
      Progress
    }
  }
</script>
