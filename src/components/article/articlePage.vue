<template>
    <div>
      <article>
        <h2>文章标题：{{currentArticle.content}}</h2>

        <main>
          {{currentArticle.content}}
        </main>
      </article>

      以下是评论区：
      <div v-for="c in comments">
        <h5>{{c.idWriter}}</h5>
        <div>
          {{c.content}}
        </div>
      </div>
    </div>
</template>

<script>
  import httpUtil from "../../myHttp/httpUtil";

  export default {
    name: "article",
    data(){
      return{
        currentArticleId:'',
        currentArticle:{},
        comments:[],
      }
    },
    methods:{
      getData(){
        this.currentArticleId = this.$route.query['id'];
        alert(this.currentArticleId)
        this.$axios.get("strategy/findById",{
          params:{
            id:this.currentArticleId
          }
        }).then(({data:{data:article}})=>{
          this.currentArticle = article;
        });

        this.$axios.get('comment/findByQuery',{
          params:{
            idStrategy:this.currentArticleId
          }
        }).then(({data:{data:comments}})=>{
          this.comments = httpUtil.parseJSONArray(comments);
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
