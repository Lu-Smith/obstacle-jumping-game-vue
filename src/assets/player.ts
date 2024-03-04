export default class Player {
    x: number;
    y: number;
    radius: number;
    color: string;
    gameCanvasHeight: number;
    
    constructor(x: number, y: number, radius: number, color: string, gameCanvasHeight: number) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.gameCanvasHeight = gameCanvasHeight;
    }
    
    draw(context: CanvasRenderingContext2D) {
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fill();
    }
    
    updatePosition(jump: boolean, doubleJump: boolean) {
        // Update Y position
        console.log('jumppassed', jump);
        console.log('doublejumppassed', doubleJump);
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
                    this.y += 2;
                    if (this.y >= 130) {
                        this.y = 130;
                    }
                }, 100);
            }
        }
    }
}