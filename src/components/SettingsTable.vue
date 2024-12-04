<template>
  <table class="table settings-table">
    <thead>
      <tr>
        <th>Setting-name</th>
        <th>Status</th> 
      </tr>
    </thead>
    <tbody class="settings-list">
      <tr class="setting-line hidden" id="setting-line-template">
        <td class="content">
          <a class="content_link setting-link" href="http://localhost:5173/setting/:id">
            2 sec for T-Shirts
          </a>
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
  