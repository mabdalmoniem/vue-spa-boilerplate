import Vue from 'vue'
import Router from 'vue-router'
import routes from '../app/routes'

Vue.use(Router)

// console.log(routes)

const router = new Router({
    routes,
    mode: 'history'
})

// to do: register 'beforeEach' hook

export default router