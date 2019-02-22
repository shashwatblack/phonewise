import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { dataService } from '@app/home/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoading: boolean;
  overview: object;
  phones: Array<any>;

  constructor(private dataService: dataService) {}

  ngOnInit() {
    this.isLoading = true;
    this.dataService
      .getOverview()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((overview: object) => {
        this.overview = overview;
      });
    this.dataService.getPhones().subscribe((phones: any) => {
      this.phones = phones;
    });
  }

  getImage(phoneId: string): string {
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
