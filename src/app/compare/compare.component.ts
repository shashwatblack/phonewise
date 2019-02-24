import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '@app/home/data.service';

import { environment } from '@env/environment';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {
  version: string = environment.version;
  phones: Array<any> = [];

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

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
        const match = phones.filter(phone => {
          return phone_ids.includes(phone.id);
        });
        for (let i = 0; i < match.length; i++) {
          this.phones.push(match[i]);
        }
      }
    });
  }
}
