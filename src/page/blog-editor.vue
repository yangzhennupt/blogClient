<template>
  <div id="blogEditor">
      <mavon-editor v-model="value"/>
  </div>
</template>

<script>
export default {
  data(){
      return {
          value:''
      }
  },
  computed:{
       
  },
  created(){
      console.log(this.$route.params);
  }
}
</script>

<style lang="sass" scoped>

</style>

