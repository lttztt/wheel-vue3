<template>
  <div>
    <Switch :value="x" @input="x = $event" />
  </div>
</template>
<script lang="ts">
import Switch from '../libs/Switch.vue'
import {ref} from 'vue'
export default {
  components: {Switch},
  setup() {
    const x = ref(true);
    return {x}
  }
}
</script>