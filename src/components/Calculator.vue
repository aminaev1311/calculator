<template>
  <div class="hello">
    <h1> Calculator </h1>
    <input type="number" v-model.number="num1" name="num1"/>&nbsp;
    <input type="number" v-model.number="num2" name="num2"/>
    = {{ result }}
    <div class="error" v-if="error">
        {{ error }}
    </div>
    <div class="operations">
      Choose an operation:
      <div>
        <button
          v-for="action in operations"
          :key="action.operation"
          @click="calculate(action.operation)"
          :name="action.operation"
        > {{ action.sign }} </button>
      </div>
    </div>
    <div class="keyboard">
      <label>
        <input type="checkbox" id="showKeyboard" v-model="showKeyboard">
        Show Keyboard
      </label>
      <div class="buttons" v-if="showKeyboard">
        <button
          v-for="(button,idx) in buttons"
          :key="idx" @click="buttonClickHandler(+button.value)"
          :data-num="+button"
          :name="button.name"
          :class="button.name"
        > {{ button.value }} </button>
        <button @click="eraseDigitClickHandler"
        name="eraseDigit"
        >&lt;--</button>
      </div>
    </div>
    <div class="operands">
      <label>
        <input type="radio" id="one" name="one" :value='+1' v-model="operandChosend">
        Operand 1
      </label>
      <label>
        <input type="radio" id="two" :value='+2'
        name="two"
        v-model="operandChosend">
        Operand 2
      </label>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'Calculator',
  data: () => ({
    num1: null,
    num2: null,
    result: null,
    showKeyboard: true,
    buttons: [
      { value: 0, name: 'zero' },
      { value: 1, name: 'one' },
      { value: 2, name: 'two' },
      { value: 3, name: 'three' },
      { value: 4, name: 'four' },
      { value: 5, name: 'five' },
      { value: 6, name: 'six' },
      { value: 7, name: 'seven' },
      { value: 8, name: 'eight' },
      { value: 9, name: 'nine' }
    ],
    operations: [
      { operation: 'add', sign: '+' },
      { operation: 'subtract', sign: '-' },
      { operation: 'multiply', sign: '*' },
      { operation: 'devide', sign: '/' },
      { operation: 'modulus', sign: '%' },
      { operation: 'power', sign: 'x^y' }
    ],
    operandChosend: 1,
    error: '',
    log: null,
    logs: {}
  }),
  methods: {
    eraseDigitClickHandler () {
      this.operandChosend === 1 ? this.num1 = Math.trunc(this.num1 / 10) : this.num2 = Math.trunc(this.num2 / 10)
    },
    buttonClickHandler (num) {
      this.operandChosend === 1 ? this.num1 = this.num1 * 10 + num : this.num2 = this.num2 * 10 + num
    },
    calculate (op) {
      const { num1, num2 } = this
      this.error = ''

      const operationsMapping = {
        add: () => +num1 + +num2,
        subtract: () => +num1 - +num2,
        multiply: () => +num1 * +num2,
        devide: () => {
          if (+num2 === 0) {
            this.error = 'Cannot devide by zero'
            return null
          }
          return +num1 / +num2
        },
        modulus: () => +num1 % +num2,
        power: () => Math.pow(+num1, +num2)
      }

      this.result = operationsMapping[op]()

      // this.logs[Date.now()] = `${num1} ${op} ${num2} = ${this.result}`
      Vue.set(this.logs, Date.now(), `${num1} ${op} ${num2} = ${this.result}`)
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

.error {
  padding: 1px;
  border: 1px solid red;
}
</style>
