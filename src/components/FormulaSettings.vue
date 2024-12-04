<template>
  <div class="flex_0">
    <div class="Containers_with_books_1">
      <div class="Formula_sq">
        <div class="t_1 t_1_0">Formula settings</div>
        
        <FormulaInput label="Formula" placeholder="X * Y" description="X - cryptocurrency price, Y - product price" id="formulaInput"/>
        <FormulaInput label="Frequency" placeholder="1000" description="Cryptocurrency price update frequency. In milliseconds (like 1000ms = 1s)" id="frequencyInput"/>
        
        <div class="article_of_sq">
          <div class="text_i">
            <input type="text" placeholder="1000" class="text_input_lol" />
          </div>
        </div>
        <CurrencySearch />
      </div>
    </div>
  </div>
</template>

<script setup>
  import FormulaInput from './FormulaInput.vue'
  import CurrencySearch from './CurrencySearch.vue'
</script>
