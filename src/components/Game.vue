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
            <img src="../assets/images/backgroundFinal.png" alt="final background" id="backgroundFinal">
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
    const lastTime = ref(0);
    const deltaTime = ref(0);
    let game: Game | null = null;   
    const startNewGame = ref(false);

    const showInfo = ref(false);

    const showInstructions = () => {
        showInfo.value = !showInfo.value;
    }

    const resetGame = () => {
        gameRunning.value = false;
        if (game) {
            startNewGame.value = true;
        }
    }

    // Start animation loop
    const animate = () => {

        const loop = (timeStamp: number = 0) => {
            deltaTime.value = timeStamp - lastTime.value;
            lastTime.value = timeStamp;

                if (game) {
                    game.render(deltaTime.value);
                    if (gameRunning.value) {
                        animationFrameId.value = requestAnimationFrame(loop);
                    }
                    if (game.gameOver) {
                        resetGame();
                    }
                }    
            }   
        animationFrameId.value = requestAnimationFrame(loop);
    }

    //game logic
    const startGame = () => {
        gameRunning.value = true;
        showInfo.value = false;

        if (!game || startNewGame.value) {
            const context = gameCanvas.value?.getContext('2d');
            startNewGame.value = false;

            if (context && gameCanvas.value) {
                gameCanvas.value.width = 720;
                gameCanvas.value.height = 720;

                game = new Game(gameCanvas.value, context);
            }
        } 
        animate();
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
