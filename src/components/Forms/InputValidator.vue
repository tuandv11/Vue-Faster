<template>
  <div
      class="text-input"
      :class="{ 'has-error': errorMessage, success: meta.valid }"
  >
    <label :for="name">{{ label }}</label>
    <input
        :name="name"
        :id="name"
        :type="type"
        v-model="inputValue"
        :placeholder="placeholder"
        @input="handleChange"
        @blur="handleBlur"
    />

    <p class="help-message">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import { useField } from "vee-validate";
import { toRef } from 'vue'

const props = defineProps<{
  name: string,
  type: string,
  placeholder: string,
  label: string,
  successMessage?: string
}>()

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
  meta,
} = useField(toRef(props, "name"));

</script>

<style scoped lang="scss">
.text-input {
  width: 100%;
  margin-bottom: 20px;
  position: relative;
  overflow: unset !important;
}

label {
  display: block;
  margin-bottom: 4px;
  width: 100%;
}

input {
  border-radius: 5px;
  border: 2px solid transparent;
  padding: 15px 10px;
  outline: none;
  background-color: #f2f5f7;
  width: 100%;
  transition: border-color 0.3s ease-in-out, color 0.3s ease-in-out,
  background-color 0.3s ease-in-out;
}

input:focus {
  border-color: $primary-color;
}

.help-message {
  font-size: 14px;
  margin: 0;
  position: absolute;
  left: 0;
  bottom: -20px;
}

.text-input.has-error input {
  background-color: $error-bg-color;
  color: $error-color;
}

.text-input.has-error input:focus {
  border-color: $error-color;
}

.text-input.has-error .help-message {
  color: $error-color;
}

.text-input.success input {
  background-color: $success-bg-color;
  color: $success-color;
}

.text-input.success input:focus {
  border-color: $success-color;
}

.text-input.success .help-message {
  color: $success-color;
}
</style>
