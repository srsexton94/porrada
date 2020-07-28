import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})

export class TimerComponent implements OnInit {

  minutes: string = '00';
  seconds: string = '00';
  hundredths: string = '00';
  btnStatus: string = 'Start';
  running: boolean = false;
  runTick: any

  constructor() { }

  ngOnInit(): void {
  }

  startTimer() {
    this.hundredths = '00'
    this.seconds = '00'
    this.minutes = '00'
    this.runTick = setInterval(() => {
      let minNum: number = parseInt(this.minutes)
      let secNum: number = parseInt(this.seconds)
      let hundNum: number = parseInt(this.hundredths)

      if (hundNum === 99) {
          hundNum = 0
          secNum += 1
      } else {
          hundNum += 1
      }
      if (secNum === 59) {
          secNum = 0
          minNum += 1
      }

      this.minutes = minNum < 10 ? '0' + minNum : minNum.toString()
      this.seconds = secNum < 10 ? '0' + secNum : secNum.toString()
      this.hundredths = hundNum < 10 ? '0' + hundNum : hundNum.toString()
    }, 10)
  }

  startStopTimer() {
    if (this.running) {
      this.running = false
      clearInterval(this.runTick)
      this.btnStatus = 'Start'
    } else {
      this.running = true
      this.startTimer()
      this.btnStatus = 'Stop'
    }
  }
}
