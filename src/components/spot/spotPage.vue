<template>
  <div>
    <div>
      <h2>{{currentSpot.name}}</h2>
      <p>{{currentSpot.introduction}}</p>
    </div>

    <div>
      <div v-for="a in strategyArticles">
        <router-link :to="{name:'article',params:{currentStrategyId:a.id}}">
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
  export default {
    name: "spotPage",
    props:{
      currentSpotId:{
        type:String
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
            id:this.currentSpotId
          }
        }).then((response)=>{
          this.currentSpot = response.data;
        }).catch(e=>{
          console.log(e);
        });

        this.$axios.get("/strategy",{
          params:{
            idSpot:this.currentSpot.id,
          }
        }).then(response=>{
          this.strategyArticles = response.data;
        })
      }
    }
  }
</script>

<style scoped>

</style>
