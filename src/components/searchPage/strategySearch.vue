<template>
  <div>
    <strategy-card v-for='(item,index) in strategyList' :key="index" :strategy="item">

    </strategy-card>
  </div>
</template>

<script>
  import strategyCard from "./strategyCard";
  import httpUtil from "../../myHttp/httpUtil";

  export default {
    name: "strategySearch",
    props:['searchKeyword'],
    components:{
      strategyCard
    },
    data(){
      return {
        strategyList: [],
      }
    },
    methods:{
      getData(){
        this.$axios.get(`/strategy/fuzzyQuery`,{
          params:{
            keyword:this.$route.query['searchKeyword'],
          },
          withCredentials:true,
        }).then(({data:{data:list,resCode}})=>{
          this.strategyList = httpUtil.parseJSONArray(list);
          if(list.length){
            this.$emit("Null",false);
          }else{
            this.$emit("Null",true);
          }
        });
      }
    },
    mounted(){
      this.getData();
    },
    watch:{
      $route(){
        this.getData();
      }
    }

  }
</script>

<style scoped>

</style>
