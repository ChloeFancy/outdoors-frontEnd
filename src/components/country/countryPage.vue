<template>
    <div>
      {{countryName}}
    </div>
</template>

<script>
  export default {
    name: "countryPage",
    props:['countryName'],
    data(){
      return{
        countryInfo:[]
      }
    },
    methods:{
      getData(){
        this.$axios.get('/spot',{
          params:{
            country:this.countryName
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
