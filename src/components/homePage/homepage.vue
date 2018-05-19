<template>
  <div class="hello">
    <carousel></carousel>
    <hot-cities></hot-cities>
    <all-continents></all-continents>
  </div>
</template>

<script>
  import carousel from "./carousel.vue";
  import httpUtil from "../../myHttp/httpUtil";
  import hotCities from "./hotCities";
  import allContinents from "./allContinents";
export default {
  name: 'homepage',
  components:{
    carousel,
    hotCities,
    allContinents
  },
  data () {
    return {
      testData:[],
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    test(){

      this.$axios.get('/user/findByQuery', {
        params:{
          password:'testpwd',
        },

      }).then((response)=>{
        console.log(response);
        this.testData = httpUtil.parseJSONArray(response.data.data);
      });
    }
  },
  mounted(){
    this.test();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

