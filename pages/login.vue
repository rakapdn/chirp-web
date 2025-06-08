<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center">
    <div class="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
      <h1 class="text-3xl font-bold text-blue-800 mb-6 text-center">Masuk ke Chirp</h1>
      <form @submit.prevent="handleLogin" class="space-y-6">
        <div>
          <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
          <input
            v-model="username"
            type="text"
            id="username"
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Masukkan username"
            required
          />
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input
            v-model="password"
            type="password"
            id="password"
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Masukkan password"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200"
        >
          Masuk
        </button>
      </form>
      <p class="mt-4 text-center text-sm text-gray-600">
        Belum punya akun? <a href="#" class="text-blue-600 hover:underline">Daftar</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    handleLogin() {
      // Logika login sederhana (misalnya validasi atau panggilan API)
      console.log('Login attempted with:', { username: this.username, password: this.password });
      // Tambahkan logika autentikasi di sini (misalnya, panggil API atau periksa kredensial)
      // Setelah berhasil, arahkan ke halaman beranda
      if (this.username === 'user' && this.password === 'pass') {
        this.$router.push('/');
      } else {
        alert('Username atau password salah!');
      }
    },
  },
});
</script>

<style scoped>
/* Gaya spesifik untuk halaman login (opsional, karena Tailwind sudah cukup) */
</style>