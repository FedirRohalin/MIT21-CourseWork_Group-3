<template>
<section class="container">
    <NavBar />
    <Menu />
    <EmptyState v-if="settings.length === 0" />
    <SettingsTable v-else :settings="settings"/>
</section>
</template>

<script setup>
    import NavBar from '../components/NavBar.vue'
    import Menu from '../components/Menu.vue'
    import SettingsTable from '../components/SettingsTable.vue'
    import EmptyState from '../components/EmptyState.vue'

    import { getState } from '../javascript/localStorage';
    import { ref } from 'vue';

    const appState = getState('state');
    const settings = ref(appState.settings);
</script>