<template>
    <div>
      <div v-for="s in allStrategies">
        <h5>{{s.title}}</h5>
        <p>
          {{s.content}}
        </p>
      </div>
    </div>
</template>

<script>
  import httpUtil from "../../myHttp/httpUtil";

  export default {
    name: "strategy",
    data(){
      return{
        allStrategies:[]
      }
    },
    methods:{
      getData(){
        this.$axios.get('/strategy/findByQuery',{
          params:{
            idWriter:sessionStorage['userId']
          }
        }).then(({data:{data:strategies}})=>{
          this.allStrategies = httpUtil.parseJSONArray(strategies);
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
