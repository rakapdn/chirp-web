import { defineStore } from 'pinia';
import { useApi } from '~/composables/api';

const api = useApi();

export const useUserStore = defineStore('user', {
  state: () => ({
    userProfile: null as { id: number; username: string; fullName: string; email: string; bio: string; image: string | null; createdAt: string; updatedAt: string; followerCount: number; followingCount: number; isFollowing: boolean } | null,
    userPosts: [] as { id: number; content: string; image: string | null; createdAt: string; updatedAt: string; authorId: number; author_username: string; author_image: string | null }[],
  }),
  actions: {
    async fetchUserProfile(userId: number) {
      const response = await api(`/api/users/${userId}`, {
        headers: this.getAuthHeader(),
      });
      this.userProfile = response;
    },
    async fetchUserPosts(userId: number) {
      const response = await api(`/api/users/${userId}/posts`, {
        headers: this.getAuthHeader(),
      });
      this.userPosts = response;
    },
    async updateProfile(bio?: string, image?: string) {
      const response = await api(`/api/users/${this.getAuthHeader().userId}/update`, {
        method: 'PUT',
        body: { bio, image },
        headers: this.getAuthHeader(),
      });
      if (this.userProfile) this.userProfile = { ...this.userProfile, ...response };
    },
    getAuthHeader() {
      const authStore = useAuthStore();
      return { Authorization: `Bearer ${authStore.token}`, userId: authStore.user?.id };
    },
  },
});