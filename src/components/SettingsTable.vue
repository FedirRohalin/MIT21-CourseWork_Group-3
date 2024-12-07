<template>
  <table class="table settings-table">
    <thead>
      <tr>
        <th>Setting-name</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody class="settings-list">
      <tr
        class="setting-line"
        v-for="setting in settings"
        :key="setting.id"
      >
        <td class="content">
          <router-link
            class="content_link setting-link"
            :to="`/settings/${setting.id}`"
          >
            {{ setting.title }}
          </router-link>
        </td>
        <td class="status">
          <div
            class="st_active status-badge setting-status-badge"
          >
            {{ setting.status }}
          </div>
        </td>
        <td>
          <img
            class="trash"
            src="../assets/icons/Trash.svg"
            alt="Delete"
            aria-controls="create-remove"
            @click="deleteSetting(setting.id)"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>


<script setup>
import { getState, setState } from '../javascript/localStorage';

// Define props
defineProps({
  settings: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(['updateSettings']);

function deleteSetting(settingId) {
  const localState = getState('state') || { settings: [] };

  const updatedSettings = localState.settings.filter(
    (setting) => setting.id != settingId
  );

  setState('state', { ...localState, settings: updatedSettings });

  emit('updateSettings', updatedSettings);
}
</script>
