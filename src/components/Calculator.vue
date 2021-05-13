<template>
  <div class="hello">
    <h1> Calculator </h1>
    <input type="number" v-model.number="num1"/>&nbsp;
    <input type="number" v-model.number="num2"/>
    = {{ result }}
    <div class="error" v-if="error">
        {{ error }}
      </div>
    <div class="operations">
      Choose an operation:
      <div>
        <button v-for="action in operations" :key="action.operation" @click="calculate(action.operation)"> {{ action.sign }} </button>
      </div>
    </div>
    <div class="keyboard">
      <label>
        <input type="checkbox" id="showKeyboard" v-model="showKeyboard">
        Show Keyboard
      </label>
      <div class="buttons" v-if="showKeyboard">
        <button v-for="(button,idx) in buttons" :key="idx" @click="buttonClickHandler(+button)" :data-num="+button"> {{ button }} </button>

        <button @click="eraseDigitClickHandler">&lt;--</button>
      </div>
    </div>
    <div class="operands">
      <label>
        <input type="radio" id="one" :value='+1' v-model="operandChosend">
        Operand 1
      </label>
      <label>
        <input type="radio" id="two" :value='+2' v-model="operandChosend">
        Operand 2
      </label>
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
    num1: '',
    num2: '',
    result: 0,
    showKeyboard: true,
    buttons: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    operations: [{ operation: 'add', sign: '+' }, { operation: 'subtract', sign: '-' }, { operation: 'multiply', sign: '*' }, { operation: 'devide', sign: '/' }, { operation: 'modulus', sign: '%' }, { operation: 'power', sign: 'x^y' }],
    operandChosend: 1,
    error: ''
  }),
  methods: {
    eraseDigitClickHandler () {
      // if (this.operandChosend === 1) {
      //   this.num1 = this.num1.slice(0, this.num1.length - 1)
      // } else {
      //   this.num2 = this.num2.slice(0, this.num2.length - 1)
      // }
      this.operandChosend === 1 ? this.num1 = this.num1.slice(0, this.num1.length - 1) : this.num2.slice(0, this.num2.length - 1)
    },
    buttonClickHandler (num) {
      // if (this.operandChosend === 1) {
      //   this.num1 += num
      // } else {
      //   this.num2 += num
      // }
      this.operandChosend === 1 ? this.num1 += num : this.num2 += num
    },
    calculate (op) {
      const { num1, num2 } = this
      this.error = ''

      const operationsMapping = {
        add: () => num1 + num2,
        subtract: () => num1 - num2,
        multiply: () => num1 * num2,
        devide: () => {
          if (num2 === 0) {
            this.error = 'Cannot devide by zero'
          }
          return num1 / num2
        },
        modulus: () => num1 % num2,
        power: () => Math.pow(num1, num2)
      }

      this.result = operationsMapping[op]()
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
