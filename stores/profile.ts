<script lang="ts">
definePageMeta({
  middleware: 'auth',
});
</script>

<template>
  <Profile :user-profile="userProfile" :user-posts="userPosts" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Profile from '~/components/Profile.vue';
import { useUserStore } from '~/stores/user';
import { useAuthStore } from '~/stores/auth';

export default defineComponent({
  name: 'ProfilePage',
  components: {
    Profile,
  },
  setup() {
    const userStore = useUserStore();
    const authStore = useAuthStore();
    return { userStore, authStore };
  },
  computed: {
    userProfile() {
      return this.userStore.userProfile;
    },
    userPosts() {
      return this.userStore.userPosts;
    },
  },
  async mounted() {
    if (this.authStore.user?.id) {
      await this.userStore.fetchUserProfile(this.authStore.user.id);
      await this.userStore.fetchUserPosts(this.authStore.user.id);
    }
  },
});
</script>