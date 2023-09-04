<template>
    <div id="app" style="display: flex;justify-content: space-between;">
        <Verify type="1" :code-length="5" :width="width" :font-size="fontsize"></Verify>
        <Verify type="4" :imgs-address="imgsAddress"></Verify>
        <Verify type="5"></Verify>
    </div>
</template>

<script>
    import Verify from './components/Verify'
    export default {
        name: 'app',
        methods: {
            alert(text) {
              this.callAndroid();
            },
            successCallback(){
                try {
                  window.callback.onsuccess();
                } catch (e) {
                  console.log(e);
                }
                if (this.isIOS()) {
                   try {
                     window.webkit.messageHandlers.onsuccess.postMessage('successed')
                   }catch (e) {
                     console.log(e);
                   }
                }
            },
            errorCallback() {
              try {
                 window.callback.onfailed()
              } catch (e) {
                console.log(e);
              }
              if (this.isIOS()) {
                try {
                  window.webkit.messageHandlers.onfailed.postMessage('failed')
                }catch (e) {
                  console.log(e);
                }
              }
            },
            isIOS() {
              let u = window.navigator.userAgent;
              return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
            },
        },
        data() {
          return {
            imgSize: {
              width: '300px',
              height: '300px',
            },
            width: '200px',
            fontsize: '20px',
            imgsAddress: [require('./images/1.jpg'), require('./images/2.jpg'), require('./images/3.jpg')],
          }
        },
        components: {
            Verify
        },
    }

</script>

<style>
    *{
        -webkit-user-select: none;
        user-select: none;
    }
    body{
        margin: 0;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        /*margin-top: 60px;*/
    }
</style>
