import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    countdown = new Audio();
    counterBtnText = "Start";

    constructor() { }

    ngOnInit(): void {
        this.countdown.src = "../../../assets/audio/countdown.mp3";
        this.countdown.load();
    }

    counterBtnClick(): void {
        this.countdown.play();
        let num = 4;
        this.counterBtnText = num.toString();

        let intervalId = setInterval(() => {
            num--;
            this.counterBtnText = num.toString();
            if(num === 0) clearInterval(intervalId)
        }, 1000)

        

        
    }
}
