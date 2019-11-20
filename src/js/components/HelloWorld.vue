<template>
  <div>
    <h1>{{title}}</h1>
  </div>
</template>

<script>
  export default{
    name:'HelloWorld',
    data(){
      return{
        title:'Hello World from component .vue'
      }
    }
  }
</script>

<style lang="scss" scoped>
h1{
  color:blue;
}
</style>