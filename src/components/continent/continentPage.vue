<template>
    <div>
      {{continentName}}
    </div>
</template>

<script>
  export default {
    name: "continentPage",
    props:['continentName'],
    data(){
      return{
        countryInfo:[],
      }
    },
    methods:{
      getData(){
        this.$axios.get('/country',{
          params:{
            continent:this.continentName
          }
        }).then((response)=>{
          //返回所有景点（属于某国家的）的信息
          this.countryInfo = response.data;
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
