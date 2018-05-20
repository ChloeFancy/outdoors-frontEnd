<template>
    <div>
      <h1>{{continentName}}</h1>

      <div v-for="c in continentInfo">
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
        var getContinentInfo = this.$axios.get('/continent/findById',{
          params:{
            id:this.currentContinentId
          }
        }).then((response)=>{
          this.currentContinent = response.data;
        }).catch(e=>{
          console.log(e);
        });

        var getCoutryList = this.$axios.get('/country/findByQuery',{
          params:{
            idContinent: this.currentContinent['id']
          }
        }).then((response)=>{
          //返回所有景点（属于某国家的）的信息
          this.countryInfo = response.data;
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
