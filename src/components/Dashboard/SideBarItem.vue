<script lang="ts" setup>
import { computed, ref } from "vue";
import CustomCollapse from '@/components/Dashboard/CustomCollapse.vue'

interface Props {
  link: {
    name: string
    collapse: boolean
    children: [{
      name: string,
      path: string
    }]
    path: string
    required: true
  }
}

const props = defineProps<Props>()

const hasChildren = computed(() => {
  return props.link.children && props.link.children.length > 0
})

const collapse = ref(false)
</script>
<template>
  <component :is="hasChildren ? 'div' : 'router-link'" class="sidebar-item" :class="{'sidebar-item-link': !hasChildren}"
             :to="props.link.path">
    <div @click="collapse = !collapse" class="sidebar-item-name" :class="{'fw-bold' : hasChildren}">{{
        props.link.name
      }}
      <span v-if="hasChildren" class="caret"><fa :icon="!collapse ? 'caret-down' : 'caret-right'"></fa></span>
    </div>
    <custom-collapse :collapse="collapse" v-if="hasChildren">
      <div>
        <router-link class="sidebar-item-child" v-for="child in props.link.children" :to="child.path">{{
            child.name
          }}
        </router-link>
      </div>
    </custom-collapse>
  </component>
</template>

<style scoped lang="scss">
.sidebar-item {
  display: block;
  color: #000;
  cursor: pointer;
}

a {
  text-decoration: none;
}

.sidebar-item-child {
  display: block;
  color: #000;
  padding: 8px 1rem;
  font-size: 14px;
  border-bottom: 1px solid var(--border-gray);
}

.sidebar-item-child:hover {
  background-color: var(--back-ground-color-active-menu);
}

.sidebar-item-name {
  padding: 8px 1rem;
  border-bottom: 1px solid var(--border-gray);
  font-size: 14px;
}

.router-link-active {
  background-color: var(--back-ground-color-active-menu);
}

.caret {
  float: right;
}

.sidebar-item-link:hover {
  background-color: var(--back-ground-color-active-menu);
}
</style>
