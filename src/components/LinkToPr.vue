<template>
  <div class="link_to_pr">
    <div v-on="goHome" id="home">Home</div>
    <div v-on="goToSetting" >Setting Name</div> <!-- requires adaptivity with pages-->
    <div v-if="this.$route.name === 'Formula'">Formulas Name</div>
  </div>
</template>
<!-- Setting Name and Fomulas Name should be an arguments (name of setting or formula)-->

<script>
  export default {
    methods: {
      goHome() {
        this.$router.push({ name: 'Home' });
      },
      goToSetting() {
        this.$router.push({ name: 'Setting', params: { id: this.settingId } });
      },
    }
  }
</script>