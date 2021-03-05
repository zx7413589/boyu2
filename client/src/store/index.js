import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cityNames:'北京',
    navImgs:[],
    shopnames:[],
    areaNames:[],
    layout:[],
    boyudd:[],
    countarea:[],
    story:[],
    active:1,
    headeractive:1,
    pageCount:"",
    houses:[],
    shops:[],
    housePagecount:"",
    findseleced:1,
  },
  mutations: {
    changefindseleced(state,payload){
      state.findseleced=payload
    },
    getHouse(state,payload){
      state.houses=payload
    },
    setHousePageCount(state,payload){
      state.housePageCount=payload
    },
    setPageCount(state,payload){
      state.pageCount=payload
    },
    getShop(state,payload){
      state.shops=payload
    },
    changeheaderactive(state,payload){
      state.headeractive=payload
    },
    changeactive(state,payload){
      state.active=payload
    },
    changecity(state,payload){
      state.cityNames=payload
    },
    changebackground(state,payload){
      state.navImgs=payload
    },
    countarea(state,payload){
      state.countarea=payload;
    },
    changeshopname(state,payload){
      state.shopnames=payload
    },
    changelayout(state,payload){
      state.layout=payload
    },
    changeboyudd(state,payload){
      state.boyudd=payload
    },
    changestory(state,payload){
      state.story=payload
    },
  },
  actions: {
  },
  modules: {
  }
})
