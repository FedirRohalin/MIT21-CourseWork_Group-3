<template>
  <div class="bottommm">
    <EmptyState v-if="formulas.length === 0" />
    <Formulas v-else :formulas="formulas" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import EmptyState from './EmptyState.vue';
import Formulas from './Formulas.vue';
import { getState } from '../javascript/localStorage'

const appData = getState('state');

const formulas = ref(appData);
</script>
