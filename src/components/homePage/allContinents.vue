<template>

</template>

<script>
  export default {
    name: "allContinents",
    data(){
      return{
        continentInfo:[],
      }
    },
    methods:{
      getData(){
        this.$axios.get('/continent/findAll')
          .then(response=>{
            this.continentInfo = response.data;
          }).catch(e=>{
            console.log(e);
        })
      }
    }
  }
</script>

<style scoped>

</style>
