<template>
	<ul id="article-content">
		<li class="b-article" v-for="item in  transArticle" :key="item.id">
			<h1><a href="javascript:;">{{item.blog_title}}</a></h1>
			<div v-html="item.blog_introduction"></div>
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
			border-bottom: 1px solid #dedede;
			padding: 5px 0;
			>h1{
				margin-bottom: 5px;
			}
			>div{
				font-size:14px;
			}
		}	

	}	
</style>