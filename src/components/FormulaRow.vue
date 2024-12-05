<template>
  <tr class="formula-template">
    <td>
      <router-link :to=redirectionLink class="linkToFormulasPage">{{settingName}}</router-link>
    </td>
    <td>
      <img class="pen" src="../assets/icons/Pen.svg" alt="pen">
    </td>
    <td>
      <img class="trash" src="../assets/icons/Trash.svg" alt="delete" aria-controls="delete-formula">
    </td>
  </tr>
</template>

<script>
  export default {
    props: [
      'settingName',
      'redirectionLink',
    ]
  }
</script>
