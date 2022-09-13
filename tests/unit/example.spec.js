import { shallowMount, mount } from '@vue/test-utils'
// shallowMount 渲染函数
import HelloWorld from '@/components/HelloWorld.vue'
// import Vue from 'vue'

// test.only('HelloWorld.vue', () => {
//   const shallowMountWrapper = shallowMount(HelloWorld)
//   const mountWrapper = mount(HelloWorld)
//
//   // shallowMount 是浅渲染
//   console.log(shallowMountWrapper.html())
//
//   // mount 是深渲染
//   console.log(mountWrapper.html())
// })

test('HelloWorld.vue', () => {
  const shallowMountWrapper = shallowMount(HelloWorld)
  const mountWrapper = mount(HelloWorld)

  // shallowMount 是浅渲染
  console.log(shallowMountWrapper.html())

  // mount 是深渲染
  console.log(mountWrapper.html())
})

test('HelloWorld.vue', async () => {
  // 挂载组件
  const wrapper = shallowMount(HelloWorld, {
    propsData: {
      msg: 'Hello World'
    }
  })

  const countText = wrapper.find('[data-testid="count-text"]')
  const button = wrapper.find('button')
  const btn2 = wrapper.find('[data-testid="btn2"]')

  expect(countText.text()).toBe('0')

  // 触发事件 添加await，因为 dom 更新是异步的，添加之后不需要 await Vue.nextTick()
  await button.trigger('click')

  // await Vue.nextTick()

  expect(wrapper.vm.count).toBe(1)

  expect(countText.text()).toBe('1')

  console.log(wrapper.emitted())

  // 触发事件
  await btn2.trigger('click')

  console.log(wrapper.emitted())

  // 判断是否真实发布了事件
  expect(wrapper.emitted().hello).toBeTruthy()
  // 测试结果
  expect(wrapper.emitted().hello[0][0]).toBe(123)

  // console.log(wrapper.element.innerHTML)
  // console.log(wrapper.html())
  // expect(wrapper.html()).toContain('Hello World')
})
