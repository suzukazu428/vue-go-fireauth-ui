// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import './main.css'

Vue.config.productionTip = false

// Your web app's Firebase configuration
const config = {
  apiKey: 'AIzaSyD5OoG8fI8xO_qPDNw5rnPN81vvTVe_W4E',
  authDomain: 'vue-go-fireauth-39760.firebaseapp.com',
  databaseURL: 'https://vue-go-fireauth-39760.firebaseio.com',
  projectId: 'vue-go-fireauth-39760',
  storageBucket: 'vue-go-fireauth-39760.appspot.com',
  messagingSenderId: '788773428362',
  appId: '1:788773428362:web:d6e4d2e63b4d9a56382173'
}
// Initialize Firebase
firebase.initializeApp(config)

// ユーザーの認証状況が変更されたら実行される
// ユーザー取得時、Authオブジェクトが初期化などの中間状態にならないようにする
// firebase初期化後にVueインスタンスが作成されるように。
let app
firebase.auth().onAuthStateChanged(user => {
  if (!app) {
    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App />'
    })
  }
})
