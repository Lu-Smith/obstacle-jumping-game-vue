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
        <div class="canvasContainer">
            <canvas ref="gameCanvas" @click="handleMouseEvent"></canvas>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import Game from '../assets/game.ts'

    const gameCanvas = ref<HTMLCanvasElement | null>(null);
    const gameRunning = ref(false);
    const jump = ref(false);
    const doubleJump = ref(false);
    let lastClickTime = 0;
    const doubleJumpTimeout = 300;
    let animationFrameId: number | undefined;

    //game logic

    const handleJump = () => {
        if (!jump.value && !doubleJump.value) {
            jump.value = true;
            setTimeout(() => {
                jump.value = false;
            }, 6000);
        } 
    }

    const handleDoubleJump = () => {
        if (!doubleJump.value && !jump.value) {
            doubleJump.value = true;
            jump.value = false;
            setTimeout(() => {
                doubleJump.value = false;
            }, 9000);
        } 
    }

    const handleKeyDown = (event: KeyboardEvent) => {
        const currentTime = new Date().getTime();
            if (currentTime - lastClickTime < doubleJumpTimeout) {
                handleDoubleJump();
            } else {
                handleJump();
            }
            lastClickTime = currentTime; 
    }

    // Define handleMouseEvent function
    const handleMouseEvent = (event: MouseEvent) => {
        if (gameCanvas.value && event.target === gameCanvas.value) {
            const currentTime = new Date().getTime();
            if (currentTime - lastClickTime < doubleJumpTimeout) {
                handleDoubleJump();
            } else {
                handleJump();
            }
            lastClickTime = currentTime; 
        }
    }

    const startGame = () => {
        jump.value = false;
        doubleJump.value = false; 
        gameRunning.value = true;
        const context = gameCanvas.value?.getContext('2d');
        if (context && gameCanvas.value) {
            gameCanvas.value.width = 720;
            gameCanvas.value.height = 720;
            // Clear the canvas
            context.clearRect(0, 0, gameCanvas.value.width, gameCanvas.value.height);
            // Draw ground
            context.fillStyle = '#000';
            context.fillRect(0, gameCanvas.value.height * 0.92, gameCanvas.value.width, 4);
            const game = new Game(gameCanvas.value, context, jump, doubleJump);
            // Start animation loop
            const animate = () => {
                context.clearRect(0, 0, gameCanvas.value.width, gameCanvas.value.height);
                game.render();
                if (gameRunning.value) {
                    animationFrameId = requestAnimationFrame(animate);
                }
            }
            animate();
        }
        window.addEventListener('keydown', handleKeyDown);
    }

    const pauseGame = () => {
        gameRunning.value = false;
        cancelAnimationFrame(animationFrameId);
    }

</script>

<style lang="scss">
    .gameContainer {
        height: 100vh;
        width: 100vw;
        @include flex(center, center, column);
    };

    .buttonContainer {
        flex: 1;
        background: $secondary-background;
        @include flex(center, center, column);

        button {
            padding: 10px 25px;
            font-size: 22px;
            border-radius: 10px;
            background: $secondary-color;
            color: $primary-background;
            border: 3px solid $third-color;
            box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
        }
    }

    .canvasContainer {
        flex: 3;
        background: $secondary-background;
        @include flex(center, start, column);
    };

    canvas {
        background: $primary-background;
        width: 800px;
        height: 400px;
    };

    @include mobile {
        canvas {
            width: 100%;
            height: auto;
        }
    };
</style>, onMounted