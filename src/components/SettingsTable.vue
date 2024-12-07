<template>
  <table class="table settings-table">
    <thead>
      <tr>
        <th>Setting-name</th>
        <th>Status</th> 
      </tr>
    </thead>
    <tbody class="settings-list">
      <tr class="setting-line hidden" id="setting-line-template" v-for="setting in settings" :key="setting.id">
        <td class="content">
          <router-link class="content_link setting-link" :to="`/settings/${setting.id}`">
            {{ setting.title }}
          </router-link>
        </td>
        <td class="status">
          <div class="st_active status-badge setting-status-badge">active</div>
        </td>
        <td>
          <img class="trash" src="../assets/icons/Trash.svg" alt="Delete" aria-controls="create-remove">
        </td>
      </tr>
      
    </tbody>
  </table>
</template>

<script setup>
  defineProps({
    settings: {
      type: Array,
      required: true
    }
  });
</script>