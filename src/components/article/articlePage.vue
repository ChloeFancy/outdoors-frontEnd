<template>
    <div class="article">
      <div class="right">
        <spot-brief :idSpot="currentArticle.idSpot">

        </spot-brief>
      </div>
      <div class="left">
        <article>
          <!--总结：页面的主要信息，例如这里的文章信息，不能考传props，因为一刷新就没了，还是得靠获取-->
          <!--关于文章内容和评论区内容，为了提升性能，考虑减少http请求次数，因此把两个请求合并为一个请求-->
          <h3>{{currentArticle.title}}</h3>

          <router-link :to="{name:'personalPage',query:{userId:currentArticle.idWriter}}">
            <h5>{{currentArticle.writerName}}</h5>
          </router-link>

          <main>
            {{currentArticle.content}}
          </main>
        </article>

        <div id="comments">
          <h5>评论区</h5>

          <comment-card v-for="(c,index) in comments" :key="index" :comment="c">

          </comment-card>

          <div id="toComment">
            <textarea id="comment" v-model="commentContent"></textarea>
            <a @click="commitComment" class="btn btn-sm btn-primary text-white" >
              发布评论
            </a>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
  import httpUtil from "../../myHttp/httpUtil";
  import commentCard from "./commentCard";
  import spotBrief from "./spotBrief";
  export default {
    name: "article",
    // props:{
    //   currentArticle:{
    //     type: Object
    //   }
    // },
    data(){
      return{
        currentArticle:{},
        comments:[],
        commentContent:'',
      }
    },
    components:{
      commentCard,
      spotBrief
    },
    methods:{
      getData(){
        this.$axios.get('strategy/getArticleAndComments',{
          params:{
            id:this.$route.query['id']
          }
        }).then(({data:{data:{comments,strategy}}})=>{

          this.comments = httpUtil.parseJSONArray(comments);
          this.currentArticle = strategy;
        });
      },
      commitComment(){
        let comment = {
          idStrategy: this.$route.query['id'],
          comment: this.commentContent
        };
        this.$axios.post("/comment/addComment",this.$qs.stringify(comment),{
          headers: { 'content-type': 'application/x-www-form-urlencoded'},
          withCredentials: true,
        }).then(({data:{resCode}})=>{
          if(resCode==='1'){
            alert('评论成功！');
          }else{
            alert('评论失败，身份过期，请重新登录！');
            this.$router.push("/login");
          }
        });
      }
    },
    created(){
      this.getData();
    }
  }
</script>

<style scoped lang="less">
  div.article{
    padding: 30px 0;
    & main{
      text-indent: 2em;
    }
  }
  div.left{
    width: calc(100% - 320px);
    overflow: hidden;
  }
  div.right{
    float: right;
    width: 300px;
  }

  div#comments{
    text-align: left;
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid darkgray;
  }

  div#toComment{
    border-bottom: 1px solid rgba(0,0,0,0.09);
    border-top: 1px solid rgba(0,0,0,0.09);
    padding: 0 20px;
    background-color: #FAFAFA;
    overflow: hidden;
  }

  div#toComment textarea{
    margin: 10px 0;
    width: 100%;
    height: 100px;
    vertical-align: middle;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  div#toComment a{
    float: right;
    margin-bottom: 10px;
  }

</style>
