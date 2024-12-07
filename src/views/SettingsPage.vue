<template>
    <section class="container1">
        <LinkToPr :settingName="setting && setting.title" :settingId="settingId" :FormulaName="formula && formula.title"/>
        <Buttons is-formula :settingId="settingId" :settingStatus="setting && setting.status" @status-updated="updateStatus"/>
    </section>
    <TextInput />
    <Bottom />
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import LinkToPr from '../components/LinkToPr.vue';
import Buttons from '../components/Buttons.vue';
import TextInput from '../components/TextInput.vue';
import Bottom from '../components/Bottom.vue';
import { getState } from '../javascript/localStorage';

const route = useRoute();
const appData = ref(getState());

const settingId = computed(() => Number(route.params.settingId));
const formulaId = computed(() => Number(route.params.formulaId));

const setting = computed(() => {
    return appData.value.settings.find((s) => s.id === settingId.value) || null;
});

const formula = computed(() => {
    return setting.value?.formulas.find((f) => f.id === formulaId.value) || null;
});

const updateStatus = (newStatus) => {
    const updatedAppData = getState();
    appData.value = updatedAppData;
};
</script>
