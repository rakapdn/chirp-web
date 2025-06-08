import { defineStore } from 'pinia';
import { useApi } from '~/composables/api';

const api = useApi();

export const useSearchStore = defineStore('search', {
  state: () => ({
    searchQuery: '',
    searchResults: null as { user: any; followerCount: number; followingCount: number; isFollowing: boolean } | null,
  }),
  actions: {
    async searchUsers(username: string) {
      const response = await api(`/api/users/search?username=${username}`, {
        headers: this.getAuthHeader(),
      });
      this.searchResults = response;
      this.searchQuery = username;
    },
    getAuthHeader() {
      const authStore = useAuthStore();
      return { Authorization: `Bearer ${authStore.token}` };
    },
  },
});