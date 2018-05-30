<template>
  <div class="card">
    <router-link :to="{name:'spot',params:{spot:spot},query:{currentSpotId:spot.id}}">
      <div>
        <img :src="'../../../static/images/'+spot.photoPath">
        <div>
          <h3>{{spot.name}}</h3>
          <div>
            {{spot.shortIntro}}
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "spotCard",
    props:['spot']
  }
</script>

<style scoped lang="less">
  div.card{
    padding: 10px;
    margin: 10px 0;
    overflow: hidden;
  }
  img{
    width: 50%;
    float: left;
  }
  img+div{
    padding-left: 10px;
    overflow: hidden;
    & h3+div{
      text-align: left;
      text-indent: 2em;
    }
  }
</style>
