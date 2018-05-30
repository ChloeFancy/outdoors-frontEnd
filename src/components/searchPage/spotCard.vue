<template>
    <div class="spotCard">
      <router-link :to="{name:'spot',query:{currentSpotId:spot['id']}}">

        <img :src="'../../../static/images/'+spot['photoPath']"/>

        <div>
          <h6>{{spot['name']}}</h6>
          <div>{{spot['shortIntro']}}</div>
        </div>

      </router-link>
    </div>
</template>

<script>
  export default {
    name: "spotCard",
    props:['spot'],
  }
</script>

<style scoped lang="less">
  div.spotCard{
    border: 1px solid #eee;
    padding: 10px;
    margin: 10px 0;
    text-align: left;
    box-shadow: 1px 1px 1px 1px #5a6268;
    overflow: hidden;
    & img{
      float: right;
      width: 30%;
      &+div{
        float: right;
        width: 70%;
        & div{
          text-indent: 2em;
        }
      }
    }
  }
</style>
