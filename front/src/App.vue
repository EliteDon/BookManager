<template>
  <div id="app">

     <router-view />

  </div>

</template>

<script>
import live2d from 'vue-live2d'
export default {
  name: 'App',
  components:{
    live2d

  },

}
  /*初始化
    参数说明
    model 模型的配置
       json 文件资源路径，可以支持网络路径，此处使用的是相对路径
       scale 模型缩放系数
    display 模型布局
       position 位置
       width 宽度
       height 高度
       hOffset 水平偏移量
       vOffset 垂直偏移量
    mobile 移动端配置
       show 显示/隐藏
       scale 缩放比例
    react 模型矩形框样式
       opacity 透明度
       opacityDefault 默认透明度
       opacityOnHover 鼠标悬浮透明度
  */



</script>
<script src="./mouseClick.js" style="z-index: 20"></script>
<script src="./snow.js"></script>

