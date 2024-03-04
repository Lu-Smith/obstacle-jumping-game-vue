export default class Obstacle {
    x: number;
    y: number;
    gameCanvasWidth: number;
    gameCanvasHeight: number;
    obstacleXPosition: number;
    obstacleSpeed: number;
 
    constructor(x: number, y: number, obstacleXPosition: number, gameCanvasWidth: number, gameCanvasHeight: number) {
        this.x = x;
        this.y = y;
        this.gameCanvasWidth = gameCanvasWidth;
        this.gameCanvasHeight = gameCanvasHeight;
        this.obstacleXPosition = obstacleXPosition;
        this.obstacleSpeed = 2;
    }
    
    drawDarkTree(context: CanvasRenderingContext2D) {
        context.fillStyle = '#4c9173';
        context.beginPath();
        context.arc(this.x - 11 + this.obstacleXPosition + 20, this.y * 0.84, 5, 0, 2 * Math.PI);
        context.arc(this.x - 10 + this.obstacleXPosition + 20, this.y * 0.8, 5, 0, 2 * Math.PI);
        context.arc(this.x - 7 + this.obstacleXPosition + 20, this.y * 0.76, 5, 0, 2 * Math.PI);
        context.arc(this.x - 4 + this.obstacleXPosition + 20, this.y * 0.72, 5, 0, 2 * Math.PI);
        context.arc(this.x + this.obstacleXPosition + 20, this.y * 0.76, 5, 0, 2 * Math.PI);
        context.arc(this.x + 2 + this.obstacleXPosition + 20, this.y * 0.8, 5, 0, 2 * Math.PI);
        context.arc(this.x + 3 + this.obstacleXPosition + 20, this.y * 0.84, 5, 0, 2 * Math.PI);
        context.fill();
        context.fillStyle = '#402a23';
        context.beginPath();
        context.arc(this.x - 4.5 + this.obstacleXPosition + 20, this.y * 0.78, 2.5, 0, 2 * Math.PI);
        context.fill();
        context.fillStyle = '#402a23';
        context.fillRect(this.x - 7.5 + this.obstacleXPosition + 20, this.y * 0.78, 6, 22);
    }

    drawLightTreeDarkTree(context: CanvasRenderingContext2D) {
        context.fillStyle = '#acc6aa';
        context.beginPath();
        context.arc(this.x - 11 + this.obstacleXPosition + 400, this.y * 0.84, 5, 0, 2 * Math.PI);
        context.arc(this.x - 10 + this.obstacleXPosition + 400, this.y * 0.8, 5, 0, 2 * Math.PI);
        context.arc(this.x - 7 + this.obstacleXPosition + 400, this.y * 0.76, 5, 0, 2 * Math.PI);
        context.arc(this.x - 4 + this.obstacleXPosition + 400, this.y * 0.72, 5, 0, 2 * Math.PI);
        context.arc(this.x + this.obstacleXPosition + 400, this.y * 0.76, 5, 0, 2 * Math.PI);
        context.arc(this.x + 2 + this.obstacleXPosition + 400, this.y * 0.8, 5, 0, 2 * Math.PI);
        context.arc(this.x + 3 + this.obstacleXPosition + 400, this.y * 0.84, 5, 0, 2 * Math.PI);
        context.fill();
        context.fillStyle = '#402a23';
        context.beginPath();
        context.arc(this.x - 4.5 + this.obstacleXPosition + 400, this.y * 0.78, 2.5, 0, 2 * Math.PI);
        context.fill();
        context.fillStyle = '#402a23';
        context.fillRect(this.x - 7.5 + this.obstacleXPosition + 400, this.y * 0.78, 6, 22);
        context.fillStyle = '#4c9173';
        context.beginPath();
        context.arc(this.x - 11 + this.obstacleXPosition + 380, this.y * 0.84, 5, 0, 2 * Math.PI);
        context.arc(this.x - 10 + this.obstacleXPosition + 380, this.y * 0.8, 5, 0, 2 * Math.PI);
        context.arc(this.x - 7 + this.obstacleXPosition + 380, this.y * 0.76, 5, 0, 2 * Math.PI);
        context.arc(this.x - 4 + this.obstacleXPosition + 380, this.y * 0.72, 5, 0, 2 * Math.PI);
        context.arc(this.x + this.obstacleXPosition + 380, this.y * 0.76, 5, 0, 2 * Math.PI);
        context.arc(this.x + 2 + this.obstacleXPosition + 380, this.y * 0.8, 5, 0, 2 * Math.PI);
        context.arc(this.x + 3 + this.obstacleXPosition + 380, this.y * 0.84, 5, 0, 2 * Math.PI);
        context.fill();
        context.fillStyle = '#402a23';
        context.beginPath();
        context.arc(this.x - 4.5 + this.obstacleXPosition + 380, this.y * 0.78, 2.5, 0, 2 * Math.PI);
        context.fill();
        context.fillStyle = '#402a23';
        context.fillRect(this.x - 7.5 + this.obstacleXPosition + 380, this.y * 0.78, 6, 22);
    }

    drawStone(context: CanvasRenderingContext2D) {
        context.fillStyle = '#000';
        const x1 = this.x - 11 + this.obstacleXPosition + 30;
        const y1 = this.y - 30;
        const x2 = this.x - 22 + this.obstacleXPosition + 30;
        const y2 = this.y - 10;
        const x3 = this.x + this.obstacleXPosition + 30;
        const y3 = this.y - 10;
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2)
        context.lineTo(x3, y3);
        context.closePath();
        context.fill();
    }

    drawCloudLight(context: CanvasRenderingContext2D) {
        context.fillStyle = '#bbe4e9';
        context.beginPath();
        context.arc(this.gameCanvasWidth - 14 + this.obstacleXPosition - 150, this.gameCanvasHeight * 0.3, 8, 0, 2 * Math.PI);
        context.arc(this.gameCanvasWidth - 13 + this.obstacleXPosition - 150, this.gameCanvasHeight * 0.33, 8, 0, 2 * Math.PI);
        context.arc(this.gameCanvasWidth - 9 + this.obstacleXPosition - 150, this.gameCanvasHeight * 0.28, 8, 0, 2 * Math.PI);
        context.arc(this.gameCanvasWidth - 6 + this.obstacleXPosition - 150, this.gameCanvasHeight * 0.32, 8, 0, 2 * Math.PI);
        context.arc(this.gameCanvasWidth + this.obstacleXPosition - 150, this.gameCanvasHeight * 0.26, 8, 0, 2 * Math.PI);
        context.arc(this.gameCanvasWidth + 4 + this.obstacleXPosition - 150, this.gameCanvasHeight * 0.28, 8, 0, 2 * Math.PI);
        context.arc(this.gameCanvasWidth + 7 + this.obstacleXPosition - 150, this.gameCanvasHeight * 0.32, 8, 0, 2 * Math.PI);
        context.fill();
    }

    drawCloudDark(context: CanvasRenderingContext2D) {
        context.fillStyle = '#79c2d0';
        context.beginPath();
        context.arc(this.gameCanvasWidth - 14 + this.obstacleXPosition - 50, this.gameCanvasHeight * 0.22, 7.2, 0, 2 * Math.PI);
        context.arc(this.gameCanvasWidth - 13 + this.obstacleXPosition - 50, this.gameCanvasHeight * 0.24, 7.2, 0, 2 * Math.PI);
        context.arc(this.gameCanvasWidth - 9 + this.obstacleXPosition - 50, this.gameCanvasHeight * 0.21, 7.2, 0, 2 * Math.PI);
        context.arc(this.gameCanvasWidth - 6 + this.obstacleXPosition - 50, this.gameCanvasHeight * 0.24, 7.2, 0, 2 * Math.PI);
        context.arc(this.gameCanvasWidth + this.obstacleXPosition - 50, this.gameCanvasHeight * 0.19, 7.2, 0, 2 * Math.PI);
        context.arc(this.gameCanvasWidth + 4 + this.obstacleXPosition - 50, this.gameCanvasHeight * 0.21, 7.2, 0, 2 * Math.PI);
        context.arc(this.gameCanvasWidth + 7 + this.obstacleXPosition - 50, this.gameCanvasHeight * 0.24, 7.2, 0, 2 * Math.PI);
        context.fill();
    }
    updatePositionDarkTree() {
        // Move the obstacle to the left
        this.obstacleXPosition -= this.obstacleSpeed;

        if ((this.x + this.obstacleXPosition + 40) < 0) {
            this.obstacleXPosition = 120;
        }
    }

    updatePositionLightTreeDarkTree() {
        // Move the obstacle to the left
        this.obstacleXPosition -= this.obstacleSpeed;

        if ((this.x + 400 + this.obstacleXPosition) < 0) {
            this.obstacleXPosition = this.gameCanvasWidth + 100;
        }
    }

    updatePositionStone() {
        // Move the obstacle to the left
        this.obstacleXPosition -= this.obstacleSpeed;

        if (this.x + 30 + this.obstacleXPosition < 0) {
            this.obstacleXPosition = 300;
        }
    }

    updatePositionCloudLight() {
        // Move the obstacle to the left
        this.obstacleXPosition -= this.obstacleSpeed;

        if ((this.gameCanvasWidth + 7 + this.obstacleXPosition - 140) < 0) {
            this.obstacleXPosition = 170;
        }
    }

    updatePositionCloudDark() {
        // Move the obstacle to the left
        this.obstacleXPosition -= this.obstacleSpeed;

        if ((this.gameCanvasWidth + 7 + this.obstacleXPosition - 50) < 0) {
            this.obstacleXPosition = 60;
        }
    }
}