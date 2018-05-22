<template>
    <div>
      {{currentCountry.countryName}}

      <div v-for="s in spotInfo">
        <router-link :to="{name:'spot',params:{currentSpotId:s.id},query:{currentSpotId:s.id}}">
          <div>
            <h3>{{s.name}}</h3>
            <div>
              {{s.shortInfo}}
            </div>
          </div>
        </router-link>
      </div>

    </div>
</template>

<script>
  import httpUtil from "../../myHttp/httpUtil";

  export default {
    name: "countryPage",
    props:{
      currentCountryId:{
        type:Number
      }
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
            id:this.currentCountryId
          }
        }).then((response)=>{
          this.currentCountry = response.data.data;
        }).catch(e=>{
          console.log(e);
        });

        this.$axios.get('/spot/findByQuery',{
          params:{
            idCountry:this.currentCountryId
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

<style scoped>

</style>
