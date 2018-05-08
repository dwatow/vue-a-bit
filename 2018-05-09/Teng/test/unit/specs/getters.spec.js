// 測試$get_bill
import { getters } from '@/store/index'

describe('getters', () => {
  it('$get_bill', () => {
    // 模拟状态
    const state = {
      items: [
        {
          name:"Apple iPhone X (64G)-銀色",
          price:31888,
          quantity:0,
          total:0
        },
        {
          name:"Apple iPhone 7 (128G)-玫瑰金",
          price:20999,
          quantity:1,
          total:20999
        },
        {
          name:"Apple iPhone 7 (256G)-紅色",
          price:21888,
          quantity:2,
          total:43776
        }
      ],
      bill: 64775
    }
    // 获取 getter 的结果
    const result = getters.$get_bill(state)

    // 断言结果
    expect(result).toEqual(state.bill)
  })
})
