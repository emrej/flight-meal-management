import {Injectable} from '@angular/core';
import {FlightFare} from '../entities/flight-fare';
import {Http, URLSearchParams, Headers} from '@angular/http';
import {AirportDetail} from "../entities/airport-detail";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Injectable()
export class FlightFareService {

  flightFare: FlightFare;
  airports: AirportDetail[] = [];

  constructor(private http: Http, private spinnerService: Ng4LoadingSpinnerService) {
    console.debug('Flight fare service constructor called!');
    this.reset();
  }

  reset() {
    this.airports = [];
    this.flightFare = undefined;
  }

  allAirports(): Array<AirportDetail> {
    let headers = new Headers();
    headers.set('Accept', 'application/json');

    let url = 'http://localhost:9000/travel/airport/all';

    this
      .http
      .get(url, {headers})
      .map(resp => resp.json())
      .subscribe(
        airports => {
          this.airports = airports;
        },
        err => {
          console.error('Error when loading', err);
        }
      );

    return this.airports;
  }

  findFare(from: string, to: string): void {
    this.spinnerService.show();
    this.flightFare = undefined;

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    let url = `http://localhost:9000/travel/fare/${from}/${to}`;

    this
      .http
      .get(url, {headers})
      .map(resp => resp.json())
      .subscribe(
        flightFare => {
          this.flightFare = flightFare;
          this.spinnerService.hide();
        },
        err => {
          console.error('Error when loading', err);
          this.spinnerService.hide();
        }
      );

  }

  find(from: string, to: string): void {
    let search = new URLSearchParams();
    search.set('from', from);
    search.set('to', to);

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    let url = 'http://localhost:9000/travel/fare/';

    this
      .http
      .get(url, {search, headers})
      .map(resp => resp.json())
      .subscribe(
        flightFare => {
          this.flightFare = flightFare;
        },
        err => {
          console.error('Error when loading', err);
        }
      );

  }

}
