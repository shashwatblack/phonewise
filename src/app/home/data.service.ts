import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const routes = {
  overview: () => `13ogl2`,
  phones: () => `ai7xy`
};

@Injectable()
export class DataService {
  phonesObservable: Observable<object>;
  phones: Array<any>;
  overviewObservable: Observable<object>;
  overview: object;

  constructor(private httpClient: HttpClient) {
    this.loadOverview();
    this.loadPhones();
    this.phones = [];
    this.overview = {};
  }

  loadOverview() {
    this.overviewObservable = this.httpClient
      .cache()
      .get(routes.overview())
      .pipe(
        map((body: any) => {
          return body;
        }),
        catchError(() => of('Error, could not load overviewObservable!'))
      );
    this.overviewObservable.subscribe((overview: object) => {
      this.overview = overview;
    });
  }

  loadPhones() {
    this.phonesObservable = this.httpClient
      .cache()
      .get(routes.phones())
      .pipe(
        map((body: any) => {
          return body;
        }),
        catchError(() => of('Error, could not load phones!'))
      );
    this.phonesObservable.subscribe((phones: Array<any>) => {
      this.phones = phones;
    });
  }

  getPhonesObservable(): Observable<object> {
    return this.phonesObservable;
  }

  getPhones(): Array<object> {
    // careful! this will return empty array if called before API request has been completed
    return this.phones;
  }

  getPhoneById(id: any): object {
    if (!this.phones) {
      return null;
    }
    return this.phones.filter(phone => phone.id === id)[0];
  }

  getOverviewObservable(): Observable<object> {
    return this.overviewObservable;
  }

  getOverview(): object {
    // careful! this will return empty object if called before API request has been completed
    return this.overview;
  }
}
