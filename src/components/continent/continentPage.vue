<template>
    <div id="continentPage">
      <div>
        <h1>{{currentContinent['name']}}</h1>
        <img :src="'../../../static/images/'+currentContinent.photoPath">
        <div>
          {{currentContinent.description}}
        </div>
      </div>

      <country-card v-for="(c,index) in countryInfo" :key="index" :country="c">

      </country-card>
    </div>
</template>

<script>
  import httpUtil from "../../myHttp/httpUtil";
  import countryCard from "./countryCard";
  export default {
    name: "continentPage",
    components:{
      countryCard
    },
    props:{
      currentContinentId:{
        type:String
      }
    },
    data(){
      return{
        currentContinent:{},
        countryInfo:[],
      }
    },
    methods:{
      getData(){
        console.log(this.currentContinentId);
        this.$axios.get('/continent/findById',{
          params:{
            id:this.$route.query['currentContinentId']
          }
        }).then((response)=>{
          this.currentContinent = response.data.data;
        }).catch(e=>{
          console.log(e);
        });

        this.$axios.get('/country/findByQuery',{
          params:{
            idContinent: this.$route.query['currentContinentId']
          }
        }).then(({data:{data}})=>{
          //返回所有景点（属于某国家的）的信息
          this.countryInfo = httpUtil.parseJSONArray(data);
        }).catch(e=>{
          console.log(e);
        });
      }
    },
    mounted(){
      this.getData();
    }
  }
</script>

<style scoped lang="less">
  #continentPage{
    width: 80%;
    margin: 0 auto;
    & img{
      width: 90%;
      margin: 10px 0;
    }
    & img+div{
      text-align: left;
      text-indent: 2em;
    }
  }

</style>
