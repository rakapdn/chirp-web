<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center">
    <Login @login="handleLogin" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Login from '~/components/Login.vue';
import { useAuthStore } from '~/stores/auth';

export default defineComponent({
  name: 'LoginPage',
  components: {
    Login,
  },
  setup() {
    const authStore = useAuthStore();
    return { authStore };
  },
  methods: {
    async handleLogin(credentials: { username: string; password: string }) {
      const success = await this.authStore.login(credentials.username, credentials.password);
      if (success) {
        await this.authStore.fetchUser(); // Perbarui data user setelah login
        this.$router.push('/');
      } else {
        alert('Username atau password salah!');
      }
    },
  },
});
</script>