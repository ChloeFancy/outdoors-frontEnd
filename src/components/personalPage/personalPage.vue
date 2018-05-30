<template>
  <div>
    <div>
      <owner-card :user="user">

      </owner-card>
    </div>

    <nav>
      <router-link :to="{path: '/personalPage/strategy',query:{userId:userId}}">
        发表的攻略
      </router-link>
      <router-link :to="{path: '/personalPage/fan',query:{userId:userId}}">
        粉丝列表
      </router-link>
      <router-link :to="{path: '/personalPage/follow',query:{userId:userId}}">
        关注的人
      </router-link>
    </nav>

    <div id="window">
      <router-view>

      </router-view>
    </div>

  </div>

</template>

<script>
  import ownerCard from "./ownerCard";

  export default {
    name: "personalPage",
    components: {ownerCard},
    // router,
    data(){
      return{
        userId: this.$route.query['userId'],
        user:{},
        followers:[],
        follows: [],
        strategies: [],
      }
    },
    methods:{
      getData(){
        this.$axios.get('/user/findById',{
          params:{
            id: this.$route.query['userId']
          },
          withCredentials: true,
        }).then(({data:{data}})=>{
          this.user = data;
        }).catch(e=>{
          console.log(e);
        })
      }
    },
    mounted(){
      this.getData();
    },
    watch:{
      $route(){
        this.getData();
        this.userId = this.$route.query['userId'];
      }
    }
  }
</script>

<style scoped lang="less">
  nav a{
    padding: 5px 10px;
    margin: 0 10px;
    &:hover{
      background-color: #1b1e21;
      color: #fff;
    }
  }
</style>
