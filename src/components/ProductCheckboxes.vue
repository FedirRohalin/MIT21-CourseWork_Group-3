<template>
  <div class="checkboxes_with_buttons">
    <div v-for="product in products" :key="product.id" class="checkboxes_list">
      <Checkbox :label="product.title" />
      <div v-for="variant in product.variants">
        <Checkbox :label="variant.title" />
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
  products: {
    type: Object,
  }
})
</script>
