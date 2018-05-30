<template>
  <div>
    <div class="container">
      <div v-for="c in continentInfo"
        class="mb-0 card" >
           <!--style="background: url(images/europe/paris/3.jpg); border-radius:0"-->
        <img class="background" :src="'../../../static/images/'+c.photoPath">
        <!--<a>testtest</a>-->
        <router-link :to="{name:'continent',params:{currentContinentId:c.id},query:{currentContinentId:c.id}}">
          <h1>{{c.name}}</h1>
          <p class="text-justify">
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

<style scoped lang="less">
  div.card{
    position: relative;
    height: 200px;
    width: 100%;
    & .background{
      width: 100%;
      height: 200px;
      /*clip: rect(0,970px,200px,0);*/
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
    }

    & a{
      z-index: 2;
      color: #fff;
      display: block;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      width: 70%;
      height: 100px;
      margin: auto;
      & p{
        text-indent: 2em;
      }
    }
  }

</style>
