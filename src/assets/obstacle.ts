import Game from './game';

export default class Obstacle {
    game: Game; 
    spriteWidth: number;
    spriteHeigth: number;
    scaledWidth: number;
    scaledHeigth: number;
    x: number;
    y: number;
    markedForDeletion: boolean;
    collisionX: number;
    collisionY: number;
    collisionRadius: number;
 
    constructor(game: Game, x: number) {
        this.game = game;
        this.spriteWidth = 120;
        this.spriteHeigth = 120;
        this.scaledWidth = this.spriteWidth * this.game.ratio;
        this.scaledHeigth = this.spriteHeigth * this.game.ratio;
        this.x = x;
        this.y = 500 * this.game.ratio;
        this.collisionX = 0;
        this.collisionY = 0;
        this.collisionRadius = this.scaledWidth * 0.5;
        this.markedForDeletion = false;
    }
    update() {
        this.x -= this.game.speed;
        this.collisionX = this.x + this.scaledWidth * 0.5;
        this.collisionY = this.y + this.scaledHeigth * 0.5;
    
        if (this.isOffScreen()) {
            this.markedForDeletion = true;
            this.game.obstacles = this.game.obstacles.filter(obstacle => !obstacle.markedForDeletion);
            this.game.score++;
            if (this.game.obstacles.length <= 0) this.game.gameOver = true;
        }
        if (this.game.checkCollision(this, this.game.player)) {
            this.game.gameOver = true;
            this.game.player.collided = true;
        }
    }
    draw(){
        this.game.context.fillRect(this.x, this.y, this.scaledWidth, this.scaledHeigth);
        this.game.context.beginPath();
        this.game.context.arc(this.collisionX, this.collisionY, 
            this.collisionRadius, 0, Math.PI * 2);
        this.game.context.stroke();
    }
    resize() {
        this.scaledWidth = this.spriteWidth * this.game.ratio;
        this.scaledHeigth = this.spriteHeigth * this.game.ratio;
    }
    isOffScreen() {
        return this.x < -this.scaledWidth;
    }
}