import { createStore } from 'vuex';

export default createStore({
  state: {
    userId: '',
    userName: '',
    userImg: ''
  },
  mutations: {
    updateUserInfo(state, payload) {
       console.log('mutation payload:', payload);
      state.userId = payload.userId;
      state.userName = payload.userName;
      state.userImg = payload.userImg;
    }
  },
});
