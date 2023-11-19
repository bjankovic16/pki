import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private intervalId: any;
  private readonly intervalDuration = 5000; // Interval u milisekundama (2 sekunde)

  startTimer(callback: () => void): void {
    this.intervalId = setInterval(() => {
      callback();
    }, this.intervalDuration);
  }

  stopTimer(): void {
    clearInterval(this.intervalId);
  }
}