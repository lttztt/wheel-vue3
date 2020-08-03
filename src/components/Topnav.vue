<template>
    <div class="topnav">
        <div class="logo">logo</div>
        <ul class="menu">
            <li>菜单1</li>
            <li>菜单2</li>
        </ul>
        <span class="toggleAside" @click="toggleMenu"></span>
    </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue'
export default {
  name: 'Topnav',
  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible')
    console.log('topnav获取的 menuVisible', menuVisible)
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value
    }
    return {toggleMenu}
  }
}
</script>

<style lang="scss" scoped>
.topnav {
    background: pink;
    display: flex;
    padding: 16px;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 10;
    justify-content: center;
    > .logo {
        max-width: 6em;
        margin-right: auto;
        font-size: 18px;
        text-transform: uppercase;
    }
    > .menu {
        display: flex;
        white-space: nowrap;
        flex-wrap: nowrap;
        > li {
            margin: 0 1em;
        }
    }
    > .toggleAside {
      position: absolute;
      left: -100px;
      top: 50%;
      transform: translateY(-50%);
      display: inline-block;
      width: 24px;
      height: 24px;
      background: #333;
      z-index: 88;
    }
    @media (max-width: 500px) {
      > .menu {
        display: none;
      }
      > .logo {
        margin: 0 auto;
      }
      > .toggleAside {
        left: 18px;
      }
    }
}
</style>
