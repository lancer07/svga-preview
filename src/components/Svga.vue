<template>
  <div :id="'preview-canvas-'+id" v-bind:style="{height:h,width:w}"></div>
</template>
<script>
const SVGA = require('svgaplayerweb')
export default {
  name: 'svga',
  props: ['url', 'id'],
  data () {
    return {
      w: 0,
      h: 0
    }
  },
  methods: {
    playSvga () {
      var self = this
      var player = new SVGA.Player('#preview-canvas-' + this.id)
      var parser = new SVGA.Parser('#preview-canvas-' + this.id)
      parser.load(this.url, function (videoItem) {
        self.w = videoItem.videoSize.width + 'px'
        self.h = videoItem.videoSize.height + 'px'
        player.setVideoItem(videoItem)
        player.setContentMode('Fill')
        player.startAnimation()
      })
    }
  },
  mounted () {
    this.playSvga()
  }
}
</script>
