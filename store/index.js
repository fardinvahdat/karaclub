import Vue from 'vue'
import Vuex from 'vuex'
import blog from './modules/blog'
import menu from './modules/menu'
import products from './modules/products'
import cart from './modules/cart'
import service from './modules/service'
import filter from './modules/filter'
import layout from './modules/layout'
Vue.use(Vuex)
const createStore = () => {
  return new Vuex.Store({
    modules: {
      blog,
      menu,
      products,
      cart,
      service,
      filter,
      layout
    }
  })
}
export default createStore
