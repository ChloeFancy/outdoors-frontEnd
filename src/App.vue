<template>
  <div id="app">
    <my-header :logedin="false"></my-header>
    <router-view/>
    <my-fooer></my-fooer>
  </div>
</template>

<script>
  import myHeader from "./components/common/header";
  import myFooer from "./components/common/footer";
export default {
  name: 'App',
  components:{
    myHeader,
    myFooer
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
}
</style>
