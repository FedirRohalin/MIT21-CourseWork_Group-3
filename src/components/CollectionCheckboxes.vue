<template>
  <div class="checkboxes_with_buttons">
    <div class="checkboxes_list">
      <div v-for="collection in collections" :key="collection.id">
        <Checkbox 
          :label="collection.title" 
          :checked="selectedCollectionsIds.includes(collection.id)" 
          @update:checked="toggleCollection(collection.id)" 
        />
      </div>
    </div>
    <div class="buttons_list">
      <button class="book_cancel_button" @click="cancelSelection">Cancel</button>
      <button class="book_save_button" @click="saveSelection">Save</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Checkbox from './Checkbox.vue';

// Define props
const props = defineProps({
  collections: {
    type: Array,
    required: true,
  },
  selectedCollectionsIds: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(['update:selectedCollectionsIds']);

const selectedCollectionsIds = ref([...props.selectedCollectionsIds]);

const toggleCollection = (id) => {
  if (selectedCollectionsIds.value.includes(id)) {
    selectedCollectionsIds.value = selectedCollectionsIds.value.filter(
      (selectedId) => selectedId !== id
    );
  } else {
    selectedCollectionsIds.value.push(id);
  }
};

const cancelSelection = () => {
  selectedCollectionsIds.value = [...props.selectedCollectionsIds];
};

const saveSelection = () => {
  emit('update:selectedCollectionsIds', selectedCollectionsIds.value);
};
</script>
