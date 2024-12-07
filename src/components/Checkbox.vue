<template>
  <div class="checkbox_square">
    <input 
      type="checkbox" 
      :checked="checked" 
      @change="updateChecked($event.target.checked)" 
    />
    <div class="book_content">
      <img class="book_icon" src="../assets/icons/Book.svg" alt="_book" />
      <div class="book_content_title">{{ label }}</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  label: String,
  checked: Boolean,
});

const emit = defineEmits(['update:checked']);

const updateChecked = (isChecked) => {
  emit('update:checked', isChecked);
};
</script>
