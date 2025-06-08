<template>
  <div class="bg-white rounded-xl shadow-md border border-gray-100 p-5 hover:shadow-lg transition-all duration-300 group">
    <div class="flex space-x-4">
      <div class="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
        {{ post.author.name.charAt(0) }}
      </div>
      <div class="flex-1">
        <div class="flex items-center space-x-2 mb-3">
          <h3 class="font-bold text-gray-800 group-hover:text-blue-600">{{ post.author.name }}</h3>
          <span class="text-gray-500 font-medium">@{{ post.author.username }}</span>
          <span class="text-gray-400">·</span>
          <span class="text-gray-500 text-sm">{{ post.timestamp }}</span>
        </div>
        <p class="text-gray-800 mb-4 leading-relaxed">{{ post.content }}</p>
        <div class="flex items-center space-x-6 text-gray-500">
          <button class="flex items-center space-x-2 hover:text-blue-600 transition-all duration-200">
            <span class="text-lg">💬</span>
            <span class="font-medium">{{ post.replies }}</span>
          </button>
          <button class="flex items-center space-x-2 hover:text-blue-600 transition-all duration-200">
            <span class="text-lg">🔄</span>
            <span class="font-medium">{{ post.reposts }}</span>
          </button>
          <button class="flex items-center space-x-2 hover:text-blue-600 transition-all duration-200">
            <span class="text-lg">❤️</span>
            <span class="font-medium">{{ post.likes }}</span>
          </button>
          <button class="hover:text-blue-600 transition-all duration-200">
            <span class="text-lg">📤</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PostCard',
  props: {
    post: Object,
  },
});
</script>

<style scoped>
/* Gaya spesifik untuk PostCard (kosong kecuali diperlukan) */
</style>