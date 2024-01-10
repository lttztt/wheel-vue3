<template>
  <button :class="{ checked: value }" @click="toggleChecked">
    <span></span>
  </button>
  {{ value }}
</template>
<script lang="ts">
import { ref } from "vue";
export default {
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const toggleChecked = () => {
      context.emit("update:value", !props.value);
    };
    return { toggleChecked };
  },
};
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h * 2;
  border: none;
  background: #bfbfbf;
  border-radius: calc($h / 2);
  position: relative;
  transition: all 250ms;
  span {
    position: absolute;
    left: 2px;
    top: 2px;
    width: $h2;
    height: $h2;
    border-radius: calc($h / 2);
    background: #fff;
    transition: all 250ms;
  }
  &.checked {
    background: #1890ff;
    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
  &:focus {
    outline: none;
  }
  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
  &.checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>
