<template>
  <div class="link_to_pr">
    <div @click="goHome" id="home">Go to Home</div>

    <div @click="goToSetting">Go to Setting: {{ settingName }}</div>

    <div v-if="$route.name === 'Formula'">Formula: {{ formulaName }}</div>
  </div>
</template>

<script>
export default {
  props: {
    settingId: {
      type: Number,
      required: false,
    },
    settingName: {
      type: String,
      default: 'Unnamed Setting',
    },
    formulaName: {
      type: String,
      default: 'Unnamed Formula',
    },
  },
  methods: {
    goHome() {
      this.$router.push({ name: 'Home' });
    },
    goToSetting() {
      if (this.settingId) {
        this.$router.push({ name: 'Setting', params: { id: this.settingId } });
      } else {
        console.error('No setting ID provided for navigation!');
      }
    },
  },
};
</script>
