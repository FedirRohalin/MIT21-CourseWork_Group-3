<template>
  <tr class="formula-template">
    <td>
      <EditablePlaceholder v-model:text="text" />
    </td>
    <td>
      <img class="pen" src="../assets/icons/Pen.svg" alt="pen">
    </td>
    <td>
      <img class="trash" src="../assets/icons/Trash.svg" alt="delete" aria-controls="delete-formula">
    </td>
  </tr>
</template>

<script setup>
  import EditablePlaceholder from './EditablePlaceholder.vue'
</script>