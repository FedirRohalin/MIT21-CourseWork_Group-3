<template>
<section class="container">
    <NavBar />
    <Menu />
    <SettingsTable />
    <EmptyState />
</section>
</template>

<script setup>
    import NavBar from '../components/NavBar.vue'
    import Menu from '../components/Menu.vue'
    import SettingsTable from '../components/SettingsTable.vue'
    import EmptyState from '../components/EmptyState.vue'
</script>