<template>
  <div id="app">
    <my-header :logedin="false"></my-header>
    <div id="window">
      <router-view/>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import myHeader from "./components/common/header";
  import myFooter from "./components/common/footer";
export default {
  name: 'App',
  components:{
    myHeader,
    myFooter
  }
}
</script>

<style lang="less">
  #app {
    background-color: #f6f6f6;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #window{
    min-height: 500px;
    padding: 0 200px;
  }
  a{
    color: #000;
  }

  .ellipsis{
    display: -webkit-box !important;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  div.empty{
    margin: 20px 0;
    padding: 20px 30px;
  }

</style>
