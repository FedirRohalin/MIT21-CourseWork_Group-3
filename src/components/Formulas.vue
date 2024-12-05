<template>
  <div class="formulas_s">
    <table class="table_formulas">
      <thead>
        <tr>
          <th class="formulas_article">Formulas</th>
        </tr>
      </thead>
      <tbody id="formulasFolder">
        <FormulaRow
          v-for="formula in formulas" :key="formula.id"
          :settingName=formula.title
          :redirectionLink="`/formula/${settingId}/${formula.id}`"
        />
      </tbody>
    </table>
  </div>
</template>

<script setup>
import FormulaRow from './FormulaRow.vue';
import { getState } from '../javascript/localStorage';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const appState = getState('state');
const settingId = route.params.id;
const setting = appState.settings.find((s) => s.id === Number(settingId));
const formulas = ref(setting?.formulas || []);
</script>
