import { defineNuxtPlugin } from '#app';
import { $fetch } from 'ofetch';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const api = $fetch.create({
    baseURL: config.public.apiBase,
    headers: {
      'Content-Type': 'application/json',
      // Tambahkan header lain jika diperlukan (misalnya token autentikasi)
    },
    onRequestError({ request, error }) {
      console.error('Request error:', error);
    },
    onResponseError({ response }) {
      console.error('Response error:', response.status, response._data);
    },
  });

  return {
    provide: {
      api,
    },
  };
});