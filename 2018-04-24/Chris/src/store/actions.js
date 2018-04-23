import axios from 'axios'
import $ from 'jquery'
import 'block-ui'

const corsWhere = 'https://cors-anywhere.herokuapp.com/'

export default {
  initial ({ commit, state }) {
    const currPage = state.paging.indexPage
    const brand = 'Apple'
    const query = `q=${brand}&${currPage}=1&sort=rnk/dc`

    axios.get(`${corsWhere}http://ecshweb.pchome.com.tw/search/v3.3/all/results?${query}`)
      .then((response) => {
        if (response.status === 200) {
          commit('setProducts', response.data)
          commit('setQ', response.data)
          commit('setTotalPage', response.data)
          commit('setTotalRaw', response.data)
        }
      })
  },
  nextPage ({commit, state, getters}) {
    $.blockUI({
      css: {
        border: 'none',
        padding: '15px',
        backgroundColor: '#000',
        '-webkit-border-radius': '10px',
        '-moz-border-radius': '10px',
        opacity: 0.5,
        color: '#fff'
      }
    })

    commit('nextPage')
    const currPage = getters.getIndexPage
    const brand = state.condition.brand
    const query = `q=${brand}&page=${currPage}&sort=rnk/dc`

    axios.get(`${corsWhere}http://ecshweb.pchome.com.tw/search/v3.3/all/results?${query}`)
      .then((response) => {
        console.log(response.statusText)
        if (response.status === 200) {
          commit('setProducts', response.data)
          commit('setQ', response.data)
          commit('setTotalPage', response.data)
          commit('setTotalRaw', response.data)
        }
      })
    setTimeout($.unblockUI, 1000)
  },
  prevPage ({commit, state, getters}) {
    $.blockUI({
      css: {
        border: 'none',
        padding: '15px',
        backgroundColor: '#000',
        '-webkit-border-radius': '10px',
        '-moz-border-radius': '10px',
        opacity: 0.5,
        color: '#fff'
      }
    })
    commit('prevPage')
    const currPage = getters.getIndexPage
    const brand = state.condition.brand
    const query = `q=${brand}&page=${currPage}&sort=rnk/dc`

    axios.get(`${corsWhere}http://ecshweb.pchome.com.tw/search/v3.3/all/results?${query}`)
      .then((response) => {
        console.log(response.statusText)
        if (response.status === 200) {
          commit('setProducts', response.data)
          commit('setQ', response.data)
          commit('setTotalPage', response.data)
          commit('setTotalRaw', response.data)
        }
      })
    setTimeout($.unblockUI, 1000)
  },
  index ({ commit, state }, payload) {
    $.blockUI({
      css: {
        border: 'none',
        padding: '15px',
        backgroundColor: '#000',
        '-webkit-border-radius': '10px',
        '-moz-border-radius': '10px',
        opacity: 0.5,
        color: '#fff'
      }
    })

    commit('setPage', payload)

    const currPage = payload
    const brand = state.condition.brand
    const query = `q=${brand}&page=${currPage}&sort=rnk/dc`

    axios.get(`${corsWhere}http://ecshweb.pchome.com.tw/search/v3.3/all/results?${query}`)
      .then((response) => {
        console.log(response.statusText)
        if (response.status === 200) {
          commit('setProducts', response.data)
          commit('setQ', response.data)
          commit('setTotalPage', response.data)
          commit('setTotalRaw', response.data)
        }
      })
    setTimeout($.unblockUI, 1000)
  },
  removeBuy ({commit}, payload) {
    commit('removeCartOne', payload)
  },
  updateBuyNum ({commit}, payload) {
    commit('updateBuyNum', payload)
  }
}
