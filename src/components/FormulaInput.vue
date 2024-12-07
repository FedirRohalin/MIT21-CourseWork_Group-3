<template>
  <div class="article_of_sq">
    <div class="t_2 t_2_0">{{ label }}</div>
    <div class="text_i">
      <input type="text" :placeholder="placeholder" class="text_input_lol" :id="id" :value="value"/>
    </div>
    <div class="t_2 t_2_0">{{ description }}</div>
  </div>
</template>

<script setup> 
  defineProps({
    label: String,
    placeholder: String,
    description: String,
    id: String,
    value: String,
  })
</script>
