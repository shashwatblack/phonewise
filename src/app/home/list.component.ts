import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'phones-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  phones: object;
  isLoading: boolean;
  droppedPhones: Array<any>;
  sort: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.isLoading = false;
    this.phones = Array(10).fill(1);
    this.droppedPhones = [];
    this.sub = this.route.queryParams.subscribe(params => {
      this.sort = params['sort'] || 'price';
      this.order = params['order'] || 'desc';
    });
  }

  phoneDropped(e: any) {
    // Get the dropped data here
    this.droppedPhones.push(e.dragData);
  }
}
