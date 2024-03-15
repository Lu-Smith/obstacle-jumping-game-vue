<template>
  <div class="App">
    <div v-if="startGame">
      <Game />
    </div>
    <div v-if="!startGame" class="mainPage">
      <IntroPage msg="Tobby's Treasure Quest" @startGame="handleStartGame"/>
    </div>
    <div class="footerContainer" v-if="!startGame">
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import Game from './components/Game.vue';
  import IntroPage from './components/IntroPage.vue';
  import Footer from './components/Footer.vue';

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

    .mainPage {
      text-align: center;
      gap: 20px;
      padding-top: 10%;
    }

    .footerContainer {
      position: fixed;
      bottom: 0;
      right: 0;
      font-size: $primary-font-size;
      line-height: $primary-line-height;
    }
  }

</style>
