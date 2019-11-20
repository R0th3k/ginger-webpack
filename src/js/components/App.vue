<template>
  <div>
    <h1>{{title}}</h1>
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue';
export default{
  name: 'App',
  data(){
    return {
      title: 'Hola Mundo'
    }
  },
  components:{
    HelloWorld
  }
}
</script>

<style lang="scss">
h1{
  color:green;
}
</style>