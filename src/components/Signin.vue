<template>
  <div class="flex flex-col mx-auto max-w-sm text-center mt-6">
    <h2 class="text-2xl">Sign in</h2>
    <div class="w-1/2 mx-auto mt-6">
      <BaseInput
        v-model="email"
        type="email"
        placeholder="email"
      />
      <BaseInput
        v-model="password"
        class="mt-4"
        type="password"
        placeholder="Password"
      />
    </div>
    <BaseButton
      class="w-1/4 mx-auto h-10 mt-6"
      @click="signIn"
    >
      Signin
    </BaseButton>
    <p class="mt-4">You don't have an account?</p>
    <router-link
      to="/signup"
      class="underline text-green-400 mx-2"
    >
      create account now!!
    </router-link>
  </div>
</template>

<script>
import BaseButton from '../components/BaseButton.vue'
import BaseInput from '../components/BaseInput.vue'
import firebase from 'firebase'

export default {
  name: 'Signin',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  components: {
    BaseButton,
    BaseInput
  },
  methods: {
    async signIn () {
      try {
        const res = await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        const accessToken = await res.user.getIdToken()
        // サーバーでの認証に使うJWTをローカルストレージに保管(これを使いAPIサーバーの認証を突破)
        localStorage.setItem('jwt', accessToken)
        this.$router.push('/')
      } catch (e) {
        alert(e.message)
      }
    }
  }
}
</script>
