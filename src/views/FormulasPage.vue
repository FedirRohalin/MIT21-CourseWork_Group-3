<template>
  <section class="container1">
    <LinkToPr />
    <Buttons />
  </section>

  <TextInput :title="formula.title"/>
  <FormulaSettings :formula="formula"/>
  <AddCollections/>
  <AddProducts/>
</template>

<script setup>
import LinkToPr from '../components/LinkToPr.vue'
import Buttons from '../components/Buttons.vue'
import TextInput from '../components/TextInput.vue'
import FormulaSettings from '../components/FormulaSettings.vue'
import AddCollections from '../components/AddCollections.vue'
import AddProducts from '../components/AddProducts.vue'

import { getState } from '../javascript/localStorage';
import { useRoute } from 'vue-router';

const route = useRoute();
const appData = getState('state');
const settingId = route.params.settingId;
const formulaId = route.params.formulaId;

const setting = appData.settings.find((s) => s.id === Number(settingId));

const formula = setting.formulas.find((f) => f.id === Number(formulaId));
</script>
