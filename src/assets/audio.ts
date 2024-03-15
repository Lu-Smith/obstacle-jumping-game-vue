export default class AudioControls {
    speed: HTMLAudioElement;
    bounce: HTMLAudioElement;
    crunch: HTMLAudioElement;
    bite: HTMLAudioElement;
    eatingSounds: HTMLAudioElement[]; 
    win: HTMLAudioElement;
    lose: HTMLAudioElement;
    level: HTMLAudioElement;

    constructor() {
        this.speed = document.getElementById('speed') as HTMLAudioElement;
        this.bounce = document.getElementById('bounce') as HTMLAudioElement;
        this.crunch = document.getElementById('crunch') as HTMLAudioElement;
        this.bite = document.getElementById('bite') as HTMLAudioElement;
        this.eatingSounds = [this.bite, this.crunch];
        this.win = document.getElementById('win') as HTMLAudioElement;
        this.lose = document.getElementById('lose') as HTMLAudioElement;
        this.level = document.getElementById('level') as HTMLAudioElement;
    }
    play(sound: HTMLAudioElement ) {
        sound.currentTime = 0;
        sound.play();
    }
}