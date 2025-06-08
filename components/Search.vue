<template>
  <div class="max-w-2xl mx-auto p-4">
    <div class="mb-6">
      <div class="relative">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="🔍 Cari Chirp, pengguna, atau topik..."
          class="w-full p-4 bg-white border border-gray-200 rounded-xl outline-none focus:border-blue-500 shadow-sm text-base placeholder-gray-400 transition-all duration-200"
        >
      </div>
    </div>

    <div class="space-y-4">
      <h2 class="text-2xl font-bold text-blue-800">Trending untuk Anda</h2>
      <div class="space-y-4">
        <div v-for="trend in trends" :key="trend.id" class="p-4 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg cursor-pointer transition-all duration-200">
          <div class="flex items-center justify-between">
            <div>
              <p class="font-bold text-lg text-gray-800 hover:text-blue-600">#{{ trend.hashtag }}</p>
              <p class="text-gray-600">{{ trend.posts }} Chirp</p>
            </div>
            <div class="text-xl text-blue-600">🔥</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Search',
  props: {
    searchQuery: String,
    trends: Array,
  },
});
</script>

<style scoped>
/* Gaya spesifik untuk Search (kosong kecuali diperlukan) */
</style>