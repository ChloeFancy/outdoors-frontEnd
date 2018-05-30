<template>
    <div :class="position">
      <canvas id="loading">

      </canvas>
    </div>
</template>

<script>
  export default {
    name: "loadingIcon",
    props:['position'],
    mounted(){
      let c = document.getElementById("loading");
      let context = c.getContext("2d");
      c.width = 200;
      c.height = 200;

      let cx = c.width/2;
      let cy = c.height/2;
      let radius = 30;

      let r = [3,4,4.5,5,6,7];
      let angle = [10,25,45,66,90,120];
      let alpha = [0.25,0.35,0.45,0.65,0.8,1];
      let x = [],y = [];
      function blueCircle() {
        x = [];
        y = [];
        for(let i=0,len=r.length;i<len;i++){
          if(angle[i]>360){
            angle[i] = 0;
          }
          context.beginPath();
          context.fillStyle = `rgba(125,125,255,${alpha[i]})`;
          x.push(cx+radius*Math.cos(angle[i]*Math.PI/180));
          y.push(cy+radius*Math.sin(angle[i]*Math.PI/180));
          context.arc(x[i],y[i],r[i],0,2*Math.PI,true);
          context.closePath();
          context.fill();
          angle[i]+=5;
        }
      }

      (function draw(){
        window.requestAnimationFrame(draw);
        context.clearRect(0,0,c.width,c.height);
        blueCircle();
      }());
    }
  }
</script>

<style scoped>
  div{
    width: 200px;
    height: 200px;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  .fixed{
    position: fixed;
  }
  .absolute{
    position: absolute;
  }
</style>
