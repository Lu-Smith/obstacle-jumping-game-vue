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

        if (context) {
            // Draw rectangle
            context.fillStyle = 'rgb(227, 224, 29)';
            context.fillRect(20, 20, 60, 40);

            // Draw circle
            context.fillStyle = 'rgb(29, 224, 227)';
            context.beginPath();
            context.arc(120, 40, 30, 0, 2 * Math.PI);
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
        width: 90%;
        height: 40%;
    }

    @include mobile {
        canvas {
            width: 100%;
        }
    }
</style>