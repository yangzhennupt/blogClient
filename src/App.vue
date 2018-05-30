<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss" >
body{
  font-size: 62.5%;
  height: 100%;
  background: #f3f3f3;
}
#app{
      overflow-x: auto;
}

</style>
