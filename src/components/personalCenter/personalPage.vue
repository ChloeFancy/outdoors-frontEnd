<template>
  <div>
    <router-link to="/pwd">修改密码</router-link>
    <router-link to="/fan">粉丝列表</router-link>
    <router-link to="/follow">关注者列表</router-link>
    <router-link to="/strategy">发表的攻略</router-link>
    <router-view>

    </router-view>
  </div>
</template>

<script>
  import modifyPassword from "./modifyPassword";
  import fansList from "./fans";
  import following from "./following";
  import strategy from "./strategy";
  import VueRouter from "vue-router";
  const router = new VueRouter({
    routes:[
      { path: '/pwd', component: modifyPassword },
      { path: '/fan', component: fansList },
      { path: '/follow', component: following },
      { path: '/strategy', component: strategy }
    ] // （缩写）相当于 routes: routes
  });
  export default {
    name: "personalPage",
    components:{
      modifyPassword
    },
    data(){
      return{
        oldPwd:'',
        newPwd:'',
        newPwd1:'',
      }
    },
    router:router,
    methods:{
      updatePwd(ev){
        ev.preventDefault();
        if(this.newPwd!==this.newPwd1){
          alert('两次新密码不一致');
          return;
        }
        let pwd = {
          newPassword:this.newPwd,
          oldPassword:this.oldPwd
        };

        this.$axios.post("/user/modifyPassword",this.$qs.stringify(pwd),{
          headers: { 'content-type': 'application/x-www-form-urlencoded' },
          withCredentials: true,
        }).then(({data:{resCode}})=>{
          if(resCode==='1'){
            alert('修改密码成功！');
          }else{
            alert('修改密码失败！');
          }
        });
      },
      checkLogin(){
        this.$axios.post('/user/isLogin',null,{
          headers: { 'content-type': 'application/x-www-form-urlencoded' },
          withCredentials: true,
        }).then(({data:{resCode}})=>{
          if(resCode!=='1'){
            alert('登录信息已过期，请重新登录');
            this.$router.push("/login");
          }
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

<style scoped>

</style>
