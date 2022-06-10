<script lang="ts" setup>
import { RouterView } from 'vue-router'
import SideBar from '@/components/Dashboard/SideBar.vue'
import SidebarLinks from "@/sidebarLinks";

</script>

<template>
  <div class="wrapper">
    <div class="main-panel">
      <RouterView />
    </div>
    <SideBar name="Công việc" :side-bar-links="SidebarLinks"></SideBar>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
}
</style>
