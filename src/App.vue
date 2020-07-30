<template>
  <div>
    <router-link to="/">home</router-link> |
    <router-link to="/doc">doc</router-link>
  </div>
  <hr/>
  <router-view />
</template>

<script>

export default {
  name: 'App',
}
</script>
