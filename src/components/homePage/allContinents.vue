<template>
  <div>
    <div class="container">
      <div v-for="c in continentInfo"
        class="jumbotron mb-0" >
           <!--style="background: url(images/europe/paris/3.jpg); border-radius:0"-->
        <!--<img :src="c.photoPath">-->
        <router-link :to="{name:'continent',params:{currentContinentId:c.id}}">
          <h1 class="text-white">{{c.name}}</h1>
          <p class="text-white text-justify">
            {{c.description}}
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import httpUtil from "../../myHttp/httpUtil";
  export default {
    name: "allContinents",
    data(){
      return{
        continentInfo:[],
      }
    },
    methods:{
      getData(){
        this.$axios.get('/continent/findAll')
          .then(response=>{
            this.continentInfo = httpUtil.parseJSONArray(response.data.data);
            console.log(this.continentInfo)
          }).catch(e=>{
            console.log(e);
        })
      }
    },
    mounted(){
      this.getData();
    }
  }
</script>

<style scoped>

</style>
