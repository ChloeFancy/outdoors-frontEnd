<template>
    <div class="userCard">
      <div class="userPhoto">
        <router-link :to="{name:'personalPage',query:{userId:user.id}}">
          <img :src="'../../../static/images/'+user.photoPath"/>
          <span>{{user.name}}</span>
        </router-link>
      </div>

      <div class="follow">
        <button v-if="user.canBeFollowed===true" class="btn btn-primary" @click.prevent="follow">
          关注
        </button>

        <button v-else class="btn btn-default" @click.prevent="unfollow">
          取关
        </button>
      </div>
    </div>
</template>

<script>
  export default {
    name: "userInfoCard",
    props:['user'],
    methods:{
      follow(){
        this.user['canBeFollowed'] = false;
        //处于未登录状态
        if(document.cookie.indexOf('usertoken')===-1){
          alert('请登录后关注');
          this.$router.push('/login');
          return;
        }
        let follow = {idFollowed:this.user.id};
        this.$axios.post('/follow/followOne',this.$qs.stringify(follow),{
          headers:{
            'content-type': 'application/x-www-form-urlencoded'
          },
          withCredentials: true,
        }).then(({data:{resCode}})=>{
          if(resCode==='1'){
            //成功
            alert('关注成功');
          }else{
            this.user['canBeFollowed']=true;

            alert('关注失败');
          }
        }).catch(e=>{
          console.log(e);
        })
      },
      unfollow(){
        this.user['canBeFollowed']=true;

        let follow = {idFollowed:this.user.id};
        this.$axios.post('/follow/unfollowOne',this.$qs.stringify(follow),{
          headers:{
            'content-type': 'application/x-www-form-urlencoded'
          },
          withCredentials: true,
        }).then(({data:{resCode}})=>{
          if(resCode==='1'){
            //成功
            alert('取关成功');
          }else{
            this.user['canBeFollowed']=false;
            alert('取关失败');
          }
        }).catch(e=>{
          console.log(e);
        })
      }
    }
  }
</script>

<style scoped lang="less">
  div.userCard{
    background-color: #fff;
    margin: 10px 0;
    padding: 10px;
    overflow: hidden;
    border: 1px solid gray;
  }
  div.userPhoto{
    float: left;
  }
  div.userInfoBox{
    overflow: hidden;
    padding: 10px;
    margin: 10px 0;
    text-align: left;
  }
  div.follow{
    float: right;
  }
  img{
    width: 50px;
    height: 50px;
    margin-right: 15px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }
</style>
