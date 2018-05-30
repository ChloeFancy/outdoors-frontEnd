<template>
    <div>
      <div>
        <h1>
          {{currentCountry.name}}
        </h1>
        <img :src="'../../../static/images/'+currentCountry.photoPath">
        <div>
          {{currentCountry.description}}
        </div>
      </div>

      <spot-card v-for="(s,index) in spotInfo" :key="index" :spot="s">

      </spot-card>

    </div>
</template>

<script>
  import httpUtil from "../../myHttp/httpUtil";
  import spotCard from "./spotCard";
  export default {
    name: "countryPage",
    components:{
      spotCard
    },
    data(){
      return{
        currentCountry:{},
        spotInfo:[]
      }
    },
    methods:{
      getData(){
        this.$axios.get('/country/findById',{
          params:{
            id:this.$route.query['currentCountryId']
          }
        }).then(({data:{data:country}})=>{
          this.currentCountry = country;
        }).catch(e=>{
          console.log(e);
        });

        this.$axios.get('/spot/findByQuery',{
          params:{
            idCountry:this.$route.query['currentCountryId']
          }
        }).then(({data:{data}})=>{
          //返回所有景点（属于某国家的）的信息
          this.spotInfo = httpUtil.parseJSONArray(data);
        });
      }
    },
    mounted(){
      this.getData();
    }
  }
</script>

<style scoped lang="less">

  h1+img{
    width: 90%;
    margin: 10px 0;
  &+div{
     text-align: left;
     text-indent: 2em;
   }
  }
</style>
