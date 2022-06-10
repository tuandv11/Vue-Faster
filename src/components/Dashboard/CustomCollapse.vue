<script lang="ts" setup>
interface Props {
  collapse: boolean
}

const {collapse = false} = defineProps<Props>()

const beforeEnter = (el: any) => {
  requestAnimationFrame(() => {
    if (!el.style.height) {
      el.style.height = '0px'
    }

    el.style.display = null
  })
}

const enter = (el: any) => {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      el.style.height = `${ el.scrollHeight }px`;
    })
  })
}

const afterEnter = (el: any) => {
  el.style.height = null
}

const beforeLeave = (el: any) => {
  requestAnimationFrame(() => {
    if (!el.style.height) {
      el.style.height = `${ el.offsetHeight }px`;
    }
  });
}

const leave = (el: any) => {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      el.style.height = '0px';
    });
  });
}

const afterLeave = (el: any) => {
  el.style.height = null
}
</script>

<template>
  <transition enter-active-class="enter-active"
              leave-active-class="leave-active"
              @before-enter="beforeEnter"
              @enter="enter"
              @after-enter="afterEnter"
              @before-leave="beforeLeave"
              @leave="leave"
              @after-leave="afterLeave">
    <slot v-if="!collapse"></slot>
  </transition>
</template>

<style lang="scss" scoped>
.enter-active,
.leave-active {
  overflow: hidden;
  transition: height .3s ease;
}
</style>
