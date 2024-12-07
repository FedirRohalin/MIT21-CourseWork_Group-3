<template>
  <div class="flex_0">
    <div class="Containers_with_books_1">
      <div class="Formula_sq">
        <div class="t_1 t_1_0">Formula settings</div>

        <FormulaInput 
          label="Formula" 
          :value="localFormula.formula" 
          placeholder="X * Y" 
          description="X - cryptocurrency price, Y - product price" 
          id="formulaInput"/>

        <FormulaInput 
          label="Frequency" 
          :value="localFormula.frequency" 
          placeholder="1000" 
          description="Cryptocurrency price update frequency. In milliseconds (like 1000ms = 1s)" 
          id="frequencyInput"/>
        
        <div class="article_of_sq">
          <div class="text_i">
            <input type="text" 
              :value="localFormula.frequency" 
              class="text_input_lol" />
          </div>
        </div>
        <CurrencySearch :currencies="currencies" :selectedCurrency="localFormula.currency"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { getState } from '../javascript/localStorage';
import FormulaInput from './FormulaInput.vue';
import CurrencySearch from './CurrencySearch.vue';

const props = defineProps({
  formula: {
    type: Object,
    required: true,
  }
});

const localFormula = ref({ ...props.formula });
const currencies = ref(getState('state').currencies);
</script>
