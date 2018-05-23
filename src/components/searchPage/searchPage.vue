<template>
  <div id="search">
    <div>
      <ul @click="chooseSearch">
        <li id="user" class="active">用户</li>
        <li id="spot">景点</li>
        <li id="strategy">攻略</li>
      </ul>
    </div>

    <div id="searchForm">
      <form class="form-inline">
        <!--<div>-->
        <button class="btn btn-primary" @click.prevent="search" @keyup.enter="search">搜索</button>
        <input class="form-control" v-model="searchKeyword">
        <!--</div>-->
      </form>
    </div>

    <div v-if="!showResult">
      <div id="searchNull">
        搜索结果为空
      </div>
    </div>

    <div v-else>
      <div v-if="searchObject==='user'">
        <user-card v-for='(item,index) in userList' :key="index" :user="item">
        </user-card>
      </div>

      <div v-if="searchObject==='spot'">
        <spot-card v-for='(item,index) in spotList' :key="index" :spot="item">
        </spot-card>
      </div>

      <div v-if="searchObject==='strategy'">
        <div v-for='item in strategyList'>
          <h6>{{item['title']}}</h6>
          <p>{{item['writerName']}}</p>
          <div>{{item['content']}}</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import httpUtil from "../../myHttp/httpUtil";
  import userCard from "./userInfoCard";
  import spotCard from "./spotCard";
  export default {
    name: "searchPage",
    components:{
      userCard,
      spotCard
    },
    data(){
      return{
        searchObject:'user',
        searchKeyword:'',
        spotList:[],
        userList:[],
        strategyList:[],
        curTag: document.querySelector('.active'),
        showResult: true,
      }
    },
    methods:{
      chooseSearch({target}){
        let id = target.id;
        this.curTag&&this.curTag.classList.remove('active');
        target.classList.add('active');
        // console.log(target.classList);//DOMTokenList 
        this.curTag = target;
        if(id){
          this.searchObject = id;
        }
      },
      search(){
        //模糊搜索用户名
        //http://localhost:8080/outdoors/user/fuzzyQuery?keyword=fei
        this.$axios.get(`/${this.searchObject}/fuzzyQuery`,{
          params:{
            keyword:this.searchKeyword,
          },
          withCredentials:true,
        }).then(({data:{data:list,resCode}})=>{
          this.showResult = resCode==='1';
          this[`${this.searchObject}List`] = httpUtil.parseJSONArray(list);
        });
      }
    }
  }
</script>

<style scoped lang="less">
  div#search{
    width:60%;
    margin: 0 auto;
  }
  ul{
    overflow: hidden;
    list-style: none;
    margin: 10px 0;
    li{
      float: left;
      padding: 5px 10px;
      margin: 0 10px;
      &:hover,&.active{
        cursor: pointer;
        background-color: #9fcdff;
      }
    }
  }

  div#searchForm{
    width:100%;
    position: relative;
    input{
      width: 90%;
      margin-right: 10%;
    }
    button{
      position: absolute;
      right: 0;
      /*width:10%;*/
    }
  }

  div#searchNull{
    padding: 30px;
  }
</style>
