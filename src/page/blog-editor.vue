<template>
  <div id="blogEditor">
    <Form :model="blog" label-position="left" >
         <FormItem label="请输入文章的标题：">
            <Input v-model="blog.title"></Input>
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
              value:''
          }
      }
  },
  methods:{
      submitText(){
          var self = this;
          if(this.blog.title&&this.blog.value){
                this.$Spin.show();
                this.$axios.post('/api/blog',{
                    blog_title:self.blog.title,
                    blog_content:self.blog.value
                }).then(res=>{
                    self.$Message.success('博客保存成功！');
                    self.$Spin.hide();
                }).catch(err=>{
                    self.$Message.error('博客保存失败，请稍后再试。');
                    self.$Spin.hide();
                })
          }else{
                self.$Message.warning('博客标题或内容不能为空！'); 
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

<style  scoped>
#blogEditor{
    padding: 20px;
}
.saveBtn{
    margin-top: 15px;
}
</style>

