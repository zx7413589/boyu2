<template>
  <div id="dd_content">
      <div v-html="content"></div>
    <!-- 固定尾部 -->
    <p><img src="http://vky-oss.inboyu.com/upload/39efed70-b851-5862-1275-b35ab76de118.png" alt=""></p>
  </div>
</template>

<style>
#dd_content
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  outline: none;
}
ul,li,a{
    list-style: none;
}
#dd_content {
  width: 50%;
  margin: 0 auto;

}
#dd_content h2{
    display: block;margin:80px auto !important;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    }
#dd_content p{display:block;padding: 0.3em 0; }
</style>

<script>
export default {
    data(){
        return{
            content:""
        }
    },
    mounted(){
        this.$store.commit("changeheaderactive", 3);

        let id=this.$route.params.id;
        // console.log(id);
        this.axios.get(`/dddetail?id=${id}`).then(res=>{
            let content=res.data.result[0].article;
            this.content=content;
        // console.log(this.content)
        })
    }
}
</script>