import { Component, OnInit } from '@angular/core';
import { Status } from '../status';
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    countdown = new Audio();
    counterClass = "ready";
    counterBtnText = "Start";

    state = Status.Ready;

    sets = 5;
    seconds = 10;
    rest = 5;

    constructor(private titleService:Title) { }

    ngOnInit(): void {
        this.titleService.setTitle("Kegel App");
        this.countdown.src = "../../../assets/audio/countdown.mp3";
        this.countdown.load();
    }

    counterBtnClick(): void {
        switch(this.state) {

            case Status.Ready: {
                this.state = Status.Starting;
                this.counterClass = "starting";
                this.countdown.play();
                let num = 3;
                
                this.counterBtnText = num.toString();
                this.titleService.setTitle(this.counterBtnText);

                let intervalId = setInterval(() => 
                {
                    num--;
                    this.counterBtnText = num.toString();
                    this.titleService.setTitle(this.counterBtnText);
            
                    if(num === 0) {
                        this.state = Status.Counting;
                        clearInterval(intervalId);
                        this.countSet();
                    }
                }, 1000)
                break;
            }

            case Status.Starting: {
                this.state = Status.Ready;
                break;
            }

            case Status.Counting: {
                this.state = Status.Ready;
                break;
            }

            case Status.Resting: {
                this.state = Status.Ready;
                break;
            }
        }
    }

    countSet(): void {
        
        this.titleService.setTitle(this.counterBtnText);
        
    }
}
