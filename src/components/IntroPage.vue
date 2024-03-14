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
      font-size: 72px;
      font-family: 'Rubik', sans-serif;
    }


  }
</style>