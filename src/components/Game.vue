<template>
    <div class="canvasContainer">
        <canvas ref="gameCanvas"></canvas>
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue';

    const gameCanvas = ref<HTMLCanvasElement | null>(null);

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

    onMounted(() => {
        drawGame();
    });
</script>

<style lang="scss">
    .canvasContainer {
        background: $secondary-background;
        @include flex(center, center, column);
        height: 100vh;
        width: 100vw;
    }

    canvas {
        background: $primary-background;
        width: 800px;
        height: 400px;
    }

    @include mobile {
        canvas {
            width: 100%;
            height: auto;
        }
    }
</style>