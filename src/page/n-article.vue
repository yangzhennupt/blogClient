<template>
	<ul id="article-content">
		<li class="b-article" v-for="item in  transArticle" :key="item.id">
			<h1 class="article-title"><a href="javascript:;">{{item.blog_title}}</a></h1>
			<!-- <div v-html="item.blog_introduction" class="markdown-area"></div> -->
			<p>{{item.blog_introduction}}</p>
			<div class="article-info">{{item.blog_time}}</div>
		</li>
	</ul>
</template>

<script>


export default{
	name:'blogArticle',
	data(){
		return{
			msg:'# hello world #',
			article:[]
		}
	},
	computed:{
		 transArticle(){			 
			 for(var i = 0;i<this.article.length;i++){
				this.article[i].blog_content=this.$marked(this.article[i].blog_content);
			 }
		 	return this.article;
		 }
	},
	beforeCreate(){
			var self = this;
			console.log(self.getBlogByType)
			this.$axios.get('/api/blog').then(res=>{
				self.article  = res.data;
			}).catch(err=>{
				console.log(err)
			})
	},
	methods:{
		getBlogByType(){
			var self = this;
			this.$axios.get('/api/blog').then(res=>{
				self.article  = res.data;
			}).catch(err=>{
				console.log(err)
			})
		}
	}
}
</script>

<style lang="scss" scoped >
	#article-content{
		width: 100%;
		margin: 0 auto;
		background: #fff;
		padding: 20px;
		box-shadow: 1px 1px 5px #bdbdbd;
		border-radius: 3px;
		.b-article{
			border-bottom: 1px dashed #dedede;
			padding: 5px 0;
			>h1{
				margin-bottom: 5px;
				
				a{
					color: #333
				}
			}
			>p{
				font-size:14px;
				color: #666;
			}
		}
			
		
	}
	@media screen and (max-width: 1920px) {
			#article-content{
				width:100rem;
			}	
	}
	@media screen and (max-width: 1660px) {
			#article-content{
				width:80rem;
			}
	}
	@media screen and (max-width: 1366px) {
			#article-content{
				width:60rem;
			}
	}
	
</style>