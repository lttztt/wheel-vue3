<template>
  <div>
    <span>导航</span> |
    <router-link to="/">lqve1</router-link> |
    <router-link to="/xxx">lqve2</router-link>
  </div>
  <hr/>
  <router-view />
</template>

<script>

export default {
  name: 'App',
}
</script>
