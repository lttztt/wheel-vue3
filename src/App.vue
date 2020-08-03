<template>
  <router-view />
</template>

<script lang="ts">
import {ref, provide} from 'vue'
import {router} from './router'

export default {
  name: 'App',
  setup() {
    const width = document.documentElement.clientWidth;
    const menuVisible = ref(width >= 600);  // 屏幕大于600默认显示
    provide('menuVisible', menuVisible); // set
    router.afterEach(()=> {
      if(width < 600) {
        menuVisible.value = false;
      }
    })
  }
}
</script>
