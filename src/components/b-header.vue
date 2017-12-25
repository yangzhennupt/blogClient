<template>
  <div id="b-head">
    <img  :src="logoUrl" class="b-logo">
    <Menu mode="horizontal" :theme="theme1" active-name="0"  @on-select="changMeau">
        <MenuItem name="0">
            <Icon type="home"></Icon>
            全部
        </MenuItem>
        <MenuItem name="1">
            <Icon type="ios-paper"></Icon>
            大前端
        </MenuItem>
        <MenuItem name="2">
            <Icon type="android-desktop"></Icon>
            UI设计
        </MenuItem>
        <Submenu name="3">
            <template slot="title">
                <Icon type="stats-bars"></Icon>
                服务端
            </template>
            <MenuGroup title="Node">
                <MenuItem name="3-1">基础</MenuItem>
                <MenuItem name="3-2">框架</MenuItem>
            </MenuGroup>
            <MenuGroup title="Java">
                <MenuItem name="3-4">基础</MenuItem>
                <MenuItem name="3-5">框架</MenuItem>
            </MenuGroup>
        </Submenu>
    </Menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      theme1:"light",
      logoUrl:"/static/image/blog_logo.png"
    }
  },
  methods:{
    changMeau(name){
        console.log(name);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
#b-head{
    display: flex;
    justify-content: center;
    position: relative;
}
.b-logo{
    position: absolute;
    left: 100px;
    width: 60px;
    height: 60px;
     
}
</style>
