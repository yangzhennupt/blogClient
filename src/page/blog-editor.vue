<template>
  <div id="blogEditor">
      编辑界面
  </div>
</template>

<script>
export default {
  data(){
      return {
          msg:'ddd'
      }
  },
  created(){
      console.log(this.$route.params);
  }
}
</script>

<<style lang="sass" scoped>

</style>

