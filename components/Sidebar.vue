<template>
  <aside class="hidden lg:block w-72 p-6 sticky top-20 h-screen overflow-y-auto">
    <div class="space-y-6">
      <!-- Trending Card -->
      <div class="bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
        <div class="flex items-center space-x-2 mb-4">
          <span class="text-xl">🔥</span>
          <h3 class="font-bold text-gray-800">Trending</h3>
        </div>
        <div class="space-y-3">
          <div v-for="trend in trends" :key="trend.id" class="group cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-all duration-200">
            <p class="font-medium text-gray-800 group-hover:text-blue-600">#{{ trend.hashtag }}</p>
            <p class="text-sm text-gray-500">{{ trend.posts }} posts</p>
          </div>
        </div>
      </div>

      <!-- Suggested Users Card -->
      <div class="bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
        <div class="flex items-center space-x-2 mb-4">
          <span class="text-xl">✨</span>
          <h3 class="font-bold text-gray-800">Saran Mengikuti</h3>
        </div>
        <div class="space-y-4">
          <div v-for="user in suggestedUsers" :key="user.id" class="flex items-center justify-between group">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                {{ user.name.charAt(0) }}
              </div>
              <div>
                <p class="font-medium text-gray-800 group-hover:text-blue-600">{{ user.name }}</p>
                <p class="text-sm text-gray-500">@{{ user.username }}</p>
              </div>
            </div>
            <button class="bg-blue-600 text-white px-3 py-1.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-all duration-200">
              Ikuti
            </button>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Sidebar',
  props: {
    trends: Array,
    suggestedUsers: Array,
  },
});
</script>

<style scoped>
/* Gaya spesifik untuk Sidebar (kosong kecuali diperlukan) */
</style>