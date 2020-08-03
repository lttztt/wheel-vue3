<template>
  <button :class="{checked: checked}" @click="toggleChecked"><span></span></button>
</template>
<script lang="ts">
import {ref} from 'vue'
export default {
  setup() {
    const checked = ref(true);
    const toggleChecked = () => {
      checked.value = ! checked.value
    }
    return {checked, toggleChecked}
  }
}
</script>


<style lang="scss" scoped>
  button {
    width: 40px;
    height: 20px;
    background: gray;
    border-radius: 20px;
    position: relative;
    span {
      position: absolute;
      left: 2px;
      top: 2px;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: #fff;
    }
    &.checked {
      background: blue;
      > span {
        left: calc(100% - #{20px} + 2px)
      }
    }
  }
</style>