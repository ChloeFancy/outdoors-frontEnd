<template>
  <div>
    <router-link v-for="(fo,index) in myFollow" :key="index" :to="{name:'personalPage'}">
      <p>
        <h6>{{fo.name}}</h6>
      </p>
    </router-link>
  </div>
</template>

<script>
  import httpUtil from "../../myHttp/httpUtil";
  export default {
    name: "following",
    data(){
      return{
        myFollow:[]
      }
    },
    methods:{
      getData(){
        this.$axios.get("/follow/findFollowed",{
          params:{
            idFollower:10003
          }
        }).then(({data:{data:myFollow}})=>{
          this.myFollow = httpUtil.parseJSONArray(myFollow);
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
