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
    const doubleJump = ref(false);
    const circleXPosition = ref(5);
    const circleYPosition = ref(0);
    const obstacleXPosition1 = ref(0);
    const obstacleXPosition2 = ref(0);
    const gameRunning = ref(false);
    const circleX = ref(0);
    const circleY = ref(0);
    let gameInterval: undefined | number;
    let intervalTime: number = 160;

    //game logic
    let lastArrowUpPressTime = 0;
    const handleKeyDown = (event: KeyboardEvent) => {
        switch (event.key) {
            case "ArrowUp":
            if (event.repeat) {
                return;
            }

            const currentTime = new Date().getTime();

            if (currentTime - lastArrowUpPressTime < 1000) {
                // Double click detected
                doubleJump.value = true;
            } else {
                jump.value = true;
            }

            lastArrowUpPressTime = currentTime;
            break;
        }
    };

    const handleMouseEvent = (event: MouseEvent) => {
        if (event.detail === 2) {
            // Double click detected
            doubleJump.value = true;
        } else {
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
                if (jump.value) {
                    circleXPosition.value += 0.5;
                    circleX.value = 5 + gameCanvas.value.width/2 + circleXPosition.value;
                } else  if (doubleJump.value) {
                    circleXPosition.value += 1;
                    circleX.value = 5 + gameCanvas.value.width/2 + circleXPosition.value;
                } else {
                    circleXPosition.value -= 0.3;
                    circleX.value = 5 + gameCanvas.value.width/2 + circleXPosition.value;
                }
            }
           
            if (jump.value) {
                if (circleX.value < gameCanvas.value.width/2) {
                    circleYPosition.value = circleYPosition.value;
                } else if (circleYPosition.value > -37) {
                    circleYPosition.value -= 2;
                    circleYPosition.value -= 1;
                    circleYPosition.value -= 2;
                    circleYPosition.value -= 1;
                    circleYPosition.value -= 2;
                } else if (circleYPosition.value === -40) {
                    setTimeout(() => {
                        jump.value = false;
                        circleYPosition.value = 0;
                    }, 900);
                }
                circleY.value = gameCanvas.value.height * 0.856 + circleYPosition.value;
            } else  if (doubleJump.value) {
                if (circleX.value < gameCanvas.value.width/2) {
                    circleYPosition.value = circleYPosition.value;
                } else if (circleYPosition.value > -43) {
                    circleYPosition.value = -44;
                } else if (circleYPosition.value === -44) {
                    setTimeout(() => {
                        doubleJump.value = false;
                        circleYPosition.value = 0;
                    }, 700);
                }
                circleY.value = gameCanvas.value.height * 0.856 + circleYPosition.value;

            } else {
                circleY.value = gameCanvas.value.height * 0.856;
            }

            console.log(circleYPosition.value);
            // Draw circle
            context.fillStyle = '#5b086b';
            context.beginPath();
            context.arc(circleX.value, circleY.value, 10, 0, 2 * Math.PI);
            context.fill();

            // Draw obstacle1 - a dark tree
            if (circleX.value < gameCanvas.value.width/2 && obstacleXPosition1.value > -288) {
                obstacleXPosition1.value -= 9;
            } else if (obstacleXPosition1.value < -288) {
                obstacleXPosition1.value = 0;
            } else {
                obstacleXPosition1.value -= 4.5;
            }

            context.fillStyle = '#4c9173';
            context.beginPath();
            context.arc(gameCanvas.value.width - 11 + obstacleXPosition1.value, gameCanvas.value.height * 0.84, 5, 0, 2 * Math.PI);
            context.arc(gameCanvas.value.width - 10 + obstacleXPosition1.value, gameCanvas.value.height * 0.8, 5, 0, 2 * Math.PI);
            context.arc(gameCanvas.value.width - 7 + obstacleXPosition1.value, gameCanvas.value.height * 0.76, 5, 0, 2 * Math.PI);
            context.arc(gameCanvas.value.width - 4 + obstacleXPosition1.value, gameCanvas.value.height * 0.72, 5, 0, 2 * Math.PI);
            context.arc(gameCanvas.value.width + obstacleXPosition1.value, gameCanvas.value.height * 0.76, 5, 0, 2 * Math.PI);
            context.arc(gameCanvas.value.width + 2 + obstacleXPosition1.value, gameCanvas.value.height * 0.8, 5, 0, 2 * Math.PI);
            context.arc(gameCanvas.value.width + 3 + obstacleXPosition1.value, gameCanvas.value.height * 0.84, 5, 0, 2 * Math.PI);
            context.fill();
            context.fillStyle = '#402a23';
            context.beginPath();
            context.arc(gameCanvas.value.width - 4.5 + obstacleXPosition1.value, gameCanvas.value.height * 0.78, 2.5, 0, 2 * Math.PI);
            context.fill();
            context.fillStyle = '#402a23';
            context.fillRect(gameCanvas.value.width - 7.5 + obstacleXPosition1.value, gameCanvas.value.height * 0.78, 6, 22);

            // Draw obstacle2 - a light tree
            if (circleX.value < gameCanvas.value.width/2 && obstacleXPosition2.value > -468) {
                obstacleXPosition2.value -= 9.5;
            } else if (obstacleXPosition2.value < -468) {
                obstacleXPosition2.value = 0;
            } else {
                obstacleXPosition2.value -= 5;
            }

            console.log(doubleJump.value);
            context.fillStyle = '#acc6aa';
            context.beginPath();
            context.arc(gameCanvas.value.width - 11 + obstacleXPosition2.value + 150, gameCanvas.value.height * 0.84, 5, 0, 2 * Math.PI);
            context.arc(gameCanvas.value.width - 10 + obstacleXPosition2.value + 150, gameCanvas.value.height * 0.8, 5, 0, 2 * Math.PI);
            context.arc(gameCanvas.value.width - 7 + obstacleXPosition2.value + 150, gameCanvas.value.height * 0.76, 5, 0, 2 * Math.PI);
            context.arc(gameCanvas.value.width - 4 + obstacleXPosition2.value + 150, gameCanvas.value.height * 0.72, 5, 0, 2 * Math.PI);
            context.arc(gameCanvas.value.width + obstacleXPosition2.value + 150, gameCanvas.value.height * 0.76, 5, 0, 2 * Math.PI);
            context.arc(gameCanvas.value.width + 2 + obstacleXPosition2.value + 150, gameCanvas.value.height * 0.8, 5, 0, 2 * Math.PI);
            context.arc(gameCanvas.value.width + 3 + obstacleXPosition2.value + 150, gameCanvas.value.height * 0.84, 5, 0, 2 * Math.PI);
            context.fill();
            context.fillStyle = '#402a23';
            context.beginPath();
            context.arc(gameCanvas.value.width - 4.5 + obstacleXPosition2.value + 150, gameCanvas.value.height * 0.78, 2.5, 0, 2 * Math.PI);
            context.fill();
            context.fillStyle = '#402a23';
            context.fillRect(gameCanvas.value.width - 7.5 + obstacleXPosition2.value + 150, gameCanvas.value.height * 0.78, 6, 22);
        
            // Draw obstacle3 - a stone
            if (circleX.value < gameCanvas.value.width/2 && obstacleXPosition2.value > -468) {
                obstacleXPosition2.value -= 9.5;
            } else if (obstacleXPosition2.value < -468) {
                obstacleXPosition2.value = 0;
            } else {
                obstacleXPosition2.value -= 5;
            }

            console.log(doubleJump.value);
            context.fillStyle = '#000';
            const x1 = gameCanvas.value.width - 4.5 + obstacleXPosition2.value + 200;
            const y1 = gameCanvas.value.width - 4.5 + obstacleXPosition2.value + 200;
            const x2 = obstacleXPosition2.value + 200;
            const y2 = gameCanvas.value.height * 0.78;
            const x3 = obstacleXPosition2.value + 200;
            const y3 = gameCanvas.value.width - 4.5 + obstacleXPosition2.value + 200;
            context.beginPath();
            context.moveTo(x1, y1);
            context.lineTo(x2, y2)
            context.lineTo(x3, y3);
            context.closePath();
            context.fill();
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