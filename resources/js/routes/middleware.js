
function middleware({ next }) {
  let token = localStorage.getItem('access_token')
  
  if (!token) {
    return next('/login')
  }
  
  return next()
}

export {
  middleware,
}