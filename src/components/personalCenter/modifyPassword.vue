<template>
  <div>
    <form>
      <div class="form-group">
        <label for="oldPwd" class="control-label">旧的密码</label>
        <input v-model="oldPwd" class="form-control" type="password" id="oldPwd"/>
      </div>
      <div class="form-group">
        <label for="newPwd" class="control-label">新的密码</label>
        <input v-model="newPwd" class="form-control" type="password" id="newPwd"/>
      </div>
      <div class="form-group">
        <label for="newPwd_1" class="control-label">重复新的密码</label>
        <input v-model="newPwd1" class="form-control" type="password" id="newPwd_1"/>
      </div>
      <button @click="updatePwd" class="btn btn-default">修改密码</button>
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
    },
    mounted(){
      this.$emit('loaded');
    }
  }
</script>

<style scoped lang="less">
  form{
    width:50%;
    position: absolute;
    left:50%;
    transform: translateX(-50%);
    text-align: left;
    label{
      width:30%;
      text-align: left;
    }
    & button{
      float: right;
    }
  }
</style>
