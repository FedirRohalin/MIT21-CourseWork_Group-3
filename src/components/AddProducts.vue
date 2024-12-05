<template>
  <div class="Containers_with_books_2">
    <div class="Formula_sq">
      <div class="t_1 t_1_0">Add products</div>
      <ProductSearch />
      <ProductCheckboxes :products="products"/>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProductSearch from './ProductSearch.vue'
import ProductCheckboxes from './ProductCheckboxes.vue'
import { getState } from '../javascript/localStorage'

const appData = getState('state');

const products = ref(appData.products)
</script>
