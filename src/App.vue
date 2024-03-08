<template>
  <div class="App">
    <div v-if="startGame">
      <Game />
    </div>
    <div v-if="!startGame" class="mainPage">
      <IntroPage msg="Welcome" @startGame="handleStartGame"/>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Game from './components/Game.vue';
  import IntroPage from './components/IntroPage.vue';
  import { ref } from 'vue';

  const startGame = ref(false);
  const handleStartGame = (value: boolean) => {
    startGame.value = value;
  };
</script>

<style lang="scss">
  .App {
    background: $main-background;
    color: $primary-color;
    width: 100vw;
    height: 100vh;
    font-family: 'Roboto', sans-serif;
  }

  .mainPage {
    @include flex(center, center, column);
  }
</style>
