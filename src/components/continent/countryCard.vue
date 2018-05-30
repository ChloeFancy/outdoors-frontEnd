<template>
    <div>
      <div class="card">
        <router-link
          :to="{name:'country',query:{currentCountryId:country.id}}"
        >
          <img :src="'../../../static/images/'+country.photoPath">
          <div>
            <h3>
              {{country.name}}
            </h3>
            <div>
              {{country.description}}
            </div>
          </div>
        </router-link>
      </div>
    </div>
</template>

<script>
  export default {
    name: "countryCard",
    props:['country']
  }
</script>

<style scoped lang="less">
  div.card{
    padding: 10px;
    margin: 10px 0;
    overflow: hidden;
  }
  img{
    width: 50%;
    float: left;
  }
  img+div{
    padding-left: 10px;
    overflow: hidden;
    & h3+div{
      text-align: left;
      text-indent: 2em;
    }
  }
</style>
