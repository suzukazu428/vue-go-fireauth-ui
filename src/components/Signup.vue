<template>
  <div class="flex flex-col mx-auto max-w-sm text-center mt-6">
    <h2 class="text-2xl">Sign up</h2>
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
      @click="signUp"
    >
      Register
    </BaseButton>
    <p class="mt-4">Do you have an account?</p>
    <router-link
      to="/signin"
      class="underline text-green-400 mx-2"
    >
      sign in now!!
    </router-link>
  </div>
</template>

<script>
import BaseButton from '../components/BaseButton.vue'
import BaseInput from '../components/BaseInput.vue'
import firebase from 'firebase'

export default {
  name: 'Signup',
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
    signUp () {
      try {
        // 入力したuserNameとpasswordをfirebaseに送ってユーザーを作成。
        const res = firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        alert('Create account: ', res.user.email)
      } catch (e) {
        alert(e.message)
      }
    }
  }
}
</script>
