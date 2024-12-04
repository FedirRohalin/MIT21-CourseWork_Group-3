<template>
  <div class="formulas_s">
    <table class="table_formulas">
      <thead>
        <tr>
          <th class="formulas_article">Formulas</th>
        </tr>
      </thead>
      <tbody id="formulasFolder">
        <FormulaRow />
        <FormulaRow />
      </tbody>
    </table>
  </div>
</template>

<script setup>
  import FormulaRow from './FormulaRow.vue'
</script>
