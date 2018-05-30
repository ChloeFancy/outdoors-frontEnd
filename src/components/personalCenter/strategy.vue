<template>
    <div>
      <div class="empty" v-if="allStrategies.length===0">
        该用户暂时没有发表攻略
      </div>

      <strategy-card v-for="(s,index) in allStrategies" :key="index" :strategy="s">

      </strategy-card>

    </div>
</template>

<script>
  import httpUtil from "../../myHttp/httpUtil";
  import strategyCard from "../searchPage/strategyCard";
  export default {
    name: "strategy",
    components:{
      strategyCard
    },
    props:['userId','allStrategies'],
    methods:{
      getData(){
        this.$axios.get('/strategy/findByQuery',{
          params:{
            idWriter:this.$route.query['userId']
          }
        }).then(({data:{data:strategies}})=>{
          this.allStrategies = httpUtil.parseJSONArray(strategies);
          // this.$emit('loaded');
        })
      },
    },
    mounted(){
      this.getData();
    }
  }
</script>

<style scoped>
  a{
    color: #1b1e21;
  }
  h5:hover{
    cursor: pointer;
  }
</style>
