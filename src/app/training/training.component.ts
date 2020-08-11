import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  styleUrls: ['./training.component.scss'],
  template:  `
    <training-tracker></training-tracker>
    <training-log></training-log>
  `
})
export class TrainingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
