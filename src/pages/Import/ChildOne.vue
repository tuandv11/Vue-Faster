<template>
  <div class="p-2">
    <from-example></from-example>
  </div>
</template>

<script lang="ts" setup>

import FromExample from "@/components/Forms/FromExample.vue";
</script>

<style scoped lang="scss">
.submit-btn {
  background: $primary-color;
  outline: none;
  border: none;
  color: #fff;
  font-size: 18px;
  padding: 10px 15px;
  display: block;
  width: 100%;
  border-radius: 7px;
  margin-top: 40px;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
}

.submit-btn.invalid {
  animation: shake 0.5s;
  /* When the animation is finished, start again */
  animation-iteration-count: infinite;
}
</style>
