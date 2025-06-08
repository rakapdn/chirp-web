<script lang="ts">
definePageMeta({
  middleware: 'auth',
});
</script>

<template>
  <div>
    <CreatePost v-model:new-post="newPost" @create-post="createPost" />
    <Feed :posts="posts" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CreatePost from '~/components/CreatePost.vue';
import Feed from '~/components/Feed.vue';
import { usePostStore } from '~/stores/post';
import { useAuthStore } from '~/stores/auth';

export default defineComponent({
  name: 'Home',
  components: {
    CreatePost,
    Feed,
  },
  setup() {
    const postStore = usePostStore();
    const authStore = useAuthStore();
    return { postStore, authStore };
  },
  data() {
    return {
      newPost: '',
    };
  },
  computed: {
    posts() {
      return this.postStore.posts;
    },
  },
  async mounted() {
    await this.postStore.fetchPosts();
  },
  methods: {
    async createPost() {
      if (this.newPost.trim()) {
        await this.postStore.createPost(this.newPost);
        this.newPost = '';
      }
    },
  },
});
</script>