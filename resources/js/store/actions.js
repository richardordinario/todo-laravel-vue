import { api } from '../service/axios'

export default {

  async registerAction({commit}, payload) {
    await api.post(`/register`, payload)
    .then(res => {
      commit('signinMutation', res.data.data)
    })
    .catch(err => {
      commit('errorsMutation', err.response.data.errors)
      console.log(err.response.status);
      console.log(err.response.data.errors);
    })
  },

  async loginAction({commit}, payload) {
    await api.post(`/login`, payload)
    .then(res => {
      commit('signinMutation', res.data.data)
    })
    .catch(err => {
      commit('errorsMutation', err.response.data.errors)
      console.log(err.response.status);
      console.log(err.response.data.errors);
    })
  },

   async logoutAction({commit}) {
    await api.get(`/logout`)
    .then(res => {
      commit('signoutMutation')
    })
    .catch(err => {
      console.log(err.response.status);
      console.log(err.response.data.errors);
    })
  },

  async authAction({commit}) {
    await api.get(`/user`)
    .then(res => {
      commit('authMutation', res.data.data)
    })
    .catch(err => {
      console.log(err.response.status);
      console.log(err.response.data.errors);
    })
  },
}
