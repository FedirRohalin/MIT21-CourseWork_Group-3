<template>
  <div class="menu">
    <input type="radio" id="btn_all" name="menu" class="menu_radio" checked>
    <label for="btn_all" class="menu_button">All settings</label>
    
    <input type="radio" id="btn_published" name="menu" class="menu_radio">
    <label for="btn_published" class="menu_button">Published</label>
    
    <input type="radio" id="btn_btc" name="menu" class="menu_radio">
    <label for="btn_btc" class="menu_button">BTC</label>
    
    <input type="radio" id="btn_usdt" name="menu" class="menu_radio">
    <label for="btn_usdt" class="menu_button">USDT</label>
    
    <input type="radio" id="btn_ton" name="menu" class="menu_radio">
    <label for="btn_ton" class="menu_button">TON</label>

    <button v-on:click="redirectToCurrencyPrisePage">Price</button>
  </div>
</template>



<script>
  export default{
    methods: {
      redirectToCurrencyPrisePage() {
        this.$router.push({ name: 'Currency Price' });
      },
      /**
       * Redirects to the Currency Price view
       */
    }
  }
</script>