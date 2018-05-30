<template>
    <div id="myheader">
      <header>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark py-3">
          <a class="navbar-brand" href="/"><h2>Outdoors</h2></a>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">
                <router-link :to="{name:'homepage'}">
                  主页
                </router-link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <router-link :to="{name:'search'}">
                  探索
                </router-link>
              </a>
            </li>
            <!--<li class="nav-item">-->
              <!--<a class="nav-link">-->
                <!--<router-link :to="{name:'contactUs'}">-->
                  <!--联系我们-->
                <!--</router-link>-->
              <!--</a>-->
            <!--</li>-->
          </ul>
          <div id="loginBar">
            <div v-if="!logedin">
              <a class="btn btn-sm btn-primary" @click="login">登陆</a>
              <a class="btn btn-sm btn-warning" @click="userRegister">注册</a>
            </div>

            <div v-else>
              欢迎，{{username}}！
              <!--跳转过后检查cookie中的token，获取用户信息后加载个人主页-->
              <a class="btn btn-sm btn-primary" >
                <router-link :to="{name:'personalCenter'}">个人中心</router-link>
              </a>

              <a class="btn btn-sm btn-primary" @click="logout">退出登录</a>
            </div>
          </div>

        </nav>
      </header>
    </div>
</template>

<script>
  export default {
    name: "header",
    props:{
      logedin:{
        type:Boolean,
      }
    },
    data(){
      return{
        username: '',
      }
    },
    methods:{
      login(){
        this.$router.push('/login');
      },
      userRegister(){
        this.$router.push('/register');
      },
      logout(){
        this.$axios.get('/user/logout').then(response=>{
           //退出登陆之后，删除cookie中的token
          sessionStorage.removeItem('username');
          sessionStorage.removeItem('userId');
          document.cookie ='usertoken=;expires='+new Date().toUTCString();
          this.$router.push('/homepage');
          alert('退出登录成功！');
          this.logedin = false;
        });
      },
      getUserStatus(){
        //判断用户是否登录，从而显示登录按钮/个人中心
        let {username} = sessionStorage;
        this.logedin = !(typeof username === 'undefined');
        this.username = username;
      }
    },
    mounted(){
      this.getUserStatus();
    },
    updated(){
      this.getUserStatus();
    }
  }
</script>


<style scoped lang="less">
  body{
    padding: 200px 0;
  }
  div#myheader{
    /*position: fixed;*/
    top:0;
    width:100%;
    header{
      color:#fff;
      a{
        color: #fff;
      }
      nav{
        width: 100%;
        & #loginBar{
          margin-left: auto;
          margin-right: 30px;
        }
      }
    }

  }

</style>
