<template>
    <div class="assets">
        <img src="../assets/images/background1.png" alt="background" id="background1">
        <img src="../assets/images/background2.png" alt="background" id="background2">
        <img src="../assets/images/backgroundFinal.png" alt="final background" id="backgroundFinal">
        <img src="../assets/images/player.png" alt="player" id="player">
        <img src="../assets/images/monsters.png" alt="monsters" id="monsters">
        <img src="../assets/images/monsters1.png" alt="monsters" id="monsters1">
        <img src="../assets/images/key.png" alt="key" id="key">
        <img src="../assets/images/heart.png" alt="heart" id="heart">
        <img src="../assets/images/boubles2.png" alt="boubles" id="boubles2">
        <audio :src=Speed id="speed"></audio>
        <audio :src=Crunch id="crunch"></audio>
        <audio :src=Bounce id="bounce"></audio>
        <audio :src=Win id="win"></audio>
        <audio :src=Lost id="lose"></audio>
    </div>
</template>

<script setup lang="ts">
    import Speed from '../assets/sounds/speed.mp3';
    import Bounce from '../assets/sounds/bounce.mp3';
    import Win from '../assets/sounds/win.mp3';
    import Lost from '../assets/sounds/lost.mp3';
    import Crunch from '../assets/sounds/lost.mp3';
</script>