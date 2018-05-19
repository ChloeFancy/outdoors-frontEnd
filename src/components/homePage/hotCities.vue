<template>
  <div class="album p-5 m-0 bg-light">
    <div class="container">
      <div class="row">
        <div class="col-4" v-for="city in hotCities">
          <div class="card mb-4 box-shadow" id="card">
            <router-link :to="{ name: 'country',
                params: { cityName: city.name}}"
            >
              <img class="card-img-top" :src="city.imgSrc">
            </router-link>

            <div class="card-body">
              <p class="card-text text-justify">
                {{city.description}}
              </p>
            </div>
            <div class="card-footer">
              <router-link :to="{ name: 'city',
                params: { cityName: city.name}}"
              >
                <button type="button" class="btn btn-primary">了解更多</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "hotCities",
    data(){
      return{
        hotCities:[
          {
            name:'迪拜',
            imgSrc:'..\\..\\static\\images\\asia\\dubai\\1.jpg',
            description:'作为迪拜酋长国首府，迪拜已经成为一个全球城市并且是中东地区的商业聚集地。',
          },
          {
            name:'法国',
            imgSrc:'..\\..\\static\\images\\europe\\paris\\5.jpg',
            description:'巴黎是法国的首都及最大都市，同时是法兰西岛大区首府，为法国的政治与文化中心。',
          },
          {
            name:'香港',
            imgSrc:'..\\..\\static\\images\\asia\\hongkong\\2.jpg',
            description:'香港是中华人民共和国两个特别行政区之一，主要景点有香港迪士尼乐园、香港海洋公园等。',
          },
          {
            name:'美国',
            imgSrc:'..\\..\\static\\images\\america\\newyork\\3.jpg',
            description:'纽约是美国人口最多的城市，也是全世界最大的都会区之一——纽约都会区的核心。',
          },
          {
            name:'英国',
            imgSrc:'..\\..\\static\\images\\europe\\london\\1.jpg',
            description: '伦敦是一个全球城市，名列纽伦港世界三大国际都会之一。',
          },
          {
            name:'悉尼',
            imgSrc:'..\\..\\static\\images\\australia\\sydney\\1.jpg',
            description:'悉尼位于澳大利亚东南沿海地带，被称为“世界活化石博物馆”。',
          }
        ],
      }
    }
  }
</script>

<style scoped>
  body {
    font-family: 等线;
  }
  .box-shadow {
    box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);
  }
  #card {
    height: 400px;
  }
  .btn-logup {
    color: white;
    background-color: #E8840C;
  }
</style>
