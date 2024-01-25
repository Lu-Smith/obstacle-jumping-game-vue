<template>
      <h1>{{ msg }}</h1>
      <button @click="handleStartGame">Start Game</button>
</template>

<script setup lang="ts">
defineProps<{ msg: string }>();

const emits = defineEmits(['startGame']);

const handleStartGame = () => {
  emits('startGame', true);
};
</script>