<template>

<div id="app">
   <h1>Курс криптовалюти</h1>
   <button v-on:click="redirectToMenu">Back</button>
   <div>Selected: {{ selected }}</div>

   <select v-on:click="resetCurrencyPrice" v-model="selected">
      <option disabled value="">Please select one</option>
      <option>BTC</option>
      <option>ETH</option>
      <option>LTC</option>
   </select>
      <button v-on:click="getCurrencyPrice" id="get-price">Отримати вартість</button>
      <p v-if="priceInUSDT" id="result">{{selected}}: {{priceInUSDT}} in USDT</p>
   </div>
</template>

<script>
export default{
   data() {
      return {
         selected: "", 
         priceInUSDT: "",
      };
   },
   methods:
   {
   redirectToMenu() {
   this.$router.push({ name: 'Home' });
      },
   resetCurrencyPrice(){
   this.priceInUSDT="";
   },
   async getCurrencyPrice(){
   const apiKey = '15&26AlcO2213wZpS642V88$'; // Замість YOUR_API_KEY вставте свій ключ
   const cryptoSymbol=this.selected;
   const apiUrl = `https://min-api.cryptocompare.com/data/price?fsym=${cryptoSymbol}&tsyms=USDT&api_key=${apiKey}`;
   try {
      const response = await fetch(apiUrl); // Запит до API
      if (!response.ok) {
         throw new Error(`Помилка: ${response.status} ${response.statusText}`);
      }

      const data = await response.json(); // Парсинг відповіді
      this.priceInUSDT = data.USDT;
      return data.USDT; // Повертає ціну в USDT
   } catch (error) {
      console.error('Не вдалося отримати дані:', error);
      throw error; // Повторно кидає помилку для обробки в місці виклику
   }
   console.log("helo",cryptoSymbol);

   } 
   }
   };
</script>



