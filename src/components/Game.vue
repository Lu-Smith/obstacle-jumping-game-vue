<template>
    <div class="gameContainer">
        <button 
        v-if="!gameRunning"
        @click="startGame">Go</button>
        <button 
        v-if="gameRunning"
        @click="pauseGame">Pause</button>
        <Instructions :gameRunning="gameRunning" :showInfo="showInfo" @showInstructions="showInstructions"/>
        <canvas ref="gameCanvas"></canvas>
        <div class="assets">
            <img src="../assets/images/background1.png" alt="background" id="background1">
            <img src="../assets/images/background2.png" alt="background" id="background2">
            <img src="../assets/images/player.png" alt="player" id="player">
            <img src="../assets/images/monsters.png" alt="monsters" id="monsters">
            <img src="../assets/images/key.png" alt="key" id="key">
            <img src="../assets/images/heart.png" alt="heart" id="heart">
            <img src="../assets/images/boubles2.png" alt="boubles" id="boubles2">
            <audio src="../assets/media/speed.mp3" id="speed"></audio>
            <audio src="../assets/media/crunch.mp3" id="crunch"></audio>
            <audio src="../assets/media/bounce.mp3" id="bounce"></audio>
            <audio src="../assets/media/win.mp3" id="win"></audio>
            <audio src="../assets/media/lost.mp3" id="lose"></audio>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import Game from '../assets/game.ts';
    import Instructions from './Instructions.vue';

    const gameCanvas = ref<HTMLCanvasElement | null>(null);
    const gameRunning = ref(false);
    const animationFrameId: { value?: number } = {};

    const showInfo = ref(false);

    const showInstructions = () => {
        showInfo.value = !showInfo.value;
    }

    //game logic
    const startGame = () => {
        gameRunning.value = true;
        showInfo.value = false;
        const context = gameCanvas.value?.getContext('2d');
        if (context && gameCanvas.value) {
            gameCanvas.value.width = 720;
            gameCanvas.value.height = 720;
           
            const game = new Game(gameCanvas.value, context);

            let lastTime = 0;

            // Start animation loop
            const animate = (timeStamp: number) => {
                const deltaTime = timeStamp - lastTime;
                lastTime = timeStamp;
                if (gameCanvas.value?.width) {
                context.clearRect(0, 0, gameCanvas.value.width, gameCanvas.value.height);
                }
                game.render(deltaTime);
                if (gameRunning.value) {
                    animationFrameId.value = requestAnimationFrame(animate);
                }
                if (game.gameOver) {
                    gameRunning.value = false;
                }
            }
               requestAnimationFrame(animate);
        }
    }

    const pauseGame = () => {
        if (animationFrameId.value !== undefined) {
        cancelAnimationFrame(animationFrameId.value);
        }
        gameRunning.value = false;
    }
</script>

<style lang="scss">
.gameContainer {
    height: 100vh;
    width: 100vw;
    overflow: hidden;

    #canvas1 {
    background: $primary-background;
    position: absolute;
    top: 0;
    left: 0;
    max-width: 100%;
    max-height: 100%;
}
};
</style>
