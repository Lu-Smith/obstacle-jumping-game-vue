<template>
    <div class="gameContainer">
        <div class="buttonContainer">
            <button @click="startGame">Go</button>
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
    let gameInterval: undefined | number;
    let intervalTime: number = 30;

    //game logic
    const handleKeyDown = (event: KeyboardEvent) => {
        switch (event.key) {
            case "ArrowUp":
                direction.value =[ 0, -1 ];
                break
            case "ArrowRight":
                direction.value =[ 1, 0 ];
                break
        }
    };

    const drawGame = () => {
        const context = gameCanvas.value?.getContext('2d');

        if (context && gameCanvas.value) {
            // Draw rectangle
            context.fillStyle = '#000';
            context.fillRect(0, gameCanvas.value.height*0.92, gameCanvas.value.width, 4);

            // Draw circle
            const circleX = gameCanvas.value.width * 0.05;
            const circleY = gameCanvas.value.height * 0.856;

            context.fillStyle = 'rgb(250, 0, 0)';
            context.beginPath();
            context.arc(circleX, circleY, 10, 0, 2 * Math.PI);
            context.fill();
        }
    };

    const updateGame = () => {

    }

    const startGame = () => {
        gameInterval = setInterval(updateGame, intervalTime);
    }

    onMounted(() => {
        drawGame();
        window.addEventListener('keydown', handleKeyDown);
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