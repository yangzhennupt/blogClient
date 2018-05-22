<template>
  <header id="b-head">
    <img  :src="logoUrl" class="b-logo">
    <Menu mode="horizontal" :theme="theme1" active-name=""  @on-select="changMeau">
        <MenuItem name="">
            <Icon type="home"></Icon>
            全部
        </MenuItem>
        <MenuItem name="1">
            <Icon type="ios-paper"></Icon>
            前端
        </MenuItem>
        <MenuItem name="2">
            <Icon type="android-desktop"></Icon>
            服务端
        </MenuItem>
        <MenuItem name="3">
            <Icon type="stats-bars"></Icon>
            大杂烩     
        </MenuItem>
    </Menu>
  </header>
</template>

<script>
import {mapState} from 'vuex';
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      theme1:"light",
      logoUrl:"../../static/image/blog_logo.svg"
    }
  },
  computed:{
		...mapState(['blogType']),
	},
  methods:{
    changMeau(name){
        this.$store.commit('filterBlog',name);
        this.$router.push({path:'/'});
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >
#b-head{
    display: flex;
    justify-content: center;
    position: fixed;
    left:0;
    right:0;
    box-shadow: 0 0px 12px 0px #b3b3b3;
    background: #fff;
}
.b-logo{
    position: absolute;
    left: 100px;
    width: 60px;
    height: 60px;
     
}
</style>
