<template>
  <div class="max-w-2xl mx-auto">
    <div class="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
      <!-- Enhanced Profile Header -->
      <div class="relative">
        <div class="h-40 bg-blue-100 relative overflow-hidden">
          <div class="absolute inset-0 bg-blue-600/10"></div>
        </div>
        <div class="absolute -bottom-16 left-6">
          <div class="w-32 h-32 rounded-full bg-white p-1 shadow-md">
            <div class="w-full h-full rounded-full bg-blue-600 flex items-center justify-center text-white text-3xl font-bold">
              U
            </div>
          </div>
        </div>
      </div>

      <div class="pt-20 p-6">
        <div class="flex justify-between items-start mb-6">
          <div>
            <h1 class="text-3xl font-bold text-gray-800 mb-1">{{ userProfile.name }}</h1>
            <p class="text-gray-600 font-medium text-lg">@{{ userProfile.username }}</p>
          </div>
          <button class="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition-all duration-200">
            ✏️ Edit Profil
          </button>
        </div>

        <p class="text-gray-800 mb-6 text-lg leading-relaxed">{{ userProfile.bio }}</p>

        <div class="flex space-x-8 mb-8">
          <div class="text-center group cursor-pointer">
            <div class="text-xl font-bold text-gray-800 group-hover:text-blue-600">{{ userProfile.following }}</div>
            <div class="text-gray-600 group-hover:text-blue-500">Mengikuti</div>
          </div>
          <div class="text-center group cursor-pointer">
            <div class="text-xl font-bold text-gray-800 group-hover:text-blue-600">{{ userProfile.followers }}</div>
            <div class="text-gray-600 group-hover:text-blue-500">Pengikut</div>
          </div>
        </div>

        <!-- Enhanced Profile Tabs -->
        <div class="border-b border-gray-200 mb-6">
          <div class="flex space-x-8">
            <button class="pb-3 border-b-2 border-blue-600 text-blue-600 font-medium">
              📝 Chirp
            </button>
            <button class="pb-3 text-gray-600 hover:text-gray-800 font-medium hover:border-b-2 hover:border-gray-300">
              💬 Balasan
            </button>
            <button class="pb-3 text-gray-600 hover:text-gray-800 font-medium hover:border-b-2 hover:border-gray-300">
              🖼️ Media
            </button>
            <button class="pb-3 text-gray-600 hover:text-gray-800 font-medium hover:border-b-2 hover:border-gray-300">
              ❤️ Suka
            </button>
          </div>
        </div>

        <!-- Enhanced User Posts -->
        <div class="space-y-5">
          <div v-for="post in userPosts" :key="post.id" class="border-b border-gray-100 pb-4 hover:bg-gray-50 p-3 rounded-lg transition-all duration-200">
            <p class="text-gray-800 mb-4 text-lg leading-relaxed">{{ post.content }}</p>
            <div class="flex items-center space-x-6 text-gray-500">
              <span class="flex items-center space-x-1 hover:text-blue-600">
                <span class="text-lg">💬</span>
                <span class="font-medium">{{ post.replies }}</span>
              </span>
              <span class="flex items-center space-x-1 hover:text-blue-600">
                <span class="text-lg">🔄</span>
                <span class="font-medium">{{ post.reposts }}</span>
              </span>
              <span class="flex items-center space-x-1 hover:text-blue-600">
                <span class="text-lg">❤️</span>
                <span class="font-medium">{{ post.likes }}</span>
              </span>
              <span class="text-gray-400 ml-auto">{{ post.timestamp }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Profile',
  props: {
    userProfile: Object,
    userPosts: Array,
  },
});
</script>

<style scoped>
/* Gaya spesifik untuk Profile (kosong kecuali diperlukan) */
</style>