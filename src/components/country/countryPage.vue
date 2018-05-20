<template>
    <div>
      {{currentCountry.countryName}}

      <div v-for="s in spotInfo">
        <router-link :to="{name:'spot',params:{currentSpotId:s.id}}">
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
  export default {
    name: "countryPage",
    props:{
      currentCountryId:{
        type:String
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
          this.currentCountry = response.data;
        }).catch(e=>{
          console.log(e);
        });

        this.$axios.get('/spot',{
          params:{
            idCountry:this.currentCountry['id']
          }
        }).then((response)=>{
          //返回所有景点（属于某国家的）的信息
          this.spotInfo = response.data;
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
