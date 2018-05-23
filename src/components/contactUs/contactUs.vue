<template>
  <div>
    <main role="main">
      <div class="feedback bg-light p-5 m-0">
        <div class="container" style="padding: 80px">
          <label for="name">姓名</label>
          <div class="input-group mb-3">
            <input id="name" type="text" class="form-control" placeholder="" aria-describedby="basic-addon1">
          </div>
          <label for="mail">邮箱</label>
          <div class="input-group mb-3">
            <input id="mail" type="text" class="form-control" placeholder="" aria-describedby="basic-addon1">
          </div>

          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">意见或建议</span>
            </div>
            <textarea class="form-control" aria-label="With textarea"></textarea>
          </div>

          <a @click='commit' class="btn btn-primary btn-lg btn-block">提交</a>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: "contactUs",
    methods:{
      commit(){

      }
    }
  }
</script>

<style scoped>
  main{
    width:60%;
    margin: 0 auto;
  }
</style>
