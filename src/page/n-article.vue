<template>
	<ul id="article-content">
		<li class="b-article" v-for="item in  article" :key="item.blog_id">
			<h1 class="article-title"><a :href="'/detail/'+item.blog_id" target="_blank">{{item.blog_title}}</a></h1>

			<p>{{item.blog_introduction}}</p>
			<div class="article-info"><span class="type-tip" :class="{frontend:item.blog_type==1,backend:item.blog_type==2}">{{dealType(item.blog_type)}}</span>{{item.blog_time}}</div>
		</li>
	</ul>
</template>

<script>
import {mapState} from 'vuex';

export default{
	name:'blogArticle',
	data(){
		return{
			article:[]
		}
	},
	computed:{
		...mapState(['blogType']),
		typeObj(){
			return {

			}
		}
	},
	created(){
		this.getBlogByType(this.blogType);
	},
	methods:{
		getBlogByType(type){
			if(type==undefined){
				type='';
			}
			var self = this;
			this.$Spin.show();
			this.$axios.get('/api/blog/'+type).then(res=>{
				self.article  = res.data;
				this.$Spin.hide();
			}).catch(err=>{
				console.log(err);
				this.$Spin.hide();
			})
		},
		dealType(type){
			let typeInfo = type==1?"前端":(type==2?"后端":"大杂烩");


			return typeInfo;
		}
	},
	watch:{
		blogType:function(newValue,oldValue){
			console.log('blog type has changed');
			this.getBlogByType(newValue);
		}
	}
}
</script>

<style lang="scss" >
	#article-content{
		width: 100%;
		margin: 0 auto;
		background: #fff;
		padding: 20px;
		box-shadow: 1px 1px 5px #bdbdbd;
		border-radius: 3px;
		list-style: none;
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
				margin-bottom: 5px;
			}
			.article-info{
				color: #999;
				.type-tip{
					display: inline-block;
					margin-right: 1rem;
					padding: .38rem 0;
					min-width: 2.5rem;
					text-align: center;
					line-height: 1;
					color: #fff;
					background-color: #c69f42;
					border-radius: 2px;
					&.frontend{
						background-color: #56c4e1;
					}
					&.backend{
						background-color: #857dea;
					}
				}
			}
		}


	}
	@media screen and (max-width: 1920px) {
			#article-content{
				width:60rem;
			}
	}
	@media screen and (max-width: 1660px) {
			#article-content{
				width:50rem;
			}
	}
	@media screen and (max-width: 1366px) {
			#article-content{
				width:40rem;
			}
	}

</style>
