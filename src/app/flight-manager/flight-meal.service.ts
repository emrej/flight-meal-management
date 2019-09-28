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

  addFlight(flight: Flight) {
    this.errorMessage = undefined;
    let headers = new Headers();
    headers.set('Accept', 'application/json');

    let url = 'http://localhost:8080/api/flight/';

    this
      .http
      .post(url, flight, {headers})
      .map(resp => resp.json())
      .subscribe(
        response => {
          this.allFlights();
        },
        err => {
          this.errorMessage = err;
          this.errorMessage.title = 'Add flight service call failed!';
        }
      );
  }

  addMeal(flightNumber: string, flightDepartureDate: Date, meals: Object) {
    this.errorMessage = undefined;
    let headers = new Headers();
    headers.set('Accept', 'application/json');

    let url = `http://localhost:8080/api/flight/${flightNumber}/${flightDepartureDate}/meals`;

    this
      .http
      .post(url, meals, {headers})
      .map(resp => resp.json())
      .subscribe(
        response => {
          this.allFlights();
        },
        err => {
          this.errorMessage = err;
          this.errorMessage.title = 'Add meal service call failed!';
        }
      );
  }

  deleteFlight(flightNumber: string, flightDepartureDate: Date) {
    this.errorMessage = undefined;
    let headers = new Headers();
    headers.set('Accept', 'application/json');

    let url = `http://localhost:8080/api/flight/${flightNumber}/${flightDepartureDate}/`;

    this
      .http
      .delete(url, {headers})
      .map(resp => resp.json())
      .subscribe(
        response => {
          this.allFlights();
        },
        err => {
          this.errorMessage = err;
          this.errorMessage.title = 'Delete flight service call failed!';
        }
      );
  }
}
