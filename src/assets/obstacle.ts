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
    image: CanvasImageSource;
    frameX: number;
    speedY: number;
    bounceSpeed: number;
 
    constructor(game: Game, x: number) {
        this.game = game;
        this.spriteWidth = 120;
        this.spriteHeigth = 140;
        this.scaledWidth = this.spriteWidth * this.game.ratio;
        this.scaledHeigth = this.spriteHeigth * this.game.ratio;
        this.x = x;
        this.y = 500 * this.game.ratio;
        this.collisionX = 0;
        this.collisionY = 0;
        this.collisionRadius = this.scaledWidth * 0.5;
        this.markedForDeletion = false;
        this.image = document.getElementById('monsters') as CanvasImageSource;
        this.frameX = Math.floor(Math.random() * 4);
        this.speedY = 0;
        this.bounceSpeed = 6;
    }
    update() {
        this.x -= this.game.speed;
        this.y += this.speedY;
        this.collisionX = this.x + this.scaledWidth * 0.5;
        this.collisionY = this.y + this.scaledHeigth * 0.5;

        if (!this.isTouchingBottom()) {
            this.speedY += this.game.gravity;
        }

        if (this.isTouchingBottom()) {
            this.y = this.game.height - this.spriteHeigth - this.game.bottomMargin;
            this.bounce();
        }
    
        if (this.isOffScreen()) {
            this.markedForDeletion = true;
            this.game.obstacles = this.game.obstacles.filter(obstacle => !obstacle.markedForDeletion);
            this.game.score++;
            if (this.game.obstacles.length <= 0) this.game.triggerGameOver();
        }
        if (this.game.checkCollision(this, this.game.player)) {
            this.game.triggerGameOver();
            this.game.player.collided = true;
        }
    }
    draw(){
        this.game.context.drawImage(this.image, this.frameX * this.spriteWidth , 0, this.spriteWidth, this.spriteHeigth, this.x, this.y, this.scaledWidth, this.scaledHeigth);
        if (this.game.debug) {
        this.game.context.beginPath();
        this.game.context.arc(this.collisionX, this.collisionY, 
            this.collisionRadius, 0, Math.PI * 2);
        this.game.context.stroke();
        }
    }
    resize() {
        this.scaledWidth = this.spriteWidth * this.game.ratio;
        this.scaledHeigth = this.spriteHeigth * this.game.ratio;
        this.collisionRadius = this.scaledWidth * 0.4;
    }
    isOffScreen() {
        return this.x < -this.scaledWidth;
    }
    isTouchingBottom() {
        return this.y >= this.game.height - this.spriteHeigth - this.game.bottomMargin;
    }
    isTouchingTop() {
        return this.y <= this.game.height * 0.5 * this.game.ratio;
    }
    bounce() {
        if(!this.isTouchingTop()) {
            this.speedY = -Math.floor(Math.random() * this.bounceSpeed);
        } 
    }
}