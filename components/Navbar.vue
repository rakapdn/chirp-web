<template>
  <nav class="bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <!-- Logo with Gradient -->
        <div class="flex items-center space-x-4">
          <div class="relative">
            <h1 class="text-3xl font-bold text-blue-800">Chirp</h1>
            <div class="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        <!-- Navigation Items with Hover Effects -->
        <div class="hidden md:flex items-center space-x-2">
          <button
            v-if="authStore.isAuthenticated"
            @click="$emit('update:current-page', 'home')"
            :class="currentPage === 'home' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'"
            class="px-5 py-2 rounded-full font-medium transition-all duration-200 hover:shadow-md"
          >
            🏠 Beranda
          </button>
          <!-- ... (tombol lainnya) -->
          <button
            v-if="authStore.isAuthenticated"
            @click="$emit('update:current-page', 'search')"
            :class="currentPage === 'search' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'"
            class="px-5 py-2 rounded-full font-medium transition-all duration-200 hover:shadow-md"
          >
            🔍 Cari
          </button>
          <button
            v-if="authStore.isAuthenticated"
            @click="$emit('update:current-page', 'notifications')"
            :class="currentPage === 'notifications' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'"
            class="px-5 py-2 rounded-full font-medium transition-all duration-200 relative"
          >
            🔔 Notifikasi
            <span class="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <button
            v-if="authStore.isAuthenticated"
            @click="$emit('update:current-page', 'profile')"
            :class="currentPage === 'profile' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'"
            class="px-5 py-2 rounded-full font-medium transition-all duration-200 hover:shadow-md"
          >
            👤 Profil
          </button>
          <button
            v-if="authStore.isAuthenticated"
            @click="authStore.logout(); $emit('update:current-page', 'login')"
            class="px-5 py-2 rounded-full font-medium text-red-600 hover:bg-gray-100 transition-all duration-200"
          >
            Keluar
          </button>
          <button
            v-else
            @click="$emit('update:current-page', 'login')"
            class="px-5 py-2 rounded-full font-medium text-blue-600 hover:bg-gray-100 transition-all duration-200"
          >
            Masuk
          </button>
        </div>

        <!-- User Avatar with Glow -->
        <div class="flex items-center space-x-4">
          <div v-if="authStore.isAuthenticated" class="relative">
            <button class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shadow-md hover:shadow-lg transition-all duration-200">
              {{ authStore.user?.username.charAt(0) || 'U' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useAuthStore } from '~/stores/auth';

export default defineComponent({
  name: 'Navbar',
  props: {
    currentPage: String,
  },
  emits: ['update:current-page'],
  setup() {
    const authStore = useAuthStore();
    return { authStore };
  },
});
</script>