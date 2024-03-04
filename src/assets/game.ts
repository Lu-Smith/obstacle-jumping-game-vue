import Player from './player';
import Obstacle from './obstacle';


export default class Game {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    width: number;
    height: number;
    floorHeight: number;
    player: Player;
    obstacle: Obstacle;
    baseHeight: number;
    ratio: number;
    jump: boolean;
    doubleJump: boolean;

    constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D, jump: boolean, doubleJump: boolean) {
        this.canvas = canvas;
        this.context = context;
        this.jump = jump;
        this.doubleJump = doubleJump;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.baseHeight = 720;
        this.ratio = Number((this.height /this.baseHeight).toFixed(2));
        this.player = new Player(this);
        this.obstacle = new Obstacle(this);
        this.floorHeight = 40;

        this.resize(window.innerWidth, window.innerHeight);

        window.addEventListener('resize', (e: UIEvent) => {
            const target = e.currentTarget as Window;
            if (target) {
                this.resize(target.innerWidth, target.innerHeight);
            }
        })
    }
    resize(width: number, height: number) {
        height = Math.min(height, this.baseHeight);
        
        this.canvas.width = width;
        this.canvas.height = height;
        this.context.fillStyle = 'red';
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.ratio = Number((this.height / this.baseHeight).toFixed(2));
        this.player.resize();
        this.obstacle.resize();
    }
    draw() {
        // Draw ground
    
        this.context.fillStyle = '#f5f9ee';
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height-this.floorHeight);
        this.context.fillStyle = '#283739';
        this.context.fillRect(0, this.canvas.height-this.floorHeight, this.canvas.width, this.floorHeight);
        }
    render() {
        this.draw();

        this.player.updatePosition(this.jump, this.doubleJump);
        this.player.draw(this.context);
        this.obstacle.drawDarkTree(this.context);
        this.obstacle.drawLightTreeDarkTree(this.context);
        this.obstacle.drawStone(this.context);
        this.obstacle.drawCloudLight(this.context);
        this.obstacle.drawCloudDark(this.context);

        this.obstacle.updatePositionDarkTree();
        this.obstacle.updatePositionLightTreeDarkTree();
        this.obstacle.updatePositionStone();
        this.obstacle.updatePositionCloudLight();
        this.obstacle.updatePositionCloudDark();
    }
}