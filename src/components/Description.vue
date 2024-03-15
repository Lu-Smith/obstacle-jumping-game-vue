<template>
    <div v-if="!gameRunning && deltaTime === 0" class="gameDescription">
        <h2><span>Tobby</span>'s Treasure Quest</h2>
        <img src="../assets//images/fish.png" alt="fish">
        <p>Tobby's Treasure Quest is an exhilarating underwater adventure where players take on the role of Tobby, a brave little fish on a mission to find hidden treasure. As Tobby swims through vibrant underwater environments, players must navigate through a maze of obstacles.</p>
        <p>The main objective of the game is to collect keys scattered throughout each level while avoiding dangerous monsters and hazards. Players must use their quick reflexes and strategic thinking to outmaneuver the obstacles and progress through increasingly challenging levels.</p>
        <p>Have an amazing adventure!</p>
    </div>
</template>

<script setup lang="ts">
    defineProps(['gameRunning', 'deltaTime']);
</script>