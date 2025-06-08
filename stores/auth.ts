import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null as { username: string } | null,
  }),
  actions: {
    login(username: string, password: string) {
      if (username === 'user' && password === 'pass') {
        this.isAuthenticated = true;
        this.user = { username };
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('user', JSON.stringify({ username }));
        return true;
      }
      return false;
    },
    logout() {
      this.isAuthenticated = false;
      this.user = null;
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('user');
    },
  },
});