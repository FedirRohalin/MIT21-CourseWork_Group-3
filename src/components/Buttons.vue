<template>
  <div class="buttons">
    <button v-on:click="createStatus" data-status="draft" class="activate">{{settingStatus}}</button>
    <button class="discard">Discard</button>
    <button class="save">Save</button>
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
  },
  emits: ['status-updated'],
  methods: {
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
  },
};
</script>

