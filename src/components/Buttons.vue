<template>
  <div class="buttons">
    <button v-on:click="createStatus" data-status="draft" class="activate">{{settingStatus === "active" ? "Active" : "Draft"}}</button>
    <button v-on:click="createFormula" class="create_formula" aria-controls="create-formula">Create Formula</button>
  </div>
</template>

<script>
import { getState, setState } from '../javascript/localStorage';

export default {
  props: {
    settingId: {
      type: Number,
      default: null,
    },
    settingStatus: {
      type: String,
      default: "active",
    },
    isFormula: {
      type: Boolean,
    }
  },
  emits: ['status-updated'],
  methods: {
    editFormula() {
      const formulaTemplate = {
        id: Date.now(),
        title: 'Formula name',
        currency: 'BTC',
        formula: 'X * Y',
        frequency: 1000,
        targets: {
          collectionsIds: [],
          products: [],
        },
      };

      const localState = getState('state') || { settings: [] }; // Ensure a default structure

      const currentSetting = localState.settings.find(
        (setting) => setting.id == this.settingId
      );

      if (!currentSetting) {
        console.error('No setting found with ID:', this.settingId);
        return;
      }

      currentSetting.formulas.push(formulaTemplate);

      setState('state', localState);

      this.$router.push(`/formula/${this.settingId}/${formulaTemplate.id}`);
    },
    editStatus() {
      const localState = getState('state') || { settings: [] };

      const currentSetting = localState.settings.find(
        (setting) => setting.id == this.settingId
      );

      if (!currentSetting) {
        console.error('No setting found with ID:', this.settingId);
        return;
      }

      currentSetting.status = (currentSetting.status === 'active') ? 'draft' : 'active';

      setState('state', localState);

      this.$emit('status-updated', currentSetting.status);
    },
    createStatus() {
      this.editStatus();
    },
    createFormula() {
      this.editFormula();
    },
  },
};
</script>

