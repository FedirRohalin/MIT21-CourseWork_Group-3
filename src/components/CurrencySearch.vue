<template>
  <div class="books_container">
    <div class="search_0">
      <img src="../assets/icons/Search.svg" alt="_search" />
      <input 
        type="search" 
        placeholder="Search" 
        class="text_input_lol" 
        id="searchCurrency" 
        v-model="searchQuery"
      />
    </div>
    <div class="t-stylish">
      Select crypto from the list or search for the one you need
    </div>
    <div class="books_content">
      <div 
        v-for="(currency, key) in filteredCurrencies" 
        :key="currency.title" 
        class="book_content"
      >
        <label class="book_radio">
          <input 
            type="radio" 
            name="bookOption" 
            :value="key" 
            :checked="localSelectedCurrency === key" 
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
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { setState, getState } from '../javascript/localStorage';

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

const localCurrencies = ref({...props.currencies});
const localSelectedCurrency = ref(props.selectedCurrency);
const searchQuery = ref('');

const emit = defineEmits(['update:selectedCurrency']);

const updateSelectedCurrency = (currency) => {
  localSelectedCurrency.value = currency;
  emit('update:selectedCurrency', currency);
};

const filteredCurrencies = computed(() => {
  const query = searchQuery.value.toLowerCase();
  return Object.keys(localCurrencies.value)
    .filter(key => localCurrencies.value[key].title.toLowerCase().includes(query))
    .reduce((result, key) => {
      result[key] = localCurrencies.value[key];
      return result;
    }, {});
});

const state = getState()

const route = useRoute()
const settingId = route.params.settingId;
const formulaId = route.params.formulaId;

const saveCurrency = () => {
  if (!localSelectedCurrency.value) {
    alert('No currency selected!');
  } else {
    // Retrieve the state from localStorage
    const storedData = state;

    // Find the setting using the settingId
    const settings = storedData.settings || {};
    
    const setting = settings.find(item => item.id == settingId);
    
    if (setting) {
      // Find the formula using the formulaId
      const formula = setting.formulas ? setting.formulas[formulaId] : null;

      if (formula) {
        // Update the formula with the selected currency
        formula.currency = localSelectedCurrency.value;

        // Save the updated state to localStorage
        setState('state', JSON.stringify({ ...storedData, settings }));

        alert(`Currency saved: ${localSelectedCurrency.value}`);
      } else {
        alert(`Formula with ID ${formulaId} not found!`);
      }
    } else {
      alert(`Setting with ID ${settingId} not found!`);
    }
  }
};
</script>
