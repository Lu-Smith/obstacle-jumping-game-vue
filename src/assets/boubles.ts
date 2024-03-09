import Game from './game';

export default class Boubles {
    game: Game; 
    spriteWidth: number;
    spriteHeight: number;
    scaledWidth: number;
    scaledHeight: number;
    x: number;
    y: number;
    speedY: number;
    markedForDeletion: boolean;
    image: CanvasImageSource;
    frameX: number;
 
    constructor(game: Game, x: number) {
        this.game = game;
        this.spriteWidth = 120;
        this.spriteHeight = 140;
        this.scaledWidth = this.spriteWidth * this.game.ratio;
        this.scaledHeight = this.spriteHeight * this.game.ratio;
        this.x = x;
        this.y = Math.random() * (this.game.height - this.scaledHeight);
        this.markedForDeletion = false;
        this.speedY = Math.random() < 0.5  ? -1 * this.game.ratio : 1 * this.game.ratio;
        this.markedForDeletion = false;
        this.frameX = Math.floor(Math.random() * 8);
        this.image = document.getElementById('boubles2') as CanvasImageSource;
    }
    update() {
        this.x -= this.game.speed * 1.5;
        this.y += this.speedY;

        if (this.y <= 42 || this.y >= this.game.height - this.scaledHeight - this.game.height * 0.35 ) {
            this.speedY *= -1;
        }
        if (this.isOffScreen()) {
            this.markedForDeletion = true;
            this.game.boubles = this.game.boubles.filter(bouble => !bouble.markedForDeletion);
        }

        if (this.game.boubles.length <= 0) {
            this.x = this.game.width;
            this.game.numberOfBoubles = 100;
            this.game.createBoubles();
        }
    }
    draw(){
        this.game.context.drawImage(this.image, this.frameX * this.spriteWidth , 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.scaledWidth, this.scaledHeight);
    }
    resize() {
        this.scaledWidth = this.spriteWidth * this.game.ratio;
        this.scaledHeight = this.spriteHeight * this.game.ratio;
    }
    isOffScreen() {
        return this.x < -this.scaledWidth;
    }
}