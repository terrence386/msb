<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  created () {
    console.log(this)
    // this.getHeight()
  },
  data () {
    return {
      height: 0
    }
  },
  methods: {
    splice () {
    }
  },
  computed: {
    getHeight () {
      return document.documentElement.clientHeight.toString() + 'px'
    }
  }
}
</script>
<style lang="less">
  @import '~vux/src/styles/reset.less';

</style>
<style >
@font-face {
  font-family: 'iconfont';  /* project id 395499 */
  src: url('//at.alicdn.com/t/font_395499_1en42ffridjnstt9.eot');
  src: url('//at.alicdn.com/t/font_395499_1en42ffridjnstt9.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_395499_1en42ffridjnstt9.woff') format('woff'),
  url('//at.alicdn.com/t/font_395499_1en42ffridjnstt9.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_395499_1en42ffridjnstt9.svg#iconfont') format('svg');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:18px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}
body{
    margin:0;
    padding:0;
    background-color: #F4F0EF;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /**
  margin-top: 60px;
  **/
}
*{
  margin:0;
  padding:0;
}
a{
  text-decroation:none;
}
</style>
