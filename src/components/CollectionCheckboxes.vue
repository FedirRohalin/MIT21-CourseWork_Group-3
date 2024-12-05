<template>
  <div class="checkboxes_with_buttons">
    <div class="checkboxes_list">
      <div v-for="collection in collections" :key="collection.id">
        <Checkbox :label="collection.title" />
      </div>
    </div>
    <div class="buttons_list">
      <button class="book_cancel_button">Cancel</button>
      <button class="book_save_button">Save</button>
    </div>
  </div>
</template>

<script setup>
import Checkbox from './Checkbox.vue'

defineProps({
  collections: {
    type: Object,
  }
})
</script>
