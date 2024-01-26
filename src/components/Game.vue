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
            <canvas ref="gameCanvas"></canvas>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue';

    const gameCanvas = ref<HTMLCanvasElement | null>(null);
    const jump = ref(false);
    const circleXPosition = ref(5);
    const circleYPosition = ref(0);
    const gameRunning = ref(false);
    const circleX = ref(0);
    const circleY = ref(0);
    let gameInterval: undefined | number;
    let intervalTime: number = 30;

    //game logic
    const handleKeyDown = (event: KeyboardEvent) => {
        switch (event.key) {
            case "ArrowUp":
                jump.value = true;
                break
        }
    };

    const handleMouseEvent = (event: MouseEvent) => {
        if (event) {
            jump.value = true;
        }
    };

    const updateGame = () => {
        const context = gameCanvas.value?.getContext('2d');
       
        if (context && gameCanvas.value) {
            // Clear the canvas
            context.clearRect(0, 0, gameCanvas.value.width, gameCanvas.value.height);

            // Draw ground
            context.fillStyle = '#000';
            context.fillRect(0, gameCanvas.value.height * 0.92, gameCanvas.value.width, 4);

            // Update circle position dynamically
            if (circleX.value < gameCanvas.value.width/2) {
                circleXPosition.value++;
                circleX.value += 5 + circleXPosition.value;
            } else {
                circleXPosition.value = circleXPosition.value;
                circleX.value = gameCanvas.value.width/2;
            }
           
            if (jump.value) {
                if (circleYPosition.value > -30) {
                    circleYPosition.value -= 2; 
                }
                circleY.value = gameCanvas.value.height * 0.856 + circleYPosition.value;
                if (circleYPosition.value === -30) {
                    setTimeout(() => {
                        jump.value = false;
                        circleYPosition.value = 0;
                    }, 600);
                }
            } else {
                circleY.value = gameCanvas.value.height * 0.856;
            }

            // Draw circle
            context.fillStyle = '#5b086b';
            context.beginPath();
            context.arc(circleX.value, circleY.value, 10, 0, 2 * Math.PI);
            context.fill();

            // Draw obstacle
            context.fillStyle = '#4c9173';
            context.beginPath();
            context.arc(gameCanvas.value.width - 10, gameCanvas.value.height * 0.76, 5, 0, 2 * Math.PI);
            context.arc(gameCanvas.value.width - 7, gameCanvas.value.height * 0.7, 5, 0, 2 * Math.PI);
            context.arc(gameCanvas.value.width - 2, gameCanvas.value.height * 0.7, 5, 0, 2 * Math.PI);
            context.arc(gameCanvas.value.width, gameCanvas.value.height * 0.76, 5, 0, 2 * Math.PI);
            context.fill();
            context.fillStyle = '#402a23';
            context.beginPath();
            context.arc(gameCanvas.value.width - 2, gameCanvas.value.height * 0.77, 6, 0, 2 * Math.PI);
            context.fill();
            context.fillStyle = '#402a23';
            context.fillRect(gameCanvas.value.width - 8, gameCanvas.value.height * 0.78, 8, 22);
        }
    }

    const startGame = () => {
        jump.value = false;
        gameInterval = setInterval(updateGame, intervalTime);
        gameRunning.value = true
    }

    const pauseGame = () => {
        gameRunning.value = false;
        clearInterval(gameInterval);
    }

    onMounted(() => {
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('mousedown', handleMouseEvent);
    });
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