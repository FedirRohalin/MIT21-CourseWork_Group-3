<template>
  <section class="container1">
    <LinkToPr :settingName="setting && setting.title" :settingId="settingId" :formulaName="formula && formula.title"/>
    <Buttons :settingId="settingId" :settingStatus="setting && setting.status" @status-updated="updateStatus"/>
  </section>

  <TextInput :title="formula.title"/>
  <FormulaSettings :formula="formula"/>
  <AddCollections :selectedCollectionsIds="formula.targets.collectionsIds"/>
  <AddProducts 
    :products="products" 
    :formulaProducts="formula.targets.products" 
    @update:formulaProducts="(updated) => formula.targets.products = updated" 
  />
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router';
import LinkToPr from '../components/LinkToPr.vue'
import Buttons from '../components/Buttons.vue'
import TextInput from '../components/TextInput.vue'
import FormulaSettings from '../components/FormulaSettings.vue'
import AddCollections from '../components/AddCollections.vue'
import AddProducts from '../components/AddProducts.vue'
import { getState } from '../javascript/localStorage';

const route = useRoute();
const appData = getState();

const settingId = route.params.settingId;
const formulaId = route.params.formulaId;
const products = ref(appData.products);

const setting = appData.settings.find((s) => s.id == Number(settingId));

const formula = setting.formulas.find((f) => f.id == Number(formulaId));
const updateStatus = (newStatus) => {
    const updatedAppData = getState();
    appData.value = updatedAppData;
};
</script>
