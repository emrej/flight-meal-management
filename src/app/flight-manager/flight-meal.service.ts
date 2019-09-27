import {Injectable} from '@angular/core';
import {Headers, Http, URLSearchParams} from '@angular/http';
import {Flight} from "../entities/flight";
import {ErrorMessage} from "../entities/error-message";

@Injectable()
export class FlightMealService {

  flights: Flight[] = [];
  errorMessage: ErrorMessage;

  constructor(private http: Http) {
    this.reset();
  }

  reset() {
    this.flights = [];
    this.errorMessage = undefined;
  }

  allFlights(): Array<Flight> {
    this.errorMessage = undefined;
    let headers = new Headers();
    headers.set('Accept', 'application/json');

    let url = 'http://localhost:8080/api/flight/';

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
          this.errorMessage.title = 'Get all flights service call failed!';
        }
      );

    return this.flights;
  }

  addFlight(flightNumber: string, flightDepartureDate: Date) {

  }
}
