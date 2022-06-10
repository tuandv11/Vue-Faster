<template>
  <div>{{ locale }}</div>
</template>

<script lang="ts" setup>
import config from "@/config"

const locale = config.VITE_LOCALE
</script>

<style scoped>

</style>
