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
  export default{
    methods: {
      editSetting(id = null) {
        const timestamp = new Date().getTime();
        const settingId = id || `setting-${timestamp}`;
        console.log(this.$router.push({ name: 'Setting', params: { id: settingId } }))
        this.$router.push({ name: 'Setting', params: { id: settingId } });
      },
      /**
       * Redirects to the Setting view to create a new setting
       */
      createSetting() {
          this.editSetting();
      },
    }
  }
</script>