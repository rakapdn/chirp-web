<template>
  <div class="bg-white rounded-xl shadow-md border border-gray-100 p-5 mb-6 hover:shadow-lg transition-all duration-300">
    <div class="flex space-x-4">
      <div class="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
        U
      </div>
      <div class="flex-1">
        <textarea
          v-model="newPost"
          placeholder="Apa yang sedang Anda pikirkan?"
          class="w-full resize-none border-none outline-none text-base placeholder-gray-400 bg-transparent"
          rows="3"
        ></textarea>
        <div class="flex justify-between items-center mt-4">
          <div class="flex space-x-3">
            <button class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-200 transition-all duration-200">
              📷
            </button>
            <button class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-200 transition-all duration-200">
              📎
            </button>
            <button class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-200 transition-all duration-200">
              😊
            </button>
          </div>
          <button
            @click="$emit('create-post')"
            class="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-all duration-200 disabled:opacity-50"
            :disabled="!newPost.trim()"
          >
            Chirp
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CreatePost',
  props: {
    newPost: String,
  },
  emits: ['create-post'],
});
</script>