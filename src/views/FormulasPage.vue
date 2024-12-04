<template>
    <section class="container1">
      <LinkToPr />
      <Buttons />
    </section>
  
    <TextInput />
    <FormulaSettings />
    <AddCollections />
    <AddProducts />
  </template>
  
  <script setup>
    import LinkToPr from '../components/LinkToPr.vue'
    import Buttons from '../components/Buttons.vue'
    import TextInput from '../components/TextInput.vue'
    import FormulaSettings from '../components/FormulaSettings.vue'
    import AddCollections from '../components/AddCollections.vue'
    import AddProducts from '../components/AddProducts.vue'
  </script>