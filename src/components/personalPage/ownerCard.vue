<template>
    <div class="userHeader">
      <div class="userPhoto">
        <img :src="'../../../static/images/'+user.photoPath"/>
        <div><h2>{{user.name}}</h2></div>
        <follow :user="user"></follow>
      </div>
    </div>
</template>

<script>
  import follow from "../common/followButton";

  export default {
    name: "ownerCard",
    props: ['user'],
    components:{
      follow
    }
  }
</script>

<style scoped>
  .userHeader{
    margin-top: 20px;
    margin-bottom: -20px;
  }

  .userPhoto{
    text-align: left;
  }
  img{
    width: 200px;
    height: 200px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }

  img+div{
    margin-left: 30px;
    display: inline-block;
  }

</style>
