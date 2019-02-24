import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { DataService } from '@app/home/data.service';
import { DataStoreService } from '@app/home/dataStore.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoading: boolean;
  overview: object;
  phones: Array<any>;

  constructor(private dataService: DataStoreService) {}

  ngOnInit() {
    this.isLoading = true;
    this.dataService
      .getOverviewObservable()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((overview: object) => {
        this.overview = overview;
      });
    this.dataService.getPhonesObservable().subscribe((phones: any) => {
      this.phones = phones;
    });
  }

  getImage(phoneId?: string): string {
    if (this.phones) {
      const match = this.phones.filter(phone => {
        return phone.id === phoneId;
      });
      if (match.length >= 1) {
        return match[0].img_url;
      }
    }
    return 'assets/apple.svg';
  }
}
