<template>
  <div>
    <div>
      <h2>{{spot.name}}</h2>
      <p>{{spot.introduction}}</p>
    </div>

    <div>
      <div v-for="a in strategyArticles">
        <router-link :to="{name:'article',params:{currentArticle:a},query:{id:a.id}}">
          <h5>
            {{a.title}}
          </h5>
          <p>
            {{a.content}}
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import httpUtil from "../../myHttp/httpUtil";

  export default {
    name: "spotPage",
    props:{
      spot:{
        type: Object
      }
    },
    data(){
      return{
        currentSpot:{},
        strategyArticles:[],
      }
    },
    methods:{
      getData(){
        this.$axios.get('/spot/findById',{
          params:{
            id:this.$route.query['currentSpotId']
          }
        }).then((response)=>{
          this.currentSpot = response.data.data;
        }).catch(e=>{
          console.log(e);
        });

        this.$axios.get("/strategy/findByQuery",{
          params:{
            idSpot:this.$route.query['currentSpotId']
          }
        }).then(({data:{data}})=>{
          this.strategyArticles = httpUtil.parseJSONArray(data);
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
