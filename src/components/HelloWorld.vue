<template>
  <div class="text-center">
    <h1 class="text-3xl">Hello {{ userName }}!!</h1>
    <h1 class="text-2xl">{{ msg }}</h1>
    <h2 class="text-xl mt-2">Essential Links</h2>
    <div class="flex justify-around mx-auto w-1/2 h-10 mt-6">
      <BaseButton @click="apiPublic">public</BaseButton>
      <BaseButton @click="apiPrivate">private</BaseButton>
    </div>
    <BaseButton @click="signOut">signOut</BaseButton>
  </div>
</template>

<script>
import axios from 'axios'
import BaseButton from '../components/BaseButton.vue'
import firebase from 'firebase'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      userName: 'user'
    }
  },
  components: {
    BaseButton
  },
  methods: {
    async apiPublic () {
      alert('apiPublic')
      const res = await axios.get('http://localhost:8000/public')
      this.msg = res.data
    },
    async apiPrivate () {
      alert('apiPrivate')
      // ローカルストレージに保管してあるJWTをサーバーに送って検証
      const res = await axios.get('http://localhost:8000/private', {
        headers: {'Authorization': `Bearer ${localStorage.getItem('jwt')}`}
      })
      this.msg = res.data
    },
    signOut () {
      try {
        firebase.auth().signOut()
        localStorage.removeItem('jwt')
        this.$router.push('/signin')
      } catch (e) {
        alert(e)
      }
    }
  }
}
</script>
