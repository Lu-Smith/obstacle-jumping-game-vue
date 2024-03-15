<template>
    <div class="gameContainer">
        <button 
        v-if="!gameRunning"
        @click="startGame">Go</button>
        <button 
        v-if="gameRunning"
        @click="pauseGame">Pause</button>
        <Description :gameRunning="gameRunning" :deltaTime="deltaTime"/>
        <Instructions :gameRunning="gameRunning" :showInfo="showInfo" @showInstructions="showInstructions" v-if="!gameRunning"/>
        <canvas ref="gameCanvas"></canvas>
        <Assets />
        <audio ref="levelSound" :src=Level id="level"></audio>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import Game from '../assets/game.ts';
    import Instructions from './Instructions.vue';
    import Description from './Description.vue';
    import Assets from './Assets.vue';
    import Level from '../assets/sounds/level.mp3';

    const levelSound = ref<HTMLAudioElement | null>(null);

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
        if (levelSound.value) {
            levelSound.value.play();
        }

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

    .gameDescription {
        position: relative;
        margin: 0 auto;
        margin-top: 15vh;
        text-align: center;
        max-width: 60vw;
        background-color: rgba(250, 250, 250, 0.8);
        padding: 40px;

        h2 {
            span {
                color: $secondary-color;
            }
        }

        img {
            width: 100px;
            height: auto;
        }
        
        p {
            font-family: "Roboto", sans-serif;
            margin-bottom: 20px;
        }
    }

    #canvas1 {
        background: $primary-background;
        position: absolute;
        top: 0;
        left: 0;
        max-width: 100%;
        max-height: 100%;
    }
};

@media screen and (max-width: 786px), (max-height: 600px)  {
    .gameContainer {
        .gameDescription {
            max-width: 80vw;
        }
    };
}

@media screen and (max-width: 480px), (max-height: 300px) {
    .gameContainer {
        .gameDescription {
            max-width: 90vw;
        }
    };
}
</style>
