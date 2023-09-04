<!--
 * @Description:
 * @Author: Rabbiter
 * @Date: 2023-02-21 18:13:21
-->
<template>
  <div class="dashboard-container" >
    <div
      class="allcontain"
      title="欢迎页面"
      style="
        padding: 50px;
        overflow: hidden;
        color: #408cff;
        font: lighter 16px 'Lucida Sans Unicode';
      "
      data-options="iconCls:'icon-heart',plain:true"
    >
      <b style="font-size: 40px; line-height: 30px; height: 30px">
        <i class="el-icon-reading" style="margin-right: 20px; "></i>欢迎使用图书管理系统</b
      >
      <hr />
      <FlipClock class="clock"></FlipClock>
      <h1 class="fontFamily">读万卷书，行万里路</h1>
      <!-- <div style="width: 100%; height: 800px;"  :style="{backgroundImage: 'url('+ require('@/assets/index.jpg') +')'}"></div> -->
    </div>

  </div>
</template>

<script>
import { mapGetters } from "vuex";
import live2d from "vue-live2d";
import FlipClock from "kuan-vue-flip-clock";
export default {
  name: "Dashboard",
  computed: {
    ...mapGetters(["id", "name", "roles"]),
    live2d,

  },
  components:{
    FlipClock
  }
};
</script>

<style>
.fontFamily{
  background: linear-gradient(to right, #008cff, #00ff00);
  -webkit-background-clip: text;

  color: transparent;

}


.clock{

}


.live2d {
  margin: 20px;
  padding: 0;
  position: fixed; bottom: 0; right: 0;
  z-index: 1;
}
.allcontain{
  background-image: url("background2.png");
  background-size: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 660px;
}

/*.clock{*/
/*  size: 200%;*/
/*}*/

</style>
