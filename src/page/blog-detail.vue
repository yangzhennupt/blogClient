<template>
  <div id="blogDetail">
     <div v-html="transArticle" class="markdown-area"></div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            blog:{}
        }
    },
    computed:{     
		 transArticle(){			 
			//  for(var i = 0;i<this.article.length;i++){
			// 	this.article[i].blog_content=this.$marked(this.article[i].blog_content);
			//  }
             // return this.article;
             return this.$marked(this.blog.blog_content);
		 }
    },
    created(){
        let self = this,
            id = this.$route.params.id;
            this.$Spin.show();
			this.$axios.get('/api/blog/detail/'+id).then(res=>{
				self.blog  = res.data;
				this.$Spin.hide();
			}).catch(err=>{
				console.log(err);
				this.$Spin.hide();
			})
    },
    methods:{

    }

}
</script>
<style scoped>

</style>
