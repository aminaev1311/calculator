import Calculator from '../components/Calculator.vue'
import { mount } from '@vue/test-utils'

// describe('Input tests', () => {
  
// })

describe('Calculator logic tests', () => {
  test('Test Sum operation', () => {
    const Wrapper = mount(Calculator)
    const num1 = Wrapper.find('input[name=num1]')
    num1.setValue(3)
    const num2 = Wrapper.find('input[name=num2]')
    num2.setValue(4)
    const sumBtn = Wrapper.find('button[name=add]')
    sumBtn.trigger('click')

    expect(Wrapper.vm.result).toBe(7)
  }),
  test('Test Subtract operation', () => {
    const Wrapper = mount(Calculator)
    const num1 = Wrapper.find('input[name=num1]')
    num1.setValue(3)
    const num2 = Wrapper.find('input[name=num2]')
    num2.setValue(4)
    const subtractBtn = Wrapper.find('button[name=subtract]')
    subtractBtn.trigger('click')

    expect(Wrapper.vm.result).toBe(-1)
  }),
  test('Test Multiply operation', () => {
    const Wrapper = mount(Calculator)
    const num1 = Wrapper.find('input[name=num1]')
    num1.setValue(3)
    const num2 = Wrapper.find('input[name=num2]')
    num2.setValue(4)
    const multiplytBtn = Wrapper.find('button[name=multiply]')
    multiplytBtn.trigger('click')

    expect(Wrapper.vm.result).toBe(12)
  }),
  test('Test Devide operation', () => {
    const Wrapper = mount(Calculator)
    const num1 = Wrapper.find('input[name=num1]')
    num1.setValue(3)
    const num2 = Wrapper.find('input[name=num2]')
    num2.setValue(4)
    const devidetBtn = Wrapper.find('button[name=devide]')
    devidetBtn.trigger('click')
    expect(Wrapper.vm.result).toBe(0.75)
  }),
  test('Test modulus operation', () => {
    const Wrapper = mount(Calculator)
    const num1 = Wrapper.find('input[name=num1]')
    num1.setValue(12)
    const num2 = Wrapper.find('input[name=num2]')
    num2.setValue(4)
    const modtBtn = Wrapper.find('button[name=modulus]')
    modtBtn.trigger('click')
    expect(Wrapper.vm.result).toBe(0)
  }),
  test('Test power operation', () => {
    const Wrapper = mount(Calculator)
    const num1 = Wrapper.find('input[name=num1]')
    num1.setValue(12)
    const num2 = Wrapper.find('input[name=num2]')
    num2.setValue(2)
    const powerBtn = Wrapper.find('button[name=power]')
    powerBtn.trigger('click')
    expect(Wrapper.vm.result).toBe(144)
  }),
  test('Devision by zero', () => {
    const Wrapper = mount(Calculator)
    const num1 = Wrapper.find('input[name=num1]')
    num1.setValue(3)
    const num2 = Wrapper.find('input[name=num2]')
    num2.setValue(0)
    const devidetBtn = Wrapper.find('button[name=devide]')
    devidetBtn.trigger('click')

    expect(Wrapper.vm.result).toBe(null)
    expect(Wrapper.vm.error).toContain('Cannot devide by zero')
  }),
  test('Input operand1 and 2 into input fields', () => {
    const Wrapper = mount(Calculator)

    const num1 = Wrapper.find('input[name=num1]')
    num1.setValue(3)
    const num2 = Wrapper.find('input[name=num2]')
    num2.setValue(4)

    expect(Wrapper.vm.num1).toBe(3)
    expect(Wrapper.vm.num2).toBe(4)
  }),
  test('Test of screen keyboard operand 1 chosen', () => {
    const Wrapper = mount(Calculator)

    const showKeyboard = Wrapper.find('#showKeyboard')
    showKeyboard.setChecked()
    const buttonOne = Wrapper.find('.one')
    const operandChosen = Wrapper.find('input[name="one"]')
    operandChosen.setChecked()
    buttonOne.trigger('click')

    expect(Wrapper.vm.num1).toBe(1)
  }),
  test('Test of screen keyboard operand 2 chosen', () => {
    const Wrapper = mount(Calculator)
    const showKeyboard = Wrapper.find('#showKeyboard')
    showKeyboard.setChecked()

    const buttonOne = Wrapper.find('.one')
    const operandChosen = Wrapper.find('input[name=two]')
    operandChosen.setChecked()
    buttonOne.trigger('click')

    expect(Wrapper.vm.num2).toBe(1)
  }),
  test('Test of erase symbol on the virtual keyboard, operand 1', () => {
    const Wrapper = mount(Calculator)
    const num1 = Wrapper.find('input[name=num1]')
    num1.setValue(333)
    const operandChosen = Wrapper.find('input[name="one"]')
    operandChosen.setChecked()

    const eraseDigitBtn = Wrapper.find('button[name=eraseDigit]')
    eraseDigitBtn.trigger('click')

    expect(Wrapper.vm.num1).toBe(33)
  }),
  test('Test of erase symbol on the virtual keyboard, operand 2', () => {
    const Wrapper = mount(Calculator)
    const num2 = Wrapper.find('input[name=num2]')
    num2.setValue(333)
    const operandChosen = Wrapper.find('input[name="two"]')
    operandChosen.setChecked()

    const eraseDigitBtn = Wrapper.find('button[name=eraseDigit]')
    eraseDigitBtn.trigger('click')

    expect(Wrapper.vm.num2).toBe(33)
  })
})
