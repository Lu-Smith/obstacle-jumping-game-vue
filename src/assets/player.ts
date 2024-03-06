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
    flapSpeed: number;
    
    constructor(game: Game) {
        this.game =  game;
        this.x = 100;
        this.y = 0;
        this.spriteWidth = 200;
        this.spriteHeight = 200;
        this.width = 0;
        this.height = 0;
        this.speedY = 0;
        this.flapSpeed = 0;
    }
    update() {
        this.y += this.speedY;
        if (!this.isTouchingBottom()) {
            this.speedY += this.game.gravity;
        }

        if (this.isTouchingBottom()) {
            this.y = this.game.height - this.height - 100 * this.game.ratio;
        }
    } 
    draw() {
        this.game.context.fillRect(this.x, this.y, this.width, this.height);
    }
    resize() {
        this.width = this.spriteWidth * this.game.ratio;
        this.height = this.spriteHeight * this.game.ratio;
        this.y = this.game.height * 0.5 - this.height * 0.5;
        this.speedY = -8 * this.game.ratio;
        this.flapSpeed = 5 * this.game.ratio;
    }
    isTouchingTop() {
        return this.y <= 100;
    }
    isTouchingBottom() {
        return this.y >= this.game.height - this.height - 100 * this.game.ratio;
    }
    flap() {
        console.log( this.y)
        if(!this.isTouchingTop()) {
            this.speedY = -this.flapSpeed;
        }
      
    }
}