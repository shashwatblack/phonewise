import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '@app/home/data.service';

@Component({
  selector: 'app-phones-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  phones: object;
  isLoading: boolean;
  sort: string;
  order: string;

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit() {
    this.isLoading = false;
    this.dataService.getPhones().subscribe((phones: any) => {
      this.phones = phones;
    });
    this.route.queryParams.subscribe(params => {
      this.sort = params['sort'] || 'price';
      this.order = params['order'] || 'desc';
    });
  }
}
