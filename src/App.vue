<template>
  <div id="app">
    <router-view name="top"></router-view>
    <div class="main">
      <router-view  name="main"></router-view>
    </div>
    
    <router-view name="bottom"></router-view>       
  </div>
</template>

<script>



export default {
  name: 'app'
}
</script>

<style scope>
 #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
} 

.main{
  width: auto;
  min-height: 720px;
  align-content: center;
  align-items: center;
  align-self: center;
  text-align: center;
  vertical-align: middle;
  background: #eee;
}


</style>
