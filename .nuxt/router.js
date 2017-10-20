'use strict'

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const _317c5594 = () => import('/home/deepesh/Desktop/testDeploy/pages/index.vue' /* webpackChunkName: "pages/index" */)

const _59b580b1 = () => import('/home/deepesh/Desktop/testDeploy/pages/product.vue' /* webpackChunkName: "pages/product" */)

const _43e9391c = () => import('/home/deepesh/Desktop/testDeploy/pages/inspire.vue' /* webpackChunkName: "pages/inspire" */)

const _11c47acf = () => import('/home/deepesh/Desktop/testDeploy/pages/about.vue' /* webpackChunkName: "pages/about" */)

const _277ddb43 = () => import('/home/deepesh/Desktop/testDeploy/pages/myaccount.vue' /* webpackChunkName: "pages/myaccount" */)



const scrollBehavior = (to, from, savedPosition) => {
  // savedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // if no children detected
    if (to.matched.length < 2) {
      // scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // if one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // if link has anchor,  scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export default new Router({
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  scrollBehavior,
  routes: [
		{
			path: "/",
			component: _317c5594,
			name: "index"
		},
		{
			path: "/product",
			component: _59b580b1,
			name: "product"
		},
		{
			path: "/inspire",
			component: _43e9391c,
			name: "inspire"
		},
		{
			path: "/about",
			component: _11c47acf,
			name: "about"
		},
		{
			path: "/myaccount",
			component: _277ddb43,
			name: "myaccount"
		}
  ]
})
