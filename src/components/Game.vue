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
    const direction = ref([ 1, 0 ]);
    const circleSpeed = ref(5);
    const gameRunning = ref(false);
    const circleX = ref(0);
    const circleY = ref(0);
    let gameInterval: undefined | number;
    let intervalTime: number = 30;

    //game logic
    const handleKeyDown = (event: KeyboardEvent) => {
        switch (event.key) {
            case "ArrowUp":
                direction.value =[ 0, -1 ];
                break
        }
    };

    const handleMouseEvent = (event: MouseEvent) => {
        if (event) {
            direction.value =[ 0, -1 ];
        }
    };

    const updateGame = () => {
        const context = gameCanvas.value?.getContext('2d');
        circleSpeed.value++;

        if (context && gameCanvas.value) {
            // Clear the canvas
            context.clearRect(0, 0, gameCanvas.value.width, gameCanvas.value.height);

            // Draw rectangle
            context.fillStyle = '#000';
            context.fillRect(0, gameCanvas.value.height * 0.92, gameCanvas.value.width, 4);

            // Draw circle
            context.fillStyle = '#5b086b';
            context.beginPath();
            context.arc(circleX.value, circleY.value, 10, 0, 2 * Math.PI);
            context.fill();
        }
    }

    const startGame = () => {
        gameInterval = setInterval(updateGame, intervalTime);
        gameRunning.value = true
    }

    const pauseGame = () => {
        gameRunning.value = false;
        clearInterval(gameInterval);
    }

    onMounted(() => {
        if (gameCanvas.value) {
        circleX.value = gameCanvas.value.width * 0.033 + direction.value[0] * circleSpeed.value;
        circleY.value = gameCanvas.value.height * 0.856;
        };
        
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