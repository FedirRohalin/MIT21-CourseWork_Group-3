<template>
  <tr class="formula-template">
    <td>
      <EditablePlaceholder :text="settingName"/>
    </td>
    <td>
      <router-link :to=redirectionLink class="linkToFormulasPage">
        <img class="pen" src="../assets/icons/Pen.svg" alt="pen">
      </router-link>
    </td>
    <td>
      <img class="trash" src="../assets/icons/Trash.svg" alt="delete">
    </td>
  </tr>
</template>

<script setup>
  import EditablePlaceholder from './EditablePlaceholder.vue'

  const props = defineProps({
    settingName: {
      type: String,
      required: true,
    },
    redirectionLink: {
      settingName: String,
    }
  });
</script>
