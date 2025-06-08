<template>
  <div class="bg-white rounded-xl shadow-md border border-gray-100 p-5 mb-6 hover:shadow-lg transition-all duration-300">
    <div class="flex space-x-4">
      <div class="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
        {{ userInitial }}
      </div>
      <div class="flex-1">
        <textarea
          v-model="newPost"
          placeholder="Apa yang sedang Anda pikirkan?"
          class="w-full resize-none border-none outline-none text-base placeholder-gray-400 bg-transparent"
          rows="3"
        ></textarea>
        <input type="file" ref="fileInput" @change="handleFileChange" class="hidden" />
        <div class="flex justify-between items-center mt-4">
          <div class="flex space-x-3">
            <button @click="triggerFileInput" class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-200 transition-all duration-200">
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
            @click="createPost"
            class="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-all duration-200 disabled:opacity-50"
            :disabled="!newPost.trim() && !selectedFile"
          >
            Chirp
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { usePostStore } from '~/stores/post';
import { useAuthStore } from '~/stores/auth';

export default defineComponent({
  name: 'CreatePost',
  props: {
    newPost: String,
  },
  emits: ['create-post'],
  setup() {
    const postStore = usePostStore();
    const authStore = useAuthStore();
    return { postStore, authStore };
  },
  data() {
    return {
      selectedFile: null as File | null,
      fileInput: ref<HTMLInputElement | null>(null),
    };
  },
  computed: {
    userInitial() {
      return this.authStore.user?.fullName.charAt(0) || 'U';
    },
  },
  methods: {
    triggerFileInput() {
      this.fileInput.value?.click();
    },
    handleFileChange(event: Event) {
      const target = event.target as HTMLInputElement;
      this.selectedFile = target.files?.[0] || null;
    },
    async createPost() {
      if (this.newPost.trim() || this.selectedFile) {
        const formData = new FormData();
        formData.append('file', this.selectedFile || '');
        formData.append('user_id', this.authStore.user?.id.toString() || '');
        formData.append('post_id', (Date.now()).toString()); // Temporary postId, replace with real ID after post creation

        const uploadResponse = await fetch('/api/images/upload', {
          method: 'POST',
          body: formData,
          headers: { Authorization: `Bearer ${this.authStore.token}` },
        });
        const uploadData = await uploadResponse.json();
        const imageUrl = uploadData.image?.file_path; // Adjust based on BE response

        await this.postStore.createPost(this.newPost, imageUrl);
        this.newPost = '';
        this.selectedFile = null;
        if (this.fileInput.value) this.fileInput.value.value = '';
      }
    },
  },
});
</script>