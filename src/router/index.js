import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
import HelloWorld from '@/components/HelloWorld'
import Signup from '@/components/Signup'
import Signin from '@/components/Signin'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      redirect: 'signin'
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      // 認証が必要か？(true)
      meta: { requiresAuth: true }
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }
  ]
})

// router.beforeEach()を追加
router.beforeEach((to, from, next) => {
  // 現在ログインしているユーザーを返す
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  // ログインしていない(currentUserがnull)場合は/signinにリダイレクトする
  if (requiresAuth && !currentUser) next('signin')
  else next()
})

export default router
