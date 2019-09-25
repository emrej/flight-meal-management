import {Injectable} from '@angular/core';
import {FlightFare} from '../entities/flight-fare';
import {Http, URLSearchParams, Headers} from '@angular/http';
import {AirportDetail} from "../entities/airport-detail";
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';
import {ErrorMessage} from "../entities/error-message";

@Injectable()
export class FlightMealService {

  flight: FlightFare;
  flights: AirportDetail[] = [];
  errorMessage: ErrorMessage;

  constructor(private http: Http, private spinnerService: Ng4LoadingSpinnerService) {
    this.reset();
  }

  reset() {
    this.flights = [];
    this.flight = undefined;
    this.errorMessage = undefined;
  }

  allFlights(): Array<AirportDetail> {
    this.errorMessage = undefined;
    let headers = new Headers();
    headers.set('Accept', 'application/json');

    let url = 'http://localhost:9000/travel/airport/all';

    this
      .http
      .get(url, {headers})
      .map(resp => resp.json())
      .subscribe(
        flights => {
          this.flights = flights;
        },
        err => {
          this.errorMessage = err;
          this.errorMessage.title = 'Get all airports service call failed!';
        }
      );

    return this.flights;
  }

  findFare(from: string, to: string): void {
    this.spinnerService.show();
    this.flight = undefined;
    this.errorMessage = undefined;

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    let url = `http://localhost:9000/travel/fare/${from}/${to}`;

    this
      .http
      .get(url, {headers})
      .map(resp => resp.json())
      .subscribe(
        flightFare => {
          this.flight = flightFare;
          this.spinnerService.hide();
        },
        err => {
          this.errorMessage = err;
          this.errorMessage.title = 'Find Fare service call failed!';
          this.spinnerService.hide();
        }
      );

  }

  find(from: string, to: string): void {
    this.spinnerService.show();
    this.flight = undefined;
    this.errorMessage = undefined;

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
        flight => {
          this.flight = flight;
          this.spinnerService.hide();
        },
        err => {
          this.errorMessage = err;
          this.errorMessage.title = 'Find Fare service call failed!';
          this.spinnerService.hide();
        }
      );

  }

  addFlight(flightNumber: string, flightDepartureDate: Date) {

  }
}
