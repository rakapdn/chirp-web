<template>
  <Search v-model:search-query="searchQuery" :trends="trends" :search-results="searchResults" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Search from '~/components/Search.vue';
import { useSearchStore } from '~/stores/search';

export default defineComponent({
  name: 'SearchPage',
  components: {
    Search,
  },
  data() {
    return {
      searchQuery: '',
      trends: [
        { id: 1, hashtag: 'ChirpLaunch', posts: '12.5K' },
      ],
    };
  },
  computed: {
    searchResults() {
      return this.searchStore.searchResults;
    },
  },
  setup() {
    const searchStore = useSearchStore();
    return { searchStore };
  },
  watch: {
    searchQuery(newQuery) {
      if (newQuery.trim()) {
        this.searchStore.searchUsers(newQuery);
      }
    },
  },
});
</script>