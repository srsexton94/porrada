import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'square',
  styleUrls: ['./square.component.scss'],
  template:  `
    <div class="square"></div>
  `
})
export class SquareComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}