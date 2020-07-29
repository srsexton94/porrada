import { Component, OnInit } from '@angular/core';
import { prepareEventListenerParameters } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})

export class TimerComponent implements OnInit {

  defaultMin: string = '05'
  minutes: string = '05';
  seconds: string = '00';
  hundredths: string = '00'
  running: boolean = false;
  runTick: any
  formerror: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  startTimer() {
    this.runTick = setInterval(() => {
      let minNum: number = parseInt(this.minutes)
      let secNum: number = parseInt(this.seconds)
      let hundNum: number = parseInt(this.hundredths)

      if (hundNum === 0) {
        hundNum = 99
        if (secNum === 0) {
          minNum -= 1
          secNum = 59
        } else {
          secNum -= 1
        }
      } else {
        hundNum -= 1
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
    } else {
      this.running = true
      this.startTimer()
    }
  }

  resetTimer() {
    clearInterval(this.runTick)
    this.formerror = ''
    this.minutes = this.defaultMin;
    this.seconds = '00';
    this.hundredths = '00'
    this.running = false;
  }

  changeDefault(event) {
    event.preventDefault()
    let val = event.target[0].value

    if (val <= 10 && val >= 1) {
      this.defaultMin = val < 10 ? '0' + val : val.toString()
      this.minutes = this.defaultMin
    } else {
      this.formerror = 'Must be 1-10 minutes long'
      console.error(this.formerror)
    }

    this.resetTimer()
  }
}
