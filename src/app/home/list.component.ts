import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { PhonesService } from './phones.service';

@Component({
  selector: 'phones-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  phones: object;
  isLoading: boolean;

  constructor(private quoteService: PhonesService) {}

  ngOnInit() {
    this.isLoading = false;
    this.phones = Array(10).fill(1);
  }
}
