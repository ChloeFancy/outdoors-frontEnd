<template>
    <div>
      <button v-if="user.canBeFollowed===true" class="btn btn-primary" @click.prevent="follow">
        关注
      </button>

      <button v-else class="btn btn-default" @click.prevent="unfollow">
        取关
      </button>
    </div>
</template>

<script>
  export default {
    name: "followButton",
    props:{
      user:{
        type: Object,
        required: true
      }
    },
    methods: {
      follow() {
        this.user['canBeFollowed'] = false;
        //处于未登录状态
        if (document.cookie.indexOf('usertoken') === -1) {
          alert('请登录后关注');
          this.$router.push('/login');
          return;
        }
        let follow = {idFollowed: this.user.id};
        this.$axios.post('/follow/followOne', this.$qs.stringify(follow), {
          headers: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          withCredentials: true,
        }).then(({data: {resCode}}) => {
          if (resCode === '1') {
            //成功
            alert('关注成功');
          } else {
            this.user['canBeFollowed'] = true;

            alert('关注失败');
          }
        }).catch(e => {
          console.log(e);
        })
      },
      unfollow() {
        this.user['canBeFollowed'] = true;

        let follow = {idFollowed: this.user.id};
        this.$axios.post('/follow/unfollowOne', this.$qs.stringify(follow), {
          headers: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          withCredentials: true,
        }).then(({data: {resCode}}) => {
          if (resCode === '1') {
            //成功
            alert('取关成功');
          } else {
            this.user['canBeFollowed'] = false;
            alert('取关失败');
          }
        }).catch(e => {
          console.log(e);
        })
      }
    }
  }
</script>

<style scoped>
  div{
    display: inline-block;
  }
</style>
