
<template>
  <div class="login-container">
<!--    <particles-bg type="lines" :bg="true" />-->
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">
      <!-- 标题 -->
      <div class="title-container">
        <h1 class="title">图书管理系统</h1>
      </div>
      <!-- 用户名 -->
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          class="yuan"
          ref="username"
          v-model="loginForm.username"
          placeholder="请输入用户名"
          name="username"
          type="text"
          tabindex="1"
          auto-complete="off"

        />
      </el-form-item>
      <!-- 密码 -->
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          class="yuan"
          :key="passwordType"
          ref="password"
          v-model="loginForm.password"
          :type="passwordType"
          placeholder="请输入密码"
          name="password"
          tabindex="2"
          auto-complete="on"
          @keyup.enter.native="handleLogin"
        />
        <span class="show-pwd" @click="showPwd">
          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item>
      <!-- 权限 -->
      <el-form-item prop="authority">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-select v-model="loginForm.isadmin" placeholder="请选择" style="width: 418px">
          <el-option :key="0" label="读者" :value="0"></el-option>
          <el-option :key="1" label="管理员" :value="1"></el-option>
        </el-select>
      </el-form-item>
<!--      <el-form-item>-->
<!--        <vue-awesome-verify :type="4"></vue-awesome-verify>-->
<!--      </el-form-item>-->
      <!-- 登录按钮 -->
      <div style="height: 40px; margin-bottom: 30px;">
        <div>
          <Vcode :show="isShow" @success="success" @close="close"></Vcode>
          <el-button :loading="loading" type="primary" style="width: 48%; float: left;" @click.native.prevent="handleLogin">登录</el-button>
        </div>
        <el-button :loading="loading" type="success" style="width: 48%; float: right;" @click.native.prevent="handleRegister">注册</el-button>
      </div>
      <div class="live2d">
        <live2d
          :style="style"
          :model="['Potion-Maker/Pio', 'school-2017-costume-yellow']"
          :direction="direction"
          :size="size"
        ></live2d>
      </div>

    </el-form>
  </div>
</template>

<script>
import live2d from "vue-live2d"
//import { ParticlesBg } from "particles-bg-vue";
import Vcode from "vue-puzzle-vcode"
// import VueAwesomeVerify from 'vue-awesome-verify'
// import 'vue-awesome-verify/dist/vue-awesome-verify.min.css'
export default {
  name: 'Login',
  components:{
    live2d,
    //ParticlesBg,
    Vcode
  },
  data() {
    const validateUsername = (rule, value, callback) => {
      callback()
    }
    const validatePassword = (rule, value, callback) => {
      callback()
    }
    return {
      loginForm: {
        username: '',
        password: '',
        isadmin: 0
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined,
      isShow: false
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.isShow = true;

    },
    success(msg){
      this.isShow = false;
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm).then(() => {
            this.$router.push({ path: '/' })  // 无脑进首页
            this.loading = false
          }).catch((message) => {
            this.$message.error(message)
            this.loading = false
          })
        } else {
          console.log('不允许提交!')
          return false
        }
      })
    },

    close(){
      this.isShow(false);
    },
    handleRegister() {
      console.log("注册按钮")
      this.$router.push({ path: '/register' })  // 进注册页面
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#283443;
$light_gray:#fff;
$cursor: #21252b;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
 .el-input__inner::placeholder {
    color: #d7d0d0;
    font-size: 16px;
    font-weight: bold;
  }

  .el-input.yuan {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;


      &:-webkit-autofill {

       // box-shadow: 0 0 0px 1000px $bg inset !important;
        //-webkit-text-fill-color: $cursor !important;

      }
      ::-webkit-input-placeholder {
        color: #999;
      }
    }
  }

  .el-input {
    display: inline-block;
    height: 47px;
    width: 100%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        //box-shadow: 0 0 0px 1000px $bg inset !important;
        //-webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray: #4c5056;


.login-container {
  min-height: 100%;
  width: 100%;
  //ackground-color: $bg;
  background-image: url("bg2.png");
  background-size: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 38px;
      font-weight: bolder;
      color: #053706FF;
      margin: 0px auto 40px auto;
      text-align: center;

      background: linear-gradient(to right, #053706FF, #198634FF);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      opacity: 0.7;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

}
</style>
<style scoped>
.live2d{
  position: fixed; bottom: 0; right: 0;
  margin: 20px;
  padding: 0;
  z-index:999;
}
</style>
