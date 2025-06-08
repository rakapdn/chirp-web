<template>
  <div class="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
    <h1 class="text-3xl font-bold text-blue-800 mb-6 text-center">Masuk ke Chirp</h1>
    <form @submit.prevent="$emit('login', { username, password })" class="space-y-6">
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
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  emits: ['login'],
});
</script>