import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'phones-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  phones: object;
  isLoading: boolean;
  droppedPhones: Array<any>;

  constructor() {}

  ngOnInit() {
    this.isLoading = false;
    this.phones = Array(10).fill(1);
    this.droppedPhones = [];
  }

  phoneDropped(e: any) {
    // Get the dropped data here
    this.droppedPhones.push(e.dragData);
  }
}
