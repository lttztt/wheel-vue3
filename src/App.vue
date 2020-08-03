<template>
  <router-view />
</template>

<script lang="ts">
import {ref, provide} from 'vue'

export default {
  name: 'App',
  setup() {
    const width = document.documentElement.clientWidth;
    const menuVisible = ref(width >= 600);  // 屏幕大于600默认显示
    provide('menuVisible', menuVisible)
  }
}
</script>
