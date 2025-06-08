<script lang="ts">
definePageMeta({
  middleware: 'auth', // Terapkan middleware auth
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
import { useAuthStore } from '~/stores/auth';

export default defineComponent({
  name: 'Home',
  components: {
    CreatePost,
    Feed,
  },
  props: {
    newPost: String,
    posts: Array,
  },
  emits: ['create-post'],
  setup() {
    const authStore = useAuthStore();
    return { authStore };
  },
  methods: {
    createPost() {
      this.$emit('create-post');
    },
  },
});
</script>