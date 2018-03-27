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
<style lang="scss">
    #blogDetail{
        background: #fff;
        width: 56rem;
        margin: 0 auto;
        padding: 2rem;
        box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
        border-radius: 2px;
        .markdown-area{
            font-size: 14px;
            &>p{
                margin: 10px 0;
            }
            blockquote{
                p{
                    padding: 0 1em;
                    color: #6a737d;
                    border-left: 0.25em solid #dfe2e5;
                    margin:1rem 0;
                }
            }
            pre{
                background-color: #f6f8fa;
                padding: 1.6rem;
            }
        }
    }
    
</style>
