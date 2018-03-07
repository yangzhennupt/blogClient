<template>
  <div id="blogDetail">
     <div v-html="transArticle" class="markdown-area"></div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            blog:{
              blog_content:  ''
            }
        }
    },
    computed:{     
		 transArticle(){			 
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
    .markdown-area{
        font-size: 14px;
    }
</style>
