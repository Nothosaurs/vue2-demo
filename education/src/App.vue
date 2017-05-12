<template>
  <div id="app">
    <HeaderDiv :logo='logomsg'></HeaderDiv>
    <LoginDiv @transferUser='getUser'></LoginDiv>
    <p>用户名为：{{user}} </p>
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderDiv from './components/header'
import LoginDiv from './components/login'
export default {
  name: 'app',
  data() {
    return {
      logomsg: 'xdzdddd',
      user: ''
    }
  },
  methods: {
    getUser(msg) {
      this.user = msg
    }
  },
  components: {
    HeaderDiv,
    LoginDiv
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
