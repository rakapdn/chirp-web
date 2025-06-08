<template>
  <div class="max-w-2xl mx-auto">
    <div class="bg-white rounded-t-xl shadow-md border border-gray-100 p-4 mb-4">
      <h1 class="text-2xl font-bold text-blue-800">🔔 Notifikasi</h1>
    </div>
    <div class="space-y-3">
      <div v-for="notification in notifications" :key="notification.id" class="p-4 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-200">
        <div class="flex space-x-4">
          <div class="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
            {{ notification.user.charAt(0) }}
          </div>
          <div class="flex-1">
            <p class="font-medium text-gray-800">
              <span class="font-bold hover:text-blue-600">{{ notification.user }}</span>
              {{ notification.action }}
            </p>
            <p class="text-sm text-gray-500 mt-1">{{ notification.time }}</p>
          </div>
          <div class="text-xl text-blue-600">✨</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Notifications',
  props: {
    notifications: Array,
  },
});
</script>

<style scoped>
/* Gaya spesifik untuk Notifications (kosong kecuali diperlukan) */
</style>