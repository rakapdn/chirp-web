import { defineStore } from 'pinia';
import { useApi } from '~/composables/api';

const api = useApi();

export const usePostStore = defineStore('posts', {
  state: () => ({
    posts: [] as { id: number; content: string; image: string | null; createdAt: string; authorId: number; author_username: string; author_image: string | null; like_count: number; reply_count: number; liked_by_me: boolean }[],
  }),
  actions: {
    async fetchPosts() {
      const response = await api('/api/posts', {
        headers: this.getAuthHeader(),
      });
      this.posts = response;
    },
    async createPost(content: string, image?: string) {
      const response = await api('/api/posts', {
        method: 'POST',
        body: { content, image },
        headers: this.getAuthHeader(),
      });
      this.posts.unshift(response);
    },
    async likePost(postId: number) {
      await api(`/api/posts/${postId}/like`, {
        method: 'POST',
        headers: this.getAuthHeader(),
      });
      const post = this.posts.find(p => p.id === postId);
      if (post) post.liked_by_me = true;
    },
    async unlikePost(postId: number) {
      await api(`/api/posts/${postId}/unlike`, {
        method: 'DELETE',
        headers: this.getAuthHeader(),
      });
      const post = this.posts.find(p => p.id === postId);
      if (post) post.liked_by_me = false;
    },
    getAuthHeader() {
      const authStore = useAuthStore();
      return { Authorization: `Bearer ${authStore.token}` };
    },
  },
});