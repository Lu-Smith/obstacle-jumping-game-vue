import Game from './game';

export default class Background {
    game: Game;
    image: CanvasImageSource;
    width: number;
    height: number;
    x: number;
    scaledWidth: number;
    scaledHeight: number;
    background: string;
    
    constructor(game: Game) {
        this.game = game;
        this.background = 'background1';
        this.image = document.getElementById( this.background) as CanvasImageSource;
        this.width = 2400;
        this.height = this.game.baseHeight;
       
        this.scaledWidth = this.width;
        this.scaledHeight = this.height;
        this.x = 0;
    }
    update(){
        this.x -= this.game.speed;
        if ( this.x <= - this.scaledWidth) this.x = 0;
        if (this.game.score < 4 || this.game.score > 12 && this.game.score < 14) {
            this.background = 'background1';
        } else if (this.game.score > 4 && this.game.score < 12 || this.game.score > 16 && this.game.score < 20) {
            this.background = 'background2';
        } else {
            this.background = 'background1';
        } 
    }
    draw(){
        this.game.context.drawImage(this.image, this.x, 0, this.scaledWidth, this.scaledHeight);
        this.game.context.drawImage(this.image, this.x + this.scaledWidth - 1, 0, this.scaledWidth, this.scaledHeight);
        if (this.game.canvas.width >= this.scaledWidth ) {
            this.game.context.drawImage(this.image, this.x + this.scaledWidth * 2 - 2, 0, this.scaledWidth, this.scaledHeight);
        }
    }
    resize() {
        this.scaledWidth = this.width * this.game.ratio;
        this.scaledHeight = this.height * this.game.ratio;
        this.x = 0;
    }
}