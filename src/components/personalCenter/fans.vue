<template>
    <div>
      <router-link v-for="(fan,index) in allFans" :key="index" :to="{name:'personalPage'}">
        <div>
          <h6>{{fan.name}}</h6>
        </div>
      </router-link>
    </div>
</template>

<script>
  import httpUtil from "../../myHttp/httpUtil";
  export default {
    name: "fans",
    data(){
      return{
        allFans:[],
      }
    },
    methods:{
      getData(){
        this.$axios.get("/follow/findFollower",{
          params:{
            idFollowed:10003//获取用户名啊！！！
          }
        }).then(({data:{data:fans}})=>{
          this.allFans = httpUtil.parseJSONArray(fans);
          console.log(this.allFans)
        });

      }
    },
    mounted(){
      this.getData();
    }
  }
</script>

<style scoped>

</style>
