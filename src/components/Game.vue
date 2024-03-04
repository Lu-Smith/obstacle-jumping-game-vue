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
    import Player from '../assets/player.ts';
    import Obstacle from '../assets/obstacle.ts';

    let player: Player;
    let drawDarkTree: Obstacle;
    let drawLightTreeDarkTree: Obstacle;
    let drawStone: Obstacle;
    let drawCloudLight: Obstacle;
    let drawCloudDark: Obstacle;

    const gameCanvas = ref<HTMLCanvasElement | null>(null);
    const gameRunning = ref(false);
    const jump = ref(false);
    const doubleJump = ref(false);
    let gameInterval: undefined | number;
    let intervalTime: number = 160;

    //game logic

    const updateGame = () => {
        const context = gameCanvas.value?.getContext('2d');
       
        if (context && gameCanvas.value) {
            // Clear the canvas
            context.clearRect(0, 0, gameCanvas.value.width, gameCanvas.value.height);

            // Draw ground
            context.fillStyle = '#000';
            context.fillRect(0, gameCanvas.value.height * 0.92, gameCanvas.value.width, 4);

            // Draw player
            player.draw(context);

            // Update player position
            player.updatePosition(jump.value, doubleJump.value);

            // Draw obstacles
            drawDarkTree.drawDarkTree(context, 10);
            drawLightTreeDarkTree.drawLightTreeDarkTree(context, 20);
            drawStone.drawStone(context, 30);
            drawCloudLight.drawCloudLight(context, 40);
            drawCloudDark.drawCloudDark(context, 50);

            // Update obstacles positions
            drawDarkTree.updatePositionDarkTree();
            drawLightTreeDarkTree.updatePositionLightTreeDarkTree();
            drawStone.updatePositionStone();
            drawCloudLight.updatePositionCloudLight();
            drawCloudDark.updatePositionCloudDark();
        }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === ' ') {
            jump.value = true;
            console.log('jumptrue', jump.value);
            setTimeout(() => {
            jump.value = false; 
                console.log('jumpfalse', jump.value);
            }, 6000); 
        }
 
    }

    // Define handleMouseEvent function
    const handleMouseEvent = (event: MouseEvent) => {
        if (gameCanvas.value && event.target === gameCanvas.value) {
            jump.value = true; 
            setTimeout(() => {
                jump.value = false; 
            }, 6000); 
        }
    }

    const startGame = () => {
        jump.value = false;
        console.log(jump.value);
        player = new Player(gameCanvas.value.width * 0.5, gameCanvas.value.height - 22, 10, '#5b086b', gameCanvas.value.height); 
        drawDarkTree = new Obstacle(200, gameCanvas.value.height, 20);
        drawLightTreeDarkTree = new Obstacle(10, gameCanvas.value.height, 100, 20);
        drawStone = new Obstacle(10, gameCanvas.value.height, 30);
        drawCloudLight = new Obstacle(0, gameCanvas.value.height * 0.8, 10, gameCanvas.value.width, gameCanvas.value.height);
        drawCloudDark = new Obstacle(0, gameCanvas.value.height * 0.6, 10, gameCanvas.value.width, gameCanvas.value.height);
        gameInterval = setInterval(updateGame, intervalTime);
        gameRunning.value = true;

        window.addEventListener('keydown', handleKeyDown);
    }

    const pauseGame = () => {
        gameRunning.value = false;
        clearInterval(gameInterval); 
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
</style>