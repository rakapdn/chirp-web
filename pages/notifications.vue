<template>
  <Notifications :notifications="notifications" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Notifications from '~/components/Notifications.vue';

export default defineComponent({
  name: 'NotificationsPage',
  components: {
    Notifications,
  },
  props: {
    notifications: Array,
  },
});
</script>

<style scoped>
/* Gaya spesifik untuk notifications (kosong kecuali diperlukan) */
</style>