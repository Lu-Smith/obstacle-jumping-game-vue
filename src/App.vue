<template>
  <div>
   Hello
  </div>
  <IntroPage msg="Welcome" />
</template>

<script setup lang="ts">
import IntroPage from './components/IntroPage.vue';
</script>

<style lang="scss">
div {
  background: $primary-background;
  color: $primary-color;
}
</style>
