<template>
    <div>
      <header>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark py-3">
          <a class="navbar-brand" href="#"><h2>Outdoors</h2></a>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">主页</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="continent.html">探索</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.html">联系我们</a>
            </li>
          </ul>
          <div class="col-6" v-if="!logedin">
            <a class="btn btn-sm btn-primary" @click="login">登陆</a>
            <a class="btn btn-sm btn-warning" @click="userRegister">注册</a>
          </div>

          <div class="col-6" v-else>
            欢迎，{{username}}!
            <a class="btn btn-sm btn-primary" @click="login">个人中心</a>
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
    methods:{
      login(){
        this.$router.push('/login');
      },
      userRegister(){
        this.$router.push('/register');
      }
    },
    mounted(){
      this.username = sessionStorage.getItem('username');
    }
  }
</script>

<style scoped>
  header{
    color:#fff;
  }
</style>
