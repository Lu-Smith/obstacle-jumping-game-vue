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
    collisionX: number;
    collisionY: number;
    collisionRadius: number;
    markedForDeletion: boolean;
    image: CanvasImageSource;
    imageSrc: string;
 
    constructor(game: Game, x: number) {
        this.game = game;
        this.spriteWidth = 80;
        this.spriteHeight = 80;
        this.scaledWidth = this.spriteWidth * this.game.ratio;
        this.scaledHeight = this.spriteHeight * this.game.ratio;
        this.x = x;
        this.y = Math.random() * (this.game.height * 0.7 - this.scaledHeight);
        this.collisionX = 0;
        this.collisionY = 0;
        this.collisionRadius = this.scaledWidth * 0.5;
        this.markedForDeletion = false;
        this.speedY = Math.random() < 0.5  ? -1 * this.game.ratio : 1 * this.game.ratio;
        this.markedForDeletion = false;
        this.imageSrc = 'key';
        this.image = document.getElementById(this.imageSrc) as CanvasImageSource;
    }
    update() {
        this.x -= this.game.speed * 1.2;
        this.y += this.speedY;
        this.collisionX = this.x + this.scaledWidth * 0.5;
        this.collisionY = this.y + this.scaledHeight * 0.5;
        if (this.game.level % 2 === 0) {
            this.imageSrc = 'heart';
        } else {
            this.imageSrc = 'key';
        }
        this.image = document.getElementById(this.imageSrc) as CanvasImageSource;

        if (this.y <= 42 || this.y >= this.game.height - this.scaledHeight - this.game.height * 0.35 ) {
            this.speedY *= -1;
        }
        if (this.isOffScreen()) {
            this.markedForDeletion = true;
            this.game.birds = this.game.birds.filter(key => !key.markedForDeletion);
        }
        if (this.game.checkCollision(this, this.game.player)) {
            this.markedForDeletion = true;
            this.game.sound.play(this.game.sound.eatingSounds[Math.floor(Math.random() * 2)]);
            this.game.score++;
            this.game.birds = this.game.birds.filter(key => !key.markedForDeletion);
        }
    }
    draw(){
        this.game.context.drawImage(this.image, this.x, this.y, this.scaledWidth, this.scaledHeight);
        if (this.game.debug) {
            this.game.context.beginPath();
            this.game.context.arc(this.collisionX, this.collisionY, 
            this.collisionRadius, 0, Math.PI * 2);
            this.game.context.stroke();
        }
    }
    resize() {
        this.scaledWidth = this.spriteWidth * this.game.ratio;
        this.scaledHeight = this.spriteHeight * this.game.ratio;
        this.collisionRadius = this.scaledWidth * 0.4;
    }
    isOffScreen() {
        return this.x < -this.scaledWidth;
    }
}