import { createLocalVue, mount } from '@vue/test-utils'
import TodoFooter from '@/components/TodoApp/TodoFooter.vue'
import VueRouter from 'vue-router'

// 在测试中使用路由
const localVue = createLocalVue()
localVue.use(VueRouter)
// 高亮的样式
const router = new VueRouter({
  linkActiveClass: 'selected'
})

describe('TodoFooter.vue', () => {
  /** @type {import('@vue/test-utils').Wrapper} */
  let wrapper = null

  beforeEach(async () => {
    const todos = [
      { id: 1, text: 'eat', done: false },
      { id: 2, text: 'play', done: true },
      { id: 3, text: 'sleep', done: false }
    ]
    // mount 使用深渲染
    wrapper = mount(TodoFooter, {
      propsData: {
        todos
      },
      localVue,
      router
    })
  })

  // 测试已完成的个数
  test('Done Todos Count', async () => {
    const count = wrapper.vm.todos.filter(t => !t.done).length
    const countEl = wrapper.find('[data-testid="done-todos-count"]')
    expect(Number.parseInt(countEl.text())).toBe(count)
  })

  // 只要有一个选中，Clear completed的按钮就会出现
  test('Clear Completed Show', async () => {
    const button = wrapper.find('[data-testid="clear-completed"]')
    expect(button.exists()).toBeTruthy()

    // 手动清除数据清除所有任务的完成状态，判断 button 不存在
    wrapper = mount(TodoFooter, {
      propsData: {
        todos: [
          { id: 1, text: 'eat', done: false },
          { id: 2, text: 'play', done: false },
          { id: 3, text: 'sleep', done: false }
        ]
      },
      localVue,
      router
    })
    // 必须要重新获取 button
    expect(wrapper.find('[data-testid="clear-completed"]').exists()).toBeFalsy()
  })

  // 清除选中
  test('Clear Completed', async () => {
    const button = wrapper.find('[data-testid="clear-completed"]')
    await button.trigger('click')
    // 发送事件给父元素
    expect(wrapper.emitted()['clear-completed']).toBeTruthy()
  })

  // 测试判断路由跳转
  test('Router Link ActiveClass', async () => {
    const links = wrapper.findAllComponents({ name: 'RouterLink' })
    router.push('/active')
    // 等待视图更新
    await localVue.nextTick()
    for (let i = 0; i < links.length; i++) {
      const link = links.at(i)
      if (link.vm.to === '/active') {
        expect(link.classes()).toContain('selected')
      } else {
        expect(link.classes('selected')).toBeFalsy()
      }
    }

    router.push('/completed')
    await localVue.nextTick()
    for (let i = 0; i < links.length; i++) {
      const link = links.at(i)
      if (link.vm.to === '/completed') {
        expect(link.classes()).toContain('selected')
      } else {
        expect(link.classes('selected')).toBeFalsy()
      }
    }

    router.push('/')
    await localVue.nextTick()
    for (let i = 0; i < links.length; i++) {
      const link = links.at(i)
      if (link.vm.to === '/') {
        expect(link.classes()).toContain('selected')
      } else {
        expect(link.classes('selected')).toBeFalsy()
      }
    }
  })

  // test('snapshot', () => {
  //   expect(wrapper.html()).toMatchSnapshot()
  // })
})
