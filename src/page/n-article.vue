<template>
	<ul id="article-content">
		<li class="b-article" v-for="item in  transArticle" :key="item.id">
			<h1>{{item.blog_title}}</h1>
			<div v-html="item.blog_content"></div>
		</li>
	</ul>
</template>

<script>


export default{
	name:'article',
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
		this.$axios.get('/api/blog').then(res=>{
			self.article  = res.data;
		}).catch(err=>{
			console.log(err)
		})
	}
}
</script>

<style scoped>
	#article-content{
		width:100rem;
		margin:0 auto;

	}
</style>