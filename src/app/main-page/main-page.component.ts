import { Component, OnInit, OnDestroy } from '@angular/core';
import { TimerService } from '../services/timer';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit, OnDestroy {
  
  constructor(private timerService: TimerService) {}
  
  image1:string="../../assets/promocija1.png";
  image2:string="../../assets/promocija2.png";
  image3:string="../../assets/promocija3.png";
  image4:string="../../assets/promocija4.png";

  ngOnInit(): void {
    this.timerService.startTimer(() => {
      let v=this.image1;
      this.image1=this.image2;
      this.image2=this.image3;
      this.image3=this.image4;
      this.image4=v;
    });
  }

  ngOnDestroy(): void {
    this.timerService.stopTimer();
  }
}