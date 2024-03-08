import Game from './game';

export default class Player {
    game: Game;
    x: number;
    y: number;
    width: number;
    height: number;
    spriteWidth: number;
    spriteHeight: number;
    speedY: number;
    bounceSpeed: number;
    collisionX: number;
    collisionY: number;
    collisionRadius: number;
    collided: boolean;
    image: CanvasImageSource;
    collisionXStart: number;
    frameY: number;
    
    constructor(game: Game) {
        this.game =  game;
        this.x = 100;
        this.y = 0;
        this.spriteWidth = 200;
        this.spriteHeight = 200;
        this.width = 0;
        this.height = 0;
        this.speedY = 0;
        this.bounceSpeed = 0;
        this.collisionX = 0;
        this.collisionY = 0;
        this.collisionRadius = 0;
        this.collided = false;
        this.image = document.getElementById('player') as CanvasImageSource;
        this.collisionXStart = this.collisionX + this.collisionRadius * 0.8;
        this.frameY = 0;
    }
    update() {
        this.y += this.speedY;
        this.collisionY = this.y + this.height * 0.5;
        if (!this.isTouchingBottom()) {
            this.speedY += this.game.gravity;
        }

        if (this.isTouchingBottom()) {
            this.y = this.game.height - this.height - this.game.bottomMargin;
            this.finsIdle();
        }
    } 
    draw() {
        this.game.context.drawImage(this.image, 0, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, 
            this.x, this.y, this.width, this.height);
        if (this.game.debug) {
            this.game.context.beginPath();
            this.game.context.arc(this.collisionX, this.collisionY, 
                this.collisionRadius, 0, Math.PI * 2);
            this.game.context.stroke();
        }
    }
    resize() {
        this.width = this.spriteWidth * this.game.ratio;
        this.height = this.spriteHeight * this.game.ratio;
        this.y = this.game.height * 0.5 - this.height * 0.5;
        this.speedY = -8 * this.game.ratio;
        this.bounceSpeed = 5 * this.game.ratio;
        this.collisionRadius = this.width * 0.2;
        this.collisionX = this.x + this.width * 0.5;
        this.collided = false;
        this.frameY = 0;
    }
    finsIdle() {
        this.frameY = 0;
    }
    finsDown() {
        this.frameY = 1;
    }
    finsUp() {
        this.frameY = 2;
    }
    finsCharge() {
        this.frameY = 3;
    }
    isTouchingTop() {
        return this.y <= 20 * this.game.ratio;
    }
    isTouchingBottom() {
        return this.y >= this.game.height - this.height - this.game.bottomMargin;
    }
    bounce() {
        if(!this.isTouchingTop()) {
            // this.game.sound.play(this.game.sound.eatingSounds[0]);
            this.speedY = -this.bounceSpeed;
            this.finsDown()
        } 
    }
}