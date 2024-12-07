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
      <button class="book_save_button" @click="saveSelection">Save</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Checkbox from './Checkbox.vue';
import { useRoute } from 'vue-router';
import { getState, setState } from '../javascript/localStorage';

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
const route = useRoute();
const settingId = route.params.settingId;
const formulaId = route.params.formulaId;

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
  const state = getState();
  const setting = state.settings.find((s) => s.id === Number(settingId));
  if (setting) {
    const formula = setting.formulas.find((f) => f.id === Number(formulaId));
    if (formula) {
      formula.targets.collectionsIds = selectedCollectionsIds.value;
      setState("state", state); // Save to localStorage
    }
  }
  emit('update:selectedCollectionsIds', selectedCollectionsIds.value);
};
</script>

