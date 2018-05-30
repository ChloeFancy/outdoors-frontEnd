<template>
  <div>
    <div class="empty" v-if="myFollow.length===0">
      该用户暂时没有关注别人
    </div>
    <user-info-card v-for="(fo,index) in myFollow" :key="index" :user="fo">

    </user-info-card>
  </div>
</template>

<script>
  import httpUtil from "../../myHttp/httpUtil";
  import userInfoCard from "../searchPage/userInfoCard";
  export default {
    name: "following",
    components:{
      userInfoCard
    },
    // data(){
    //   return{
    //     myFollow:[]
    //   }
    // },
    props:['userId','myFollow'],
    methods:{
      getData(){
        this.$axios.get("/follow/findFollowed",{
          params:{
            idFollower:this.$route.query['userId'],
          },
          withCredentials: true,
        }).then(({data:{data:myFollow}})=>{
          this.myFollow = httpUtil.parseJSONArray(myFollow);
          console.log(this.myFollow)
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
