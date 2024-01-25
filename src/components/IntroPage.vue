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
    background: $primary-background;
    height: 30vw;
    @include flex(center, center, column);
    width: 100vw;
    border-radius: 20%;

    h1 {
      color: $secondary-color;
      font-size: 72px;
      font-family: 'Rubik', sans-serif;
    }

    button {
      padding: 10px 15px;
      font-size: 18px;
      border-radius: 10px;
      background: $secondary-color;
      color: $primary-background;
      border: 3px solid $third-color;
      margin-top: 10px;
      letter-spacing: 1px;
    }
  }
</style>