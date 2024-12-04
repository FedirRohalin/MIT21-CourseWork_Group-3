<template>
  <div class="checkbox_square">
    <input type="checkbox" />
    <div class="book_content">
      <img class="book_icon" src="../assets/icons/Book.svg" alt="_book" />
      <div class="book_content_title">{{ label }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  label: String
})
</script>
