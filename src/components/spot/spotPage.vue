<template>
  <div>
    <div id="intro">
      <h1>{{currentSpot.name}}</h1>
      <img :src="'../../../static/images/'+currentSpot.photoPath">
      <p class="ellipsis">{{currentSpot.introduction}}</p>
    </div>

    <div id="strategyArea">
      <div id="nullHint" v-if="notNull">
        该景点暂无攻略。
        <img src="../../../static/images/icon/search-14-64.png"/>
      </div>

      <strategy-card
        v-else
        v-for="(a,index) in strategyArticles"
        :key="index"
        :strategy="a"
      >

      </strategy-card>
    </div>

    <div id="toStrategy">
      <div>
        <label for="title">标题</label>
        <input id="title" v-model="strategyTitle">
      </div>
      <div>
        <label for="content">内容</label>
        <textarea id="content" v-model="strategyContent">

        </textarea>
      </div>
      <a @click="commitStrategy" class="btn btn-sm btn-primary" >
        发表攻略
      </a>
    </div>

  </div>

</template>

<script>
  import strategyCard from "./strategyCard";

  export default {
    name: "spotPage",
    components:{
      strategyCard
    },
    props:{
      spot:{
        type: Object
      }
    },
    data(){
      return{
        strategyTitle:'',
        strategyContent:'',
        currentSpot:{},
        strategyArticles:[],
      }
    },
    computed:{
      notNull(){
        return !this.strategyArticles.length;
      }
    },
    methods:{
      getData(){
        this.$axios.get('/spot/findSpotAndStrategies',{
          params:{
            id:this.$route.query['currentSpotId']
          }
        }).then(({data:{data:{spot,strategies}}})=>{
          this.currentSpot = spot;
          this.strategyArticles = strategies;
          this.addUserHistory();
        }).catch(e=>{
          console.log(e);
        });
      },
      addUserHistory(){
        try{
          let userToken = document.cookie.split("; ").filter(entry=>{
            let [key,value] = entry.split('=');
            return key==='usertoken';
          })[0].split('=')[1];
          let obj = {'idSpot':this.currentSpot.id};
          console.log(obj);
          this.$axios.post('/browse/updateRecord',this.$qs.stringify(obj),{
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            withCredentials: true
          }).then(({data:{resCode}})=>{
            if(resCode==='1'){
              console.log('成功');
            }else{
              console.log('fail');
            }
          });
        }catch(e){
          console.log(e);
        }
      },
      commitStrategy(){
        let strategy = {
          idSpot: this.$route.query['currentSpotId'],
          content: this.strategyContent,
          title: this.strategyTitle
        };
        this.$axios.post('/strategy/addStrategy',this.$qs.stringify(strategy),{
          headers: { 'content-type': 'application/x-www-form-urlencoded'},
          withCredentials: true,
        }).then(({data:{resCode}})=>{
          if(resCode==='1'){
            alert('发表成功！');
            this.getData();
          }else{
            alert('发表失败，身份过期，请重新登录！');
            this.$router.push("/login");
          }
        });
      }
    },
    mounted(){
      this.getData();
      alert(this.notNull());
      // this.addUserHistory(); getData中有ajax一步获取数据，要在resolved之后添加记录
    }
  }
</script>

<style scoped lang="less">
  div#intro{
    border-bottom: 1px solid grey;
    h1+img{
      width: 90%;
      margin: 10px 0;
      &+div{
        text-align: left;
        text-indent: 2em;
      }
    }
  }
  div#strategyArea{
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid grey;
    text-align: left;
    &#nullHint{
      padding: 40px;
      text-align:center;
    }
  }
  div#toStrategy{
    width: 80%;
    padding: 10px 0;
    margin: 10px auto;
    text-align: left;
    overflow: hidden;
    & input,& textarea{
      vertical-align: middle;
      margin: 10px 0;
    }
    & input{
      width: 100%;
    }
    & textarea{
      width: 100%;
      height: 300px;
    }
    & a{
      float: right;
    }
  }
</style>
