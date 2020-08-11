import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'training-tracker',
  styleUrls: ['./training-tracker.component.scss'],
  template:  `
    <section class="tracker">
      <p>Training Tracker Component</p>
    </section>
  `
})
export class TrainingTrackerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
