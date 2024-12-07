<template>
  <div class="Containers_with_books_2">
    <div class="Formula_sq">
      <div class="t_1 t_1_0">Add products</div>
      <ProductSearch />
      <ProductCheckboxes 
        :products="products" 
        :selectedProducts="formulaProducts" 
        @update:selectedProducts="updateFormulaProducts" 
      />
    </div>
  </div>
</template>

<script setup>
import ProductSearch from './ProductSearch.vue';
import ProductCheckboxes from './ProductCheckboxes.vue';

defineProps({
  products: Array,
  formulaProducts: Array,
})

</script>
