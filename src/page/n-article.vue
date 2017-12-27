<template>
	<div id="article-content">
		<div class="b-article" v-html="transArticle">
			
		</div>
	</div>
</template>

<script>
import marked from 'marked';
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,																														
  smartypants: false
});

export default{
	name:'article',
	data(){
		return{
			msg:'# hello world #'
		}
	},
	computed:{
		 transArticle(){
		 	return marked(this.msg);
		 }
	}
}
</script>

<style scoped>
	
</style>