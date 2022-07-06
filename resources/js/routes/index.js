import Vue from 'vue'
import VueRouter from 'vue-router'
import middlewarePipeline from './middleware-pipeline'
import { middleware } from './middleware'
Vue.use(VueRouter)


const routes = [
	{
		path: '/login',
		name: 'Login',
		component: () => import('../views/Login.vue'),
	},
  {
		path: '/register',
		name: 'Register',
		component: () => import('../views/Register.vue'),
	},
  {
    path: '/',
		name: 'Todos',
		component: () => import('../layouts/Main.vue'),
    meta: {
      middleware: [middleware],
    },
  }

]
const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

router.beforeEach((to, from, next) => {

  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware];
    const ctx = { from, next, to };
    const nextMiddleware = middlewarePipeline(ctx, middleware, 1);

    return middleware[0]({ ...ctx, next: nextMiddleware });
  }
  return next();

});

export default router
