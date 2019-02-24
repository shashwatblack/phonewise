import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '@app/home/data.service';

import { environment } from '@env/environment';
import { DataStoreService } from '@app/home/dataStore.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  version: string = environment.version;
  id: number;
  phone: any;

  constructor(private route: ActivatedRoute, private dataService: DataStoreService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'] || 0;
    });
    this.dataService.getPhonesObservable().subscribe((phones: Array<any>) => {
      if (phones) {
        const match = phones.filter(phone => {
          return phone.id == this.id;
        });
        if (match.length >= 1) {
          this.phone = match[0];
        }
      }
    });
  }

  getImage(): string {
    if (this.phone) {
      return this.phone.img_url;
    } else {
      return 'assets/apple.svg';
    }
  }
}
