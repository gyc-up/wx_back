import { createStore } from 'vuex'


export default createStore({
  state: {
    sidebarCollapsed: false,
    userInfo: {
      name: 'Admin',
      role: 'admin'
    },
    token: localStorage.getItem('token') || '',
    info: JSON.parse(localStorage.getItem('userInfo')) || null



  },
  mutations: {
    toggleSidebarCollapse(state) {
      state.sidebarCollapsed = !state.sidebarCollapsed
    },
    SET_TOKEN(state, token) {
        state.user.token = token
        localStorage.setItem('token', token)
      },
      SET_USER_INFO(state, info) {
        state.user.info = info
        localStorage.setItem('userInfo', JSON.stringify(info))
      }
  },
  actions: {

  },



  
})

