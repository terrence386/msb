<template>
  <div class="login" v-bind:style="{ height: height+'px' }">
  	<blur :blur-amount=10 :url="url" style='width:100%;height:100%;'>

    </blur>
  </div>
</template>

<script>
import { Blur } from 'vux'

export default {
  components: {
    Blur
  },
  name: 'login',
  data () {
    return {
      url: require('../assets/login_bg.png'),
      msg: 'Welcome to Your Vue.js App',
      title: '多人业务',
      height: 0
    }
  },
  created () {
    console.log(this)
    // getHeight: function () {
    this.height = window.screen.height
  },
  methods: {
    splice: function () {
      console.log(1)
    }
  },
  computed: {
    height () {
      window.screen.height
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
