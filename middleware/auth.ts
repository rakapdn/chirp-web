import { defineNuxtRouteMiddleware, navigateTo } from '#app';
import { useAuthStore } from '~/stores/auth'; // Pastikan Anda membuat store ini (akan dibahas di bawah)

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();

  // Periksa apakah pengguna sudah login
  if (!authStore.isAuthenticated && to.path !== '/login') {
    return navigateTo('/login');
  }

  // Jika pengguna sudah login dan mencoba mengakses /login, arahkan ke beranda
  if (authStore.isAuthenticated && to.path === '/login') {
    return navigateTo('/');
  }
});