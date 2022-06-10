<script lang="ts" setup>
import SideBarMenu from "@/components/Dashboard/SideBarMenu.vue";

interface Props {
  name: string
  sideBarLinks: any
}

const props = defineProps<Props>()
</script>

<template>
  <div class="sidebar">
    <div class="header">
      <div class="header-name">{{ props.name }}</div>
    </div>
    <div class="sidebar-menus">
      <side-bar-menu v-for="{name, links} in props.sideBarLinks" :key="name" class="sidebar-menu" :name="name" :links="links"></side-bar-menu>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  padding: 1rem 0;
  height: 60px;
}

.header-name {
  font-size: 20px;
  font-weight: bold;
  padding: 0 1rem;
}

.sidebar-menus {
  overflow-y: scroll;
  max-height: calc(100vh - 60px);
  position: relative;
  right: 0;
  top: 0;
}

.sidebar-menus::-webkit-scrollbar {
  width: 0;
}

.sidebar {
  height: 100vh;
}
</style>
