import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'list-item',
  styleUrls: ['./list-item.component.scss'],
  template:  `
    <li class="item">
      <h5 class="title">TITLE</h5>
      <p class="date">date</p>
      <p class="descrip">DESCRIP asjfdkl sjigfoarsfdjlk ghsadjklfhkdslafk jsdkfl;jsdakl;f jkdls;ajfjjdsakflj sad jsadifl;</p>
    </li>
  `
})
export class ListItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
