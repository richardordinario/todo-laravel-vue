import axios from 'axios'


let base = `${window.location.origin}/api`

console.log(base);

const api = axios.create({ baseURL: base })

api.interceptors.request.use(request => {
  const token = localStorage.getItem('access_token')
  console.log(token);
  if (token) request.headers.common['Authorization'] = `Bearer ${token}`

  return request
})

export default {
  install(Vue) {
    Vue.prototype.$api = api
  }
}

export { api }
