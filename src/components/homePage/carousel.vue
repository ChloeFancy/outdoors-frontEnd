<template>
  <div>
    <div id="theCarousel" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#theCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#theCarousel" data-slide-to="1"></li>
        <li data-target="#theCarousel" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <a href="#"><img class="d-block w-100" src="../../../static/images/carousel_images/london.jpg"></a>
          <div class="carousel-caption d-none d-md-block">
            <h5>Outdoors</h5>
            <p>旅游攻略？你想要的这儿都有！</p>
          </div>
        </div>
        <div class="carousel-item">
          <a href="dubai.html"><img class="d-block w-100" src="../../../static/images/carousel_images/dubai.jpg"></a>
          <div class="carousel-caption d-none d-md-block">
            <h5>迪拜</h5>
            <p>想来中东体验富豪生活吗？</p>
          </div>
        </div>
        <div class="carousel-item">
          <a href="#"><img class="d-block w-100" src="../../../static/images/carousel_images/sydney.jpg"></a>
          <div class="carousel-caption d-none d-md-block">
            <h5>悉尼</h5>
            <p>听一场宏大的歌剧。</p>
          </div>
        </div>
      </div>

      <a class="carousel-control-prev" href="#theCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#theCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "carousel"
  }
</script>

<style scoped>

</style>
