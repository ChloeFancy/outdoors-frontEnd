<template>
    <div>

      <form class="form-signin">
        <h1>注册Outdoors</h1>
        <label for="mail">
          邮箱注册
          <input id="mail" v-model="registerType" value="mail" type="radio"/>
        </label>
        <label for="tel">
          手机注册
          <input id="tel" v-model="registerType" value='tel' type="radio"/>
        </label>

        <div v-if="registerType==='tel'">
          <label  for="inputTel" class="sr-only">
            手机
          </label>
          <input v-model="tel" type="tel" id="inputTel" class="form-control" placeholder="手机号码" required autofocus>
        </div>

        <div v-else>
          <label class="sr-only">
            邮箱
          </label>
          <input v-model="mail" type="email" id="inputEmail" class="form-control" placeholder="邮箱" required autofocus>
        </div>

        <label for="inputPassword" class="sr-only">
          密码
        </label>
        <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="密码" required>

        <a class="btn btn-lg btn-primary btn-block" @click="register">注册</a>
        <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
      </form>

      <div>
        <div v-if="registerFormatError" class="alert alert-danger" role="alert">
          {{regiTypeChi[registerType]}}格式不正确！
        </div>
      </div>

      <div v-if="registered">
        <div v-if="registerSuccess" class="alert alert-success" role="alert">
          注册成功,{{redirectCountDown}}秒后跳转到登录页
        </div>
        <div v-if="!registerSuccess" class="alert alert-danger" role="alert">
          注册失败，请重新输入手机/邮箱
        </div>
      </div>

    </div>
</template>

<script>
  export default {
    name: "register",
    data(){
      return{
        registerType:'mail',
        regiTypeChi:{
          'mail':'邮箱',
          'tel':'手机号码'
        },
        tel:'',
        mail:'',
        password:'',
        registerFormatError: false,
        registered: false,
        registerSuccess: false,
        redirectCountDown: 4
      }
    },
    methods:{
      register(){
        this.registerFormatError=false;
        let user = {password:this.password};
        if(this.registerType==='tel'&&!this.tel.match(/^\d{11}$/)
          ||this.registerType==='mail'&&!this.mail.match(/[\w_]+@\w+(.\w+)+/)){
          this.registerFormatError=true;
          return ;
        }
        user[this.registerType]=this[this.registerType];

        this.$axios.post("/user/add",this.$qs.stringify(user),{
          headers: { 'content-type': 'application/x-www-form-urlencoded' },
        }).then((response)=>{
          this.registered = true;
          if(response.data.resCode==='1'){
            this.registerSuccess = true;
            this.registered = true;
            var that = this;
            setTimeout(function timeout(){
              that.redirectCountDown--;
              var t = setTimeout(timeout,1000);
              if(that.redirectCountDown<0){
                clearTimeout(t);
                that.$router.push('/login');
              }
            },0);
          }else{
            this.registerSuccess = false;
          }
        });
      }
    },
    watch:{
      registerType(){
        this.registerFormatError=false;
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
