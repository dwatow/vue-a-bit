import { mutations } from '@/store/index'

// 解构 `mutations`
const { $increase_item, $decrease_item, $remove_item, $update_bill } = mutations

describe('mutations', () => {
  // 測試$increase_item
  it('$increase_item', () => {
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

    // 应用 mutation
    $increase_item(state, 0)
    $increase_item(state, 2)
    // 断言结果
    expect(state.items[0]).toEqual(
      {
        name:"Apple iPhone X (64G)-銀色",
        price:31888,
        quantity:1,
        total:31888
      }
    )
    expect(state.items[2]).toEqual(
      {
        name:"Apple iPhone 7 (256G)-紅色",
        price:21888,
        quantity:3,
        total:65664
      }
    )
  })

  // 測試$decrease_item
  it('$decrease_item', () => {
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

    // 应用 mutation
    $decrease_item(state, 1)
    $decrease_item(state, 2)
    // 断言结果
    expect(state.items[1]).toEqual(
      {
        name:"Apple iPhone 7 (128G)-玫瑰金",
        price:20999,
        quantity:0,
        total:0
      }
    )
    expect(state.items[2]).toEqual(
      {
        name:"Apple iPhone 7 (256G)-紅色",
        price:21888,
        quantity:1,
        total:21888
      }
    )
  })
})
