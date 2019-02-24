import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '@app/home/data.service';
import { DataStoreService } from '@app/home/dataStore.service';

@Component({
  selector: 'app-phones-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  phones: Array<any>;
  phonesOrdered: Array<any>;
  isLoading: boolean;
  sort: string;
  order: string;

  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataStoreService) {}

  ngOnInit() {
    this.isLoading = false;
    this.dataService.getPhonesObservable().subscribe((phones: any) => {
      this.phones = phones;
      this.loadPhones();
    });
    this.route.queryParams.subscribe(params => {
      this.sort = params['sort'] || 'price';
      this.order = params['order'] || 'desc';
    });
  }

  loadPhones() {
    this.phonesOrdered = this.phones.slice(0);
    let sortProperty: string;
    switch (this.sort) {
      case 'review':
        sortProperty = 'reviewScore';
        break;
      case 'performance':
        sortProperty = 'performanceScore';
        break;
      case 'camera':
        sortProperty = 'cameraScore';
        break;
      case 'popularity':
        sortProperty = 'popularityScore';
        break;
      case 'value':
        sortProperty = 'approx_price_USD'; // 'valueScore';
    }
    const order = this.order === 'asc' ? 1 : -1;
    this.phonesOrdered.sort(function(a: any, b: any) {
      if (a[sortProperty] < b[sortProperty]) {
        return -1 * order;
      }
      if (a[sortProperty] > b[sortProperty]) {
        return 1 * order;
      }
      return 0;
    });
  }

  applyFilter(feature: string) {
    this.sort = feature;
    this.order = this.order === 'desc' ? 'asc' : 'desc';
    this.router.navigate(['.'], { relativeTo: this.route, queryParams: { sort: this.sort, order: this.order } });
    this.loadPhones();
  }

  getSortIconClass(feature: string) {
    if (feature === this.sort) {
      return this.order === 'asc' ? 'fa-sort-numeric-up' : 'fa-sort-numeric-down';
    }
    return 'fa-sort-amount-down';
  }
}
