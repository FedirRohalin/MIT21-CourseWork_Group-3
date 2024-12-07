<template>
    <div>
      <div v-if="isEditing">
        <input
          type="text"
          v-model="editableText"
          @keydown.enter="saveChanges"
          @blur="saveChanges"
          class="editable-input"
        />
      </div>
      <div v-else @click="enableEditing" class="placeholder-text">
        {{ editableText }}
      </div>

    </div>
  </template>
  
  <script>
  export default {
    props: {
      text: {
        type: String,
        default: "Formula`s name",
      },
    },
    data() {
      return {
        isEditing: false,
        editableText: this.text,
      };
    },
    methods: {
      enableEditing() {
        this.isEditing = true;
        this.$nextTick(() => {
          const inputElement = this.$el.querySelector("input");
          if (inputElement) inputElement.focus();
        });
      },
      saveChanges() {
        this.isEditing = false;
        this.$emit("update:text", this.editableText);
      },
    },
  };
  </script>
  
  <style scoped>
.placeholder-text {
  cursor: pointer;
  color: black;
  padding: 5px;
  border: 1px solid transparent;
  transition: border 0.3s;
}
.placeholder-text:hover {
  border: 1px dashed lightgray;
  background-color: #f9f9f9;
}
.editable-input {
  width: 100%;
  padding: 5px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: none;
}
.editable-input:focus {
  border-color: #dadada;
}
  </style>