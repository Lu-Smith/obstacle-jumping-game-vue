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
    frameY: number;
    energy: number;
    maxEnergy: number;
    minEnergy: number;
    charging: boolean;
    barSize: number;
    
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
        this.frameY = 0;
        this.energy = 30;
        this.maxEnergy = this.energy * 2;
        this.minEnergy = 15;
        this.charging = false;
        this.barSize = 0;
    }
    update() {
        this.handleEnergy();
        if (this.speedY >= 0 && !this.charging ) this.finsUp();
        if (!this.charging)  this.y += this.speedY;
        this.collisionY = this.y + this.height * 0.45;
        if (!this.isTouchingBottom()) {
            if (!this.charging ) this.speedY += this.game.gravity;
        }else {
            this.speedY = 0;    
        }

        if (this.isTouchingBottom()) {
            this.y = this.game.height - this.height - this.game.bottomMargin;
            if (!this.charging ) this.finsIdle();
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
        this.collisionRadius = this.width * 0.23;
        this.collisionX = this.x + this.width * 0.63;
        this.collided = false;
        this.frameY = 0;
        this.barSize = Math.floor(5 * this.game.ratio);
        this.charging = false;
    }
    startCharge() {  
        if (this.energy >= this.minEnergy && !this.charging) {
            this.charging = true;
            this.game.speed = this.game.maxSpeed;
            this.finsCharge();
    
            this.game.sound.play(this.game.sound.speed);  
        } else {
            this.stopCharge(); 
        }
    }
    stopCharge() {
        this.charging = false;
        this.game.speed = this.game.minSpeed;
    }
    finsIdle() {
        if (!this.charging ) this.frameY = 0;
    }
    finsDown() {
        if (!this.charging ) this.frameY = 1;
    }
    finsUp() {
        if (!this.charging ) this.frameY = 2;
    }
    finsCharge() {
        this.frameY = 3;
    }
    isTouchingTop() {
        return this.y <= 50 * this.game.ratio;
    }
    isTouchingBottom() {
        return this.y >= this.game.height - this.height - this.game.bottomMargin;
    }
    handleEnergy() {
        if (this.game.eventUpdate) {
            if (this.energy < this.maxEnergy) {
                this.energy +=  1;
            }
            if (this.charging) {
                this.energy -= 4           ;     
                if (this.energy <= 0) {
                    this.energy = 0;
                    this.stopCharge();  
                }
            }
        }
    } 
    bounce() {
        this.stopCharge();
        if(!this.isTouchingTop()) {
            this.game.sound.play(this.game.sound.bounce);
            this.speedY = -this.bounceSpeed;
            this.finsDown()
        } 
    }
}