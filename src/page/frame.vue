<template>
	<div id="b-wrap">
		<BHeader></BHeader>
        <div class="b-content">
            <NArticle></NArticle>
        </div>		
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

<style scoped lang="scss">

.b-content{
    padding: 20px;
    background: #f3f3f3;
    padding-top:80px;
}
</style>