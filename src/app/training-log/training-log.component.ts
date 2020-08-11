import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'training-log',
  styleUrls: ['./training-log.component.scss'],
  template:  `
    <section class="log">
      <admin-header></admin-header>
      <p>Training Log Component</p>
    </section>
  `
})
export class TrainingLogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
