import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  droppedPhones: Array<object>;

  constructor() {}

  ngOnInit() {
    this.droppedPhones = [null, null, null];
  }

  phoneDropped(event: any, index: number) {
    this.droppedPhones[index] = event.dragData;
  }

  disableCompareButton(): boolean {
    return this.droppedPhones.filter(p => !!p).length < 2;
  }

  removePhone(index: number) {
    this.droppedPhones[index] = null;
  }

  compare() {}
}
