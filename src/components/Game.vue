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
        <canvas ref="gameCanvas" @click="handleMouseEvent"></canvas>
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
        
           
            const game = new Game(gameCanvas.value, context, jump.value, doubleJump.value);
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
    };

    .buttonContainer {
        background: $secondary-background;
        @include flex(center, center, column);
        width: 140px;
        height: 100px;
        position: fixed;
        top: 0;

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

    #canvas1 {
        background: $primary-background;
        position: absolute;
        top: 0;
        left: 0;
        max-width: 100%;
        max-height: 100%;
    };

</style>