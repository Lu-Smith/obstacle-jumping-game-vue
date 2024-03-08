export default class AudioControls {
    speed: HTMLAudioElement;
    bounce: HTMLAudioElement;
    crunch: HTMLAudioElement;
    eatingSounds: HTMLAudioElement[]; 
    win: HTMLAudioElement;
    lose: HTMLAudioElement;

    constructor() {
        this.speed = document.getElementById('speed') as HTMLAudioElement ;
        this.bounce = document.getElementById('bounce') as HTMLAudioElement ;
        this.crunch = document.getElementById('crunch') as HTMLAudioElement ;
        this.eatingSounds = [this.speed, this.crunch];
        this.win = document.getElementById('win') as HTMLAudioElement ;
        this.lose = document.getElementById('lose') as HTMLAudioElement ;
    }
    play(sound: HTMLAudioElement ) {
        sound.currentTime = 0;
        sound.play();
    }
}