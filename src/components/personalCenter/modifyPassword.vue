<template>
  <div>
    <form>
      <div>
        <label for="oldPwd">旧的密码</label>
        <input v-model="oldPwd" type="password" id="oldPwd"/>
      </div>
      <div>
        <label for="newPwd">新的密码</label>
        <input v-model="newPwd" type="password" id="newPwd"/>
      </div>
      <div>
        <label for="newPwd_1">重复新的密码</label>
        <input v-model="newPwd1" type="password" id="newPwd_1"/>
      </div>
      <button @click="updatePwd">修改密码</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "modifyPassword",
    data(){
      return{
        oldPwd:'',
        newPwd:'',
        newPwd1:'',
      }
    },
    methods: {
      updatePwd(ev) {
        ev.preventDefault();
        if (this.newPwd !== this.newPwd1) {
          alert('两次新密码不一致');
          return;
        }
        let pwd = {
          newPassword: this.newPwd,
          oldPassword: this.oldPwd
        };

        this.$axios.post("/user/modifyPassword", this.$qs.stringify(pwd), {
          headers: {'content-type': 'application/x-www-form-urlencoded'},
          withCredentials: true,
        }).then(({data: {resCode}}) => {
          if (resCode === '1') {
            alert('修改密码成功！');
          } else {
            alert('修改密码失败！');
          }
        });
      }
    }
  }
</script>

<style scoped lang="less">
  form{
    width:50%;
    position: absolute;
    left:50%;
    transform: translateX(-50%);
    label{
      width:20%;
      text-align: right;
    }
  }
</style>
