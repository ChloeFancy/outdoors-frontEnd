<template>
    <div>
      <div class="empty" v-if="allFans.length===0">
        该用户暂时没有发表粉丝
      </div>
      <user-info-card v-for="(fan,index) in allFans" :key="index" :user="fan">

      </user-info-card>
    </div>
</template>

<script>
  import httpUtil from "../../myHttp/httpUtil";
  import userInfoCard from "../searchPage/userInfoCard";
  export default {
    name: "fans",
    props:['userId','allFans'],
    components:{
      userInfoCard
    },
    methods:{
      getData(){
        this.$axios.get("/follow/findFollower",{
          params:{
            idFollowed: this.$route.query['userId']
          }
        }).then(({data:{data:fans}})=>{
          this.allFans = httpUtil.parseJSONArray(fans);
          this.$emit('loaded');
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
