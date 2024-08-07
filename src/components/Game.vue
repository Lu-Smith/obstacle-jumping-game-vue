<template>
    <div class="gameContainer">
        <canvas ref="gameCanvas"></canvas>
        <button 
        class="runGame go"
        v-if="!gameRunning"
        @click="startGame">Play</button>
        <button 
        class="runGame home"
        v-if="!gameRunning"
        @click="goHome" >
            <span class="material-symbols-outlined">
            home
            </span>
        </button>
        <button 
        class="runGame pause"
        v-if="gameRunning"
        @click="pauseGame">Pause</button>
        <button 
        id="fullscreenButton" 
        @click="toggleFullscreen"
        v-if="gameRunning">Fullscreen</button>
        <Description :gameRunning="gameRunning" :deltaTime="deltaTime"/>
        <Instructions :gameRunning="gameRunning" :showInfo="showInfo" @showInstructions="showInstructions" v-if="!gameRunning"/>
        <Assets />
        <Animations v-if="deltaTime !== 0 && !gameRunning"/>
        <audio ref="levelSound" :src=Level id="level"></audio>
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted, onUnmounted } from 'vue';
    import Game from '../assets/game.ts';
    import Instructions from './Instructions.vue';
    import Description from './Description.vue';
    import Assets from './Assets.vue';
    import Level from '../assets/sounds/level.mp3';
    import Animations from './Animations.vue';

    const emit = defineEmits(['goHome']);

    const goHome = () => {
        emit('goHome');
    };

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

        if (document.fullscreenElement) {
            document.exitFullscreen();
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

    // Fullscreen logic
    const toggleFullscreen = () => {
    const canvasElement = gameCanvas.value;
    if (canvasElement) {
        if (document.fullscreenElement) {
        document.exitFullscreen();
        } else {
        if (canvasElement.requestFullscreen) {
            canvasElement.requestFullscreen();
        } 
        }
    }
    };

    const handleFullscreenChange = () => {
    if (!document.fullscreenElement) {
        console.log('Exited fullscreen mode');
    }
    };

    onMounted(() => {
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);
    });

    onUnmounted(() => {
    document.removeEventListener('fullscreenchange', handleFullscreenChange);
    document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    });

</script>

<style lang="scss">
.gameContainer {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    position: relative;

    button {
        font-size: 16px;
        z-index: 100;
    }

    #fullscreenButton, .home {
        bottom: 10px;
        left: 10px;
    }

    .go, .pause {
        bottom: 10px;
        right: 10px;
    }

    .gameDescription {
        margin: 0 auto;
        text-align: center;
        max-width: 60vw;
        background-color: rgba(250, 250, 250, 0.8);
        padding: 40px;
        overflow: hidden;

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
        bottom: 0;
        left: 0;
        max-width: 100%;
        max-height: 100%;
        z-index: 99;
    }
};

@media screen and (max-width: 786px), (max-height: 600px)  {
    .gameContainer {
        .gameDescription {
            max-width: 80vw;
        }

        #fullscreenButton {
            left: 10px;
            bottom: 10px;
            width: 80px;
            font-size: 12px;
            padding: 5px;
        }

        .go, .pause {
            right: 10px;
            bottom: 10px;
            font-size: 12px;
            padding: 5px 10px;
            width: 80px;
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
