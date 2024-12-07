
<template>
  <div class="checkbox-wrapper">
    <label class="custom-checkbox">
      <input
        type="checkbox"
        :checked="checked"
        @change="updateChecked($event.target.checked)"
      />

      <div class="book-content">
        <img class="book-icon" src="../assets/icons/Book.svg" alt="book" />
        <div class="book-content-title">{{ label }}</div>
      </div>
    </label>
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