import Player from './player';
import Obstacle from './obstacle';
import Background from './background';
import Birds from './birds';

interface Collidable {
    collisionX: number;
    collisionY: number;
    collisionRadius: number;
}

export default class Game {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    width: number;
    height: number;
    player: Player;
    birds: Birds[];
    numberOfBirds: number;
    obstacles: Obstacle[];
    numberOfObstacles: number;
    background: Background;
    baseHeight: number;
    ratio: number;
    gravity: number;
    speed: number;
    score: number;
    gameOver: boolean;
    timer: number;
    message1: string;
    message2: string;

    constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
        this.canvas = canvas;
        this.context = context;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.baseHeight = 720;
        this.ratio = Number((this.height /this.baseHeight).toFixed(2));
        this.background = new Background(this);
        this.player = new Player(this);
        this.birds = [];
        this.numberOfBirds = 3;
        this.obstacles = [];
        this.numberOfObstacles = 10;
        this.gravity = 0; 
        this.speed = 0;
        this.score = 0;
        this.gameOver = false;
        this.timer = 0;
        this.message1 = '';
        this.message2 = '';


        this.resize(window.innerWidth, window.innerHeight);

        window.addEventListener('resize', (e: UIEvent) => {
            const target = e.currentTarget as Window;
            if (target) {
                this.resize(target.innerWidth, target.innerHeight);
            }
        });

         //mouse controls      
         this.canvas.addEventListener('mousedown', e => {
            this.player.flap();
        });  

        //mouse controls
         window.addEventListener('keydown', e => {
            if (e.key === ' ' || e.key === 'Enter') this.player.flap();
        });

        //mouse controls
        this.canvas.addEventListener('touchstart', e => {
            this.player.flap();
        });
    }
    resize(width: number, height: number) {     
        this.canvas.width = width;
        this.canvas.height = height;
        this.context.fillStyle = 'red';
        this.context.textAlign = 'right';
        this.context.font = '15px Bungee';
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.ratio = Number((this.height / this.baseHeight).toFixed(2));
        this.gravity = 0.15 * this.ratio;
        this.speed = 2 * this.ratio;
        this.background.resize();
        this.player.resize();
        this.createBirds();
        this.birds.forEach(bird => {
            bird.resize();
        })
        this.createObstacles();
        this.obstacles.forEach(obstacle => {
            obstacle.resize();
        })
        this.score = 0;
        this.gameOver = false;
        this.timer = 0;
    }
    render(deltaTime: number) {
        if (!this.gameOver) this.timer += deltaTime;
        this.background.update();
        this.background.draw();
        this.drawStatusText();
        this.player.update();
        this.player.draw();
        this.birds.forEach(bird => {
            bird.update();
            bird.draw();
        });
        this.obstacles.forEach(obstacle => {
            obstacle.update();
            obstacle.draw();
        });
    }
    createBirds() {
        this.birds = [];
        const firstX = this.baseHeight * this.ratio;
        const birdsSpacing = 500 * this.ratio;
        for (let i = 0; i < this.numberOfBirds; i++) {
            this.birds.push(new Birds(this, (firstX + i * birdsSpacing)));
        }

    }
    createObstacles() {
        this.obstacles = [];
        const firstX = this.baseHeight * this.ratio;
        const obstacleSpacing = 600 * this.ratio;
        for (let i = 0; i < this.numberOfObstacles; i++) {
            this.obstacles.push(new Obstacle(this, (firstX + i * obstacleSpacing)));
        }

    }
    checkCollision(a: Collidable, b: Collidable) {
        const dx = a.collisionX - b.collisionX;
        const dy = a.collisionY - b.collisionY;
        const distance = Math.hypot(dx, dy);
        const sumOfRadiuses = a.collisionRadius + b.collisionRadius;
        return distance <= sumOfRadiuses;
    }
    formatTimer() {
        return (this.timer * 0.001).toFixed(1);
    }
    drawStatusText() {
        this.context.save();
        this.context.fillText('Score: ' + this.score, this.width - 30, 30);
        this.context.textAlign = 'left';
        this.context.fillText('Timer: ' + this.formatTimer(), 10, 30); 
        if (this.gameOver) {
            if (this.player.collided) {
                this.message1 = 'Getting rusty?';
                this.message2 = 'Collision time ' +  this.formatTimer() + ' seconds!' ;
            } else if (this.obstacles.length <= 0) {
                this.message1 = 'Nailed it!';
                this.message2 = 'Can you do it faster than ' +  this.formatTimer() + ' seconds?';
            }
            this.context.textAlign = 'center';
            this.context.font = '30px Bungee';
            this.context.fillText(this.message1, this.width * 0.5, this.height * 0.5 - 40);
            this.context.font = '15px Bungee';
            this.context.fillText(this.message2, this.width * 0.5, this.height * 0.5 - 20);
            this.context.fillText('Press "R" to try again!', this.width * 0.5, this.height * 0.5);
        }
        this.context.restore();
    }
}