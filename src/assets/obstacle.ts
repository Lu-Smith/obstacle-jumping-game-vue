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
        const groundLevel1 = this.game.canvas.height - this.game.floorHeight - 80; 

        context.fillStyle = '#4c9173';
        context.beginPath();
        context.arc(this.x - 16 + this.darkTreeXPosition + 20, groundLevel1 * 1.07, 17, 0, 2 * Math.PI);
        context.arc(this.x - 18 + this.darkTreeXPosition + 20, groundLevel1 * 1.03, 17, 0, 2 * Math.PI);
        context.arc(this.x - 7 + this.darkTreeXPosition + 20, groundLevel1 * 0.99, 17, 0, 2 * Math.PI);
        context.arc(this.x - 2 + this.darkTreeXPosition + 20, groundLevel1 * 0.96, 17, 0, 2 * Math.PI);
        context.arc(this.x + 10 + this.darkTreeXPosition + 20, groundLevel1 * 0.99, 17, 0, 2 * Math.PI);
        context.arc(this.x + 16 + this.darkTreeXPosition + 20, groundLevel1 * 1.03, 17, 0, 2 * Math.PI);
        context.arc(this.x + 16 + this.darkTreeXPosition + 20, groundLevel1 * 1.07, 17, 0, 2 * Math.PI);
        context.fill();
        context.fillStyle = '#402a23';
        context.beginPath();
        context.arc(this.x - 0.55 + this.darkTreeXPosition + 20, groundLevel1, 5, 0, 2 * Math.PI);
        context.fill();
        context.fillStyle = '#402a23';
        context.fillRect(this.x - 5.55 + this.darkTreeXPosition + 20, groundLevel1, 10, 80);
    }

    drawLightTreeDarkTree(context: CanvasRenderingContext2D) {
        const groundLevel1 = this.game.canvas.height - this.game.floorHeight - 80; 
        const groundLevel2 = this.game.canvas.height - this.game.floorHeight - 60; 

        context.fillStyle = '#acc6aa';
        context.beginPath();
        context.arc(this.x - 16 + this.mixTreeXPosition + 400, groundLevel1 * 1.09, 17, 0, 2 * Math.PI);
        context.arc(this.x - 18 + this.mixTreeXPosition + 400, groundLevel1 * 1.04, 17, 0, 2 * Math.PI);
        context.arc(this.x - 7 + this.mixTreeXPosition + 400, groundLevel1 * 0.99, 17, 0, 2 * Math.PI);
        context.arc(this.x - 2 + this.mixTreeXPosition + 400, groundLevel1 * 0.95, 17, 0, 2 * Math.PI);
        context.arc(this.x + 10 + this.mixTreeXPosition + 400, groundLevel1 * 0.99, 17, 0, 2 * Math.PI);
        context.arc(this.x + 16 + this.mixTreeXPosition + 400, groundLevel1 * 1.04, 17, 0, 2 * Math.PI);
        context.arc(this.x + 16 + this.mixTreeXPosition + 400, groundLevel1 * 1.09, 17, 0, 2 * Math.PI);
        context.fill();
        context.fillStyle = '#402a23';
        context.beginPath();
        context.arc(this.x - 0.55 + this.mixTreeXPosition + 400, groundLevel1, 5, 0, 2 * Math.PI);
        context.fill();
        context.fillStyle = '#402a23';
        context.fillRect(this.x - 5.55 + this.mixTreeXPosition + 400, groundLevel1, 10, 80);
        context.fillStyle = '#4c9173';
        context.beginPath();
        context.arc(this.x - 16 + this.mixTreeXPosition + 370, groundLevel2 * 1.02, 17, 0, 2 * Math.PI);
        context.arc(this.x - 18 + this.mixTreeXPosition + 370, groundLevel2 * 0.98, 17, 0, 2 * Math.PI);
        context.arc(this.x - 7 + this.mixTreeXPosition + 370, groundLevel2 * 0.97, 17, 0, 2 * Math.PI);
        context.arc(this.x - 2 + this.mixTreeXPosition + 370, groundLevel2 * 0.94, 17, 0, 2 * Math.PI);
        context.arc(this.x + 10 + this.mixTreeXPosition + 370, groundLevel2 * 0.97, 17, 0, 2 * Math.PI);
        context.arc(this.x + 16 + this.mixTreeXPosition + 370, groundLevel2 * 0.98, 17, 0, 2 * Math.PI);
        context.arc(this.x + 16 + this.mixTreeXPosition + 370, groundLevel2 * 1.02, 17, 0, 2 * Math.PI);
        context.fill();
        context.fillStyle = '#402a23';
        context.beginPath();
        context.arc(this.x + 0.55 + this.mixTreeXPosition + 370, groundLevel2, 6, 0, 2 * Math.PI);
        context.fill();
        context.fillStyle = '#402a23';
        context.fillRect(this.x - 5.55 + this.mixTreeXPosition + 370, groundLevel2, 12, 60);
    }

    drawStone(context: CanvasRenderingContext2D) {
        const groundLevel = this.game.canvas.height - this.game.floorHeight; 

        context.fillStyle = '#000';
        const x1 = this.x - 11 + this.stoneXPosition + 30;
        const y1 = groundLevel - 60;
        const x2 = this.x - 42 + this.stoneXPosition + 30;
        const y2 = groundLevel;
        const x3 = this.x + this.stoneXPosition + 48;
        const y3 = groundLevel;
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2)
        context.lineTo(x3, y3);
        context.closePath();
        context.fill();
    }

    drawCloudLight(context: CanvasRenderingContext2D) {
        const groundLevel = (this.game.canvas.height - this.game.floorHeight) * 0.9; 

        context.fillStyle = '#bbe4e9';
        context.beginPath();
        context.arc(this.x - 20 + this.cloudLightXPosition - 150, groundLevel * 0.27, 16, 0, 2 * Math.PI);
        context.arc(this.x - 17 + this.cloudLightXPosition - 150, groundLevel * 0.24, 16, 0, 2 * Math.PI);
        context.arc(this.x - 23 + this.cloudLightXPosition - 150, groundLevel * 0.26, 16, 0, 2 * Math.PI);
        context.arc(this.x - 9 + this.cloudLightXPosition - 150, groundLevel * 0.26, 16, 0, 2 * Math.PI);
        context.arc(this.x + this.cloudLightXPosition - 150, groundLevel * 0.25, 16, 0, 2 * Math.PI);
        context.arc(this.x + 9 + this.cloudLightXPosition - 150, groundLevel * 0.27, 16, 0, 2 * Math.PI);
        context.arc(this.x + 14 + this.cloudLightXPosition - 150, groundLevel * 0.27, 16, 0, 2 * Math.PI);
        context.fill();
    }

    drawCloudDark(context: CanvasRenderingContext2D) {
        const groundLevel = (this.game.canvas.height - this.game.floorHeight) * 1.2; 
        
        context.fillStyle = '#79c2d0';
        context.beginPath();
        context.arc(this.x - 18 + this.cloudDarkXPosition - 50, groundLevel * 0.22,  18, 0, 2 * Math.PI);
        context.arc(this.x - 15 + this.cloudDarkXPosition - 50, groundLevel * 0.23,  18, 0, 2 * Math.PI);
        context.arc(this.x - 21 + this.cloudDarkXPosition - 50, groundLevel * 0.21,  18, 0, 2 * Math.PI);
        context.arc(this.x - 7 + this.cloudDarkXPosition - 50, groundLevel * 0.23,  18, 0, 2 * Math.PI);
        context.arc(this.x + this.cloudDarkXPosition - 50, groundLevel * 0.20,  18, 0, 2 * Math.PI);
        context.arc(this.x + 7 + this.cloudDarkXPosition - 50, groundLevel * 0.22,  18, 0, 2 * Math.PI);
        context.arc(this.x + 12 + this.cloudDarkXPosition - 50, groundLevel * 0.22,  18, 0, 2 * Math.PI);
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