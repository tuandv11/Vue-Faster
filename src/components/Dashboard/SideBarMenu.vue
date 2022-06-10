<script lang="ts" setup>
import SideBarItem from '@/components/Dashboard/SideBarItem.vue'

interface Props {
  name: string
  links: []
}

const props = defineProps<Props>()
</script>
<template>
  <div class="sidebar-menu">
    <div class="menu-name">
      {{ props.name }}
    </div>
    <side-bar-item v-for="link in props.links" :link="link"></side-bar-item>
  </div>
</template>


<style scoped lang="scss">
.sidebar-menu {
}

.menu-name {
  font-weight: bold;
  padding: 10px 1rem;
  background-color: var(--back-ground-color-gray);
}
</style>
