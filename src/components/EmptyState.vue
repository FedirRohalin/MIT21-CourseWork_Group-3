<template>
  <div class="empty-state">
    <div class="image">
      <img class="image_0" src="../assets/icons/Illustration.svg" alt="EMPTY">
    </div>
    <div class="t_1">Oopsie, seems that you have no settings yet</div>
    <div class="t_2">Create your first setting!</div>
    <button v-on:click="createSetting" class="b_0" aria-controls="create-setting">+</button>
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