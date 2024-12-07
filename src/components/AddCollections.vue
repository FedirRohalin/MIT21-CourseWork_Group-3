<template>
  <div class="Formula_sq2">
    <div class="t_1 t_1_0">Add collections</div>
    <CollectionSearch @search="onSearch" />
    <CollectionCheckboxes
      :collections="filteredAndSortedCollections"
      :selectedCollectionsIds="localSelectedCollectionsIds"
      @updateSelected="updateSelectedIds"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import CollectionSearch from './CollectionSearch.vue';
import CollectionCheckboxes from './CollectionCheckboxes.vue';
import { getState } from '../javascript/localStorage';

const appData = getState();
const allCollections = ref(appData.collections);

const searchQuery = ref('');
const sortOption = ref('title');

// Filter and sort collections
const filteredAndSortedCollections = computed(() => {
  let collections = allCollections.value;

  // Filter by search query
  if (searchQuery.value) {
    collections = collections.filter((collection) =>
      collection.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }

  // Sort by selected criteria
  return collections.sort((a, b) =>
    a[sortOption.value] > b[sortOption.value] ? 1 : -1
  );
});

const onSearch = (query) => {
  searchQuery.value = query;
};

const sortCollections = () => {
  // Computed property automatically updates
};
</script>
