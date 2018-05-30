<template>
  <div>
    <user-card v-for='(item,index) in userList' :key="index" :user="item">
    </user-card>
  </div>
</template>

<script>
  import httpUtil from "../../myHttp/httpUtil";
  import userCard from "./userInfoCard";

  export default {
    name: "userSearch",
    props:['searchKeyword'],
    components:{
      userCard
    },
    data(){
      return {
        userList: [],
      }
    },
    methods:{
      getData(){
        this.$axios.get(`/user/fuzzyQuery`,{
          params:{
            keyword:this.$route.query['searchKeyword'],
          },
          withCredentials:true,
        }).then(({data:{data:list,resCode}})=>{
          this.loading = false;
          this.showResult = resCode==='1';
          this.userList = httpUtil.parseJSONArray(list);
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
