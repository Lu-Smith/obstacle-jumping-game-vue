<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="handleStartGame">Start Game</button>
  </div>
</template>

<script setup lang="ts">
  defineProps<{ msg: string }>();

  const emits = defineEmits(['startGame']);

  const handleStartGame = () => {
    emits('startGame', true);
  };
</script>

<style lang="scss" scoped>
  div {
    height: 100vh;
    width: 100vw;

    h1 {
      color: $secondary-color;
      font-size: $nav-font-size;
      text-shadow: 15px 5px 15px rgba(250, 250, 250, 1);
    }

    button {
      font-family: 'Roboto', sans-serif;
      padding: $button-padding;
    }

  }

  @media screen and (max-width: 786px) {
    div {
      h1 {
        font-size: $big-font-size;
      }

      button {
          padding: $small-button-padding;
      }
    }
  }

  @media screen and (max-width: 480px) {
    div {
      h1 {
        font-size: $primary-font-size;
      }

      button {
        padding: $mobile-button-padding;
      }
    }
  }
</style>