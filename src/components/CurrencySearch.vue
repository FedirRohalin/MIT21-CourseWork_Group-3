<template>
  <div class="books_container">
    <div class="search_0">
      <img src="../assets/icons/Search.svg" alt="_search" />
      <input 
        type="search" 
        placeholder="Search" 
        class="text_input_lol" 
        id="searchCurrency" 
      />
    </div>
    <div class="t-stylish">
      Select crypto from the list or search for the one you need
    </div>
    <div class="books_content">
      <div 
        v-for="(currency, key) in localCurrencies" 
        :key="currency.title" 
        class="book_content"
      >
        <label class="book_radio">
          <input 
            type="radio" 
            name="bookOption" 
            :value="key" 
            :checked="selectedCurrency === key" 
            @change="updateSelectedCurrency(key)" 
            class="book_input" 
          />
          <img class="book_icon" src="../assets/icons/Book.svg" alt="Book" />
          <span class="book_content_title">{{ currency.title }}</span>
        </label>
      </div>
    </div>

    <button 
      class="book_save_button" 
      id="saveCurrency" 
      @click="saveCurrency"
    >
      Save
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  currencies: {
    type: Object,
    required: true,
  },
  selectedCurrency: {
    type: String,
    required: false,
  },
});

const localCurrencies = ref({...props.currencies})
const localSelectedCurrency = ref(props.selectedCurrency)

const emit = defineEmits(['update:selectedCurrency']);

const updateSelectedCurrency = (currency) => {
  emit('update:selectedCurrency', currency);
};

const saveCurrency = () => {
  if (!localSelectedCurrency) {
    alert('No currency selected!');
  } else {
    alert(`Currency saved: ${localSelectedCurrency}`);
  }
};
</script>
