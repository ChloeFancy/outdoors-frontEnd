<template>
  <div class="album p-5 m-0 bg-light">
    <div class="container">
      <div class="row">
        <div class="col-4" v-for="spot in recommendSpots">
          <div class="card mb-4 box-shadow" id="card">
            <router-link :to="{ name: 'spot',
                query: { currentSpotId: spot.id}}"
            >
              <img class="card-img-top" :src="'../../../static/images/'+spot.photoPath">
            </router-link>

            <div class="card-body">
              <h6>{{spot.name}}</h6>
              <p class="card-text text-justify ellipsis">
                {{spot.shortIntro}}
              </p>
            </div>
            <div class="card-footer">
              <router-link :to="{ name: 'spot',
                query: { currentSpotId: spot.id}}"
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
        // hotSpots:[
        //   {
        //     id: 10007,
        //     name:'迪拜',
        //     photoPath:'..\\..\\static\\images\\asia\\dubai\\1.jpg',
        //     shortIntro:'作为迪拜酋长国首府，迪拜已经成为一个全球城市并且是中东地区的商业聚集地。',
        //   },
        //   {
        //     name:'法国',
        //     photoPath:'..\\..\\static\\images\\europe\\paris\\5.jpg',
        //     shortIntro:'巴黎是法国的首都及最大都市，同时是法兰西岛大区首府，为法国的政治与文化中心。',
        //   },
        //   {
        //     name:'香港',
        //     photoPath:'..\\..\\static\\images\\asia\\hongkong\\2.jpg',
        //     shortIntro:'香港是中华人民共和国两个特别行政区之一，主要景点有香港迪士尼乐园、香港海洋公园等。',
        //   },
        //   {
        //     name:'美国',
        //     photoPath:'..\\..\\static\\images\\america\\newyork\\3.jpg',
        //     shortIntro:'纽约是美国人口最多的城市，也是全世界最大的都会区之一——纽约都会区的核心。',
        //   },
        //   {
        //     name:'英国',
        //     photoPath:'..\\..\\static\\images\\europe\\london\\1.jpg',
        //     shortIntro: '伦敦是一个全球城市，名列纽伦港世界三大国际都会之一。',
        //   },
        //   {
        //     id: '10017',
        //     name:'悉尼',
        //     photoPath:'..\\..\\static\\images\\australia\\sydney\\1.jpg',
        //     shortIntro:'悉尼位于澳大利亚东南沿海地带，被称为“世界活化石博物馆”。',
        //   }
        // ],
        recommendSpots:[],
      }
    },
    methods:{
      getData(){
        this.$axios.post('/recommend/getRecSpot',null,{
          headers: { 'content-type': 'application/x-www-form-urlencoded' },
          withCredentials: true,
        }).then(({data:{data,resCode}})=>{
          this.recommendSpots = data;
        }).catch(e=>{
          console.log(e);
        })
      }
    },
    mounted(){
      this.getData();
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
