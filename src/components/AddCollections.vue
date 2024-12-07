<template>
  <div class="Containers_with_books_2">
    <div class="Formula_sq">
      <div class="t_1 t_1_0">Add collections</div>
      <CollectionSearch />
      <CollectionCheckboxes 
        :collections="collections" 
        :selectedCollectionsIds="localSelectedCollectionsIds"
        @updateSelected="updateSelectedIds"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import CollectionSearch from './CollectionSearch.vue';
import CollectionCheckboxes from './CollectionCheckboxes.vue';
import { getState } from '../javascript/localStorage';

const props = defineProps({
  selectedCollectionsIds: {
    type: Array,
    required: false,
  },
});

const localSelectedCollectionsIds = computed({
  get: () => props.selectedCollectionsIds || [],
  set: (newIds) => emit('update:selectedCollectionsIds', newIds),
});

const emit = defineEmits(['update:selectedCollectionsIds']);

const appData = getState('state');
const collections = appData.collections;

function updateSelectedIds(newIds) {
  localSelectedCollectionsIds.value = newIds;
}
</script>
