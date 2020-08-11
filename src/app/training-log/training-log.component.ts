import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'training-log',
  styleUrls: ['./training-log.component.scss'],
  template:  `
    <section class="log">
      <admin-header></admin-header>
      <ul>
        <li class="item">
          <h5 class="title">TITLE</h5>
          <p class="date">date</p>
          <p class="descrip">DESCRIP asjfdkl sjigfoarsfdjlk ghsadjklfhkdslafk jsdkfl;jsdakl;f jkdls;ajfjjdsakflj sad jsadifl;</p>
        </li>
        <li class="item">
          <h5 class="title">TITLE</h5>
          <p class="date">date</p>
          <p class="descrip">DESCRIP asjfdkl sjigfoarsfdjlk ghsadjklfhkdslafk jsdkfl;jsdakl;f jkdls;ajfjjdsakflj sad jsadifl;</p>
        </li>
        <li class="item">
          <h5 class="title">TITLE</h5>
          <p class="date">date</p>
          <p class="descrip"></p>
        </li>
        <li class="item">
          <h5 class="title">TITLE</h5>
          <p class="date">date</p>
          <p class="descrip"></p>
        </li>
        <li class="item">
          <h5 class="title">TITLE</h5>
          <p class="date">date</p>
          <p class="descrip">DESCRIP asjfdkl sjigfoarsfdjlk ghsadjklfhkdslafk jsdkfl;jsdakl;f jkdls;ajfjjdsakflj sad jsadifl;</p>
        </li>
      </ul>
    </section>
  `
})
export class TrainingLogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
