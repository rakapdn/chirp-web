import { defineStore } from 'pinia';
import { useApi } from '~/composables/api';

const api = useApi();

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null as { id: number; username: string; email: string; fullName: string } | null,
    token: localStorage.getItem('token') || null,
  }),
  actions: {
    async login(email: string, password: string) {
      try {
        const response = await api('/api/auth/login', {
          method: 'POST',
          body: { email, password },
        });
        this.isAuthenticated = true;
        this.user = response.user;
        this.token = response.token;
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('user', JSON.stringify(response.user));
        localStorage.setItem('token', response.token);
        return true;
      } catch (error) {
        console.error('Login failed:', error);
        return false;
      }
    },
    logout() {
      this.isAuthenticated = false;
      this.user = null;
      this.token = null;
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    },
    async fetchUser() {
      if (this.token) {
        const response = await api('/api/auth/me', {
          method: 'GET',
          headers: { Authorization: `Bearer ${this.token}` },
        });
        this.user = response.user;
      }
    },
  },
});