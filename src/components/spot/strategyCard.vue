<template>
  <div class="card">
    <div>
      <router-link class="strategy" :to="{name:'article',params:{currentArticle:strategy},query:{id:strategy.id}}">
        <h5>
          {{strategy.title}}
        </h5>
      </router-link>
      <router-link class="user" :to="{name:'personalPage',query:{userId:strategy.writerId}}">
        <img class="userPhoto" :src="'../../../static/images/'+strategy.userPhoto">
        {{strategy.writerName}}
      </router-link>
    </div>

    <p class="ellipsis">
      {{strategy.content}}
    </p>
  </div>
</template>

<script>
  export default {
    name: "strategyCard",
    props: ['strategy']
  }
</script>

<style scoped lang="less">
  a{
    display: inline-block;
  }
  .user{
    float: right;
    width: 20%;
    text-overflow-ellipsis: true;
    & img{
      margin-left: 10px;
      width: 40px;
    }
  }
  .card{
    padding: 10px;
    margin: 10px 0;
    &>div{
      overflow: hidden;
      margin-bottom: 10px;
    }
    &>p{
      text-indent: 2em;
    }
  }
</style>
