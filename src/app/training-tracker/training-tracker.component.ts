import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'training-tracker',
  styleUrls: ['./training-tracker.component.scss'],
  template:  `
    <table class="tracker">
      <tbody>
        <tr *ngFor="let col of rowArray">
          <td *ngFor="let col of colArray">
            <square></square>
          </td>
        </tr>
      </tbody>
    </table>
  `
})
export class TrainingTrackerComponent implements OnInit {
  colArray = []
  rowArray = []
  columns: number = 18
  rows: number = 7

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < this.columns; i++) {
      this.colArray.push(i);
    }
    for (let i = 0; i < this.rows; i++) {
      this.rowArray.push(i);
    }
  }

}
