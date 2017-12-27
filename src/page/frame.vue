<template>
	<div id="b-wrap">
		<BHeader></BHeader>
		<NArticle></NArticle>
	</div>
</template>

<script>
import BHeader from '@/components/b-header';
import NArticle from '@/page/n-article';
export default{
	name:'frame',
    data(){
        return {
            msg:"yangz is god"
        }
    },
    components:{
    	BHeader,
    	NArticle
    }
}
</script>

<style scoped lang="scss"></style>