<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <Navbar @update:current-page="setCurrentPage" :current-page="currentPage" />
    <div class="max-w-6xl mx-auto flex">
      <Sidebar :trends="trends" :suggested-users="suggestedUsers" />
      <main class="flex-1 min-h-screen px-4 py-6">
        <div v-if="currentPage === 'home'">
          <index :posts="posts" :new-post="newPost" @create-post="createPost" />
        </div>
        <div v-else-if="currentPage === 'search'">
          <search :search-query="searchQuery" :trends="trends" />
        </div>
        <div v-else-if="currentPage === 'notifications'">
          <notifications :notifications="notifications" />
        </div>
        <div v-else-if="currentPage === 'profile'">
          <profile :user-profile="userProfile" :user-posts="userPosts" />
        </div>
      </main>
    </div>
    <MobileNav @update:current-page="setCurrentPage" :current-page="currentPage" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '~/components/Navbar.vue';
import MobileNav from '~/components/MobileNav.vue';
import Sidebar from '~/components/Sidebar.vue';
import index from '~/pages/index.vue';
import search from '~/pages/search.vue';
import notifications from '~/pages/notifications.vue';
import profile from '~/pages/profile.vue';

interface Author {
  name: string;
  username: string;
}

interface Post {
  id: number;
  author: Author;
  content: string;
  timestamp: string;
  replies: number;
  reposts: number;
  likes: number;
}

interface Trend {
  id: number;
  hashtag: string;
  posts: string;
}

interface SuggestedUser {
  id: number;
  name: string;
  username: string;
}

interface Notification {
  id: number;
  user: string;
  action: string;
  time: string;
}

interface UserProfile {
  name: string;
  username: string;
  bio: string;
  following: number;
  followers: number;
}

export default defineComponent({
  name: 'ChirpApp',
  components: {
    Navbar,
    MobileNav,
    Sidebar,
    index,
    search,
    notifications,
    profile,
  },
  data() {
    return {
      currentPage: 'home' as string,
      newPost: '' as string,
      searchQuery: '' as string,
      posts: [
        {
          id: 1,
          author: { name: 'Ahmad Rizki', username: 'ahmadrizki' },
          content: 'Senang sekali bisa bergabung di Chirp! Mari kita bangun komunitas yang positif bersama!',
          timestamp: '2h',
          replies: 24,
          reposts: 12,
          likes: 89,
        },
        // ... (data lainnya)
      ] as Post[],
      trends: [
        { id: 1, hashtag: 'ChirpLaunch', posts: '12.5K' },
        // ... (data lainnya)
      ] as Trend[],
      suggestedUsers: [
        { id: 1, name: 'Dinda', username: 'dindaaulia' },
        // ... (data lainnya)
      ] as SuggestedUser[],
      notifications: [
        { id: 1, user: 'Ahmad Rizki', action: 'menyukai Chirp Anda', time: '10 menit yang lalu' },
        // ... (data lainnya)
      ] as Notification[],
      userProfile: {
        name: 'User Chirp',
        username: 'userchirp',
        bio: 'Passionate developer who loves to create amazing web applications. Coffee enthusiast ☕ | Vue.js & TypeScript Developer 💚',
        following: 342,
        followers: 1205,
      } as UserProfile,
      userPosts: [
        {
          id: 1,
          content: 'Mengerjakan project baru dengan Vue.js dan TypeScript. Excited untuk hasil akhirnya! 🚀 #VueJS #TypeScript',
          replies: 12,
          reposts: 8,
          likes: 45,
          timestamp: '1h',
        },
        // ... (data lainnya)
      ] as Post[],
    };
  },
  methods: {
    setCurrentPage(page: string) {
      this.currentPage = page;
    },
    createPost() {
      if (this.newPost.trim()) {
        const newPostObj: Post = {
          id: Date.now(),
          author: { name: this.userProfile.name, username: this.userProfile.username },
          content: this.newPost,
          timestamp: 'sekarang',
          replies: 0,
          reposts: 0,
          likes: 0,
        };
        this.posts.unshift(newPostObj);
        this.newPost = '';
      }
    },
  },
});
</script>