<template>
  <div class="nav">
    <h1 class="settings">Settings</h1>
    <div class="header-controls">
      <button v-on:click="createSetting" class="btn-primary btn" aria-controls="create-setting">
        Create setting
      </button>
    </div>
  </div>
</template>

<script>
import { getState, setState } from '../javascript/localStorage';

export default{
  methods: {
    editSetting(id = null) {
      const settingTemplate = {
          id: new Date().getTime(),
          title: 'Setting title',
          status: 'draft',
          formulas: [],
      }

      const localState = getState("state")
      
      localState.settings.push(settingTemplate)
      setState("state", localState)
      this.$router.push(`/settings/${settingTemplate.id}`);
    },
    createSetting() {
        this.editSetting();
    },
  }
}
</script>