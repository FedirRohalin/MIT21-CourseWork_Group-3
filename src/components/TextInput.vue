<template>
  <div class="text_input">
    <div class="text_i_article">Title</div>
    <div class="text_i">
      <input
        type="text"
        placeholder="Setting name"
        class="text_input_lol"
        id="formulaTitleInput"
        :value="title"
      >
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: null,
  }
})
</script>
