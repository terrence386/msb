<template>
  <div class="apply">
    <tab active-color="#909" :line-width='1'>
      <tab-item selected>待确认</tab-item>
      <tab-item>已同意</tab-item>
      <tab-item>已拒绝</tab-item>
    </tab>
    <div class="ap-list">
        <router-link to="/component/MissionDetail">
      <div class="ap-item">
          <div class="ap-item-title">
              <div class="t-a-p">
                  <div>手机定位</div>
                  <div class="purse">$200</div>
              </div>
              <div class="bbl ap-ot-info">
                <span>地址：</span>
                <span>经验：</span>
                <span>时间：</span>
              </div>
          </div>
          <div class="ap-item-content bbl">
            <div class="ap-co-inner">
              浏览器定位，手机定位，卫星定位，ip定位
            </div>
          </div>
          <div class="ap-it-footer">
            <div>
              <img src="../../assets/u_icon.png" height="23" width="22">
              <span>鸣蝉科技|总经理</span>
            </div>
            <div>待处理</div>
          </div>
      </div>
      </router-link>
    </div>
  </div>
</template>
<script>
import { Tab, TabItem } from 'vux'
export default {
  components: {
    Tab,
    TabItem
  },
  data () {
    return {

    }
  },
  methods: {

  },
  computed: {

  }
}
</script>
<style scoped>
.ap-list{
  padding: .5rem;
}
.ap-item{
  background-color: #fff;
  padding: .5rem;
  border-radius: .3rem;
}
.t-a-p{
  display: flex;
  justify-content: space-between;
  padding: .6rem 0 .5rem 0;
}
.ap-ot-info{
  padding-bottom: .5rem;
}
.ap-item-content{
  padding: 1rem 0;
}
.ap-it-footer{
  padding-top: .3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.ap-it-footer div:first-child{
  display: flex;
  align-items: center;
}
.ap-it-footer img{
  margin-right: .3rem;
}
</style>
