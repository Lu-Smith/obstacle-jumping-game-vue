<template>
  <div>
    <Game />
    <IntroPage msg="Welcome" />
  </div>
</template>

<script setup lang="ts">
import Game from './components/Game.vue';
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
