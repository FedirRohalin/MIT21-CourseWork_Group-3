<template>
  <div class="search_0 search_0_1">
    <img src="../assets/icons/Search.svg" alt="_search" />
    <input
      type="search"
      placeholder="Search"
      class="text_input_lol"
      v-model="searchQuery"
      @input="onSearch"
    />
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['search']);
const searchQuery = ref('');

const onSearch = () => {
  emit('search', searchQuery.value);
};
</script>
