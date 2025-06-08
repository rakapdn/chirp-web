<template>
  <Profile :user-profile="userProfile" :user-posts="userPosts" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Profile from '~/components/Profile.vue';

export default defineComponent({
  name: 'ProfilePage',
  components: {
    Profile,
  },
  props: {
    userProfile: Object,
    userPosts: Array,
  },
});
</script>

<style scoped>
/* Gaya spesifik untuk profile (kosong kecuali diperlukan) */
</style>