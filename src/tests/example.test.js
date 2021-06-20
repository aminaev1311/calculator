import TestComponent from './TestComponent.vue'
import { mount } from '@vue/test-utils'

describe('TestComponent', ()=> {
  test('Content of TestComponent', () => {
    const wrapper = mount(TestComponent, {
      propsData: {
        message: 'Hello from test!'
      }
    })
    expect(wrapper.text()).toContain('The message is: Hello from test!')
  })
})