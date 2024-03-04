import Game from './game';

export default class Player {
    game: Game;
    x: number;
    y: number;
    radius: number;
    color: string;
    gameCanvasHeight: number;
    
    constructor(game: Game) {
        this.game =  game;
        this.x = this.game.canvas.width;
        this.radius = 24;
        this.y = this.game.canvas.height - this.game.floorHeight - this.radius;
        this.color = '#5b086b';
        this.gameCanvasHeight =this.game.canvas.height;
        this.game =  game;
    }
    
    draw(context: CanvasRenderingContext2D) {
        const groundLevel = this.game.canvas.height - this.game.floorHeight - this.radius; 
    
        context.fillStyle = this.color;
        context.beginPath();
        this.game.context.arc(this.x, groundLevel, this.radius, 0, Math.PI * 2);
        context.fill();
        console.log(this.game.floorHeight);
    }
    
    updatePosition(jump: boolean, doubleJump: boolean) {
        console.log(jump)
        // Update Y position
        if (jump) {
            this.y -= 2;
            if (this.y < 90) {
                this.y = 89;
                setInterval(() => {
                    this.y += 2;
                    if (this.y >= 130) {
                        this.y = 130;
                    }
                }, 100);
            }  
        } else if (doubleJump) {
            this.y -= 3;
            if (this.y < 70) {
                this.y = 69;
                setInterval(() => {
                    this.y += 1.7;
                    if (this.y >= 130) {
                        this.y = 130;
                    }
                }, 100);
            }
        }
    }

    resize() {
        this.radius = this.radius;
    }
}