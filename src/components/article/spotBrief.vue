<template>
    <div>
      <h5>相关景点</h5>

      <router-link :to="{name:'spot',query:{currentSpotId:spot['id']}}">
        <img :src="'../../../static/images/'+spot.photoPath">
        <h6>{{spot.name}}</h6>
      </router-link>

      <div class="intro">
        {{spot.shortIntro}}
      </div>
    </div>
</template>

<script>
  export default {
    name: "spotBrief",
    props: ['idSpot'],
    data(){
      return{
        spot:{}
      }
    },
    methods:{
      getData(){
        this.$axios.get("/spot/findById",{
          params:{
            id:this.idSpot
          }
        }).then(({data:{data}})=>{
          this.spot = data;
        })
      }
    },
    watch:{
      idSpot(){
        this.getData();
      }
    }
  }
</script>

<style scoped>
  div.intro{
    text-align: left;
    text-indent: 2em;
    display: -webkit-box !important;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  h5{
    text-align: right;
    border-bottom: 1px dashed #4e555b;
  }
  img{
    width: 100%;
    margin: 10px 0;
  }
</style>
