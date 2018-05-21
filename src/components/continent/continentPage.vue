<template>
    <div>
      <h1>{{currentContinent['name']}}</h1>

      <div v-for="c in countryInfo">
        <router-link
          :to="{name:'country',params:{currentCountryId:c.id}}"
        >
          <div>
            <h3>
              {{c.name}}
            </h3>
            <div>
              {{c.description}}
            </div>
          </div>
        </router-link>
      </div>
    </div>
</template>

<script>
  import httpUtil from "../../myHttp/httpUtil";

  export default {
    name: "continentPage",
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
            id:this.currentContinentId
          }
        }).then((response)=>{
          this.currentContinent = response.data.data;
        }).catch(e=>{
          console.log(e);
        });

        this.$axios.get('/country/findByQuery',{
          params:{
            idContinent: this.currentContinentId
          }
        }).then((response)=>{
          //返回所有景点（属于某国家的）的信息
          this.countryInfo = httpUtil.parseJSONArray(response.data.data);
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

<style scoped>

</style>
