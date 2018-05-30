<template>
    <div class="strategy">
      <router-link
        :to="{name:'article',
        query:{id:strategy.id}}"
      >
        <h4>
          {{strategy.title}}
        </h4>
        <div class="ellipsis">
          {{strategy.content}}
        </div>
      </router-link>
    </div>
</template>

<script>
  export default {
    name: "strategyCard",
    props: ['strategy'],
    data(){
      return{

      }
    },

  }
</script>

<style scoped lang="less">
  div.strategy{
    padding: 16px 20px;
    margin: 20px 0;
    background-color: #fff;
    text-align: left;
    & .ellipsis{
      text-indent: 2em;
    }
    & a{
      color: #000;
    }
  }

</style>
