<template>
  <div>
    <div v-if="startGame">
      <Game />
    </div>
    <div v-if="!startGame">
      <IntroPage msg="Welcome" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Game from './components/Game.vue';
import IntroPage from './components/IntroPage.vue';
import { ref } from 'vue';

const startGame = ref(false);
</script>

<style lang="scss">
  div {
    background: $primary-background;
    color: $primary-color;
    widows: 100vw;
    height: 100vh;
  }
</style>
