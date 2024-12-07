<template>
  <div class="checkboxes_with_books">
    <div v-for="product in products" :key="product.id" class="product_checkbox">
      <label>
        <input 
          type="checkbox" 
          :checked="isProductSelected(product.id)" 
          @change="toggleProduct(product.id)" 
        />
        {{ product.title }}
      </label>
      <div v-if="product.variants.length" class="product_variants">
        <div 
          v-for="variant in product.variants" 
          :key="variant.id" 
          class="variant_checkbox"
        >
          <label>
            <input 
              type="checkbox" 
              :checked="isVariantSelected(product.id, variant.id)" 
              @change="toggleVariant(product.id, variant.id)" 
            />
            {{ variant.title }}
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
  selectedProducts: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(['update:selectedProducts']);

const isProductSelected = (productId) => {
  return props.selectedProducts.some((p) => p.id === productId);
};

const isVariantSelected = (productId, variantId) => {
  const product = props.selectedProducts.find((p) => p.id === productId);
  return product?.variants.includes(variantId);
};

const toggleProduct = (productId) => {
  const selected = [...props.selectedProducts];
  const productIndex = selected.findIndex((p) => p.id === productId);

  if (productIndex !== -1) {
    selected.splice(productIndex, 1);
  } else {
    const product = props.products.find((p) => p.id === productId);
    selected.push({ id: product.id, variants: product.variants.map((v) => v.id) });
  }

  emit('update:selectedProducts', selected);
};

const toggleVariant = (productId, variantId) => {
  const selected = [...props.selectedProducts];
  const productIndex = selected.findIndex((p) => p.id === productId);

  if (productIndex !== -1) {
    const product = selected[productIndex];
    const variantIndex = product.variants.indexOf(variantId);

    if (variantIndex !== -1) {
      product.variants.splice(variantIndex, 1);

      if (product.variants.length === 0) {
        selected.splice(productIndex, 1);
      }
    } else {
      product.variants.push(variantId);
    }
  } else {
    selected.push({ id: productId, variants: [variantId] });
  }

  emit('update:selectedProducts', selected);
};
</script>
