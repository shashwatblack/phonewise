import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '@app/home/data.service';

import { environment } from '@env/environment';
import { DataStoreService } from '@app/home/dataStore.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {
  version: string = environment.version;
  phones: Array<any> = [];

  constructor(private route: ActivatedRoute, private dataService: DataStoreService) {}

  ngOnInit() {
    let phone_ids = [-1, -1, -1],
      phone_count = 0;

    this.route.queryParams.subscribe(params => {
      for (let i = 0; i < 3; i++) {
        if (params['phone' + (i + 1)]) {
          phone_ids[phone_count] = parseInt(params['phone' + (i + 1)]);
          phone_count++;
        }
      }
    });

    this.dataService.getPhonesObservable().subscribe((phones: Array<any>) => {
      if (phones) {
        for (let i = 0; i < 3; i++) {
          if (phone_ids[i] == -1) {
            break;
          }
          this.phones.push(phones[phone_ids[i] - 1]);
        }
      }
    });
  }
}
