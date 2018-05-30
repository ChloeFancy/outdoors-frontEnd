<template>
  <div>
    <spot-card v-for='(item,index) in spotList' :key="index" :spot="item">
    </spot-card>
  </div>
</template>

<script>
  import spotCard from "./spotCard";
  import httpUtil from "../../myHttp/httpUtil";

  export default {
    name: "spotSearch",
    props:['searchKeyword'],
    components:{
      spotCard
    },
    data(){
      return {
        spotList: [],
      }
    },
    methods:{
      getData(){
        this.$axios.get(`/spot/fuzzyQuery`,{
          params:{
            keyword:this.$route.query['searchKeyword'],
          },
          withCredentials:true,
        }).then(({data:{data:list,resCode}})=>{
          this.loading = false;
          this.showResult = resCode==='1';
          this.spotList = httpUtil.parseJSONArray(list);
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
