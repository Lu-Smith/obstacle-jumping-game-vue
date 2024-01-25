<template>
  <div>
    <IntroPage msg="Welcome" />
  </div>
</template>

<script setup lang="ts">
import IntroPage from './components/IntroPage.vue';
</script>

<style lang="scss">
  div {
    background: $primary-background;
    color: $primary-color;
    widows: 100vw;
    height: 100vh;
  }
</style>
