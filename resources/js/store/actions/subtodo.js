import { api } from '../../service/axios'

export default {


  async showSubTodoAction({commit}, payload) {
    await api.get(`/sub-todos/${payload}`)
    .then(res => {
      commit('todoMutation', res.data.data)
    })
    .catch(err => {
      commit('errorsMutation', err.response.data.errors)
      console.log(err.response.status);
      console.log(err.response.data.errors);
    })
  },


  async createSubTodoAction({commit, dispatch}, payload) {
    await api.post(`/sub-todos`, payload)
    .then(res => {
      console.log(res.data);
      dispatch('showTodoAction', payload.todo_id)
    })
    .catch(err => {
      commit('errorsMutation', err.response.data.errors)
      console.log(err.response.status);
      console.log(err.response.data.errors);
    })
  },


  async deleteSubTodoAction({commit, dispatch}, payload) {
    await api.delete(`/sub-todos/${payload.id}`)
    .then(res => {
      dispatch('showTodoAction', payload.todo_id)
      console.log(res.data.data);
      // commit('todosMutation', res.data.data)
    })
    .catch(err => {
      commit('errorsMutation', err.response.data.errors)
      console.log(err.response.status);
      console.log(err.response.data.errors);
    })
  },

  async updateSubTodoAction({commit, dispatch}, payload) {
    await api.post(`/sub-todos/${payload.id}`, payload)
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
