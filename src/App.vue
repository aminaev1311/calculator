<template>
  <div id="app">
    <Calculator/>
    <Test />
  </div>
</template>

<script>
import Calculator from './components/Calculator.vue'
import Test from './components/test.vue'

export default {
  name: 'App',
  components: {
    Calculator,
    Test
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
