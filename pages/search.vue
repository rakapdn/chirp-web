<template>
  <Search v-model:search-query="searchQuery" :trends="trends" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Search from '~/components/Search.vue';

export default defineComponent({
  name: 'SearchPage',
  components: {
    Search,
  },
  props: {
    searchQuery: String,
    trends: Array,
  },
});
</script>

<style scoped>
/* Gaya spesifik untuk search (kosong kecuali diperlukan) */
</style>