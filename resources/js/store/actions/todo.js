import { api } from '../../service/axios'

export default {

  async getTodosAction({commit}) {
    await api.get(`/todos`)
    .then(res => {
      commit('todosMutation', res.data.data)
    })
    .catch(err => {
      commit('errorsMutation', err.response.data.errors)
      console.log(err.response.status);
      console.log(err.response.data.errors);
    })
  },

  async showTodoAction({commit}, payload) {
    await api.get(`/todos/${payload}`)
    .then(res => {
      commit('todoMutation', res.data.data)
    })
    .catch(err => {
      commit('errorsMutation', err.response.data.errors)
      console.log(err.response.status);
      console.log(err.response.data.errors);
    })
  },


  async createTodoAction({commit, dispatch}, payload) {
    await api.post(`/todos`, payload)
    .then(res => {
      console.log(res.data);
      dispatch('getTodosAction')
    })
    .catch(err => {
      commit('errorsMutation', err.response.data.errors)
      console.log(err.response.status);
      console.log(err.response.data.errors);
    })
  },


  async deleteTodoAction({commit, dispatch}, payload) {
    await api.delete(`/todos/${payload}`)
    .then(res => {
      dispatch('getTodosAction')
      console.log(res.data.data);
      // commit('todosMutation', res.data.data)
    })
    .catch(err => {
      commit('errorsMutation', err.response.data.errors)
      console.log(err.response.status);
      console.log(err.response.data.errors);
    })
  },

  async updateTodoAction({commit, dispatch}, payload) {
    await api.post(`/todos/${payload.id}`, payload)
    .then(res => {
      dispatch('getTodosAction')
    })
    .catch(err => {
      commit('errorsMutation', err.response.data.errors)
      console.log(err.response.status);
      console.log(err.response.data.errors);
    })
  },

}
