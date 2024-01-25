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

    h1 {
      color: $secondary-color;
      font-size: 72px;
    }

    button {
      padding: 10px 15px;
      font-size: 18px;
      border-radius: 5px;
      background: $secondary-color;
      color: $primary-background;
      border: 3px solid $third-color;
    }
  }
</style>