import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const routes = {
  overview: () => `overview`,
  phones: () => `phones`
};

@Injectable()
export class DataService {
  phones: Observable<object>;
  overview: Observable<object>;

  constructor(private httpClient: HttpClient) {
    this.loadOverview();
    this.loadPhones();
  }

  /*
  loadOverview(): Observable<object> {
    return this.httpClient
      .cache()
      .get(routes.overview())
      .pipe(
        map((body: any) => {
          this.overview = body;
          return body;
        }),
        catchError(() => of('Error, could not load overview!'))
      );
  }
  */

  loadOverview() {
    this.overview = this.httpClient
      .cache()
      .get(routes.overview())
      .pipe(
        map((body: any) => {
          return body;
        }),
        catchError(() => of('Error, could not load overview!'))
      );
  }

  loadPhones() {
    this.phones = this.httpClient
      .cache()
      .get(routes.phones())
      .pipe(
        map((body: any) => {
          return body;
        }),
        catchError(() => of('Error, could not load phones!'))
      );
  }

  getPhones(): Observable<object> {
    return this.phones;
  }

  getPhoneById(id: any): object {
    // TODO
    return this.phones;
  }

  getOverview(): Observable<object> {
    return this.overview;
  }
}
