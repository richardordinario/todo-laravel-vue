import router from "../routes"

export function signinMutation(state, payload) {
	localStorage.setItem('access_token', payload.access_token)

  state.user = payload

  setTimeout(() => {
	  router.push({ name: 'Todos' })
  }, 2000);
}

export function errorsMutation(state, payload) {
  state.errors = payload

  setTimeout(() => {
    state.errors = []
  },1000)

}

export function authMutation(state, payload) {
  state.user = payload
}

export function signoutMutation(state) {
	localStorage.removeItem('access_token')
	state.user = []
	location.href = '/login'
}

export function todoMutation(state, payload) {
  state.todo = payload
}

export function todosMutation(state, payload) {
  state.todos = payload
}

export function subTodosMutation(state, payload) {
  state.subtodos = payload
}

