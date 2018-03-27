<template>
  <div id="blogEditor">
    <Form :model="blog" label-position="left" >
         <FormItem label="请输入文章的标题：">
            <Input v-model="blog.title"></Input>
        </FormItem>
        <FormItem label="请输入文章的简介：">
            <Input v-model="blog.introduction"></Input>
        </FormItem>
        <FormItem label="请选择文章的分类：">    
            <Select v-model="blog.type" style="width:200px">
                <Option v-for="item in typeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select> 
        </FormItem>  
    </Form>
    <mavon-editor v-model="blog.value"/>    
    <Button type="primary" @click="submitText" class="saveBtn">保存</Button>
  </div>
    
</template>

<script>
export default {
  data(){
      return {
          blog:{
              title:'',
              value:'',
              introduction:'',
              type:''
              
          },
          typeList:[{
                  label:'前端',
                  value:'1'
              },{
                  label:'服务端',
                  value:'2'
              },{
                  label:'大杂烩',
                  value:'3'
        }]
      }
  },
  methods:{
      submitText(){
          var self = this;
          if(this.blog.title&&this.blog.value&&this.blog.introduction&&this.blog.type){
                this.$Spin.show();
                this.$axios.post('/api/blog',{
                    blog_title:self.blog.title,
                    blog_introduction:self.blog.introduction,
                    blog_content:self.blog.value,
                    blog_type:self.blog.type
                }).then(res=>{
                    self.$Message.success('博客保存成功！');
                    self.$Spin.hide();
                }).catch(err=>{
                    self.$Message.error('博客保存失败，请稍后再试。');
                    self.$Spin.hide();
                })
          }else{
                self.$Message.warning('所有为必填项，不能为空！'); 
          }
          
      }
  },
  computed:{
       
  },
  created(){
      console.log(this.$route.params);
  }
}
</script>

<style   lang="scss">
#blogEditor{
    padding: 20px;
}
.saveBtn{
    margin-top: 15px;
}
.markdown-body{
    z-index: 0 !important;
}

</style>

