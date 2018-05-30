<template>
    <div class="myCard">

      <div class="comment">
        <div>
          <router-link :to="{name:'personalPage',query:{userId:comment.id},params:{id:comment.userId}}">
            {{comment.name}}
          </router-link>
        </div>
        <div>
          {{comment.content}}
        </div>
      </div>

      <div class="userPhoto">
        <router-link :to="{name:'personalPage',query:{userId:comment.id},params:{id:comment.userId}}">
          <img :src="'../../../static/images/'+comment.photoPath"/>
        </router-link>
      </div>

    </div>
</template>

<script>
  export default {
    name: "commentCard",
    props: ['comment'],
  }
</script>

<style scoped lang="less">
  div.myCard{
    overflow: hidden;
    padding: 0 10px;
    margin: 20px 0;
  }
  div.userPhoto{
    float: left;
    width: 50px;
    margin-left: -100%;
    & img{
      width: 100%;
    }
  }
  div.comment{
    float: left;
    width: calc(100% - 55px);
    margin-left: 55px;
    text-align: left;
    &>div{
      text-indent: 2em;
    }
    & a{
      color: #000;
    }
    &>div:first-child{
      text-indent: 1em;
      background-color: #eee;
    }
  }

</style>
