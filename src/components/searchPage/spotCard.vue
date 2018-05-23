<template>
    <div class="spotCard">
        <img :src="spot['photoPath']"/>
        <h6>{{spot['name']}}</h6>
        <div>{{spot['shortIntro']}}</div>
    </div>
</template>

<script>
  export default {
    name: "spotCard",
    props:['spot'],
  }
</script>

<style scoped>
  div.spotCard{
    border: 1px solid #eee;
    padding: 10px;
    margin: 10px 0;
    text-align: left;
    box-shadow: 1px 1px 1px 1px #1b1e21;
  }
</style>
