<template>
  <div class="checkboxes_with_buttons">
    <div class="checkboxes_list">
      <Checkbox label="Content" />
      <Checkbox label="Content" />
      <Checkbox label="Content" />
      <Checkbox label="Content" />
    </div>
    <div class="buttons_list">
      <button class="book_cancel_button">Cancel</button>
      <button class="book_save_button">Save</button>
    </div>
  </div>
</template>

<script setup>
import Checkbox from './Checkbox.vue'
</script>
