<template>
    <div class="gameContainer">
        <div class="buttonContainer">
            <button 
            v-if="!gameRunning"
            @click="startGame">Go</button>
            <button 
            v-else
            @click="pauseGame">Pause</button>
        </div>
        <canvas ref="gameCanvas"></canvas>
        <div class="assets">
            <img src="../assets/images/background.png" alt="background" id="background">
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import Game from '../assets/game.ts'

    const gameCanvas = ref<HTMLCanvasElement | null>(null);
    const gameRunning = ref(false);
    let animationFrameId: number | undefined;

    //game logic
    const startGame = () => {
        gameRunning.value = true;
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
                if (gameCanvas.value.width) {
                context.clearRect(0, 0, gameCanvas.value.width, gameCanvas.value.height);
                }
                game.render(deltaTime);
                if (gameRunning.value) {
                    animationFrameId = requestAnimationFrame(animate);
                }
                if (game.gameOver) {
                    gameRunning.value = false;
                }
            }
               requestAnimationFrame(animate);
        }
    }

    const pauseGame = () => {
        cancelAnimationFrame(animationFrameId);
        gameRunning.value = false;
    }
</script>

<style lang="scss">
    .gameContainer {
        height: 100vh;
        width: 100vw;
        overflow: hidden;
    };

    .buttonContainer {
        background: none;
        @include flex(center, center, column);
        width: 140px;
        height: 100px;
        position: fixed;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -50%);

        button {
            padding: 0 15px;
            font-size: 18px;
            border-radius: 10px;
            background: $secondary-color;
            color: $primary-background;
            border: 3px solid $third-color;
            box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
        }
    }

    #canvas1 {
        background: $primary-background;
        position: absolute;
        top: 0;
        left: 0;
        max-width: 100%;
        max-height: 100%;
    };

</style>