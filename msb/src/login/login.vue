<template>
  <div class="login">
  	<blur :blur-amount=40 :url="url" style='width:100%;'>
     
    </blur>
  </div>
</template>

<script>
import { Blur } from 'vux'

export default {
  components: {
    Blur
  },
  name: 'hello',
  data () {
    return {
      url: require('../assets/bg.jpg'),
      msg: 'Welcome to Your Vue.js App',
      title: '多人业务'
    }
  },
  created () {
    console.log(this)
    this.$http.jsonp('http://192.168.8.59/weixinvip/VIP/ERP/Home/api.ashx?a=getwxativity&i=1').then((response) => {
      console.log(response)
    }, (response) => {
     // console.log(response)
      console.log('出现错误')
    })
  },
  methods: {
    splice: function () {
      console.log(1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
