<template>
  <div class="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-gray-100 px-4 py-2 shadow-md">
    <div class="flex justify-around">
      <button
        @click="$emit('update:current-page', 'home')"
        :class="currentPage === 'home' ? 'text-blue-600' : 'text-gray-500'"
        class="flex flex-col items-center py-2 transition-all duration-200"
      >
        <span class="text-xl mb-1">🏠</span>
        <span class="text-xs font-medium">Beranda</span>
      </button>
      <!-- ... (tombol lainnya) -->
      <button
        @click="$emit('update:current-page', 'search')"
        :class="currentPage === 'search' ? 'text-blue-600' : 'text-gray-500'"
        class="flex flex-col items-center py-2 transition-all duration-200"
      >
        <span class="text-xl mb-1">🔍</span>
        <span class="text-xs font-medium">Cari</span>
      </button>
      <button
        @click="$emit('update:current-page', 'notifications')"
        :class="currentPage === 'notifications' ? 'text-blue-600' : 'text-gray-500'"
        class="flex flex-col items-center py-2 transition-all duration-200 relative"
      >
        <span class="text-xl mb-1">🔔</span>
        <span class="text-xs font-medium">Notifikasi</span>
        <div class="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
      </button>
      <button
        @click="$emit('update:current-page', 'profile')"
        :class="currentPage === 'profile' ? 'text-blue-600' : 'text-gray-500'"
        class="flex flex-col items-center py-2 transition-all duration-200"
      >
        <span class="text-xl mb-1">👤</span>
        <span class="text-xs font-medium">Profil</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MobileNav',
  props: {
    currentPage: String,
  },
  emits: ['update:current-page'],
});
</script>