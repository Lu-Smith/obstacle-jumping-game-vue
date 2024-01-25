<template>
  <div>
   Hello
  </div>
  <IntroPage msg="Welcome" />
</template>

<script setup lang="ts">
import IntroPage from './components/IntroPage.vue';
import './styles/app.scss';
</script>

<style scoped lang="scss">
div {
  background: $primary-background;
}
</style>
