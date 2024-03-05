import Game from './game';

export default class Birds {
    game: Game; 
    spriteWidth: number;
    spriteHeight: number;
    scaledWidth: number;
    scaledHeight: number;
    x: number;
    y: number;
    speedY: number;
    markedForDeletion: boolean;
 
    constructor(game: Game, x: number) {
        this.game = game;
        this.spriteWidth = 80;
        this.spriteHeight = 40;
        this.scaledWidth = this.spriteWidth * this.game.ratio;
        this.scaledHeight = this.spriteHeight * this.game.ratio;
        this.x = x;
        this.y = Math.random() * (this.game.height * 0.3 - this.scaledHeight);
        this.speedY = Math.random() < 0.5  ? -1 * this.game.ratio : 1 * this.game.ratio;
        this.markedForDeletion = false;
    }
    update() {
        this.x -= this.game.speed;
        this.y += this.speedY;
        if (this.y <= 42 || this.y >= this.game.height - this.scaledHeight - this.game.height * 0.6 ) {
            this.speedY *= -1;
        }
        if (this.isOffScreen()) {
            this.markedForDeletion = true;
        }
    }
    draw(){
        this.game.context.fillRect(this.x, this.y, this.scaledWidth, this.scaledHeight);
    }
    resize() {
        this.scaledWidth = this.spriteWidth * this.game.ratio;
        this.scaledHeight = this.spriteHeight * this.game.ratio;
    }
    isOffScreen() {
        return this.x < -this.scaledWidth;
    }
}