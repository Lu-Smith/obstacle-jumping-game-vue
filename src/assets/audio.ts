export default class AudioControls {
    speed: HTMLAudioElement;
    bounce1: HTMLAudioElement;
    bounce2: HTMLAudioElement;
    crunch: HTMLAudioElement;
    bite: HTMLAudioElement;
    eatingSounds: HTMLAudioElement[]; 
    swimmingSounds: HTMLAudioElement[]; 
    win: HTMLAudioElement;
    lose: HTMLAudioElement;
    level: HTMLAudioElement;

    constructor() {
        this.speed = document.getElementById('speed') as HTMLAudioElement;
        this.bounce1 = document.getElementById('bounce1') as HTMLAudioElement;
        this.bounce2 = document.getElementById('bounce2') as HTMLAudioElement;
        this.swimmingSounds = [this.bounce1, this.bounce2];
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