<template>
  <div id="app">
    <h1>svga 预览工具</h1>
    <a href="https://github.com/lancer07/svga-preview" style="position:absolute;right:0;top:0">
      <img :src="fork" style="width:200px"/>
    </a>
    <svga-preview :url="url" :id="id" style="margin:0 auto;"></svga-preview>
  </div>
</template>

<script>
import SvgaPreview from '@/components/Svga.vue'
export default {
  name: 'app',
  components:{
    SvgaPreview
  },
  data () {
    return {
      fork: require('@/assets/fork.jpg'),
      id : '1',
      url : 'https://cdn-daikuan.xjietiao.com/dir_mkteditor/external_static/1dlnds9584w1637244200058.svga'
    }
  }
}
</script>
