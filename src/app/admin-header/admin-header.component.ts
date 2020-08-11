import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-header',
  styleUrls: ['./admin-header.component.scss'],
  template:  `
    <header>
      <h4>Training Log</h4>
      <div class="btns">
        <button (click)="onClear()">Clear</button>
        <button (click)="onAdd()">Add</button>
      </div>
    </header>
  `
})
export class AdminHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClear(): void {
    console.log('Clear!')
  }

  onAdd(): void {
    console.log('Add!')
  }
}
