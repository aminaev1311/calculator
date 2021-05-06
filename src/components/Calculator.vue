<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input v-model.number="num1"/>&nbsp;
    <input v-model.number="num2"/>
    = {{ result }}
    <div>
      Choose an operation:
      <div>
        <button @click="calculate('add')">+</button>
        <button @click="calculate('subtract')">-</button>
        <button @click="calculate('multiply')">*</button>
        <button @click="calculate('devide')">:</button>
        <button @click="calculate('modulus')">%</button>
        <button @click="calculate('degree')">x^y</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  props: {
    msg: String
  },
  data: () => ({
    num1: 0,
    num2: 0,
    result: 0
  }),
  methods: {
    calculate (op) {
      console.log(op)

      switch (op) {
        case 'add':
          this.result = this.num1 + this.num2
          break
        case 'subtract':
          this.result = this.num1 - this.num2
          break
        case 'multiply':
          this.result = this.num1 * this.num2
          break
        case 'devide':
          this.result = this.num1 / this.num2
          break
        case 'modulus':
          this.result = this.num1 % this.num2
          break
        case 'degree':
          this.result = Math.pow(this.num1, this.num2)
          break
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
