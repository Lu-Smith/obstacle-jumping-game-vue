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
  }
</style>