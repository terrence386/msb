<template>
  <div class="company-detail">
    <x-header>公司详情</x-header>
   
  </div>
</template>

<script>
import { XHeader, Group, Cell, Flexbox, FlexboxItem } from 'vux'

export default {
  components: {
    XHeader,
    Group,
    Cell,
    Flexbox,
    FlexboxItem
  },
  name: 'hello',
  data () {
    return {
      title: 'enter',
      msg: 'here is very good'
    }
  },
  created () {

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
