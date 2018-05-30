<template>
  <div id="wrapper" role="navigation">
    <ul>
      <div>
        <img :src="'../../../static/images/'+user.photoPath">
        <h5>
          {{user.name}}
        </h5>
      </div>
      <li>
        <router-link :to="{name:'modifyPwd'}">修改密码</router-link>
      </li>
      <li>
        <router-link :to="{name:'strategy',query:{userId:user.id}}">
          发表的攻略
        </router-link>
      </li>
      <li>
        <router-link :to="{name:'fan',query:{userId:user.id}}">
          粉丝列表
        </router-link>
      </li>
      <li>
        <router-link :to="{name:'follow',query:{userId:user.id}}">
          关注的人
        </router-link>
      </li>
    </ul>

    <div id="window">
      <router-view>

      </router-view>
    </div>
  </div>
</template>

<script>

  import loadingIcon from "../common/loadingIcon";
  export default {
    name: "personalPage",
    components:{
      loadingIcon
    },
    data(){
      return{
        user:{},
        followers:[],
        follows: [],
        strategies: [],
      }
    },
    methods:{
      checkLogin(){
        this.$axios.post('/user/isLogin',null,{
          withCredentials: true,
        }).then(({data:{data:user}})=>{
          this.user = user;
        }).catch(e=>{
          console.log(e);
        })
      }
    },
    beforeMount(){
      this.checkLogin();
    }
  }
</script>

<style lang="less" scoped>
  div#wrapper{
    display: flex;
  }

  ul{
    width: 20%;
    height: 450px;
    background-color: #eee;
    list-style: none;
    overflow: hidden;
    position: relative;
    li{
      &:first-of-type{
        margin-top: 130px;
      }
      a{
        color: #1b1e21;
      }
      padding-right: 20%;
      text-align: right;
      margin: 10px;
    }
    &>div:first-child{
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      & img{
        margin: 10px 0;
        width: 80%;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
      }
    }
  }

  div#window{
    position: relative;
    width: 80%;
    padding: 20px 40px;
  }

</style>
