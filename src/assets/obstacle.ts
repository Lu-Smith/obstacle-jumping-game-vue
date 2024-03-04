import Game from './game';

export default class Obstacle {
    game: Game; 
    x: number;
    y: number;
    darkTreeXPosition: number;
    mixTreeXPosition: number;
    stoneXPosition: number;
    cloudLightXPosition: number;
    cloudDarkXPosition: number;
    obstacleSpeed: number;
 
    constructor(game: Game) {
        this.game = game;
        this.x = this.game.canvas.width;
        this.y = this.game.canvas.height;
        this.darkTreeXPosition = 10;
        this.mixTreeXPosition = 20;
        this.stoneXPosition = 30;
        this.cloudLightXPosition = 40;
        this.cloudDarkXPosition = 50;
        this.obstacleSpeed = 2;
    }
    
    drawDarkTree(context: CanvasRenderingContext2D) {
        context.fillStyle = '#4c9173';
        context.beginPath();
        context.arc(this.x - 16 + this.darkTreeXPosition + 20, this.y * 0.84, 16, 0, 2 * Math.PI);
        context.arc(this.x - 18 + this.darkTreeXPosition + 20, this.y * 0.81, 16, 0, 2 * Math.PI);
        context.arc(this.x - 7 + this.darkTreeXPosition + 20, this.y * 0.78, 16, 0, 2 * Math.PI);
        context.arc(this.x - 2 + this.darkTreeXPosition + 20, this.y * 0.75, 16, 0, 2 * Math.PI);
        context.arc(this.x + 10 + this.darkTreeXPosition + 20, this.y * 0.78, 16, 0, 2 * Math.PI);
        context.arc(this.x + 16 + this.darkTreeXPosition + 20, this.y * 0.81, 16, 0, 2 * Math.PI);
        context.arc(this.x + 16 + this.darkTreeXPosition + 20, this.y * 0.84, 16, 0, 2 * Math.PI);
        context.fill();
        context.fillStyle = '#402a23';
        context.beginPath();
        context.arc(this.x - 0.55 + this.darkTreeXPosition + 20, this.y * 0.78, 5, 0, 2 * Math.PI);
        context.fill();
        context.fillStyle = '#402a23';
        context.fillRect(this.x - 5.55 + this.darkTreeXPosition + 20, this.y * 0.78, 10, 80);
    }

    drawLightTreeDarkTree(context: CanvasRenderingContext2D) {
        context.fillStyle = '#acc6aa';
        context.beginPath();
        context.arc(this.x - 16 + this.mixTreeXPosition + 400, this.y * 0.84, 16, 0, 2 * Math.PI);
        context.arc(this.x - 18 + this.mixTreeXPosition + 400, this.y * 0.81, 16, 0, 2 * Math.PI);
        context.arc(this.x - 7 + this.mixTreeXPosition + 400, this.y * 0.78, 16, 0, 2 * Math.PI);
        context.arc(this.x - 2 + this.mixTreeXPosition + 400, this.y * 0.75, 16, 0, 2 * Math.PI);
        context.arc(this.x + 10 + this.mixTreeXPosition + 400, this.y * 0.78, 16, 0, 2 * Math.PI);
        context.arc(this.x + 16 + this.mixTreeXPosition + 400, this.y * 0.81, 16, 0, 2 * Math.PI);
        context.arc(this.x + 16 + this.mixTreeXPosition + 400, this.y * 0.84, 16, 0, 2 * Math.PI);
        context.fill();
        context.fillStyle = '#402a23';
        context.beginPath();
        context.arc(this.x - 0.55 + this.mixTreeXPosition + 400, this.y * 0.78, 5, 0, 2 * Math.PI);
        context.fill();
        context.fillStyle = '#402a23';
        context.fillRect(this.x - 5.55 + this.mixTreeXPosition + 400, this.y * 0.78, 10, 80);
        context.fillStyle = '#4c9173';
        context.beginPath();
        context.arc(this.x - 16 + this.mixTreeXPosition + 370, this.y * 0.82, 17, 0, 2 * Math.PI);
        context.arc(this.x - 18 + this.mixTreeXPosition + 370, this.y * 0.80, 17, 0, 2 * Math.PI);
        context.arc(this.x - 7 + this.mixTreeXPosition + 370, this.y * 0.78, 17, 0, 2 * Math.PI);
        context.arc(this.x - 2 + this.mixTreeXPosition + 370, this.y * 0.76, 17, 0, 2 * Math.PI);
        context.arc(this.x + 10 + this.mixTreeXPosition + 370, this.y * 0.78, 17, 0, 2 * Math.PI);
        context.arc(this.x + 16 + this.mixTreeXPosition + 370, this.y * 0.80, 17, 0, 2 * Math.PI);
        context.arc(this.x + 16 + this.mixTreeXPosition + 370, this.y * 0.82, 17, 0, 2 * Math.PI);
        context.fill();
        context.fillStyle = '#402a23';
        context.beginPath();
        context.arc(this.x + 0.55 + this.mixTreeXPosition + 370, this.y * 0.8, 6, 0, 2 * Math.PI);
        context.fill();
        context.fillStyle = '#402a23';
        context.fillRect(this.x - 5.55 + this.mixTreeXPosition + 370, this.y * 0.8, 12, 66);
    }

    drawStone(context: CanvasRenderingContext2D) {
        context.fillStyle = '#000';
        const x1 = this.x - 11 + this.stoneXPosition + 30;
        const y1 = this.y - 60;
        const x2 = this.x - 42 + this.stoneXPosition + 30;
        const y2 = this.y - 10;
        const x3 = this.x + this.stoneXPosition + 48;
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
        context.arc(this.x - 20 + this.cloudLightXPosition - 150, this.y * 0.27, 16, 0, 2 * Math.PI);
        context.arc(this.x - 17 + this.cloudLightXPosition - 150, this.y * 0.24, 16, 0, 2 * Math.PI);
        context.arc(this.x - 23 + this.cloudLightXPosition - 150, this.y * 0.26, 16, 0, 2 * Math.PI);
        context.arc(this.x - 9 + this.cloudLightXPosition - 150, this.y * 0.26, 16, 0, 2 * Math.PI);
        context.arc(this.x + this.cloudLightXPosition - 150, this.y * 0.25, 16, 0, 2 * Math.PI);
        context.arc(this.x + 9 + this.cloudLightXPosition - 150, this.y * 0.27, 16, 0, 2 * Math.PI);
        context.arc(this.x + 14 + this.cloudLightXPosition - 150, this.y * 0.27, 16, 0, 2 * Math.PI);
        context.fill();
    }

    drawCloudDark(context: CanvasRenderingContext2D) {
        context.fillStyle = '#79c2d0';
        context.beginPath();
        context.arc(this.x - 18 + this.cloudDarkXPosition - 50, this.y * 0.22, 14, 0, 2 * Math.PI);
        context.arc(this.x - 15 + this.cloudDarkXPosition - 50, this.y * 0.23, 14, 0, 2 * Math.PI);
        context.arc(this.x - 21 + this.cloudDarkXPosition - 50, this.y * 0.21, 14, 0, 2 * Math.PI);
        context.arc(this.x - 7 + this.cloudDarkXPosition - 50, this.y * 0.23, 14, 0, 2 * Math.PI);
        context.arc(this.x + this.cloudDarkXPosition - 50, this.y * 0.20, 14, 0, 2 * Math.PI);
        context.arc(this.x + 7 + this.cloudDarkXPosition - 50, this.y * 0.22, 14, 0, 2 * Math.PI);
        context.arc(this.x + 12 + this.cloudDarkXPosition - 50, this.y * 0.22, 14, 0, 2 * Math.PI);
        context.fill();
    }
    updatePositionDarkTree() {
        // Move the obstacle to the left
        this.darkTreeXPosition -= this.obstacleSpeed;

        if ((this.x + this.darkTreeXPosition + 40) < 0) {
            this.darkTreeXPosition = this.x + 120;
        }
    }

    updatePositionLightTreeDarkTree() {
        // Move the obstacle to the left
        this.mixTreeXPosition -= this.obstacleSpeed;

        if ((this.x + 400 + this.mixTreeXPosition) < 0) {
            this.mixTreeXPosition = this.x + 100;
        }
    }

    updatePositionStone() {
        // Move the obstacle to the left
        this.stoneXPosition -= this.obstacleSpeed;

        if (this.x + 30 + this.stoneXPosition < 0) {
            this.stoneXPosition = this.x + 200;
        }
    }

    updatePositionCloudLight() {
        // Move the obstacle to the left
        this.cloudLightXPosition -= this.obstacleSpeed;

        if ((this.x + 7 + this.cloudLightXPosition - 140) < 0) {
            this.cloudLightXPosition = this.x + 80;
        }
    }

    updatePositionCloudDark() {
        // Move the obstacle to the left
        this.cloudDarkXPosition -= this.obstacleSpeed;

        if ((this.x + 7 + this.cloudDarkXPosition - 50) < 0) {
            this.cloudDarkXPosition = this.x + 60;
        }
    }

    resize() {
        this.x = this.game.canvas.width * this.game.ratio;
        this.y = this.game.canvas.height * this.game.ratio;
    }
}