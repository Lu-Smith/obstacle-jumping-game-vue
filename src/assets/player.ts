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
        this.y = this.game.canvas.height -22;
        this.radius = 10;
        this.color = '#5b086b';
        this.gameCanvasHeight =this.game.canvas.height;
        this.game =  game;
    }
    
    draw(context: CanvasRenderingContext2D) {
        context.fillStyle = this.color;
        context.beginPath();
        this.game.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fill();
    }
    
    updatePosition(jump: boolean, doubleJump: boolean) {
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
}