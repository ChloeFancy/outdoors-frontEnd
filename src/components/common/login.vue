<template>
    <div>
      <form class="form-signin">
        <h1>登陆Outdoors</h1><br>
        <label for="inputEmail" class="sr-only">邮箱</label>
        <input v-model="mailTel"
          type="email" id="inputEmail" class="form-control" placeholder="邮箱/手机号" required autofocus>
        <label for="inputPassword" class="sr-only">密码</label>
        <input v-model="password" @keyup.enter="login"
          type="password" id="inputPassword" class="form-control" placeholder="密码" required>
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"> 记住我
          </label>
        </div>
        <a class="btn btn-lg btn-primary btn-block" @click="login">登陆</a>
        <p class="mt-5 mb-3 text-muted">&copy; 2018-2019</p>
      </form>

      <div v-if="loged">
        <div v-if="loginSuccess" class="alert alert-success" role="alert">
          登录成功,{{redirectCountDown}}秒后跳转到浏览的界面
        </div>
        <div v-if="!loginSuccess" class="alert alert-danger" role="alert">
          登录失败，请重新登录
        </div>
      </div>

    </div>
</template>

<script>
  export default {
    name: "login",
    data(){
      return{
        mailTel:'',
        password:'',
        loginSuccess:false,
        redirectCountDown:4,
        loged:false,
      }
    },
    methods:{
      login(){
        let userinfo= {password:this.password};
        if(this.mailTel.match(/^\d{11}$/)){
          userinfo['tel']=this.mailTel;
        }else if(this.mailTel.match(/^[\w_]+@\w+[.\w_]+$/)){
          userinfo['mail']=this.mailTel;
        }else{
          //输入不正确
          alert('请检查邮箱或手机号格式');
          return;
        }

        this.$axios.post("/user/login",this.$qs.stringify(userinfo),{
          headers: { 'content-type': 'application/x-www-form-urlencoded' },
        }).then(({data:{resCode,data:{token,userId,username}}})=>{
          this.loged = true;
          if(resCode==='1'){
            //登录成功
            this.loginSuccess = true;
            let that = this;
            //设置cookie中的token
            var exp = new Date();
            exp.setTime(exp.getTime() + 3 * 60 * 60 * 1000);//3小时过期
            document.cookie ='usertoken='+token+ ";expires=" + exp.toGMTString() +";path=/";
            //设置sessionStorage，存一下用户名
            sessionStorage.setItem('username',username);
            sessionStorage.setItem('userId',userId);
            //跳转到主页
            setTimeout(function timeout(){
              that.redirectCountDown--;
              console.log(that.redirectCountDown);
              var t = setTimeout(timeout,1000);
              if(that.redirectCountDown<0){
                clearTimeout(t);
                that.loginSuccess = false;
                that.$router.go(-1);
                that.$emit("logedin",true);
              }
            },0);
          }else{
            //登录失败
            this.loginSuccess = false;
            this.mailTel=this.password='';
          }
        }).catch(e=>{

        });
      }
    }
  }
</script>

<style scoped>
  body {
    font-family: 等线;
    height: 100%;
  }
  html {
    height: 100%;
  }
  body {
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    -ms-flex-align: center;
    -ms-flex-pack: center;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #f5f5f5;
  }

  .form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
  }
  .form-signin .checkbox {
    font-weight: 400;
  }
  .form-signin .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
  }
  .form-signin .form-control:focus {
    z-index: 2;
  }
  .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
</style>
