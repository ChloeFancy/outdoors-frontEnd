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
        <h5>
          <router-link :to="{name:'personalPage',query:{userId:c.id},params:{user:c}}">
            {{c.name}}
          </router-link>
        </h5>
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
    props:{
      currentArticle:{
        type: Object
      }
    },
    data(){
      return{
        comments:[],
      }
    },
    methods:{
      getData(){
        this.$axios.get('comment/findByStrategy',{
          params:{
            idStrategy:this.$route.query['id']
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
